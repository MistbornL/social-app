import axios from "axios";
import jwtDecode from "jwt-decode";
import { NavigateFunction } from "react-router-dom";

export const handleSignIn = async (
  data: FormData | {},
  setLoading: any,
  signIn: any,
  navigate: NavigateFunction
) => {
  setLoading(true);

  try {
    const response = await axios.post("/login", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
    });

    const decoded: any = jwtDecode(response.data.token);
    // const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
    console.log(decoded);
    signIn({
      token: response.data.token,
      tokenType: "bearer",
      authState: {
        username: decoded.username,
        profileImg: decoded.profileImg,
      },
      expiresIn: 30,
    });
    navigate("/");
  } catch (error: any) {
    setLoading(false);
    alert(error);
  }
};
