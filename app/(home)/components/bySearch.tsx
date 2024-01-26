import CarsSimpleSearch from "@/components/cars/CarsSimpleSearch";
import { BodyType } from "@/models/Master/BodyType";
import { Make } from "@/models/Master/Make";
// import { SearchSelect, SearchSelectItem } from '@tremor/react'
import React, { useState } from "react";
// import { Form } from 'react-hook-form'
interface Props {
  bodyTypes: BodyType[];
  makes: Make[];
  yearList: string[];
}
export default function BySearch({ bodyTypes, makes, yearList }: Props) {
  return (
    <div className="mb-3">
      <CarsSimpleSearch
        bodyTypes={bodyTypes}
        makes={makes}
        yearList={yearList}
      />
    </div>
  );
}
