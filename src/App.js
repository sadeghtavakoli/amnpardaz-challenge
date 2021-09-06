import "./App.css";
import Header from "./components/header/header.component";
import Main from "./components/main/main.component";
import SideBar from "./components/side-bar/side-bar.component";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <SideBar />
    </div>
  );
}

export default App;
