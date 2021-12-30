import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import clsx from "clsx";
import { toast } from "react-toastify";

import { contactFormSchema, IContactForm } from "./Contact.model";
import Input from "components/common/input/Input.component";
import Textarea from "components/common/textarea/Textarea.component";
import Container from "components/common/container/Container.component";
import Text from "components/common/text/Text.component";
import Title from "components/common/title/Title.component";

import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_USER_ID } from "utilities/config/env";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async () => {
    const sendEmail = async () => {
      if (!formRef.current) return;

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_USER_ID,
      );

      reset();
    };

    setIsLoading(true);

    try {
      await toast.promise(sendEmail, {
        error: "An error occurred",
        pending: "Email is being sent",
        success: "Successfully sent email",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className="bg-primary rounded-xl w-full px-4 py-8 flex flex-col h-full overflow-auto md:h-auto md:max-w-5xl md:px-8 md:py-12">
        <div className="flex items-center mb-4">
          <FaPaperPlane className="text-white mr-6 w-12 h-12" />

          <Title size="30">Be in touch</Title>
        </div>

        <form className="flex flex-col flex-1" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <Input label="Name" name="name" register={register("name")} error={errors.name} />

          <Input label="Email" name="email" register={register("email")} error={errors.email} />

          <Textarea
            label="Message"
            name="message"
            register={register("message")}
            error={errors.message}
          />

          <button
            type="submit"
            className={clsx(
              "w-full bg-secondary py-2 rounded-lg mx-auto mt-12 xs:w-72",
              isLoading && "opacity-50 cursor-default",
            )}
            disabled={isLoading}
          >
            <Text size="24">Submit</Text>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
