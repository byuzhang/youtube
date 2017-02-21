import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Address from './Address';

import { YTSearch } from '../helpers';

const API_KEY = 'AIzaSyChr7ROmwAoRLwmGXsn9VQcN4oImyGemgI';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };

    this.searchVideo('JavaScript');

  }

  searchVideo(term){
    YTSearch({
      key: API_KEY,
      term
    }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[2]
      })
    })
  }

  selectVideo = (selectedVideo) => {
    this.setState({
      selectedVideo
    })
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={10} mdOffset={2}>
              <SearchBar searchVideo={term => this.searchVideo(term)}/>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <VideoDetail video={this.state.selectedVideo}/>
            </Col>
            <Col md={4}>
              <VideoList
                selectVideo={video => this.selectVideo(video)}
                videos={this.state.videos} />
            </Col>
          </Row>
          <Address/>
        </Grid>
      </div>
    );
  }

}

export default App;
