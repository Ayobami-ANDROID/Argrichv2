import React from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link,useNavigate } from "react-router-dom";
import notfound from "../images/404 Error Page not Found with people connecting a plug-amico.png";
// import obj from "../Images/landing-page/Vector 36.png";

const NotFound = ({ pathname }) => {
  const navigate = useNavigate()


  return (
    <section className="bg-white w-full h-screen flex flex-col justify-center items-cente text-center z-20">
      <div className="flex flex-col justify-center items-center md:relative">
        <img
          width={550}
          height={550}
          className="object-contain md:relative"
          src={notfound}
          alt="404 Error"
        ></img>

        <div className="md:absolute md:bottom-0">
          <p className="py-1 tracking-widest text-gray-500 font-medium font-mono">
            The page you're looking for does not exist
          </p>
          <p className="py-1 tracking-wider text-gray-500 font-medium font-mono">
            We highly recommend that you head back!
          </p>
        </div>
      </div>

      {/* <h2 className="font-mono text-[2rem] md:text-[4rem] tracking-wider font-semibold">
        404!
      </h2> */}
      <p
        onClick={() => navigate(-1)}
        className="text-[#030940] text-[1.125rem] font-mono cursor-pointer tracking-wider my-2 flex justify-center items-center gap-x-3"
      >
        <HiArrowLongLeft size={26} />
        Head Back
      </p>
    </section>
  );
};

export default NotFound;



// import React from "react";
// import { HiArrowLongLeft } from "react-icons/hi2";
// import { Link, useLocation } from "react-router-dom";
// import notfound from "../Images/404 Error Page not Found with people connecting a plug-amico.png";

// const NotFound = () => {
//   const location = useLocation();

//   const getRedirectPath = () => {
//     if (location.pathname.startsWith("/app")) {
//       return "/app/";
//     } else if (location.pathname.startsWith("/admin")) {
//       return "/admin/";
//     } else {
//       return "/"; 
//     }
//   };

//   return (
//     <section className="bg-[#fbf8f2] w-full h-screen flex flex-col justify-center items-cente text-center z-20">
//       <div className="flex flex-col justify-center items-center md:relative">
//         <img
//           width={550}
//           height={550}
//           className="object-contain md:relative"
//           src={notfound}
//           alt="404 Error"
//         ></img>

//         <div className="md:absolute md:bottom-0">
//           <p className="py-1 tracking-widest text-gray-500 font-medium font-mono">
//             The page you're looking for does not exist
//           </p>
//           <p className="py-1 tracking-wider text-gray-500 font-medium font-mono">
//             We highly recommend that you head back!
//           </p>
//         </div>
//       </div>

//       <Link
//         to={getRedirectPath()}
//         className="text-[#030940] text-[1.125rem] font-mono tracking-wider my-2 flex justify-center items-center gap-x-3"
//       >
//         <HiArrowLongLeft size={26} />
//         Head Back
//       </Link>
//     </section>
//   );
// };

// export default NotFound;
