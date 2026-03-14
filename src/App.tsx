import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/HomePage";
import StreamPage from "./pages/StreamPage";
import LegacyPage from "./pages/LegacyPage";
import RelayPage from "./pages/RelayPage";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background Image */}
      {/* make it perfect to look and beautiful */}
      <div className="absolute inset-0">
        <img
          src="/blockchain-1.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/stream" element={<StreamPage />} />
              <Route path="/legacy" element={<LegacyPage />} />
              <Route path="/relay" element={<RelayPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
