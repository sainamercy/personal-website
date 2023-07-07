import { FaMinus } from "react-icons/fa";
import Image from "next/image";

function SideSkills() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="transform: rotate-90 flex items-center gap-2 mb-16">
        MY EXPERTISE <FaMinus className="text-4xl text-white" />
      </h3>
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/sketch.svg" alt="Sketch" width={45} height={45} />
        <Image src="/html_5.svg" alt="html" width={45} height={45} />
        <Image src="/css_3.svg" alt="css" width={45} height={45} />
      </div>
    </div>
  );
}

export default SideSkills;
