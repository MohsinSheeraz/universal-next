import React, { useState } from "react";

export default function About() {
  const [about, setAbout] = useState(false);
  return (
    <div className="relative ">
      <h6 className="mb-0">
        <button
          onClick={() => setAbout(!about)}
          className="relative flex items-center bg-[#edebeb] w-full h-[34px] pl-2   text-left transition-all ease-in border-b border-solid cursor-pointer text-[12px] border-slate-100 text-[#393939] rounded-t-1 group "
          data-collapse-target="animated-collapse-1"
        >
          <span>About UM</span>
          <i className="absolute right-0 pt-1 pr-2 text-base transition-transform fa fa-chevron-down group-open:rotate-180"></i>
        </button>
      </h6>
      {about && (
        <div
          data-collapse="animated-collapse-1"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </div>
        </div>
      )}
    </div>
  );
}
