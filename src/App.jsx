import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-slate-200 overflow-x-hidden overflow-hidden">
      <Home />
      <ToastContainer />
    </div>
  );
};

export default App;
