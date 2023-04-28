import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { createElement } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            modules={[Pagination]}
            className="pb-16 w-full justify-center self-start"
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: true,
            }}
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide key={i} className="h-fit">
                <div className="gallery-container flex pt-4">
                  <div className="gallery-content lg:w-1/2 w-full">
                    <h2
                      className="italic mb-6 pt-10 text-dark_tertiary w-[75%]"
                      data-aos="fade-down"
                    >
                      {content.title}
                    </h2>
                    <p className="mb-6 w-[75%]" data-aos="fade-down">
                      {content.content}
                    </p>
                    <h5 className="font-bold text-lg" data-aos="fade-down">
                      {Projects.toolsTitle}
                    </h5>
                    <div
                      className="skill-icon-container flex mt-4 mb-5"
                      data-aos="fade-down"
                    >
                      <div className="sm:cursor-pointer relative group gap-5 p-5 w-auto border-slate-200 flex">
                        {content.tools.map((tool, j) => (
                          <img
                            key={j}
                            src={tool.image}
                            alt="..."
                            className="w-7 group-hover:scale-125 duration-200"
                          />
                        ))}
                      </div>
                    </div>
                    {content.proj_link ? (
                      <button
                        className="rounded-lg bg-white w-[200px] h-12 border-solid group border-[2.5px] border-dark_tertiary text-dark_tertiary flex align-center pt-[10px] pl-[20px] font-semibold hover:bg-dark_tertiary duration-300"
                        data-aos="fade-down"
                      >
                        <a
                          className="flex"
                          href={content.proj_link}
                          target="_blank"
                        >
                          <p className="group-hover:text-white duration-300">
                            {Projects.buttonTitle}
                          </p>
                          <h4 className="text-dark_tertiary text-[22px] ml-[11px] font-semibold group-hover:text-white duration-300">
                            {createElement(Projects.buttonIcon)}
                          </h4>
                        </a>
                      </button>
                    ) : 
                    <button
                    className="rounded-lg bg-white w-[200px] h-12 border-solid group border-[2.5px] border-dark_tertiary text-dark_tertiary flex align-center pt-[10px] pl-[20px] font-semibold hover:bg-dark_tertiary duration-300"
                    data-aos="fade-down"
                  >
                      <p className="group-hover:text-white duration-300">
                        {Projects.privateTitle}
                      </p>
                  </button>
                    }
                  </div>
                  <div className="gallery-image-container lg:w-1/2 w-full md:block hidden flex justify-center pl-[50px]">
                    <div className="gallery-image-wrapper flex">
                      {content.project_image.map((image, j) => (
                        <div
                          key={j}
                          className={`${j === 1 ? "z-10" : ""} hover:z-50`}
                        >
                          <div
                            className={`
                          ${
                            j === 0
                              ? "image-left group hover:z-50 cursor-pointer"
                              : j === 1
                              ? "image-center ml-[-90px] mt-[70px] group cursor-pointer"
                              : "image-right ml-[-90px] group hover:z-50 cursor-pointer"
                          }`}
                          >
                            <img
                              src={image.image}
                              alt="..."
                              className="w-[241px] h-[476px] shadow-[-9px_5px_15px_-2px_rgba(89,89,89,1)] group-hover:scale-105 duration-500 object-cover object-left-top"
                              data-aos="fade-up"
                              // data-aos-delay={j * 400}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
