import Container from "components/common/container/Container.component";
import Title from "components/common/title/Title.component";

const Home = () => (
  <Container>
    <div className="bg-primary p-4 rounded-xl md:w-fit md:p-8">
      <Title size="48" className="mb-4 md:mb-8">
        Hello
      </Title>
      <Title size="36" className="md:leading-tight">
        My name is Wojtek, and I’m <br />
        <span className="text-secondary">software developer</span>
      </Title>
    </div>
  </Container>
);

export default Home;
