"use client";

import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export const CardSpin = () => {
  return (
    <div className="aspect-square h-full w-full overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/Sl-gMbxZGEvz0s-v/scene.splinecode" />
      </Suspense>
    </div>
  );
};
