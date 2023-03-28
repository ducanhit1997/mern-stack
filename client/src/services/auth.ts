import services from ".";

export const registerUser = async (data: any) => {
  try {
    const res = await services.post(`/User/Register`, data);
    return res;
  } catch (error) {
    return error;
  }
};