import Image from "next/image";
import { Hero, Search, Service } from "@/components";
import { services } from "@/data/services";
import { phone } from "@/public";


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col px-10 `}>
      <Hero />
      <Search />
      <div className="mt-10">
        <h3 className="font-bold text-center text-primary-text text-[40px]">
          Services We Provide
        </h3>
        <div className="flex justify-between flex-wrap">
          {services.map((service, index) => (
            <Service
              key={index}
              description={service.description}
              image={service.image}
              service={service.service}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="cols-span-1">
            <h1 className="font-bold text-[40px] text-primary-text my-3 mb-5">
              What is Hakimhub
            </h1>
            <div className="leading-1 tracking-wide">
              HakimHub is a professional website designed to empower users in
              understanding their health concerns. With our user-friendly
              platform, individuals can input their symptoms, and our advanced
              system assists in identifying potential diseases while guiding
              them towards appropriate specialists. By leveraging cutting-edge
              technology and medical expertise, we provide users with valuable
              insights into their health issues, helping them make informed
              decisions about their well-being. With HakimHub, users can find
              answers to their symptoms and receive personalized recommendations
              for seeking further medical care.
            </div>
          </div>
          <div className="cols-span-1">
            <h2 className="text-center">Android</h2>
            <Image
              src={phone}
              alt="Phone"
              className="object-contain h-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
