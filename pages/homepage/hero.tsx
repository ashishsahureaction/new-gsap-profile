import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";
import ShapeOne from "@/public/shape-one";
import Marquee from "react-fast-marquee";

const HompageHero = () => {
  return (
    <Section className="bg-ash-white z-10">
      <Container>
        <div
          data-comp="hero"
          className="flex justify-between relative flex-col h-full"
        >
          <div className="gap-base flex-grow flex-col flex justify-center items-center grid-cols-1 sm:grid-cols-4">
            <div className=" sm:col-span-4 h-fit text-center flex justify-center items-center flex-col">
              <h1 className="font-bebas text-fluid-display-3xl text-ash-black leading-none">
                <span className="leading-none">Ashish Sahu</span>
              </h1>
              <p className="flex items-center justify-center w-full gap-3 pl-3 font-bold font-bebas text-fluid-body-xxl">
                Creative
                <span className="text-ash-yellow">/</span>
                Discipline <span className="text-ash-yellow">/</span>{" "}
                Innovation
              </p>
            </div>
          </div>

          <div className=" sm:col-span-4 py-bass -mx-[100%] -mb-[100px] flex sm:h-fit justify-center items-center  bg-ash-ximen text-fluid-body-xxl font-bebas text-ash-white col-span-1">
            <Marquee pauseOnHover speed={30} autoFill>
              <ShapeOne />
              <span className="px-base pt-1 text-center flex items-center justify-center">
                Creative
              </span>
              <ShapeOne />

              <span className="px-base pt-1 text-center">Passionate</span>
              <ShapeOne />

              <span className="px-base pt-1 text-center">Visionary</span>
              <ShapeOne />

              <span className="px-base pt-1 text-center">Soulful</span>
            </Marquee>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HompageHero;
