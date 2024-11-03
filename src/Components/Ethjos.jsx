import line from "../assets/Rectangle 13.png";
const Ethjos = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <p className="font-bold text-2xl md:text-3xl py-2 text-center">
        Wondering how <span className="text-[#1C1CFF]">ETHJOS</span> amps up
        your game
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-6 md:space-y-0 mt-4 max-w-4xl">
        <div className="flex flex-col items-start">
          <h1 className="flex text-xl md:text-2xl font-semibold items-center mb-2">
            <img src={line} alt="Line" className="w-2 h-auto mr-2" />
            Learn
          </h1>
          <p className="w-full md:w-64 leading-6 opacity-70 text-center md:text-left">
            From basics to wizardry, power up your knowledge and explore the
            endless possibilities of the blockchain.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="flex text-xl md:text-2xl font-semibold items-center mb-2">
            <img src={line} alt="Line" className="w-2 h-auto mr-2" />
            Network
          </h1>
          <p className="w-full md:w-64 leading-6 opacity-70 text-center md:text-left">
            Expand your connections, collaborate on exciting projects, and forge
            partnerships that transcend boundaries.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="flex text-xl md:text-2xl font-semibold items-center mb-2">
            <img src={line} alt="Line" className="w-2 h-auto mr-2" />
            Build
          </h1>
          <p className="w-full md:w-64 leading-6 opacity-70 text-center md:text-left">
            Elevate your ideas from concepts to creation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ethjos;
