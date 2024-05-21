const Play = () => {
  return (
    <div className="border-white absolute hover:scale-110 transition-all bg-black bg-opacity-50 -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 border-[3px] w-14 flex justify-center items-center h-14 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        color="white"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-play"
      >
        <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
    </div>
  );
};

export default Play;
