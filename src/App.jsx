import gsap from "gsap";
import { Dock, Home, Navbar, Welcome } from "./components";
import { Draggable } from "gsap/Draggable";
import { Contact, Image, Text, Terminal, Safari, Finder } from "./windows";
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
      <Text />
      <Image />
      <Contact />
      <Home />
    </main>
  );
};

export default App;
