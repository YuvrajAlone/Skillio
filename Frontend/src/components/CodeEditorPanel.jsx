import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  return (
    <div className="h-full bg-base-200 flex flex-col overflow-y-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center text-white/70 gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6"
          />
          <select
            className="select select-sm  border-white/50 outline-none! shadow-none! ring-0! "
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-secondary btn-sm gap-2"
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-3 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-3" />
              Run Code
            </>
          )}
        </button>
      </div>

      <div className="flex-1 ">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="my-dark"
          beforeMount={(monaco) => {
            monaco.editor.defineTheme("my-dark", {
              base: "vs-dark",
              inherit: true,
              rules: [],
              colors: {
                "editor.background": "#111111",
                "editor.foreground": "#D4D4D4",
                "editorLineNumber.foreground": "#666666",
                "editorLineNumber.activeForeground": "#AAAAAA",
                "editorCursor.foreground": "#FFFFFF",
                "editor.selectionBackground": "#444444",
              },
            });
          }}
          options={{
            fontSize: 16,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            scrollbar: {
              vertical: "visible",
              verticalScrollbarSize: 5,
              alwaysConsumeMouseWheel: false,
            },
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;
