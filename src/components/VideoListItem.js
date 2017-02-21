import React from 'react';
import { ListGroupItem, Media } from 'react-bootstrap';


const VideoListItem = ({ video, selectVideo }) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
    return(
        <ListGroupItem bsClass="list-group-item video-item">
          <div onClick={() => selectVideo(video)}>
            <Media>
              <Media.Left>
                <img src={imgUrl} alt={videoTitle}/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>
                  {videoTitle}
                </Media.Heading>
              </Media.Body>
            </Media>
          </div>
        </ListGroupItem>
    )
}


export default VideoListItem;
