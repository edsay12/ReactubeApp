import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  videoName: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  likeNumber: {
    type: Number,
    default: 0,
  },
  data: {
    type: String,
    required: true,

  },
  author:
    {
      userName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      userId: {
        type: String,
        required: true,
      },
      userImg: {
        type: String,
      },
    },
  comments: [
    {
      body: {
        type: String,

      },
      data: {
        type: String,

      },
      author: {
        userName: {
          type: String,

        },
        lastName: {
          type: String,

        },
        userId: {
          type: String,

        },
        userImg: {

        },

      },
    },
  ],

});

const videoModel = mongoose.model('video', VideoSchema);

export default videoModel;
