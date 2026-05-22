"use client";

import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export const Splineblend = () => {
  return (
    <div className="aspect-square h-full w-full overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/ioIL6bGxiH2vKryl/scene.splinecode" />
      </Suspense>
    </div>
  );
};
