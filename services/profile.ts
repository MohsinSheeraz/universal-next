import { initialUserData } from "@/store/store";
import axios from "axios";

export const checkEmail = async (
  email: string,
  img: any,
  name: string,
  setIsUpdate: any,
  updateData: any,
  router: any
) => {
  try {
    updateData({ ...initialUserData, email: email, name: name, img: img });
    let res = await axios({
      method: "get",
      url: `https://api20230805195433.azurewebsites.net/api/customers/Exists/${email}`,
      // data: reqBody
    });
    if (res && res?.data === false) {
      router.push("/dashboard");
    }
    if (res && res.data) {
      // setUpdate(true);
      setIsUpdate(true);
      try {
        let res = await axios({
          method: "get",
          url: `https://api20230805195433.azurewebsites.net/api/customers/ByEmail/${email}/`,
          // data: reqBody
        });
        updateData({ ...res.data, img: img });
      } catch (error: any) {
        if (error && error.message === "Request failed with status code 404") {
          console.log(error.message);
        } // this is the main part. Use the response property from the error object
        // return error.response;
      }
    }
  } catch (error: any) {
    if (error && error.message === "Request failed with status code 404") {
      updateData({ ...initialUserData, email: email, name: name });

      setIsUpdate(false);
    } // this is the main part. Use the response property from the error object

    // return error.response;
  }
};
