import logic from "../assets/Logic.png";
import discord from "../assets/discord.png";
import telegram from "../assets/telegram.png";
import messenger from "../assets/Messengers.png";
import twitter from "../assets/x.png";

const Connections = () => {
  return (
    <div className="mt-20 flex justify-center px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src={messenger}
              alt="Messenger"
              className="w-20 h-auto md:w-24"
            />
          </a>
          <div className="flex flex-col items-center md:flex-row gap-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={discord}
                alt="Discord"
                className="w-10 h-auto md:w-12"
              />
            </a>
            <button className="py-2 px-3 rounded-3xl text-xs md:text-sm text-slate-400 bg-[#1C1CFF] flex items-center gap-1 md:ml-2">
              <img src={logic} alt="Logic" className="w-5 h-auto" />
              Click to Join Ethjos Discord
            </button>
          </div>
        </div>
        <div className="flex gap-6 justify-center md:justify-start md:mr-60">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" className="w-10 h-auto md:w-12" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src={telegram}
              alt="Telegram"
              className="w-10 h-auto md:w-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connections;
