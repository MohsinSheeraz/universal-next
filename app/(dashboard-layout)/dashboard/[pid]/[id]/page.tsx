"use client";
import { useParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import Consigneeform from "./components/consigneeform";
import Courierform from "./components/courierform";
import Tabs from "../../components/Tabs";
import BackButton from "../../details/[pid]/[id]/component/backButton";

interface Props {
  params: {
    id: number;
  };
}
export default function page({ params }: Props) {
  const { pid } = useParams();
  const list = [
    "My Profile",
    // "My Account Info",
    "My Cosignee Details",
    // "My Favorites",
    // "Inquiry & Bid List",
    "Reserved Vehicles",
    "Purchased Vehicles",
  ];
  return (
    <div className="w-[95%] mx-auto">
      <Tabs list={list} />
      <div className="ml-7 mt-2">
        <BackButton />
      </div>
      {pid === "cosignee" || pid === "addcosignee" ? (
        <Consigneeform id={params?.id} />
      ) : (
        <Courierform id={params?.id} />
      )}
    </div>
  );
}
