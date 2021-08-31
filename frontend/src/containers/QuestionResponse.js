import React from 'react';

const QuestionResponse = ({ video }) => (
  <div key={video.id} className="questionResponse">
    <h3>{video.name}</h3>
    <iframe className="questionFrame" src={video.ur} alt={video.name} />
  </div>
)

export default QuestionResponse;