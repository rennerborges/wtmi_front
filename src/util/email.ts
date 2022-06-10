export const isValidEmail = (value: string): boolean => {
  const regex =
    /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/;

  return regex.test(value);
};

export default {
  isValidEmail,
};
