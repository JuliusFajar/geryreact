import useAxios from ".";

const Login = async (data) => {
    try{
        const response = await useAxios.post("/login", data);
        return response.data;
    }catch (error){
        throw error.response.data;
    }
};

export const Register = async (data) => {
    try {
      const response = await useAxios.post("/register", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

export { Login };