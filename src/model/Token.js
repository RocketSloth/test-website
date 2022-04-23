import * as Yup from "yup";

export const authTokenFormSchema = Yup.object().shape({
  username: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  wallet_address: Yup.string().required("This field is required"),
  code: Yup.string().required("This field is required"),
});
