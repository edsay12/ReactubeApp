import { StatusCodes } from 'http-status-codes';
import jsonwebtoken from 'jsonwebtoken';
import UserModel from '../model/UserModel';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(StatusCodes.FORBIDDEN).json({
      error: true,
      message: 'Login required',
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const dados = jsonwebtoken.verify(token, process.env.SECRET_KEY);
    const { _id } = dados;
    const user = await UserModel.findOne({
      where: {
        _id,
      },
    });
    if (!user) {
      return res.status(401).json('invalid User');
    }
    return next();
  } catch (e) {
    return res.status(401).json('invalid token');
  }
};
