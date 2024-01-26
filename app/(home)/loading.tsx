import Link from "next/link";

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <img src="/assets/images/animatedcarloading.gif" width="200px" />
        {/*<h6 className="animate-charcter"> Loading ...</h6>*/}
      </div>

      <div className="hidden md:inline-block col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 p-0 formss">
        <div>
          <h2 className="animate-pulse p-2 w-full h-16 bg-slate-200 rounded overflow-hidden border cursor-pointer"></h2>
          <div className="carsrow row py-5">
            {[1, 2, 3, 4, 5].map((car) => (
              <div
                className="col-sm ml-5 animate-pulse p-2 w-64 h-72 bg-slate-200 rounded overflow-hidden border cursor-pointer"
                key={car}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="showcase-Recheading">
              <h2>
                New Arrival in <span>Japan</span>
              </h2>
              <div className="carsrow row py-5">
                {[1, 2, 3, 4, 5].map((car) => (
                  <div
                    className="col-sm ml-5 animate-pulse p-2 w-64 h-72 bg-slate-200 rounded overflow-hidden border cursor-pointer"
                    key={car}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
