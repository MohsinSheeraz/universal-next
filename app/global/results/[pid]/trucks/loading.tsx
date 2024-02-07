import SearchingCriteria from "@/components/ui/SearchingCriteria";
import CarSearchResult from "@/components/cars/CarSearchResult";

export default function Loading() {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 p-0 second-searchform">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((car) => (
          <div
            key={car}
            className="border border-blue-300 shadow rounded-md p-4 w-full m-3"
          >
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
