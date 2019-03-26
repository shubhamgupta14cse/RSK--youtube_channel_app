import DataType from 'sequelize';
import Model from '../sequelize';

const youtubechanneldata = Model.define(
  'youtubechanneldata',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    Rank: {
      type: DataType.STRING(255)
    },

    Grade: {
      type: DataType.STRING(255)

    },

  ChannelName: {
      type: DataType.STRING(255)

    },

    Subscribers: {
    type: DataType.INTEGER(11),
    },

    VideoUploads: {
    type: DataType.INTEGER(11),
  },

    VideoViews: {
    type: DataType.BIGINT(20),
  },

  },

);

export default youtubechanneldata;
