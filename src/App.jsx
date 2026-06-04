import "./App.css";

import Navbar from "./component/navbar";
import MainContent from "./component/main-content";
import Leftbar from "./component/leftbar";
import Rightbar from "./component/rightbar";

function App() {
  return (
    <>
      <Navbar />
      <Leftbar />
      <MainContent />
      <Rightbar />
    </>
  );
}

export default App;
