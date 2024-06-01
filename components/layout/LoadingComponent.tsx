import Image from "next/image";

export default function LoadingComponent() {
  return (
    //isLoading &&
    <div className="fixed inset-0 flex items-center justify-center">
      <Image
        src="/assets/images/animatedcarloading.gif"
        alt="loader"
        width={200}
        height={200}
      />
      <h6 className="animate-charcter"> Loading ...</h6>
    </div>
  );
}
