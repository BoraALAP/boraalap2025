import React from "react";

export const Row = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="flex flex-col items-start justify-start gap-6 py-6 sm:flex-row"
      id={title}
      data-section
    >
      <div className="flex gap-2 sm:w-60 sm:justify-end">
        <h3 className="text-lg font-medium leading-normal sm:text-right">
          {title}
        </h3>
      </div>
      <div className="flex min-w-[320px] shrink grow basis-0 flex-col items-start justify-start gap-6">
        {children}
      </div>
    </div>
  );
};
