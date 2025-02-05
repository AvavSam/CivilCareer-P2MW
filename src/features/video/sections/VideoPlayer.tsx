import React from "react";
import { Play, Pause, Maximize2 } from "lucide-react";

interface VideoPlayerProps {
  thumbnail: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ thumbnail, isPlaying, onPlayPause }) => {
  return (
    <div className="relative aspect-video rounded-lg bg-gray-100">
      <img src={thumbnail} alt="Course Preview" className="h-full w-full rounded-lg object-cover" />
      <div className="absolute bottom-0 left-0 right-0 rounded-xl bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex items-center justify-between text-white">
          <button onClick={onPlayPause} className="rounded-full p-2 hover:bg-white/20">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button className="rounded-full p-2 hover:bg-white/20">
            <Maximize2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
