import gsap from "gsap";
import { Dock, Navbar, Terminal, Welcome } from "./components";
import { Draggable } from "gsap/Draggable";
import Safari from "./windows/Safari";
import Finder from "./windows/Finder";
import Resume from "./windows/Resume";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Resume />
      <Safari />
      <Finder />
    </main>
  );
};

export default App;
