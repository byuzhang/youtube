import React from 'react';
import { ListGroup } from 'react-bootstrap';

import VideoListItem from './VideoListItem';


const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        selectVideo={props.selectVideo}
        key={video.etag}
        video={video}/>
    )
  })

  return (
    <ListGroup>
      {videoItems}
    </ListGroup>
  )
}

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  selectVideo: React.PropTypes.func.isRequired
}

export default VideoList;
