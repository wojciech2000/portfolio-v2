import Container from "components/common/container/Container.component";
import me from "images/me.jpg";
import Text from "components/common/text/Text.component";

const About = () => {
  return (
    <Container>
      <div className="bg-primary p-4 overflow-auto rounded-xl h-full md:h-auto md:w-3/4 md:p-8 md:max-w-4xl">
        <img src={me} alt="me" className="w-2/4 h-auto mb-8 rounded-xl md:w-3/5 lg:w-1/3" />

        <Text>
          My name is Wojciech, I'm software developer, my main specialisation is front-end but I
          also know back-end. I enjoy learning new things and create usefull software that will help
          people. I strive to constant development and broaden my skills and competencies to become
          an expert in my field, and make world a better place :D.
        </Text>
      </div>
    </Container>
  );
};

export default About;
