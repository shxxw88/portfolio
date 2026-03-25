import { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';

function VideoPlayer({ src, type = 'video/mp4' }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const isScrubbing = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => setIsPlaying(false);
    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video.paused) { video.play(); setIsPlaying(true); }
    else { video.pause(); setIsPlaying(false); }
  };

  const handleTimeUpdate = () => {
    if (isScrubbing.current) return;
    const video = videoRef.current;
    if (!video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleScrubChange = (e) => {
    const val = Number(e.target.value);
    setProgress(val);
    const video = videoRef.current;
    video.currentTime = (val / 100) * video.duration;
  };

  const handleScrubStart = () => { isScrubbing.current = true; };
  const handleScrubEnd = () => { isScrubbing.current = false; };

  return (
    <div
      className="vp-wrapper"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
        className="vp-video"
      >
        <source src={src} type={type} />
      </video>

      <div className={`vp-controls${showControls ? ' vp-controls--visible' : ''}`}>
        <button className="vp-play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <rect x="1" y="1" width="4" height="10" rx="1" />
              <rect x="7" y="1" width="4" height="10" rx="1" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 1.5l9 4.5-9 4.5V1.5z" />
            </svg>
          )}
        </button>

        <input
          type="range"
          className="vp-scrubber"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          style={{ '--progress': `${progress}%` }}
          onChange={handleScrubChange}
          onMouseDown={handleScrubStart}
          onMouseUp={handleScrubEnd}
          onTouchStart={handleScrubStart}
          onTouchEnd={handleScrubEnd}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
