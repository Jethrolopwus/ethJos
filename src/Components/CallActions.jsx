// import arrow1 from "../assets/Arrows (1).png"
// import arrow2 from "../assets/Arrows.png"
// const CallActions = () => {
//   return (
//     <>
//     <div className="flex justify-center items-center ">
//       <div className="flex gap-8">
//         <button className=" bg-[#1C1CFF] flex justify-center items-center text-[#FFFFFF] w-3/4 py-10">
//           Join the community now! <span>

//           <img src={arrow1} alt="Arrow"/>
//           </span>

//         </button>
//         <button className="bg-[#CDCDE7] text-[#1C1CFF] w-3/4 py-10 flex justify-center items-center">
//           Partner with ETHJos <span>

//           <img src={arrow2} alt="Arrow"/>
//           </span>
//         </button>
//       </div>
//     </div>
//       <p className="flex justify-center items-center pt-4 text-xl text-slate-600">Empowering Tomorow, Today</p>
//     </>
//   );
// };

// export default CallActions;


import arrow1 from "../assets/Arrows (1).png";
import arrow2 from "../assets/Arrows.png";

const CallActions = () => {
  return (
    <>
      <div className="flex justify-center items-center px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-2xl">
          <button className="bg-[#1C1CFF] flex justify-center items-center text-[#FFFFFF] w-full md:w-1/2 py-4 md:py-8 rounded-lg">
            Join the community now!
            <span className="ml-2">
              <img src={arrow1} alt="Arrow" className="w-6 h-6" />
            </span>
          </button>
          <button className="bg-[#CDCDE7] text-[#1C1CFF] w-full md:w-1/2 py-4 md:py-8 flex justify-center items-center rounded-lg">
            Partner with ETHJos
            <span className="ml-2">
              <img src={arrow2} alt="Arrow" className="w-6 h-6" />
            </span>
          </button>
        </div>
      </div>
      <p className="flex justify-center items-center pt-4 text-lg md:text-xl text-slate-600 text-center px-4">
        Empowering Tomorrow, Today
      </p>
    </>
  );
};

export default CallActions;
