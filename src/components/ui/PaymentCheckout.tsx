import { useState } from "react";

const data = [
  {
    img: "https://chieuphimquocgia.com.vn/images/vnpay.svg",
    tit: "VNPAY",
  },
  {
    img: "https://mangviettel.com.vn/wp-content/uploads/2022/04/viettel-money-1.png",
    tit: "Viettel Money",
  },
  {
    img: "https://chieuphimquocgia.com.vn/images/payoo.svg",
    tit: "Paypoo",
  },
];
const PaymentCheckout = () => {
  const [active, setActive] = useState(0);
  return (
    <section>
      <div className="space-y-5">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`ring-1 ${
                active === index ? "ring-blue-500" : "ring-gray-300"
              } flex items-center cursor-pointer space-x-3 p-5 rounded-xl`}
            >
              <div
                className={`check ring-1  w-[28px] h-[28px] flex justify-center items-center rounded-full ${
                  active === index ? "ring-blue-500" : "ring-gray-300"
                } `}
              >
                {active == index && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="rgba(59 130 246)"
                    color="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )}
              </div>
              <img className="h-[30px]" src={item.img} alt="" />
              <p>{item.tit}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PaymentCheckout;
