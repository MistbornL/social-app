import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { handleSignIn } from "./handleLogin";

export const createUser = async (
  data: any,
  navigate: NavigateFunction,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  signIn?: any
) => {
  try {
    const response = await axios.post("/register", data);

    if (response.status === 201) {
      console.log("Succes");
      const signInData = { email: data.email, password: data.password };
      handleSignIn(signInData, setLoading, signIn, navigate);
    }
  } catch (error) {
    setLoading(false);
    alert(error);
  }
};
