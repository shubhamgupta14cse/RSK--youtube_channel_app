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
import Link from '../../components/Link/Link';
import s from './Home.css';
import j from '../login/Login.css';
import k from '../../components/Feedback/Feedback.css';
import l from '../../components/Footer/Footer.css';
import m from '../../components/Header/Header.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Arr:[],
      Page:0,
      Sort: 'id',
      query: '',
    };

  }

  static contextTypes = { fetch: PropTypes.func.isRequired };

  static propTypes = {
    // news: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     title: PropTypes.string.isRequired,
    //     link: PropTypes.string.isRequired,
    //     content: PropTypes.string,
    //   }),
    // // ).isRequired,
  };

  componentDidMount (){
    this.handleData();
    // this.handleSearch();
  }

  handleNext = async () =>{
    let page = this.state.Page;
    page = page + 10;
    await this.setState({
      Page: page
    });
    console.log("this is page in next================" );
    console.log(this.state.Page)
    this.handleData()
  }

  handlePrev = async () => {
    let page = this.state.Page;
    page > 0 ?( page = page - 10): page = 0

    await this.setState({
      Page: page
    });

    this.handleData()
  }

  handleSort= async (sort) => {
    await this.setState({
      Sort:sort,
      Page: 0
    });

    console.log("this sorting is called============================>");
    console.log(sort);
    console.log(this.state.Sort)

    this.handleData();
  }

  handleSearch = (e)=> {
    e.preventDefault();
    this.context
      .fetch(`/youtubechannel/${this.search.value}`, { method: 'GET' })
      .then(async (data) => {
        let Data = await data.json();
        if(Data != null){
        let arr = [Data];
        this.setState({
          Arr: arr
        });
        console.log(this.state.Arr);}
        else {
          this.handleData();
        }
      });
  }

  handleData = ()=> {
    console.log('this is logged===============================>');
    const page =this.state.Page;
    const sort= this.state.Sort;
    this.context
      .fetch(`youtubedata/${page}/sort/${sort}`, { method: 'GET' })
      .then(async (data) => {
        let Data = await data.json();
        let arr = [...Data];
        this.setState({
          Arr: arr
        });
        console.log(this.state.Arr);
      });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {

        }
      } else if (!this.state.query) {
      }
    })
  }


  render() {
    return (
    <div>
      <div className={m.root}>
        <div className={m.container}>
          <div className={m.banner}>
            <h1 className={m.bannerTitle}>YouTube Top Channels</h1>
            <p className={m.bannerDesc}>Search By Channel</p>
              <form onSubmit={this.handleSearch}>
               <input
                 placeholder="Search for..."
                 ref={input => this.search = input}
                 onChange={this.handleInputChange}
               />
              </form>
       <button className={j.button} style={{ margin: '-20px', width: '30%',borderColor: '#dd4b39', background: '#dd4b39'}} type="submit" onClick={this.handleSearch} >
         Search
       </button>
          </div>
        </div>
      </div>
      <div className={s.root} style={{paddingTop: '33px'}} >
        <div className={s.container} style={{paddingTop: '10px'}}>
          { this.state.Arr.map ((data) => (
            <Link  to= {'/channel/' + data.id} >
            <div key={data.id} className={j.formGroup}>
              <button className={j.button} type="submit">
                Rank - {data.Rank}
                  <span className={k.spacer} style={{paddingRight:'100px', paddingLeft:'100px'}}>|</span>
                {data.ChannelName}
                  <span className={k.spacer} style={{paddingRight:'100px', paddingLeft:'100px'}}>|</span>
                Subscribers - {data.Subscribers}
              </button>
            </div>
          </Link>
          )
          )}

        </div>
      </div>

      <div className={k.root}>
        <div className={k.container}>
            <a className={k.link} onClick= {this.handlePrev } > PREVIOUS</a>
          <span className={k.spacer}>|</span>
            <a className={k.link}  onClick= {this.handleNext } >NEXT</a>
        </div>

        <div className={l.root}>
          <div className={l.container}>
            <span className={l.text}>Sort By</span>
            <span className={l.spacer}>·</span>
            <a className={l.link} onClick ={ ()=>{this.handleSort('id')}} >
             Rank
           </a>
            <span className={l.spacer}>·</span>
            <a className={l.link}  onClick ={ ()=>{this.handleSort('Subscribers')}} >
              Subscribers
            </a>
            <span className={l.spacer}>·</span>
            <a className={l.link}  onClick ={ ()=>{this.handleSort('VideoViews')}}>
              Video View
            </a>
            <span className={l.spacer}>·</span>
            <a className={l.link}  onClick ={ ()=>{this.handleSort('VideoUploads')}} >
              Video Uploads
            </a>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default withStyles(s, j, k, l, m)(Home);
