import express from 'express';
import mongoose from 'mongoose';
import StatusCodes from 'http-status-codes';
// rota de usuarios
import * as dotenv from 'dotenv';
import userRoutes from './routes/UserRoutes';
import loginRoutes from './routes/LoginRoutes';
import ApiPermitionsMiddleware from './middlewares/ApiPermitionMiddleware';
import VideoRoutes from './routes/VideoRoutes';

const app = express();
dotenv.config(); // Permite o uso do dotenvs

// app.emit emite um evento que sera pego depois com o app.on
mongoose.connect(process.env.CONNECT_STRING).then(() => {
  app.emit('connectionOk');
}).catch(() => {
  throw new Error('Database connection Error');
});

app.use(express.static('public')); // pasta de arquivos staticos

app.use(express.json()); // permite o recebimento de dados json
app.use(express.urlencoded({ extended: true })); // permite receber dados de formularios

// permição de acesso para a api
app.use(ApiPermitionsMiddleware);
// Rotas
app.use('/', userRoutes); // rotas de usuario
app.use('/', loginRoutes); // rotas de login
app.use('/', VideoRoutes);

// Caso nenhuma rota Exista um rota de 404 deve vir aqui :)
app.use((req, res) => {
  res.status(StatusCodes.BAD_REQUEST).json({
    error: true,
    message: 'Rota não disponivel',
  });
});

// o server so vai funcionar se o mongoose tiver uma conexão bem sucedida
app.on('connectionOk', () => {
  app.listen(3030, '0.0.0.0');
});
