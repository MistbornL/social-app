import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export const createUser = async (
  data: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: NavigateFunction
) => {
  try {
    const response = await axios.post("/register", data);

    if (response.status === 201) {
      navigate("/");
    }
  } catch (error) {
    setLoading(false);
    alert(error);
  }
};
