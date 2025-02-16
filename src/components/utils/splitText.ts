import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextElement extends HTMLElement {
  anim?: gsap.core.Animation;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  const paragraphs = document.querySelectorAll<SplitTextElement>(".split-text-target");

  paragraphs.forEach((para) => {
    if (para.anim) {
      para.anim.progress(1).kill();
      para.anim = undefined;
    }

    // Custom text splitting logic
    const text = para.textContent;
    if (text) {
      const words = text.split(" ");
      para.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");
    }

    para.anim = gsap.fromTo(
      para.querySelectorAll(".word"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: para,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const titles = document.querySelectorAll<SplitTextElement>(".split-text-title");

  titles.forEach((title) => {
    if (title.anim) {
      title.anim.progress(1).kill();
      title.anim = undefined;
    }

    // Custom text splitting logic
    const text = title.textContent;
    if (text) {
      const chars = text.split("");
      title.innerHTML = chars
        .map((char) => `<span class="char">${char}</span>`)
        .join("");
    }

    title.anim = gsap.fromTo(
      title.querySelectorAll(".char"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  ScrollTrigger.addEventListener("refresh", () => setSplitText());
}