import { omit } from "lodash";
import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";
import logger from "../utils/logger";

export const createUser = async (
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) => {
  try {
    const user = await UserModel.create(input);

    return omit(user.toJSON(), "password");
  } catch (e: any) {
    throw new Error(e);
  }
};

export const validatePassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  console.log(email, password);
  const user = await UserModel.findOne({ email });

  if (!user) return false;

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
};
