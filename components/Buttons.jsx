import Button from "./Button";

const Buttons = () => {
  return (
    <div className="flex w-full items-center justify-center ls:flex-col ls:pt-10 md:pt-6">
      <Button
        href="/portfolio"
        linkName="View Projects"
      />
      <Button
        href="/contact"
        linkName="Contact me"
      />
    </div>
  );
};

export default Buttons;
