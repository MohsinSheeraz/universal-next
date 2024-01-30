"use client";
import { addFavourite, removeFavourite } from "@/api/agent";
import { useUserStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
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

  const { user, setIsUpdate, update: updateData } = useUserStore();

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse: any) => {
  //     await axios
  //       .get("https://www.googleapis.com/oauth2/v3/userinfo", {
  //         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //       })
  //       .then((res) => {
  //         checkEmail(
  //           res.data.email,
  //           res.data?.picture,
  //           res.data?.name,
  //           setIsUpdate,
  //           updateData,
  //           router
  //         );
  //       });
  //   },
  // });
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

  const toggle = () => {
    // setStatus(!status);
    addToFavourite();
    //        onClick();
  };
  return (
    <>
      {isfav ? (
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
      )}
    </>
  );
}
