interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

function Button({ children, handleClick }: ButtonProps) {
  return (
    <button
      className=" bg-slate-300 p-2 mx-2 cursor-pointer hover:bg-slate-400 rounded-xl flex items-center justify-center"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
