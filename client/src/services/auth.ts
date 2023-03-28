import services from ".";

export const signUp = async (data: any) => {
  try {
    const res = await services.post('/Auth/Signup', data);
    return res;
  } catch (error) {
    return error;
  }
}

export const signIn = async (data: any) => {
  try {
    const res = await services.post('/Auth/Signin', data);
    return res;
  } catch (error) {
    return error;
  }
}