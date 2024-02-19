"use client";
import { addFavourite, removeFavourite } from "@/api/agent";
import { useUserStore } from "@/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Prop = {
  car: any;
  fav?: any;
};
export default function LikeComponent({ fav, car }: Prop) {
  const [isfav, setFav] = useState(false);
  const router = useRouter();
  const isfa = fav.find((itm: any) => itm.stockID === car);
  useEffect(() => {
    if (isfa) {
      setFav(true);
    }
  }, [isfa]);

  const { user } = useUserStore();
  const addToFavourite = () => {
    if (user && user.customerId) {
      if (isfav) {
        removeFavourite({
          customerId: user.customerId,
          stockId: car,
        });
        setFav(!isfav);
        return;
      }
      if (user.phone) {
        addFavourite({
          customerId: user.customerId,
          stockId: car,
        });
        setFav(!isfav);
        return;
      }
      toast.info("Make a profile to add to your favorites!");
      return;
    }
    // login();
    router.push("/sign-in");
  };

  const toggle = (e: any) => {
    e.stopPropagation();

    // setStatus(!status);
    addToFavourite();
    //        onClick();
  };
  return (
    <>
      <Image alt="fav" className="cursor-pointer" width={25} height={25} onClick={toggle} src={isfav ? '/assets/images/heart.png' : '/assets/images/heartblack.png'} />
      {/* {isfav ? (
        <AiFillHeart
          className="xl:ml-0 2xl:ml-20 cursor-pointer"
          color="#ff6b81"
          size={20}
          onClick={toggle}
        />

      ) : (
        <span
          onClick={toggle}
          className="inline-flex font-bold fav-text cursor-pointer !text-[12px] xl:!text-[16px]"
        >
          <AiOutlineHeart
            className="cursor-pointer !pb-1 xl:!pb-0 !w-3 xl:!w-5"
            onClick={addToFavourite}
            size={20}
          />{" "}
          Add to Favorites
        </span>
      )} */}
    </>
  );
}
