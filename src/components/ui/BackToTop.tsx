const BackToTop = () => {
  return (
    <div className="fixed  z-50 bottom-5 right-5">
      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="w-11 h-11 flex cursor-pointer justify-center items-center bg-black rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-up"
        >
          <path d="m5 12 7-7 7 7" />
          <path d="M12 19V5" />
        </svg>
      </div>
    </div>
  );
};

export default BackToTop;
