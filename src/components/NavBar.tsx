import { Fragment, useState } from "react";
import { generateADACompliantColors } from "./ColorUtils";

type NavBarProps = {
  collapseDiv: (element: string) => void;
  scrollToPage: (element: string) => void;
};

const NavBar: React.FC<NavBarProps> = ({
  collapseDiv,
  scrollToPage: scrollTo,
}) => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  return (
    <Fragment>
      <nav>
        <a
          className="logo noCursor dotHoverTC"
          onClick={() => generateADACompliantColors()}
        >
          les ranalan
        </a>

        <a
          className="hamburgerButtonTC noCursor dotHoverTC"
          onClick={toggleHamburgerMenu}
        >
          menu
        </a>
      </nav>

      <section className={`hamburgerMenu ${isHamburgerMenuOpen ? "open" : ""}`}>
        <span
          className="hamburgerButtonBC noCursor dotHoverBC hamburgerMobileCloseButton"
          onClick={toggleHamburgerMenu}
        >
          close
        </span>

        <a
          className="dotHoverBC noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseDiv("about");
            scrollTo("about");
          }}
        >
          about
        </a>
        <a
          className="dotHoverBC noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseDiv("project");
            scrollTo("project");
          }}
        >
          projects
        </a>
        <a
          className="dotHoverBC noCursor"
          onClick={() => {
            toggleHamburgerMenu();
            collapseDiv("contact");
            scrollTo("contact");
          }}
        >
          contact
        </a>
      </section>
    </Fragment>
  );
};

export default NavBar;
