import { Playlist } from "@/types";
import React from "react";

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  playlistArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  playlistArray,
}) => {
  return (
    <div>
      {/* PlayListCarousel
      {Thumbnail}
      {title} - {subTitle}
      {JSON.stringify(playlistArray)} */}
    </div>
  );
};

export default PlayListCarousel;
