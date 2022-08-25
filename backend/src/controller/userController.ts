/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import UserModel from '../model/UserModel';
import { User, UserShow } from '../@types';

class UserController {
  async newUser(req: Request, res: Response): Promise<Response> {
    let user: User = req.body;
    if (!user) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: "dont't have user",
      });
    }

    // Só vai mandar isso pro banco
    user = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      userName: user.userName,
      image: req.file ? req.file.filename : '',
      password: await bcrypt.hash(user.password, 10),
    };

    UserModel.create(user)
      .then(() => {
        return res.status(StatusCodes.CREATED).json({
          error: false,
          message: 'Sucess',
        });
      })
      .catch((e) => {
        // Erro 11000 se refere a dados duplicados
        if (e.code === 11000) {
          return res.status(StatusCodes.BAD_REQUEST).json({
            error: true,
            message: 'user or email already exists',
          });
        }

        return res.status(StatusCodes.BAD_GATEWAY).json({
          error: true,
          message: 'DataBaseError',
        });
      });
  }

  async AllUsers(req, res): Promise<Response> {
    const users: User[] = await UserModel.find();

    return res.status(StatusCodes.OK).json({ users });
  }

  async getUserById(req, res): Promise<Response> {
    try {
      const user: User = await UserModel.findOne({ _id: req.params.userId });
      const userShow: UserShow = {
        // eslint-disable-next-line no-underscore-dangle
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
        userName: user.userName,
      };
      return res.status(StatusCodes.OK).json({
        error: false,
        user: userShow,
      });
    } catch (error) {
      return res.status(StatusCodes.BAD_GATEWAY).json({
        error: true,
        message: 'DataBaseError',
      });
    }
  }

  async updateUser(req, res): Promise<Response> {
    if (!req.params.userId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: 'Send one id',
      });
    }
    try {
      const video = await UserModel.findOne({ _id: req.params.videoId });
      if (!video) {
        return res.status(StatusCodes.ACCEPTED).json({
          error: true,
          message: 'user dont exist',
        });
      }
    } catch (e) {
      console.log(e);
    }

    try {
      let user: User = req.body;
      if (!user) {
        return res.status(StatusCodes.BAD_GATEWAY).send({
          error: true,
          message: 'null fields',
        });
      }

      // const dataUser = await UserModel.findById(req.params.userId);
      // console.log('passrod', dataUser.password);

      // olhar senha do usuario ou se cadastrar
      user = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        image: req.file ? req.file.filename : undefined,
        password: user.password ? await bcrypt.hash(user.password, 10) : '',
      };

      await UserModel.findByIdAndUpdate(req.params.userId, user);
      return res.status(StatusCodes.CREATED).send({
        error: false,
        message: 'sucess',
      });
    } catch (error) {
      console.log(error);
      return res.status(StatusCodes.BAD_GATEWAY).send({
        error: true,
        message: 'Database Error',
      });
    }
  }

  async removeUser(req, res): Promise<Response> {
    if (!req.params.userId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: 'Send one id',
      });
    }
    try {
      const video = await UserModel.findOne({ _id: req.params.videoId });
      if (!video) {
        return res.status(StatusCodes.ACCEPTED).json({
          error: true,
          message: 'user dont exist',
        });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      await UserModel.findByIdAndDelete(req.params.userId);
      return res.status(StatusCodes.ACCEPTED).json({
        error: false,
        message: 'Sucess',
      });
    } catch (error) {
      return res.status(StatusCodes.ACCEPTED).send({
        error: true,
        message: 'Database Error',
      });
    }
  }
}

export default new UserController();
