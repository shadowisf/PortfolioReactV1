import { useEffect } from "react";
import mediumZoom from "medium-zoom";
import IconGithub from "../assets/IconGithub";
import IconPDF from "../assets/IconPDF";
import IconArrowTopRight from "../assets/IconArrowTopRight";
import IconInstagram from "../assets/IconInstagram";
import IconLinkedIn from "../assets/IconLinkedIn";
import { HyperLinkWithIcon } from "../components/HyperLink";
import ProjectNav, {
  ProjectContainer,
  useEmblaStuff,
} from "../components/ProjectComps";
//
import PortfolioImage1 from "../assets/ImagePortfolio1.PNG";
import PortfolioImage2 from "../assets/ImagePortfolio2.PNG";
//
import CircuitCentralProposalPDF from "../assets/FileCircuitCentralProposal.PDF";
import CircuitCentralImplementationPDF from "../assets/FileCircuitCentralImplementation.PDF";
import CircuitCentralImage1 from "../assets/ImageCircuitCentral1.PNG";
import CircuitCentralImage2 from "../assets/ImageCircuitCentral2.PNG";
//
import ApolloHospitalPDF from "../assets/FileApolloHospital.PDF";
import ApolloHospitalImage1 from "../assets/ImageApolloHospital1.PNG";
import ApolloHospitalImage2 from "../assets/ImageApolloHospital2.PNG";
//
import FunCulatorPDF from "../assets/FileFunCulator.PDF";
import FunCulatorImage1 from "../assets/ImageFunCulator1.PNG";
import FunCulatorImage2 from "../assets/ImageFunCulator2.PNG";
import FunCulatorImage3 from "../assets/ImageFunCulator3.PNG";
//
import BellHospitalPDF from "../assets/FileBellHospital.PDF";
import BellHospitalImage1 from "../assets/ImageBellHospital1.PNG";
import BellHospitalImage2 from "../assets/ImageBellHospital2.PNG";
//
import PlugInsPDF from "../assets/FilePlugInsDatabase.PDF";
import PlugInsImage1 from "../assets/ImagePlugInsDatabase1.PNG";
import PlugInsImage2 from "../assets/ImagePlugInsDatabase2.PNG";
//
export const projectData = [
  {
    id: 0,
    name: "portfolio website",
    year: "2024",
    architecture: ["typescript (react)", "firebase", "html", "scss", "ui/ux"],
  },
  {
    id: 1,
    name: "circuitcentral",
    year: "2024",
    architecture: [
      "c#",
      "microsoft sql server",
      "windows forms",
      "ui/ux",
      "crud",
    ],
  },
  {
    id: 2,
    name: "apollo hospital",
    year: "2023",
    architecture: [
      "python (flask)",
      "xampp",
      "html (django)",
      "css (bootstrap)",
      "javascript",
      "ui/ux",
      "crud",
    ],
  },
  {
    id: 3,
    name: "funculator",
    year: "2022",
    architecture: ["java", "swing", "ui/ux"],
  },
  {
    id: 4,
    name: "bell hospital",
    year: "2022",
    architecture: ["java", "file handling", "cli"],
  },
  {
    id: 5,
    name: "plug-ins database",
    year: "2022",
    architecture: ["php", "html", "xampp"],
  },
];

