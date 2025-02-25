import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { techStackState, TechStackItem } from "../state/techStackAtom";

const TechStack = () => {
  const [techStack, setTechStack] = useRecoilState<TechStackItem[]>(techStackState);

  useEffect(() => {
    const data: TechStackItem[] = [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Vite" },
      { name: "Recoil" },
    ];
    setTechStack(data);
  }, [setTechStack]);

  return (
    <div className="techstack-container">
      {techStack.map((tech, index) => (
        <div key={index} className="techstack-item">
          {tech.name}
        </div>
      ))}
    </div>
  );
};

export default TechStack;
