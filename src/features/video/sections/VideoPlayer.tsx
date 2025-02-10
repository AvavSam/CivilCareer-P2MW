import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  url: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className="relative aspect-video rounded-lg bg-gray-100">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};