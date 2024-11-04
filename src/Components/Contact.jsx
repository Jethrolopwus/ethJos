
import { useForm } from "react-hook-form";
import discord from "../assets/Discord.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import github from "../assets/github.png";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
  };

  return (
    <div className="relative mt-20 flex flex-col md:flex-row justify-center gap-8 px-4">
      {/* Right Blur Effect */}
      <div className="absolute -right-10 top-0 h-full w-40 bg-[#8282FF] opacity-30 blur-2xl"></div>

      {/* Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md">
        <h1 className="text-3xl md:text-5xl font-bold">
          Join the <span className="text-[#1c1cff]">ETHJOS</span> community!
        </h1>
        <p className="leading-7 md:leading-10 font-montserrat mt-4 md:mt-8 text-sm md:text-md">
          Whether you are an experienced developer, a passionate blockchain
          advocate, or someone curious about Ethereum, ETHJos invites you to
          join our movement. Become a part of the community that is reshaping
          how we view finance, technology, and community engagement.
        </p>
      </div>

      {/* Form Section */}
      <div className="relative w-full md:w-[507px] border rounded-2xl bg-gradient-to-tr from-[#CDCDE7] to-[#CDCDE7] p-6 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: "Full Name is required" })}
              className="p-2 border rounded-lg"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone Number must contain only numbers",
                },
              })}
              className="p-2 border rounded-lg"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="p-2 border rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#1C1CFF] text-white px-4 py-2 mx-auto w-full md:w-3/5 rounded-xl mt-4"
          >
            Submit Now
          </button>
          <div className="flex justify-center items-center gap-4 mt-4">
            <img src={github} alt="GitHub" className="w-8 h-auto" />
            <img src={twitter} alt="Twitter" className="w-8 h-auto" />
            <img src={youtube} alt="YouTube" className="w-8 h-auto" />
            <img src={discord} alt="Discord" className="w-8 h-auto" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
