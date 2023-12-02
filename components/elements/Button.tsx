/* eslint-disable jsx-a11y/alt-text */
const Button = (props: any) => {
  const { children, onClick } = props;
  return (
    <button
      className="flex h-fit cursor-pointer items-center justify-center"
      onClick={onClick}
    >
      <img className="absolute h-16 w-60" src={'/assets/svg/button.svg'} />
      <div className="relative text-xl font-[700] text-bg-windowTop">
        {children}
      </div>
    </button>
  );
};

export { Button };
