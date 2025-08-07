import LinkButton from "./LinkButton";

const Buttons = () => {
  return (
    <div className="flex w-full items-center justify-center ls:flex-col md:pt-4">
      <LinkButton
        href='/portfolio'
        linkName="View Projects"
      />
    </div>
  );
};

export default Buttons;
