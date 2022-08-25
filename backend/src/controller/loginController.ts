/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import UserModel from '../model/UserModel';
import { User } from '../@types';

class LoginController {
  async login(req:Request, res:Response):Promise<Response> {
    const CompareUser:User = req.body;
    if (!CompareUser) return res.status(StatusCodes.OK).json('ta vazio');
    try {
      const user:User[] = await UserModel.find({
        email: CompareUser.email,
      });
      if (user.length === 0) {
        return res.status(StatusCodes.BAD_GATEWAY).json({
          error: true,
          message: "user or password don't exists",
        });
      }
      // return res.send(user[0].password);
      try {
        const inputPassword = CompareUser.password;
        const userPassword = user[0].password;
        const match = bcrypt.compareSync(inputPassword, userPassword);
        if (!match) {
          return res.status(StatusCodes.BAD_REQUEST).json({
            error: true,
            message: "user or password don't exists",
          });
        }
        const userInformations = user[0];
        const payload = {
          userId: userInformations._id,
          userImage: userInformations.image,
          userName: userInformations.userName,
        };

        const secret = process.env.SECRET_KEY;
        const options = {
          expiresIn: '1d', // aqui eu seto a expiração de 1 dia
        };

        const jwt = jsonwebtoken.sign(payload, secret, options);

        return res.status(StatusCodes.OK).json({
          error: false,
          message: 'sucess',
          token: jwt,
          userId: userInformations._id,
        });
      } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: 'Login ou senha incorretos',
        });
      }
    } catch (error) {
      return res.status(StatusCodes.BAD_GATEWAY).json({
        error: true,
        message: 'Database error',
      });
    }
  }
}

export default new LoginController();