export default function Project() {
  useEffect(() => {
    const zoom = mediumZoom("img", { background: "var(--background-color)" });
    // https://github.com/francoischalifour/medium-zoom

    return () => {
      zoom.detach();
    };
  }, []);

  const { emblaRef, slidePrev, slideNext, slideTo, activeIndex } =
    useEmblaStuff();

  return (
    <>
      <ProjectNav
        slideTo={slideTo}
        slideNext={slideNext}
        slidePrev={slidePrev}
        activeIndex={activeIndex}
      />

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {/* portfolio */}
          <ProjectContainer dataID={0}>
            <p>
              this portfolio website showcases all things me;{" "}
              <u>my projects, research, and life history!</u> by creating this
              portfolio, i was able to fully learn and understand how html, css,
              and react are all implemented as a baseline for web development.
              additionally, this entire portfolio website is made with little to
              no libraries or frameworks! that means features are built
              manually; just pure vanilla!
              <br />
              <br />
              <b>attributions:</b>
              <div className="projectLinks">
                <HyperLinkWithIcon
                  img={<IconGithub />}
                  href="https://github.com/brandonmcconnell"
                >
                  {/* typedcss */}
                  brandon mcconnell
                </HyperLinkWithIcon>
                <HyperLinkWithIcon
                  img={<IconGithub />}
                  href="https://github.com/francoischalifour"
                >
                  {/* medium zoom */}
                  françois chalifour
                </HyperLinkWithIcon>
                <HyperLinkWithIcon
                  img={<IconInstagram />}
                  href="https://www.instagram.com/pablostanley/"
                >
                  {/* avatar illustration */}
                  pablo stanley
                </HyperLinkWithIcon>
                <HyperLinkWithIcon
                  img={<IconArrowTopRight />}
                  href="https://awik.io"
                >
                  {/* color theory */}
                  andreas wilk
                </HyperLinkWithIcon>
                <HyperLinkWithIcon
                  img={<IconGithub />}
                  href="https://github.com/fisshy"
                >
                  {/* react-scroll */}
                  joachim
                </HyperLinkWithIcon>
                <HyperLinkWithIcon
                  img={<IconArrowTopRight />}
                  href="https://davidwalsh.name"
                >
                  {/* scaleText */}
                  david walsh
                </HyperLinkWithIcon>
                <HyperLinkWithIcon
                  img={<IconGithub />}
                  href="https://github.com/davidjerleke"
                >
                  {/* scaleText */}
                  david jerleke
                </HyperLinkWithIcon>
                <HyperLinkWithIcon
                  img={<IconLinkedIn />}
                  href="https://www.linkedin.com/in/frankmyles/"
                >
                  {/* theme engine */}
                  frank myles
                </HyperLinkWithIcon>
              </div>
            </p>

            <br />

            <img className="image" src={PortfolioImage1}></img>
            <img className="image" src={PortfolioImage2}></img>
          </ProjectContainer>

          {/* circuitcentral */}
          <ProjectContainer dataID={1}>
            <p>
              circuitcentral is an <u>e-commerce management system</u> that
              covers ordering products, viewing product catalogs, handling
              customer, staff, and supplier information, etc. its system
              features fundamental crud operations: create, read, update, and
              delete. additionally, it features search filtering on all records,
              error handling of all user events, input validation, and a login
              system for two user types.
            </p>

            <br />

            <div className="projectLinks">
              <HyperLinkWithIcon
                img={<IconGithub />}
                href="https://github.com/shadowisf/CircuitCentral"
                alt={true}
              >
                repository
              </HyperLinkWithIcon>

              <HyperLinkWithIcon
                img={<IconPDF />}
                href={CircuitCentralProposalPDF}
                alt={true}
              >
                proposal report
              </HyperLinkWithIcon>

              <HyperLinkWithIcon
                img={<IconPDF />}
                href={CircuitCentralImplementationPDF}
                alt={true}
              >
                implementation report
              </HyperLinkWithIcon>
            </div>

            <br />

            <img className="image" src={CircuitCentralImage1} />
            <img className="image" src={CircuitCentralImage2} />
          </ProjectContainer>

          {/* apollo hospital */}
          <ProjectContainer dataID={2}>
            <p>
              apollo hospital is a <u>hospital management system</u> that covers
              handling patient and doctor information, scheduling appointments
              with patients, manage patient's prescription and payables, etc.
              similarly to circuitcentral, its system features fundamental crud
              operations: create, read, update, delete. as well as a login
              system, error handling, input validation, and search filtering of
              patient records.
            </p>

            <br />

            <div className="projectLinks">
              <HyperLinkWithIcon
                img={<IconGithub />}
                href="https://github.com/shadowisf/ApolloHospital"
                alt={true}
              >
                repository
              </HyperLinkWithIcon>

              <HyperLinkWithIcon
                img={<IconPDF />}
                href={ApolloHospitalPDF}
                alt={true}
              >
                report
              </HyperLinkWithIcon>
            </div>

            <br />

            <img className="image" src={ApolloHospitalImage1} />
            <img className="image" src={ApolloHospitalImage2} />
          </ProjectContainer>

          {/* funculator */}
          <ProjectContainer dataID={3}>
            <p>
              funculator is an <u>all-in-one calculator application</u> for
              students. its system features a login system and a menu that shows
              all possible maethematical operations a student needs;
              arithmetics, fibonacci sequences, area of different shapes, etc.
              the design aesthetic for this project was heavily inspired by
              vibrant pixel art and sprites.
            </p>

            <br />

            <div className="projectLinks">
              <HyperLinkWithIcon
                img={<IconGithub />}
                href="https://github.com/shadowisf/FunCulator"
                alt={true}
              >
                repository
              </HyperLinkWithIcon>

              <HyperLinkWithIcon
                img={<IconPDF />}
                href={FunCulatorPDF}
                alt={true}
              >
                report
              </HyperLinkWithIcon>
            </div>

            <br />

            <img className="image" src={FunCulatorImage1} />
            <img className="image" src={FunCulatorImage2} />
            <img className="image" src={FunCulatorImage3} />
          </ProjectContainer>

          {/* bell hospital */}
          <ProjectContainer dataID={4}>
            <p>
              bell hospital is a <u>hospital management system</u> that is
              intended to be used with a command line interface (cli), with
              coverage to handling patient and doctor information, appointment
              scheduling, and medical records. its system feature crud
              operations: create, read, update, and delete. additionally, it has
              error handling and persistent data management since it utilizes
              span files through file handling.
            </p>

            <br />

            <div className="projectLinks">
              <HyperLinkWithIcon
                img={<IconGithub />}
                href="https://github.com/shadowisf/BellHospital"
                alt={true}
              >
                repository
              </HyperLinkWithIcon>

              <HyperLinkWithIcon
                img={<IconPDF />}
                href={BellHospitalPDF}
                alt={true}
              >
                report
              </HyperLinkWithIcon>
            </div>

            <br />

            <img className="image" src={BellHospitalImage1} />
            <img className="image" src={BellHospitalImage2} />
          </ProjectContainer>

          {/* plug-ins */}
          <ProjectContainer dataID={5}>
            <p>
              plug-ins is a fictitious (not real) company that required a
              database solution that utilizes forms. its system covers insertion
              of customer, product, and order information into a database.
              through that, search and display queries can be performed.
            </p>

            <br />

            <div className="projectLinks">
              <HyperLinkWithIcon
                img={<IconGithub />}
                href="https://github.com/shadowisf/PlugInsDatabase"
                alt={true}
              >
                repository
              </HyperLinkWithIcon>

              <HyperLinkWithIcon img={<IconPDF />} href={PlugInsPDF} alt={true}>
                report
              </HyperLinkWithIcon>
            </div>

            <br />

            <img className="image" src={PlugInsImage1} />
            <img className="image" src={PlugInsImage2} />
          </ProjectContainer>
        </div>
      </div>
    </>
  );
}
