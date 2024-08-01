import NavBar from "../components/NavBar";
import About from "./About";
import ToolTip from "../components/ToolTip";
import {
  generateADACompliantColors,
  colorControls,
} from "../components/ColorUtils";
import { useEffect } from "react";
import Project from "./Project";
import Contact from "./Contact";
import { PixelGrid, setActiveContainer } from "../components/NavUtils";

export default function Index() {
  useEffect(() => {
    generateADACompliantColors();
    colorControls();
    setActiveContainer("about");
  }, []);

  return (
    <>
      <NavBar />

      <PixelGrid />

      <About />
      <Project />
      <Contact />

      <ToolTip />
    </>
  );
}
