

import Image from "next/image";
import profile from "../../public/profile.jpg"
import { H2, P, Reveal } from "./Reveal";
import { OpenForWork } from "./subelements/OpenForWork";



export const Introduction = ({title, children}: {title: string, children: React.ReactNode}) => {
  
  return (
    <section className="relative inline-flex flex-col items-start justify-end gap-10 px-[5vw] pb-24 pt-32" >
      <Reveal>
      <Image
        className="h-[120px] w-[120px] rounded-full"
        src={profile}
        alt="Profile"
        placeholder="blur"
        width={120}
        height={120}
      />
      </Reveal>
      <div className="flex flex-col items-start justify-start gap-6">
        <H2 className="text-light-body dark:text-dark-body">
          {title}
        </H2>
        <Reveal>
        <P className="text-lg font-medium leading-normal text-light-softBody dark:text-dark-softBody">
        {children}
        </P>
        </Reveal>
    <OpenForWork />
      </div>
    </section>
  );
};
