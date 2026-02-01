import gsap from "gsap";
import { Dock, Navbar, Terminal, Welcome } from "./components";
import { Draggable } from "gsap/Draggable";
import Safari from "./windows/Safari";
import Finder from "./windows/Finder";
import Resume from "./windows/Resume";
import Text from "./windows/Text";
import Image from "./windows/Image";
import Contact from "./windows/Contact";
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
      <Text />
      <Image />
      <Contact />
    </main>
  );
};

export default App;
