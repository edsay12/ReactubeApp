import { Router } from 'express';
import videosController from '../controller/videosController';
// import AutorizationMiddleawe from '../middlewares/AutorizationMiddleawe';

import UploadVideo from '../middlewares/uploadVideo';

const VideoRoutes = Router();

// Listagem de usuarios _ (Nao deve ser mandado com o projeto ja no ar)
VideoRoutes.get('/videos', videosController.allVideos);
// Vai adicionar novos usuarios
VideoRoutes.get('/video/:videoId', videosController.getVideoById);

VideoRoutes.post('/newVideo', UploadVideo.single('newVideo'), videosController.newVideo);

VideoRoutes.put('/video/update/:videoId', UploadVideo.single('newVideo'), videosController.updateVideo); // metodo deve ser put

VideoRoutes.delete('/video/remove/:videoId', videosController.removeVideo);

export = VideoRoutes;
