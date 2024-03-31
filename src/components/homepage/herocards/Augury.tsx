import Image from "next/image";

const Augury = () => {
  return (
    <div className="px-4 relative pt-10 pb-4 sm:py-10">
      <div className="rounded-3xl relative z-10 group bg-darkblue  duration-500 hover:shadow-light-orange sm:px-6 sm:pb-4 sm:pt-8 p-4 overflow-hidden">
        <Image
          className="absolute group-hover:opacity-0 duration-500 top-0 left-0 w-full h-full object-cover -z-10"
          width={364}
          height={468}
          src="/img/png/Augury-vector.png"
          alt="icon"
        />
        <Image
          className="absolute opacity-0 group-hover:opacity-100 duration-500 top-0 left-0 w-full h-full object-cover -z-10"
          width={364}
          height={468}
          src="/img/png/Augury-hover.png"
          alt="icon"
        />
        <div className="max-sm:flex justify-between max-sm:mb-4">
          <h3 className="text-center font-poppins !leading-[unset] group-hover:text-white bg-clip-text text-transparent bg-augury font-bold text-[28px] sm:text-3xl md:text-[40px] text-">
            Augury
          </h3>
          <div className="flex items-center gap-2 sm:gap-4 justify-center sm:pt-4 sm:mb-8">
            <p className="text-foxflowerviola text-sm font-bold">BTC</p>
            <Image
              width={55}
              height={30}
              src="/img/svg/Augury-icon.svg"
              alt="icon"
              className="max-sm:!max-w-11"
            />
            <p className="text-foxflowerviola text-sm font-bold ">BONK</p>
          </div>
        </div>
        <div className="rounded-lg py-4 px-3 sm:p-6 bg-[#242a3880] backdrop-blur-[50px]">
          <div className="max-sm:flex items-center gap-6 max-sm:mb-3">
            <div>
              <p className="text-foxflowerviola text-sm font-semibold mb-[6px]">
                APY
              </p>
              <div className="flex items-center gap-6">
                <p className="text-xl sm:text-[28px] font-poppins font-semibold text-markergreen">
                  85.12%
                </p>
                <div className="hidden sm:flex items-center rounded-md bg-[#2C3648] overflow-hidden">
                  <span className="text-foxflowerviola text-sm font-bold bg-[#272E3B] py-1 px-[6px]">
                    7D
                  </span>
                  <span className="font-semibold text-sm text-[#EF476F] px-2">
                    -8.3%
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-foxflowerviola text-sm font-semibold mb-[6px] sm:mt-4">
                TVL
              </p>
              <p className="text-xl sm:text-[28px] font-poppins font-semibold text-white sm:mb-4">
                $184.84M
              </p>
            </div>
          </div>
          <div className="flex flex-row max-sm:gap-4 max-sm:items-center sm:flex-col">
            <p className="text-foxflowerviola text-sm font-semibold sm:mb-[6px]">
              Capacity
            </p>
            <div className="bg-[#181E27] rounded h-[10px] sm:h-[14px] w-full">
              <div className={`relative bg-[#847445] h-full rounded w-[14%]`}>
                <span
                  className={`text-black p-[6px] bg-yellow font-bold text-[11px] sm:text-xs rounded absolute right-[-30px] top-1.5 -translate-y-1/2`}
                >
                  14%
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="card-btn">
          Open Vault
        </button>
      </div>
    </div>
  );
};

export default Augury;
