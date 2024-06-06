type Props = {
  steps: number[];
  current: number;
};
const next = () => {
  if (stepper < forms.length) setStepper(stepper + 1);
};
const previous = () => {
  if (stepper > 1) setStepper(stepper - 1);
};
export default function Stepper({ steps, current }: Props) {
  return (
    <div className="flex items-center max-w-screen-lg mx-auto">
      {steps.map((item, i) => {
        return (
          <div
            className={`flex items-center ${steps.length !== i + 1 ? " w-full" : ""}`}
          >
            <div
              className={`w-8 h-8 shrink-0 mx-[-1px] ${i < current ? "bg-blue-600" : "bg-gray-300"} p-1.5 flex items-center justify-center rounded-full`}
            >
              <span className="text-base text-white font-bold">{i + 1}</span>
            </div>
            <div
              className={`w-full h-1 ${i < current - 1 ? "bg-blue-600" : "bg-gray-300"}`}
            ></div>
          </div>
        );
      })}

      {/* <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
                    <span className="text-base text-white font-bold">2</span>
                </div>
                <div className="w-full h-1 bg-blue-600"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full">
                    <span className="text-base text-white font-bold">3</span>
                </div>
                <div className="w-full h-1 bg-gray-300"></div>
            </div> */}
      {/* <div className="flex items-center">
                <div className="w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full">
                    <span className="text-base text-white font-bold">4</span>
                </div>
            </div> */}
    </div>
  );
}
