import { SchemaOf, string as YupString, object as YupObject } from "yup";

const REQUIRED_FIELD = "This field is required";
const INVALID_EMAIL = "Invalid email format";

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export type IContactFormField = keyof IContactForm;
export type IContactFormFieldValue<T extends IContactFormField> = IContactForm[T];

export const contactFormSchemaShape: {
  [property in IContactFormField]: SchemaOf<IContactFormFieldValue<property>>;
} = {
  name: YupString().required(REQUIRED_FIELD),
  email: YupString().email(INVALID_EMAIL).required(REQUIRED_FIELD),
  message: YupString().required(REQUIRED_FIELD),
};

export const contactFormSchema = YupObject().shape(contactFormSchemaShape);
