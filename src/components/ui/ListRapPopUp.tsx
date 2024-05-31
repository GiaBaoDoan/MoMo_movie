const ListRapPopUp = ({ listRapRef, heThongRap, detailRap, setDetailRap }) => {
  console.log(heThongRap);
  return (
    <dialog ref={listRapRef} className="modal bg-white">
      <div className="modal-box !p-0 bg-white">
        <div className="flex p-5 space-x-3 items-center justify-center">
          <img src={heThongRap?.logo} className="h-11" alt="" />
          <h4 className="text-xl font-medium text-center">
            <span className="text-pinkTheme">{heThongRap?.tenHeThongRap}</span>
          </h4>
        </div>
        <hr />
        <div className="py-5">
          {heThongRap?.lstCumRap.map((item, i) => {
            return (
              <div
                className=""
                onClick={() => {
                  setDetailRap(i);
                  listRapRef.current.close();
                }}
              >
                <div
                  className={`p-3 hover:bg-gray-100 cursor-pointer justify-between flex items-center ${
                    detailRap === i ? "bg-pinkTheme bg-opacity-10" : ""
                  }`}
                >
                  <div className="flex space-x-5 items-center">
                    <div className="border rounded-md p-3">
                      <img src={heThongRap?.logo} className="h-9" alt="" />
                    </div>
                    <p className="text-lg font-medium">{item.tenCumRap}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ListRapPopUp;
