const Loading = () => {
  return (
    <div className="max-w-4/5 aspect-square w-30 flex items-center justify-center bg-neutral-100 shadow-lg rounded-xl">
      <div className="w-3/5 aspect-square border-6 border-primary-400 rounded-full animate-spin border-b-gray-100" />
    </div>
  );
};

export default Loading;
