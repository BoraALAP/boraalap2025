import BrandCard, { BrandName } from "./subelements/BrandCard";
import { H2, P, Reveal } from "./Reveal";

export const MyStack = ({message, brand:{title, brands}}: {message: string, brand:{title: string, brands: BrandName[]}}) => {
  return (
    <section className="mx-auto max-w-6xl px-[5vw] py-20">
      <div className="flex flex-col items-start justify-start gap-8">
        <div className="flex flex-col gap-6">
          <H2 >My Stack</H2>
          <Reveal>

          <P className="">
            {message}
          </P>
          </Reveal>
        </div>
        <div className="flex flex-col items-start gap-6 self-stretch">
          <StackCategory
            title={title}
            brands={brands}
          />
          <StackCategory
            title="General"
            brands={["Spotify", "ChatGPT", "Perplexity", "Loom"]}
          />
        </div>
      </div>
    </section>
  );
};

interface StackCategoryProps {
  title: string;
  brands: BrandName[];
}

export const StackCategory = ({ title, brands }: StackCategoryProps) => {
  return (
    <Reveal className="flex flex-col items-start justify-start gap-2 self-stretch" >
      <h5 className="text-base font-semibold">{title}</h5>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] items-start justify-start gap-6 gap-y-4 self-stretch">
        {brands.map((brand, index) => (
          <BrandCard key={brand} brandName={brand} index={index} />
        ))}
      </div>
    </Reveal>
  );
};
