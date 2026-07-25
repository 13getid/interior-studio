import { useState, useEffect } from "react";
import { getCloudinaryImageUrl, getCloudinaryVideoUrl } from "@/lib/cloudinary";

const VIDEO_PUBLIC_ID = "interior-studio/hero/hero-video";
const IMAGE_PUBLIC_ID = "interior-studio/hero/hero-banner";

export default function HeroMedia() {
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    const videoUrl = getCloudinaryVideoUrl(VIDEO_PUBLIC_ID);
    fetch(videoUrl, { method: "HEAD" })
      .then((res) => setHasVideo(res.ok))
      .catch(() => setHasVideo(false));
  }, []);

  if (hasVideo) {
    return (
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={getCloudinaryVideoUrl(VIDEO_PUBLIC_ID)}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <img
      className="absolute inset-0 w-full h-full object-cover object-center"
      src={getCloudinaryImageUrl(IMAGE_PUBLIC_ID)}
      alt="Luxury interior design showcase"
    />
  );
}