"use client";

import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export const CardSpin = () => {
  return (
    <div className="aspect-square h-full w-full overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://my.spline.design/untitled-ba83fa61609fbc600036d9c6d7734a07/" />
      </Suspense>
    </div>
  );
};
