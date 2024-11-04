import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import item1 from "../assets/Rectangle.png";
import item2 from "../assets/vr.png";
import item3 from "../assets/vr.png";
import item4 from "../assets/Rectangle.png";
import item5 from "../assets/vr.png";

const images = [
  { src: item1, alt: "Sitting Position 1", width: 265.35, Height: 100 },
  { src: item2, alt: "Standing Position", width: 265.35, Height: 100 },
  { src: item3, alt: "Sitting Position 2", width: 265.35, Height: 100 },
  { src: item4, alt: "Sitting Position 3", width: 265.35, Height: 100 },
  { src: item5, alt: "Sitting Position 4", width: 265.35, Height: 100 },
];

const MyCarousel = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl flex justify-center items-center mt-10">We are Disruptors</h1>
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showThumbs={false}
      showStatus={false}
      className=" w-[100vw] rounded-3xl mt-10"
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.Height}
          />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default MyCarousel;
