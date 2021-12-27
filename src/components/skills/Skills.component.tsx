import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs } from "swiper";
import clsx from "clsx";

import Container from "components/common/container/Container.component";
import Text from "components/common/text/Text.component";
import { skillsList } from "utilities/helpers/skillsList";

SwiperCore.use([Thumbs]);

const swiperProps = {
  slidesPerView: 3,
  spaceBetween: 30,
  className: "mb-8 w-full",
};

const Skills = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Container>
      <div className="w-full flex flex-col h-full md:max-w-4xl">
        <Swiper onSwiper={setThumbsSwiper} {...swiperProps}>
          {skillsList.map(({ icon, label }, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-start items-center cursor-pointer md:cursor-default"
            >
              <div className="bg-white p-4 rounded-full mb-2 w-16 h-16 flex justify-center items-center md:w-20 md:h-20">
                {icon}
              </div>
              <Text
                size="20"
                color="black"
                className={clsx(
                  "text-center bg-white rounded-lg px-2 w-full transition-colors duration-150",
                )}
              >
                <span
                  className={clsx(slideIndex === index && "text-secondary", " md:text-current")}
                >
                  {label}
                </span>
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          onRealIndexChange={({ realIndex }) => setSlideIndex(realIndex)}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          className="w-full flex-1"
        >
          {skillsList.map(({ skills }, index) => (
            <SwiperSlide
              key={index}
              className="bg-primary rounded-xl w-full flex justify-center !h-auto"
            >
              <ul className="flex flex-col">
                {skills.map((skill, index) => (
                  <li key={index} className="text-center pb-4 first:pt-8 last:pb-8">
                    <Text size="20">{skill}</Text>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Skills;
