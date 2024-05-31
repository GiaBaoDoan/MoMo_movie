import { Logins, Register } from "Pages";

const AuthForm = ({ loginRef, registerRef }) => {
  return (
    <section className="bg-white">
      <dialog ref={loginRef} className="modal">
        <div className="modal-box">
          <Logins loginRef={loginRef} registerRef={registerRef} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <dialog ref={registerRef} className="modal">
        <div className="modal-box !max-w-[800px]">
          <Register loginRef={loginRef} registerRef={registerRef} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default AuthForm;
