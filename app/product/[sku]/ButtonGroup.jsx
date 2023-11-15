const ButtonGroup = () => {
  return (
    <div className="mt-4">
      <div className="w-full text-center bg-blue-600 text-white font-bold text-[20px] py-5 rounded-md">
        <button>Mua ngay </button>
      </div>
      <div className="flex col-span-2 mt-2">
        <button className="w-full text-center border-blue-600 border-2 text-blue-600 rounded-md py-4 font-bold text-[20px] mr-10">
          Trả góp 0%
        </button>
        <button className="w-full text-center border-blue-600 border-2 text-blue-600 rounded-md py-4 font-bold text-[20px]">
          Thu cũ đổi mới
        </button>
      </div>
    </div>
  );
};
export default ButtonGroup;
