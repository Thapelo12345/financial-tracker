import SigningForm from "./pages/signInForm";
import Home from "./pages/home";
import DialogContainer from "./components/dialogs/dialogContainer";
import store from "./state management/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className=" relative w-screen h-screen bg-red-300/10 p-0">
      <BrowserRouter>
<Provider store={store}>
  <DialogContainer />

        <Routes>
          <Route path="/" element={<SigningForm />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>

</Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;