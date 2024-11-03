// import { useState, useEffect } from "react";
// import item1 from "../assets/sitted.png";
// import item2 from "../assets/standing.png";
// import item3 from "../assets/sitted.png";
// import item4 from "../assets/sitted.png";

// const MyCarousel = () => {
//   const images = [item1, item2, item3, item4, item1, item2]; 
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const ITEMS_PER_SLIDE = 4;
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + ITEMS_PER_SLIDE >= images.length ? 0 : prevIndex + ITEMS_PER_SLIDE
//       );
//     }, 3000); 

//     return () => clearInterval(interval); 
//   }, [images.length]);

  
//   const visibleImages = images.slice(
//     currentIndex,
//     currentIndex + ITEMS_PER_SLIDE
//   );

//   return (
//     <div className="mt-20 overflow-hidden">
//       <div className="flex gap-4 transition-transform duration-1000 ease-in-out">
//         {visibleImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-1/3 object-cover"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyCarousel;


import { useState, useEffect } from "react";
import item1 from "../assets/sitted.png";
import item2 from "../assets/standing.png";
import item3 from "../assets/sitted.png";
import item4 from "../assets/sitted.png";

const MyCarousel = () => {
  const images = [item1, item2, item3, item4, item1, item2]; 
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const ITEMS_PER_SLIDE = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + ITEMS_PER_SLIDE >= images.length ? 0 : prevIndex + ITEMS_PER_SLIDE
      );
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  const visibleImages = images.slice(currentIndex, currentIndex + ITEMS_PER_SLIDE);

  return (
    <div className="mt-20 overflow-hidden">
      <div className="flex gap-4 transition-transform duration-1000 ease-in-out">
        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
