import { ENV } from "../lib/env.js";

const fileNames = {
  javascript: "main.js",
  python: "main.py",
  java: "Main.java",
};

export async function executeCode(req, res) {
  try {
    const { language, code } = req.body;

    if (!fileNames[language]) {
      return res.status(400).json({
        success: false,
        error: `Unsupported language: ${language}`,
      });
    }

    const response = await fetch("https://api.onecompiler.com/v1/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": ENV.ONECOMPILER_API_KEY,
      },
      body: JSON.stringify({
        language,
        stdin: "",
        files: [
          {
            name: fileNames[language],
            content: code,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok || data.status === "failed") {
      return res.status(500).json({
        success: false,
        error: data.error || "Code execution failed",
      });
    }

    if (data.exception || data.stderr) {
      return res.json({
        success: false,
        output: data.stdout || "",
        error: data.exception || data.stderr,
      });
    }

    return res.json({
      success: true,
      output: data.stdout || "No output",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Failed to execute code: ${error.message}`,
    });
  }
}
