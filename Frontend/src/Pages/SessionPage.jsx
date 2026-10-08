import { useUser, useAuth } from "@clerk/react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useEndSession,
  useJoinSession,
  useSessionById,
} from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../api/executeCode.js";
import Navbar from "../components/Navbar";
import { Group, Panel, Separator } from "react-resizable-panels";
import { Loader2Icon, LogOutIcon, PhoneOffIcon } from "lucide-react";
import CodeEditorPanel from "../components/CodeEditorPanel.jsx";
import OutputPanel from "../components/OutputPanel.jsx";
import useStreamClient from "../hooks/useStreamClient.js";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI";

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isProblemListOpen, setIsProblemListOpen] = useState(false);

  const {
    data: sessionData,
    isLoading: loadingSession,
    refetch,
  } = useSessionById(id);

  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;

  const searchRef = useRef(null);

  const { call, channel, chatClient, isInitializingCall, streamClient } =
    useStreamClient(session, loadingSession, isHost, isParticipant);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsProblemListOpen(false);
        setSearchInput("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (session?.problem && !selectedProblem) {
      setSelectedProblem(session.problem);
    }
  }, [session?.problem, selectedProblem]);

  const problemData = selectedProblem
    ? Object.values(PROBLEMS).find((p) => p.title === selectedProblem)
    : null;

  const filteredProblems = Object.values(PROBLEMS).filter((problem) =>
    problem.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    problemData?.starterCode?.[selectedLanguage] || "",
  );

  useEffect(() => {
    if (!session || !user || loadingSession) return;
    if (isHost || isParticipant) return;

    joinSessionMutation.mutate(id, { onSuccess: refetch });
  }, [session, user, loadingSession, isHost, isParticipant, id]);

  useEffect(() => {
    if (!session || loadingSession) return;

    if (session.status === "completed") navigate("/dashboard");
  }, [session, loadingSession, navigate]);

  useEffect(() => {
    if (problemData?.starterCode?.[selectedLanguage]) {
      setCode(problemData.starterCode[selectedLanguage]);
    }
  }, [problemData, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    const starterCode = problemData?.starterCode?.[newLang] || "";
    setCode(starterCode);
    setOutput(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    const token = await getToken();
    const result = await executeCode(selectedLanguage, code, token);
    setOutput(result);
    setIsRunning(false);
  };

  const handleEndSession = () => {
    if (confirm("Are you sure you want to end this session?")) {
      endSessionMutation.mutate(id, {
        onSuccess: () => navigate("/dashboard"),
      });
    }
  };

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1 ">
        <Group orientation="horizontal">
          {/* LEFT PANEL - CODE EDITOR & PROBLEM DETAILS */}
          <Panel defaultSize="50%" minSize="30%">
            <Group orientation="vertical">
              {/* PROBLEM DSC PANEL */}
              <Panel defaultSize="50%" minSize="20%">
                <div className="h-full overflow-y-auto bg-base-100 scrollbar-none">
                  {/* HEADER SECTION */}
                  <div className=" relative p-6 pb-0 bg-base-100">
                    <div className="flex items-start justify-between ">
                      {/* LEFT SIDE */}
                      <div>
                        <h1 className="text-3xl font-bold text-[#1e3a66]">
                          {selectedProblem || "Loading..."}
                        </h1>

                        {problemData?.category && (
                          <p className="text-white/70 mt-1">
                            {problemData.category}
                          </p>
                        )}

                        <p className="text-white/70 mt-4 ">
                          Host: {session?.host?.name || "Loading..."} •{" "}
                          {session?.participant ? 2 : 1}/2 participants
                        </p>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="flex items-center gap-3">
                        {/* SEARCH */}
                        {session?.status === "active" && (
                          <div
                            ref={searchRef}
                            className="absolute right-6 top-23.75 w-[25%]  min-w-0"
                          >
                            <input
                              type="text"
                              placeholder="Search problem..."
                              value={searchInput}
                              onChange={(e) => {
                                setSearchInput(e.target.value);
                                setIsProblemListOpen(true);
                              }}
                              onFocus={() => setIsProblemListOpen(true)}
                              className="input input-sm input-bordered w-full  bg-transparent text-white/70 border-white/50"
                            />

                            {/* DROPDOWN */}
                            {isProblemListOpen && (
                              <div className="absolute top-full left-0 mt-1 w-full bg-base-100 border border-white/10 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto scrollbar-none text-white/70">
                                {filteredProblems.length > 0 ? (
                                  filteredProblems.map((problem) => (
                                    <button
                                      key={problem.id}
                                      type="button"
                                      className="w-full text-left px-3 py-2 hover:bg-base-200/50"
                                      onClick={() => {
                                        setSelectedProblem(problem.title);
                                        setSearchInput("");
                                        setIsProblemListOpen(false);
                                      }}
                                    >
                                      {problem.title}
                                    </button>
                                  ))
                                ) : (
                                  <p className="px-3 py-2 text-sm text-white/40">
                                    No problems found
                                  </p>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* END SESSION */}
                        {isHost && session?.status === "active" && (
                          <button
                            onClick={handleEndSession}
                            disabled={endSessionMutation.isPending}
                            className="btn btn-error bg-red-600/80 border-0 btn-sm gap-1 mt-3 shadow-none"
                          >
                            {endSessionMutation.isPending ? (
                              <Loader2Icon className="w-4 h-4 animate-spin" />
                            ) : (
                              <LogOutIcon className="w-4 h-4" />
                            )}
                            End Session
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* problem desc */}
                    {problemData?.description && (
                      <div className="bg-base-200 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-[#264a7a]">
                          Description
                        </h2>
                        <div className="space-y-3 text-base leading-relaxed">
                          <p className="text-white/70">
                            {problemData.description.text}
                          </p>
                          {problemData.description.notes?.map((note, idx) => (
                            <p key={idx} className="text-white/70">
                              {note}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* examples section */}
                    {problemData?.examples &&
                      problemData.examples.length > 0 && (
                        <div className="bg-base-200 rounded-xl shadow-sm p-5 border border-base-300">
                          <h2 className="text-xl font-bold mb-4 text-[#264a7a]">
                            Examples
                          </h2>

                          <div className="space-y-4">
                            {problemData.examples.map((example, idx) => (
                              <div key={idx}>
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="font-semibold text-white/70">
                                    Example {idx + 1}
                                  </p>
                                </div>
                                <div className="bg-base-300 rounded-lg p-4 font-mono text-sm space-y-1.5">
                                  <div className="flex gap-2">
                                    <span className="text-white/70 font-bold min-w-17.5">
                                      Input:
                                    </span>
                                    <span className="text-white/70">
                                      {example.input}
                                    </span>
                                  </div>
                                  <div className="flex gap-2">
                                    <span className="text-white/70 font-bold min-w-17.5">
                                      Output:
                                    </span>
                                    <span className="text-white/70">
                                      {example.output}
                                    </span>
                                  </div>
                                  {example.explanation && (
                                    <div className="pt-2 border-t border-zinc-700 mt-2">
                                      <span className="text-white/70 font-sans text-xs">
                                        <span className="font-semibold">
                                          Explanation:
                                        </span>{" "}
                                        {example.explanation}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Constraints */}
                    {problemData?.constraints &&
                      problemData.constraints.length > 0 && (
                        <div className="bg-base-200 rounded-xl shadow-sm p-5 border border-base-300">
                          <h2 className="text-xl font-bold mb-4 text-[#264a7a]">
                            Constraints
                          </h2>
                          <ul className="space-y-2 text-base-content/90">
                            {problemData.constraints.map((constraint, idx) => (
                              <li key={idx} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <code className="text-sm text-white/70">
                                  {constraint}
                                </code>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </Panel>

              <Separator className="h-1.5 bg-[#18181B] border-y border-[#27272A] hover:bg-[#27272A] transition-colors" />

              <Panel defaultSize="50%" minSize="20%">
                <Group orientation="vertical">
                  <Panel defaultSize="70%" minSize="30%">
                    <CodeEditorPanel
                      selectedLanguage={selectedLanguage}
                      code={code}
                      isRunning={isRunning}
                      onLanguageChange={handleLanguageChange}
                      onCodeChange={(value) => setCode(value)}
                      onRunCode={handleRunCode}
                    />
                  </Panel>

                  <Separator className="h-1.5 bg-[#18181B] border-y border-[#27272A] hover:bg-[#27272A] transition-colors" />

                  <Panel defaultSize="30%" minSize="15%">
                    <OutputPanel output={output} />
                  </Panel>
                </Group>
              </Panel>
            </Group>
          </Panel>
          <Separator className="w-1.5 bg-[#18181B] border-x border-[#27272A] hover:bg-[#27272A] transition-colors" />
          {/* RIGHT PANEL - VIDEO CALLS & CHAT */}
          <Panel defaultSize="50%" minSize="30%">
            <div className="h-full bg-base-100 p-4 overflow-auto">
              {isInitializingCall ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
                    <p className="text-lg text-primary">
                      Connecting to video call...
                    </p>
                  </div>
                </div>
              ) : !streamClient || !call ? (
                <div className="h-full flex items-center justify-center">
                  <div className="card bg-base-100 shadow-xl max-w-md">
                    <div className="card-body items-center text-center">
                      <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mb-4">
                        <PhoneOffIcon className="w-12 h-12 text-error" />
                      </div>
                      <h2 className="card-title text-2xl text-white/70">
                        Connection Failed
                      </h2>
                      <p className="text-white/70">
                        Unable to connect to the video call
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full">
                  <StreamVideo client={streamClient}>
                    <StreamCall call={call}>
                      <VideoCallUI chatClient={chatClient} channel={channel} />
                    </StreamCall>
                  </StreamVideo>
                </div>
              )}
            </div>
          </Panel>
        </Group>
      </div>
    </div>
  );
}

export default SessionPage;
