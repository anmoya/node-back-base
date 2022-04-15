import { Request, Response } from "express";
import config from "config";
import { createSession, findSessions } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { signJwt } from "../utils/jwt.utils";
import logger from "../utils/logger";

export const createUserSessionHandler = async (req: Request, res: Response) => {
  // Validate user passwords
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email o password");
  }

  // Create a session
  const session = await createSession(
    user._id.toString(),
    req.get("User-Agent") || ""
  );

  // Create an access token
  const accessToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>("accessTokenTTL") } // 15 minutes
  );

  // Create a refresh token
  const refreshToken = signJwt(
    {
      ...user,
      session: session._id,
    },
    { expiresIn: config.get<string>("refreshTokenTTL") } // 1 year
  );

  // return access and refresh token
  return res.send({ accessToken, refreshToken });
};

export const getuserSessionHandler = async (req: Request, res: Response) => {
  const userId = res.locals.user._id;

  const sessions = await findSessions({ user: userId, valid: false });

  return res.send(sessions)
};
