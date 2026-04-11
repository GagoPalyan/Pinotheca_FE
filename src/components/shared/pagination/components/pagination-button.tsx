interface IProps {
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
  handleClick: () => void;
}

function PaginationButton({ children, title, disabled, handleClick }: IProps) {
  return (
    <button
      disabled={disabled}
      title={title}
      className="border border-gray-400 flex items-center justify-center size-8 rounded-sm cursor-pointer bg-white text-gray-950 hover:border-primary-400 hover:text-primary-400 duration-300 group disabled:opacity-50 disabled:pointer-events-none"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
