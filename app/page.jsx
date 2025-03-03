import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Services from "./services/page";

const Home = () => {
  return (
    <section className="h-full flex flex-col justify-center">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Left Content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-gray-300">Timi&apos;s Friend</span>
            <h1 className="h1 mb-6 leading-tight">
              Hello, I&apos;m <br />
              <span className="text-accent">Gift Nwamadu</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Passionate developer and designer. Crafting beautiful and
              functional web experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <a href="/assets/Gift_Nwamadu_CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-500"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              {/* Social Icons */}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
