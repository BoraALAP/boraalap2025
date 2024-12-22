

export const SubInfo = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className={"flex flex-col gap-2 lg:gap-4"}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};