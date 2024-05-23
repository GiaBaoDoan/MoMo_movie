import { Footer, Header } from "components/ui";

const NotFoundPage = () => {
  return (
    <main>
      <Header />
      <section className="py-24">
        <div className="mb-4 font-bold text-center text-gray-200 text-8xl md:text-9xl">
          404
        </div>
        <h1 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          Page Not Found
        </h1>
        <div className="max-w-2xl mx-auto text-sm text-center text-gray-500 md:text-base">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
        </div>
        <div className="mx-auto text-center mt-5">
          <a
            className="inline-flex items-center px-5 py-5 text-white bg-pink-700 rounded "
            href="/"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Quay lai trang chủ
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFoundPage;
