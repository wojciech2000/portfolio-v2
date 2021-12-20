import Container from "components/common/container/Container.component";
import Text from "components/common/text/Text.component";
import Title from "components/common/title/Title.component";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <Container>
      <div className="bg-primary rounded-xl w-full px-4 py-8 md:max-w-5xl md:px-8 md:py-12">
        <div className="flex items-center mb-12">
          <FaPaperPlane className="text-white mr-6 w-12 h-12" />

          <Title size="30">Be in touch</Title>
        </div>

        <form className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              <Text size="20">Name</Text>
            </label>

            <input type="text" id="name" className="w-full p-1.5 rounded-md md:w-1/3" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              <Text size="20">Email</Text>
            </label>

            <input type="email" id="email" className="w-full p-1.5 rounded-md md:w-1/3" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-2">
              <Text size="20">Message</Text>
            </label>

            <textarea id="message" className="w-full p-1.5 rounded-md" />
          </div>

          <button className="w-full bg-secondary py-2 rounded-lg mx-auto xs:w-72">
            <Text size="24">Submit</Text>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
