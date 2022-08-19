/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import videosModel from '../model/VideosModel';

type comments = {
  body: string;
  data: string;
  author: {
    userName: string;
    lastName: string;
    userId: string;
    userImg: string;
  };
};

type VideosJson = {
  videoName: string;
  videoUrl: string;
  subject: string;
  description: string;
  likeNumber: number;
  data: string;
  author: {
    userName: string;
    lastName: string;
    userId: string;
    userImg: string;
  };
  comments?: [comments];
};
type VideosForm = {
  videoName: string;
  videoUrl: string;
  subject: string;
  description: string;
  data: string;
  authorName: string;
  authorLastName: string;
  authorId: string;
  authorImg: string;
};

class VideosController {
  async newVideo(req: Request, res: Response): Promise<Response> {
    const videos: VideosForm = req.body;
    if (!videos) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: "dont't have videos",
      });
    }

    const videosJson: VideosJson = {
      videoName: videos.videoName,
      videoUrl: req.file ? req.file.filename : 'nadaAqui',
      subject: videos.subject,
      description: videos.description,
      data: new Date().toLocaleString(),
      likeNumber: 0,
      author: {
        userName: videos.authorName,
        lastName: videos.authorLastName,
        userId: videos.authorId,
        userImg: videos.authorImg,
      },
    };

    // Só vai mandar isso pro banco
    // videos = {
    //   name: videos.name,
    //   lastName: videos.lastName,
    //   email: videos.email,
    //   videosName: videos.videosName,
    //   image: req.file ? req.file.filename : '',
    //   password: await bcrypt.hash(videos.password, 10),
    // };

    videosModel
      .create(videosJson)
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
            message: 'videos or email already exists',
          });
        }
        console.log(e);

        return res.status(StatusCodes.BAD_GATEWAY).json({
          error: true,
          message: 'DataBaseError',
        });
      });
  }

  async allVideos(req, res): Promise<Response> {
    const videos = await videosModel.find();

    return res.status(StatusCodes.OK).json({ videos });
  }

  async getVideoById(req, res): Promise<Response> {
    try {
      const video = await videosModel.findOne({ _id: req.params.videoId });
      return res.status(StatusCodes.OK).json({
        error: false,
        video,
      });
    } catch (error) {
      return res.status(StatusCodes.BAD_GATEWAY).json({
        error: true,
        message: 'DataBaseError',
      });
    }
  }

  async updateVideo(req, res): Promise<Response> {
    if (!req.params.videoId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: 'Send one id',
      });
    }

    try {
      const video = await videosModel.findOne({ _id: req.params.videoId });
      if (!video) {
        return res.status(StatusCodes.ACCEPTED).json({
          error: true,
          message: 'Video dont exist ',
        });
      }
    } catch (e) {
      console.log(e);
    }

    try {
      const videos = req.body;
      if (!videos) {
        return res.status(StatusCodes.BAD_GATEWAY).send({
          error: true,
          message: 'null fields',
        });
      }

      // const datavideos = await videosModel.findById(req.params.videosId);
      // console.log('passrod', datavideos.password);

      const videosJson: VideosJson = {
        videoName: videos.videoName,
        videoUrl: req.file ? req.file.filename : 'nadaAqui',
        subject: videos.subject,
        description: videos.description,
        data: new Date().toLocaleString(),
        likeNumber: 0,
        author: {
          userName: videos.authorName,
          lastName: videos.authorLastName,
          userId: videos.authorId,
          userImg: videos.authorImg,
        },
      };

      await videosModel.findByIdAndUpdate(req.params.videoId, videosJson);
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

  async removeVideo(req, res): Promise<Response> {
    if (!req.params.videoId) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: true,
        message: 'Send one id',
      });
    }
    try {
      const video = await videosModel.findOne({ _id: req.params.videoId });
      if (!video) {
        return res.status(StatusCodes.ACCEPTED).json({
          error: true,
          message: 'Video Dont exist',
        });
      }
    } catch (e) {
      console.log(e);
    }
    try {
      await videosModel.findByIdAndDelete(req.params.videoId);
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

export default new VideosController();
