import * as Yup from "yup";

export const socialSchema = Yup.object().shape({
  social1: Yup.string().required("social is required"),
  social2: Yup.string().required("social is required"),
  social3: Yup.string().required("social is required"),
  social4: Yup.string().required("social is required"),
});
