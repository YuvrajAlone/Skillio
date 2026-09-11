import { useUser } from "@clerk/react";
import { Navigate, Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import ProblemsPage from "./Pages/ProblemsPage.jsx";
import PracticePage from "./Pages/PracticePage.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />}
        />
        <Route
          path="/dashboard"
          element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/problem/:id"
          element={isSignedIn ? <PracticePage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
