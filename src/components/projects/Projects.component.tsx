import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import Container from "components/common/container/Container.component";
import Text from "components/common/text/Text.component";
import { projectsList } from "utilities/helpers/projectsList";

SwiperCore.use([Pagination]);

const swiperProps = {
  loop: true,
  pagination: {
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3, slidesPerGroup: 3 } },
  className: "max-w-7xl h-full md:h-fit",
};

const Projects = () => (
  <Container>
    <Swiper {...swiperProps}>
      {projectsList.map(({ name, desktop, mobile, githubLink, liveLink, technologies }, index) => (
        <SwiperSlide className="!h-full md:!h-auto flex" key={index}>
          <div className="bg-primary p-4 rounded-xl w-full overflow-auto">
            <div className="flex mb-4">
              <div className="w-9/12 pr-4">
                <img src={desktop} alt={name} className="object-cover rounded-xl" />
              </div>

              <img src={mobile} alt={name} className="object-cover w-3/12 rounded-xl" />
            </div>

            <div className="flex mb-8">
              <button className="bg-white mr-4 w-20 py-1 rounded-md">
                <a href={githubLink} target="_blank">
                  <Text color="black">Code</Text>
                </a>
              </button>

              {liveLink && (
                <button className="bg-secondary w-20 py-1 rounded-md">
                  <a href={liveLink} target="_blank">
                    <Text>Live</Text>
                  </a>
                </button>
              )}
            </div>

            <ul className="flex flex-col items-center">
              {technologies.map((technology, index) => (
                <li key={index} className="mb-2">
                  <Text>{technology}</Text>
                </li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
);

export default Projects;
