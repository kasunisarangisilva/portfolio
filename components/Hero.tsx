// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div className="pb-20 pt-36">
//       {/* Spotlights */}
//       <div>
//         <Spotlight
//           className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//           fill="white"
//         />
//         <Spotlight
//           className="h-[80vh] w-[50vw] top-10 left-full"
//           fill="purple"
//         />
//         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       {/* Background Grid */}
//       <div
//         className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        absolute top-0 left-0 flex items-center justify-center"
//       >
//         {/* Radial gradient */}
//         <div
//           className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
//         />
//       </div>

//       <div className="flex justify-center relative my-20 z-10">
//         <div className="max-w-[100vw] md:max-w-7xl lg:w-full flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left Column - Photo */}
//           <div className=" flex justify-center w-full md:justify-start">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
//               {/* Replace with your actual photo */}
//               <Image
//                 src="/profile-photo.jpg" // Update with your image path
//                 alt="Adrian - Next.js Developer"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right Column - Content */}
//           <div className="flex w-full flex-col items-center md:items-start text-center md:text-left">
//             {/* <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mb-4">
//               Next.js Fullstack Developer
//             </p> */}

//             <TextGenerateEffect
//               words="Transforming Concepts into Seamless User Experiences"
//               className="text-[40px] md:text-5xl lg:text-5xl mb-6"
//             />

//             <p className="md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-gray-300">
//               Hi! I&apos;m Kasuni Sarangi, a Fullstack Developer based in Sri
//               Lanka.
//             </p>

//             <a href="#about">
//               <MagicButton
//                 title="Show my work"
//                 icon={<FaLocationArrow />}
//                 position="right"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import Threads from "./ui/Threads";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div>
      {/* Threads Animation at the top */}
      <div className="w-full h-96 absolute top-0 left-0 z-50">
        <Threads
          amplitude={4.1}
          distance={0.3}
          enableMouseInteraction={true}
          color={[0.2, 0.4, 1]}
        />
      </div>
      <div className="pb-20 pt-36 relative">
        {/* Spotlights */}
        <div className="relative z-10">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        {/* Background Grid */}
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black-100/[0.9]
       absolute top-0 left-0 flex items-center justify-center"
        >
          {/* Radial gradient */}1
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="flex justify-center relative my-20 z-20">
          <div className="max-w-[100vw] md:max-w-7xl lg:w-full flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Column - Photo */}
            <div className="flex justify-center w-full md:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg shadow-blue-500/30 animate-float">
                <Image
                  src="/rsar.png"
                  alt="Kasuni Sarangi - Fullstack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex w-full flex-col items-center md:items-start text-center md:text-left">
              {/* <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mt-3">
                Fullstack Web Developer
              </p> */}
              <TextGenerateEffect
                words="Transforming Concepts into Seamless User Experiences"
                className="text-[40px] md:text-5xl lg:text-5xl mb-6"
              />

              <p className="md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-gray-300">
                Hi! I&apos;m Kasuni Sarangi, an Associate Software Engineer
                based in Sri Lanka.
              </p>

              <a href="#about">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
