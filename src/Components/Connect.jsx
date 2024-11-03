

// const Connect = () => {
//   return (
//     <div className="flex w-full justify-center">
//         <div className="">
//             <h1 className="flex flex-col items-center  text-4xl font-extrabold ">Connect with builders 
//               <span className="">
//             Today!
//               </span></h1>
//             <button className="bg-[#1C1CFF] p-1 ml-20 mt-4  text-slate-400 ">Join The Community Now!</button>
//         </div>
//     </div>
//   )
// }

// export default Connect


const Connect = () => {
  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Connect with builders
          <span className="block text-[#1C1CFF]">Today!</span>
        </h1>
        <button className="bg-[#1C1CFF] text-white px-6 py-2 mt-6 rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Join The Community Now!
        </button>
      </div>
    </div>
  );
};

export default Connect;
