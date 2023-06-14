import Image from "next/image";
import ServicesCard from "../common/ServicesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = [
  <ServicesCard />,
  <ServicesCard />,
  <ServicesCard />,
  <ServicesCard />,
];

interface isOpenProps {
  isopen: boolean;
}

const IsOpen: React.FC<isOpenProps> = ({ isopen = false }) => {
  if (isopen) {
    return (
      <div className="text-green-500 text-lg font-bold flex flex-wrap justify-end mr-2">
        OPEN
      </div>
    );
  }
  return (
    <div className="text-red-300 text-lg font-bold flex flex-wrap justify-end mr-2 ">
      CLOSED
    </div>
  );
};

const HospitalCard: React.FC = () => {
  const settings = {
    speed: 500,
    slidesToShow: 3,
  };

  return (
    <div className="flex flex-wrap bg-gray-300 rounded-lg m-3 shadow-lg">
      <div className="w-full md:w-1/3 bg-white rounded-lg">
        <div>
          <Image
            src={"/image/background.png"}
            alt={""}
            width={500}
            height={200}
          />
        </div>
        <div className="flex justify-center mb-10">
          <Image
            src={"/image/logo.png"}
            alt={""}
            width={100}
            height={160}
            className="rounded-full -m-10"
          />
        </div>
        <div className="flex flex-wrap m-2">
          <div className="w-1/2 hidden md:block">
            <div className="text-xl font-bold">
              <span className="text-primary font-extrabold text-2xl -mt-3">
                12
              </span>{" "}
              Hour
            </div>
            <div className="text-sm ">8:00am - 8:00pm</div>
          </div>
          <div className="w-1/2 pl-6 hidden md:block">
            <div>
              <div className=" text-xl font-bold">
                <span className="text-primary font-extrabold text-2xl">5</span>{" "}
                Days
              </div>
              <div className="text-sm">Monday - Friday</div>
            </div>
          </div>
        </div>
        <IsOpen isopen={false} />
      </div>
      <div className="pl-5 w-full md:w-2/3">
        <div className="font-extrabold text-3xl pb-2">
          Tikur Anbesa{" "}
          <span className="text-primary font-extrabold text-3xl">
            Hospital
          </span>
        </div>
        <div className="text-sm pb-2 mb-2">
          King George Street
        </div>
        <div className=" text-xl font-bold pb-2 mb-2 hidden md:block">
          Services
        </div>

        <div className="hidden md:block p-4">
          <Slider {...settings}>
            {Services.map((service, index) => (
              <div key={index}>{service}</div>
            ))}
          </Slider>
        </div>
        <div className="md:hidden"></div>
      </div>
    </div>
  );
};

export default HospitalCard;
