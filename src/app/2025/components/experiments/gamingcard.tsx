"use client";

import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export const GamingCard = () => {
  return (
    <div className="aspect-square h-full w-full overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/Ezg7TZXHvLP5dyYZ/scene.splinecode" />
      </Suspense>
    </div>
  );
};
