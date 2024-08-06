import React, { useState } from "react";
import { projectData } from "../pages/Project";
import { disableMouse, disableScroll } from "./NavUtils";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(gsap, ScrollToPlugin);

type ProjectCardProps = {
  img?: string;
  children?: React.ReactNode;
  dataID?: number;
};

export function ProjectCard({ img, children, dataID }: ProjectCardProps) {
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

  const [isSelected, setSelected] = useState(false);
  const [origWidth, setOrigWidth] = useState("");
  const [origHeight, setOrigHeight] = useState("");

  const gsapEase = "power2.inOut";
  const gsapDuration = "0.75";
  const disableMouseDelay = 100;

  const scrollToTopOptions = {
    scrollTo: { y: 0, x: 0 },
    duration: "0.5",
  };

  function toggleProject(targetDataKey: number) {
    const dataKeyElements = document.querySelectorAll("div[data-key]");
    const cardContainers = document.querySelectorAll(".projectCards");

    dataKeyElements?.forEach((cardElement) => {
      const dataKey = cardElement.getAttribute("data-key");
      const titleElement = cardElement.querySelector(".title");
      const logoElement = cardElement.querySelector(".logo");
      const contentElement = cardElement.querySelector(".content");
      const backButton = cardElement.querySelector(".backButton");

      const style = getComputedStyle(cardElement);

      setOrigWidth(style.width);
      setOrigHeight(style.height);

      // selected box
      if (dataKey === targetDataKey.toString()) {
        gsap.to(cardElement, {
          onStart: () => {
            setSelected(true);

            disableScroll(true, true);

            disableMouse(true, disableMouseDelay);

            gsap.to(window, scrollToTopOptions);

            gsap.to(cardContainers, { gap: "0" });

            gsap.to(cardElement, { backgroundColor: "var(--text-color)" });

            gsap.to(logoElement, { autoAlpha: "0" });
          },
          flex: "1",
          ease: gsapEase,
          duration: gsapDuration,
          onComplete: () => {
            gsap.to(contentElement, { autoAlpha: "1", display: "block" });
            gsap.to(backButton, {
              autoAlpha: "1",
              display: "block",
              duration: "0.1",
            });

            disableScroll(false, true);

            disableMouse(false, disableMouseDelay);
          },
        });
      }
      // unwanted boxes
      else {
        gsap.to(cardElement, {
          onStart: () => {
            gsap.to(titleElement, {
              autoAlpha: "0",
              duration: "0.1",
            });

            gsap.to(cardElement, { border: "none", duration: "0.1" });
          },
          width: "0",
          height: "0",
          autoAlpha: "0",
          ease: gsapEase,
          duration: gsapDuration,
        });
      }
    });
  }

  function resetProject(delay: number) {
    const dataKeyElements = document.querySelectorAll("div[data-key]");
    const cardContainers = document.querySelectorAll(".projectCards");
    const backButton = document.querySelectorAll(".backButton");

    dataKeyElements?.forEach((cardElement) => {
      const titleElement = cardElement.querySelector(".title");
      const logoElement = cardElement.querySelector(".logo");
      const contentElement = cardElement.querySelector(".content");

      gsap.to(window, scrollToTopOptions);

      setTimeout(() => {
        gsap.to(contentElement, {
          onStart: () => {
            setSelected(false);

            disableScroll(true, true);

            disableMouse(true, disableMouseDelay);

            gsap.to(cardContainers, { gap: "1rem" });

            gsap.to(cardElement, {
              backgroundColor: "transparent",
            });

            gsap.to(logoElement, { autoAlpha: "0.125" });

            gsap.to(backButton, {
              autoAlpha: "0",
              display: "none",
              duration: "0.01",
            });
          },
          autoAlpha: "0",
          display: "none",
          duration: "0.1",
          onComplete: () => {
            gsap.to(cardElement, {
              flex: "0",
              width: origWidth,
              height: origHeight,
              autoAlpha: "1",
              ease: gsapEase,
              duration: gsapDuration,
              onComplete: () => {
                gsap.to(titleElement, { autoAlpha: "1" });

                gsap.to(cardElement, {
                  border: "2px solid var(--text-color)",
                });

                disableScroll(false, false);

                disableMouse(false, disableMouseDelay);
              },
            });
          },
        });
      }, delay);
    });
  }

  return (
    <div
      data-key={dataID ?? -1}
      className={`card ${isSelected ? "" : "toThinHover"}`}
      onClick={
        isSelected
          ? () => {}
          : () => {
              toggleProject(dataID ?? -1);
            }
      }
    >
      <span
        id="backButton"
        className="toThinHover textCenter backButton noCursor"
        onClick={() => {
          resetProject(0);
        }}
      >
        ← back to menu
      </span>

      <img className="logo" src={img} />

      <header
        style={
          isSelected
            ? {
                fontVariationSettings: '"wght" 1000, "CONT" 1000',
              }
            : {}
        }
        className={`title ${isSelected ? "active" : ""}`}
      >
        {getProjectName(dataID ?? -1)} <br />
        <span className="year">{getProjectYear(dataID ?? -1)}</span>
      </header>

      <section className="content">
        <ul className="architecture noCursor flexCenterH">
          {getProjectArchitecture(dataID ?? -1).map((arch, index) => (
            <li key={index}>{arch}</li>
          ))}
        </ul>

        {children}

        <span
          style={{ marginTop: "5rem" }}
          className="toThinHover flexCenterH textCenter noCursor"
          onClick={() => {
            resetProject(500);
          }}
        >
          ↑ <br />
          back to menu
        </span>
      </section>
    </div>
  );
}
