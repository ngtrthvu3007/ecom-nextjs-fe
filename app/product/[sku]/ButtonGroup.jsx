const ButtonGroup = () => {
  return (
    <div className="mt-4">
      <div className="w-full text-center border-2 border-red-600 bg-red-600 text-white font-bold text-[20px] py-5 rounded-md hover:bg-[#fff] hover:text-red-600  cursor-pointer">
        <button>Mua ngay </button>
      </div>
      <div className="w-ful text-center col-span-2 mt-2">
        <button className="w-full text-center border-blue-600 border-2 text-blue-600 rounded-md py-4 font-bold text-[20px] mr-6 sm:mb-2 cursor-pointer hover:bg-blue-600 hover:text-white">
        Thêm vào giỏ hàng
        </button>

      </div>
    </div>
  );
};
export default ButtonGroup;
