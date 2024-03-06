import LinkButton from "./LinkButton";

const Buttons = () => {
  return (
    <div className="flex w-full items-center justify-center ls:flex-col ls:pt-10 md:pt-6">
      <LinkButton
        href='/portfolio'
        linkName="View Projects"
      />
      <LinkButton
        href='/contact'
        linkName="Contact me"
      />
    </div>
  );
};

export default Buttons;
