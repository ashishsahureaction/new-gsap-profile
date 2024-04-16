"use client";
import { useParams } from "next/navigation";

const NavigationComponent = () => {
  const pathname = useParams();
  return (
    <div className="bg-ash-dark-grey border-4 border-ash-white rounded-3xl h-screen navigation_container text-center flex items-center justify-center w-screen fixed z-20">
      <div className="text-ash-white gap-1 flex font-bold h-fit overflow-hidden">
        <p className="navigation_title relative text-fluid-display-m font-bebas">
          Ashish
        </p>
        <p className="navigation_title relative text-fluid-display-m font-bebas">
          Sahu
        </p>
      </div>
    </div>
  );
};

export default NavigationComponent;
