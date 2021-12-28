import Container from "components/common/container/Container.component";
import Text from "components/common/text/Text.component";
import Title from "components/common/title/Title.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaPaperPlane } from "react-icons/fa";
import { contactFormSchema, IContactForm } from "./Contact.model";
import Input from "components/common/input/Input.component";
import Textarea from "components/common/textarea/Textarea.component";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = (data: IContactForm) => {
    console.log(data);
  };

  return (
    <Container>
      <div className="bg-primary rounded-xl w-full h-auto px-4 py-8 flex flex-col justify-evenly md:max-w-5xl md:px-8 md:py-12">
        <div className="flex items-center">
          <FaPaperPlane className="text-white mr-6 w-12 h-12" />

          <Title size="30">Be in touch</Title>
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Name" name="name" register={register("name")} error={errors.name} />

          <Input label="Email" name="email" register={register("email")} error={errors.email} />

          <Textarea
            label="Message"
            name="message"
            register={register("message")}
            error={errors.message}
          />

          <button type="submit" className="w-full bg-secondary py-2 rounded-lg mx-auto xs:w-72">
            <Text size="24">Submit</Text>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
