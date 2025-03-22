import TechStackContainer from "./TechStackContainer";
import { techStack } from "../utils/techStack";

const TechStack = () => {
  return (
    <div className="flex justify-center items-center gap-8 flex-wrap">
      {
        techStack.map((stack => (
          <TechStackContainer
            key={stack.id}
            technologyName={stack.name}
            imageUrl={stack.url}
          />
        )))
      }
    </div >
  )
}

export default TechStack;
