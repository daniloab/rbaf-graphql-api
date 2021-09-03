import jwt from "jsonwebtoken";
import { User } from "./models";
import { jwtSecret } from "./config";
import { IUser } from "./modules/user/UserModel";
import { ITeam } from "./modules/team/TeamModel";
import { getUser } from "./getUser";

export const auth = async (ctx, next) => {
  const { authorization, domainname } = ctx.header;

  const result = await getUser({ authorization, domainname });

  const { unauthorized, user, team } = result;

  if (unauthorized) {
    ctx.error = 401;
    ctx.body = {
      data: null,
      errors: [
        {
          message: "Invalid session",
          severity: "WARNING",
        },
      ],
    };
    return;
  }

  ctx.user = user;
  ctx.team = team;

  await next();
};

type GenerateTokenArgs = {
  user: IUser;
};

export const generateToken = ({ user }: GenerateTokenArgs) => {
  return `JWT ${jwt.sign({ id: user._id }, jwtSecret)}`;
};
