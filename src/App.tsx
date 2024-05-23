import { useRoutes } from "react-router-dom";
import { router } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="!font-open-sans">
      <ToastContainer style={{ marginTop: "80px" }} />
      {useRoutes(router)}
    </div>
  );
}

export default App;
