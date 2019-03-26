/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Sequelize, { Op } from 'sequelize';
import config from '../config';

const sequelize = new Sequelize('youtube_data', 'root', 'shubhamdb', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql',
  operatorsAliases: false,
  insecureAuth: true,
  define: {
    timestamps: false,
  },
});

// const sequelize = new Sequelize('mysql://root:shubhamdb@localhost/youtube_data');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
