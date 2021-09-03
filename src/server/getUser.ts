import { jwtSecret } from "./config";
import jwt from "jsonwebtoken";
import Team from "./modules/team/TeamModel";
import User from "./modules/user/UserModel";

type GetUserArgs = {
  authorization: string;
  domainname: string;
};

export const getUser = async ({ authorization, domainname }: GetUserArgs) => {
  if (!domainname) {
    return {
      unauthorized: true,
      user: null,
      team: null,
    };
  }

  const team = await Team.findOne({
    domainName: domainname,
  });

  if (!team) {
    return {
      unauthorized: true,
      user: null,
      team: null,
    };
  }

  if (!authorization) {
    return {
      unauthorized: false,
      user: null,
      team: team,
    };
  }

  try {
    const decodedToken = jwt.verify(authorization.substring(4), jwtSecret);

    const user = await User.findOne({ _id: decodedToken?.id, team: team._id });

    if (!user) {
      return {
        unauthorized: true,
        user: null,
        team: null,
      };
    }

    return { unauthorized: false, user, team };
  } catch (err) {
    return {
      unauthorized: true,
      user: null,
      team: null,
    };
  }
};
