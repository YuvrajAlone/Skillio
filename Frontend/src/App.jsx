import { Show, SignInButton, UserButton, useUser } from "@clerk/react";
import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage.jsx";

function App() {
  const { isSignedIn } = useUser();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
