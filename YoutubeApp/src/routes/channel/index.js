/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Channel from './Channel';
import Layout from '../../components/Layout';

async function action({ fetch ,params}) {
  const resp = await fetch(`http://localhost:3000/youtubeid/${parseInt(params.id)}`, { method: 'GET' })
  const data  = await resp.json();
  console.log(data)
  return {
    title: 'React Starter Kit',
    chunks: ['channel'],
    component: (
      <Layout>
        <Channel channel={data}/>
      </Layout>
    ),
  };
}

export default action;
