/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../login/Login.css';
import m from '../../components/Header/Header.css';


class Channel extends React.Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <div className={m.root}>
          <div className={m.container}>
            <div className={m.banner}>
              <h1 className={m.bannerTitle}>{this.props.channel.ChannelName}</h1>
            </div>
          </div>
        </div>
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>


            <div className={s.formGroup}>
              <a className={s.facebook} >
                <svg
                  className={s.icon}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >

                </svg>
                <span>RANK - {this.props.channel.Rank}</span>
              </a>
            </div>
            <div className={s.formGroup}>
              <a className={s.google}>
                <svg
                  className={s.icon}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >

                </svg>
                <span>GRADES - {this.props.channel.Grade}</span>
              </a>
            </div>
            <div className={s.formGroup}>
              <a className={s.twitter} >
                <svg
                  className={s.icon}
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                </svg>
                <span>SUBSCRIBERS - {this.props.channel.Subscribers}</span>
              </a>
            </div>

          <div className={s.formGroup}>
            <a className={s.facebook} >
              <svg
                className={s.icon}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >

              </svg>
              <span>VIDEO UPLOADS - {this.props.channel.VideoUploads}</span>
            </a>
          </div>
          <div className={s.formGroup}>
            <a className={s.google} >
              <svg
                className={s.icon}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
              </svg>
              <span>VIDEO VIEWS - {this.props.channel.VideoViews}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(s, m)(Channel);
