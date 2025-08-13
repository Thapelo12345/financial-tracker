import SigningForm from "./pages/signInForm";
import Home from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen bg-red-300/10 p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigningForm />} />
          <Route path="/home/*" element={<Home />} /> {/* Note the /* */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;