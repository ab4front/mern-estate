import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

const passwordHashing = (password) => {
  const result = bcrypt.hashSync(password, SALT_ROUNDS);
  return result;
};

// const passwordCompare = async (
//   password: string,
//   passwordHash: string
// ): Promise<boolean> => {
//   const matched = await bcrypt.compare(password, passwordHash);

//   return matched;
// };

export { passwordHashing };
