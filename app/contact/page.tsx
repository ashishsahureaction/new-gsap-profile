import Container from "@/components/layouts/container/container";
import Section from "@/components/layouts/section/section";

const AboutPage = () => {
  return (
    <Section>
      <Container>
        <div
          data-comp="hero"
          className="grid grid-cols-1  sm:grid-cols-4 gap-base"
        >
          <div className=" sm:col-span-3 text-center flex justify-center items-center flex-col border border-ash-yellow">
            <h1 className="font-bebas text-fluid-display-2xl leading-normal">
              Contact
            </h1>
          </div>
          <div className="sm:col-span-1 py-base bg-ash-yellow flex justify-center items-center font-bold text-fluid-body-sm px-base">
            <div className="text-ash-black">
              <p>
                The Playground features web experiments, concepts, and layouts
                that push the boundaries of traditional design and showcase the
                latest in animation techniques.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPage;
