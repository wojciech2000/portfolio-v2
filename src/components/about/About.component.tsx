import Container from "components/common/container/Container.component";
import me from "images/me.jpg";
import Text from "components/common/text/Text.component";

const About = () => {
  return (
    <Container>
      <div className="bg-primary p-4 rounded-xl h-full md:h-auto md:w-3/4 md:p-8 md:max-w-4xl">
        <img src={me} alt="me" className="w-2/4 h-auto mb-8 rounded-xl md:w-3/5 lg:w-1/3" />

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </Text>
      </div>
    </Container>
  );
};

export default About;
