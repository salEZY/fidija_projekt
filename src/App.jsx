import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Lazy loaded components
const Home = lazy(() => import("./components/Home"));
const Schedule = lazy(() => import("./components/Schedule"));
const Shows = lazy(() => import("./components/Shows"));
const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <div className="root">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/shows" element={<Shows />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
