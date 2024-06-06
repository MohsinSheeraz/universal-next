export default function ImageForm() {
  return (
    <div className="flex flex-col gap-1 lg:gap-3 lg:flex-row w-full xl:w-3/4 mx-auto">
      <div className="w-full py-2 lg:py-5 px-0 lg:px-20">
        <label className="flex flex-col items-center px-4 py-8 bg-white text-blue rounded-lg  tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a Image</span>
          <input type="file" className="hidden" />
        </label>
      </div>
      <div className="w-full py-2 lg:py-5 px-0 lg:px-20">
        <label className="flex flex-col items-center px-4 py-8 bg-white text-blue rounded-lg  tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base text-center leading-normal">
            Select An Additional Image
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
}
