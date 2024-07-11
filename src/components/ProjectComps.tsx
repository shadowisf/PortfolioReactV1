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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = useCallback(() => {
    if (emblaApi) {
      const newIndex =
        (activeIndex - 1 + projectData.length) % projectData.length;
      setActiveIndex(newIndex);
      emblaApi.scrollPrev();
    }
  }, [emblaApi, activeIndex]);

  const slideNext = useCallback(() => {
    if (emblaApi) {
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
  return (
    <section id="projectNav" className="projectNav noCursor flexCenterV" style={{gap: "5px"}}>
      <span className="scaleHover flexCenterV" onClick={slidePrev}>
        <b>⭠ back</b>
      </span>

      <span className="flexCenterV" style={{gap: "10px"}}>
        {projectData.map((project, index) => (
          <span
            key={project.id}
            className={index === activeIndex ? "active" : "scaleHover"}
            onClick={() => slideTo(index)}
            style={{ fontSize: "large", marginTop: "-5px"}}
          >
            {index === activeIndex ? "◉" : "○"}
          </span>
        ))}
      </span>

      <span className="scaleHover flexCenterV" onClick={slideNext}>
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
            <li key={index}>{arch}</li>
          ))}
        </ul>

        {children}
      </section>
    </Fragment>
  );
}
