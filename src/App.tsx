import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./Layout";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {
  return (
    <Routes>
      {/* Route groups */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <>
              <SignedIn>
                <DashboardPage />
              </SignedIn>
              <SignedOut>
                <h1>Please sign in to view the dashboard</h1>
              </SignedOut>
            </>
          }
        />
      </Route>

      {/* 404 page */}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
