import Image from "next/image";

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <Image
          alt="loader"
          loading="lazy"
          src="/assets/images/animatedcarloading.gif"
          width={200}
          height={200}
        />
        {/*<h6 className="animate-charcter"> Loading ...</h6>*/}
      </div>
    </>
  );
}
