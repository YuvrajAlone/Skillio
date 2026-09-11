import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { useAuth } from "@clerk/react";
import { PROBLEMS } from "../data/problems.js";
import { Group, Panel, Separator } from "react-resizable-panels";
import Navbar from "../components/Navbar.jsx";
import ProblemDescription from "../components/ProblemDescription.jsx";
import CodeEditorPanel from "../components/CodeEditorPanel.jsx";
import OutputPanel from "../components/OutputPanel.jsx";
import { executeCode } from "../api/executeCode.js";
import toast from "react-hot-toast";

function PracticePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const [currentProblemId, setCurrentProblemId] = useState("two-sum");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    PROBLEMS[currentProblemId].starterCode.javascript,
  );
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const currentProblem = PROBLEMS[currentProblemId];

  useEffect(() => {
    if (id && PROBLEMS[id]) {
      setCurrentProblemId(id);
      setCode(PROBLEMS[id].starterCode[selectedLanguage]);
      setOutput(null);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(currentProblem.starterCode[newLang]);
    setOutput(null);
  };

  const handleProblemChange = (newProblemId) =>
    navigate(`/problem/${newProblemId}`);

  const normalizeOutput = (output) => {
    // normalize output for comparison (trim whitespace, handle different spacing)
    return output
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          // remove spaces after [ and before ]
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          // normalize spaces around commas to single space after comma
          .replace(/\s*,\s*/g, ","),
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);

    return normalizedActual == normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const token = await getToken();

    const result = await executeCode(selectedLanguage, code, token);
    setOutput(result);
    setIsRunning(false);

    // check if code executed successfully and matches expected output

    if (result.success) {
      const expectedOutput = currentProblem.expectedOutput[selectedLanguage];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        toast.success("Tests passed! Great job!");
      } else {
        toast.error("Tests failed. Check your output!");
      }
    } else {
      toast.error("Code execution failed!");
    }
  };

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Group orientation="horizontal">
          <Panel defaultSize="40%" minSize="30%">
            <ProblemDescription
              problem={currentProblem}
              currentProblemId={currentProblemId}
              onProblemChange={handleProblemChange}
              allProblems={Object.values(PROBLEMS)}
            />
          </Panel>
          <Separator className="w-1.5 bg-[#18181B] border-x border-[#27272A] hover:bg-[#27272A] transition-colors" />
          <Panel defaultSize="60%" minSize="30%">
            <Group orientation="vertical">
              <Panel defaultSize="50%" minSize="30%">
                <CodeEditorPanel
                  selectedLanguage={selectedLanguage}
                  code={code}
                  isRunning={isRunning}
                  onLanguageChange={handleLanguageChange}
                  onCodeChange={setCode}
                  onRunCode={handleRunCode}
                />
              </Panel>
              <Separator className="h-1.5 bg-[#18181B] border-y border-[#27272A] hover:bg-[#27272A] transition-colors" />
              <Panel defaultSize="50%" minSize="30%">
                <OutputPanel output={output} />
              </Panel>
            </Group>
          </Panel>
        </Group>
      </div>
    </div>
  );
}

export default PracticePage;
