import * as yup from "yup";

export const generalSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username cannot exceed 50 characters")
    .required("Username is required"),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  bio: yup.string().max(200, "Bio cannot exceed 200 characters"),

  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),

  relationship: yup
    .string()
    .oneOf(
      ["single", "married", "complicated", "other"],
      "Invalid relationship status"
    )
    .required("Relationship status is required"),
});
