import { P, Reveal } from "../Reveal";


export const SubInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Reveal className={"flex flex-col gap-2 lg:gap-4"}>
      <h4>{title}</h4>
      <P>{description}</P>
    </Reveal>
  );
};
