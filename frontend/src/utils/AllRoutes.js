const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

export const AdoptRegisterRoute = `${baseURL}/api/adopt/register`;
export const AdoptListRoute = `${baseURL}/api/adopt/allusers`;
export const AuthLoginRoute = `${baseURL}/api/auth/login`;
export const AuthSignupRoute = `${baseURL}/api/auth/createuser`;
export const AuthGetUserRoute = `${baseURL}/api/auth/getuser`;
