import React from 'react';
import { ResponsiveEmbed } from 'react-bootstrap';

const VideoDetail = (props) => {
  const video = props.video; 
  if(!video){
    return <p>加载中......</p>
  }

  const videoId = video.id.videoId;
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const regularUrl = `https://youtu.be/${videoId}`;

  return(

    <div className='video-detail'>
      <ResponsiveEmbed a16by9>
          <iframe src={embedUrl}></iframe>
      </ResponsiveEmbed>
      <div className="details">
        <h4><a href={regularUrl} target='_blank' title="在YouTube官网中打开">{video.snippet.title}</a></h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

VideoDetail.propTypes = {
  video: React.PropTypes.object
}

export default VideoDetail;
