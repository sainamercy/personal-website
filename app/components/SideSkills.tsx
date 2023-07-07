import { FaMinus } from "react-icons/fa";
import Image from "next/image";

function SideSkills() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="transform: rotate-90 flex items-center gap-2 mb-16 font-semibold">
        MY EXPERTISE <FaMinus className="text-4xl text-white" />
      </h3>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <Image src="/html_5.svg" alt="html" width={30} height={30} />
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <Image src="/css_3.svg" alt="css" width={30} height={30} />
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <Image src="/js.png" alt="js" width={25} height={25} />
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <Image src="/react.png" alt="react" width={30} height={30} />
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <Image src="/ruby.png" alt="ruby" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}

export default SideSkills;
