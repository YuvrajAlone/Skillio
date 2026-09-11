import { useAuth } from "@clerk/clerk-react";
const { getToken } = useAuth();
const token = await getToken();

const API_URL = import.meta.env.VITE_API_URL;

export async function executeCode(language, code) {
  const response = await fetch(`${API_URL}/api/code/execute`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      language,
      code,
    }),
  });

  const data = await response.json();

  return data;
}
