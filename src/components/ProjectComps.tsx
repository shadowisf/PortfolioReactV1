import { Fragment } from "react/jsx-runtime";
import { projectData } from "../pages/Project";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useState } from "react";

type ProjectNavProps = {
  slideTo: (index: number) => void;
  slideNext: () => void;
  slidePrev: () => void;
  activeIndex: number;
};

type ProjectContainerProps = {
  dataID: number;
  children: React.ReactNode;
};

function getProjectName(id: number) {
  const project = projectData.find((project) => project.id === id);

  return project?.name ?? "?";
}

function getProjectYear(id: number) {
  const project = projectData.find((project) => project.id === id);

  return project?.year ?? "?";
}

function getProjectArchitecture(id: number) {
  const project = projectData.find((project) => project.id === id);

  return project?.architecture ?? [];
}

export const useEmblaStuff = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    watchDrag: false,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = useCallback(() => {
    if (emblaApi && activeIndex != 0) {
      const newIndex =
        (activeIndex - 1 + projectData.length) % projectData.length;
      setActiveIndex(newIndex);
      emblaApi.scrollPrev();
    }
  }, [emblaApi, activeIndex]);

  const slideNext = useCallback(() => {
    if (emblaApi && activeIndex != projectData.length - 1) {
      const newIndex = (activeIndex + 1) % projectData.length;
      setActiveIndex(newIndex);
      emblaApi.scrollNext();
    }
  }, [emblaApi, activeIndex]);

  const slideTo = useCallback(
    (index: number) => {
      if (emblaApi) {
        setActiveIndex(index);
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, activeIndex]
  );

  return {
    emblaRef,
    emblaApi,
    slidePrev,
    slideNext,
    slideTo,
    activeIndex,
    setActiveIndex,
  };
};

export default function ProjectNav({
  slideTo,
  slideNext,
  slidePrev,
  activeIndex,
}: ProjectNavProps) {
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");
  const maxIndex = projectData.length - 1;

  if (activeIndex === 0 && backButton) {
    backButton.style.opacity = "0.25";
    backButton.classList.remove("scaleHover");
  } else if (backButton) {
    backButton.style.opacity = "1";
    backButton.classList.add("scaleHover");
  }

  if (activeIndex === maxIndex && nextButton) {
    nextButton.style.opacity = "0.25";
    nextButton.classList.remove("scaleHover");
  } else if (nextButton) {
    nextButton.style.opacity = "1";
    nextButton.classList.add("scaleHover");
  }

  return (
    <section className="projectNav noCursor flexCenterV" style={{ gap: "5px" }}>
      <span
        id="backButton"
        className="scaleHover flexCenterV"
        onClick={slidePrev}
        style={{ transition: "opacity 0.3s ease, scale 0.2s ease" }}
      >
        <b>⭠ back</b>
      </span>

      <span className="flexCenterV" style={{ gap: "10px" }}>
        {projectData.map((project, index) => (
          <span
            key={project.id}
            className={index === activeIndex ? "active" : "scaleHover"}
            onClick={() => slideTo(index)}
            style={{ fontSize: "large", marginTop: "-5px" }}
            title={project.name}
          >
            {index === activeIndex ? "◉" : "○"}
          </span>
        ))}
      </span>

      <span
        id="nextButton"
        className="scaleHover flexCenterV"
        onClick={slideNext}
        style={{ transition: "opacity 0.3s ease, scale 0.2s ease" }}
      >
        <b>next ⭢</b>
      </span>
    </section>
  );
}

export function ProjectContainer({ dataID, children }: ProjectContainerProps) {
  return (
    <Fragment>
      <section id={getProjectName(dataID)} className="embla__slide">
        <div id="hs" className="textCenter">
          <header className="scaleText">{getProjectName(dataID)}</header>
        </div>
        <header id="fs" className="largeHeader flexCenterH">
          {getProjectName(dataID)}
        </header>

        <span className="flexCenterH">{getProjectYear(dataID)}</span>

        <ul className="architecture noCursor flexCenterH">
          {getProjectArchitecture(dataID).map((arch, index) => (
            <li id="architectureItem" key={index}>
              {arch}
            </li>
          ))}
        </ul>

        {children}
      </section>
    </Fragment>
  );
}
