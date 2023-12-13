interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      className=" bg-slate-300 p-2 mx-2 cursor-pointerflex items-center justify-center"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
