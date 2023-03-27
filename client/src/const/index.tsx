export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const languages = [
  {
    id: 'vi',
    name: 'Vietnamese'
  },
  {
    id: 'en',
    name: 'English'
  }
];
export const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const patternPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;