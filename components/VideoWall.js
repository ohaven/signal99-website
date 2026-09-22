// Rotating video wall. Shows one video large with a strip of thumbnails.
// Rotates to the next video every few seconds until someone presses play.
import { useEffect, useState } from "react";

const ROTATE_MS = 7000;

export default function VideoWall({ videos = [] }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (playing || paused || videos.length < 2) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % videos.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [playing, paused, videos.length]);

  if (!videos.length) return null;
  const v = videos[current];

  return (
    <div className="vwall" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="vwall-main">
        {playing ? (
          <iframe
            key={v.id}
            src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
            title={v.title || "Signal 99 video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="vwall-poster" onClick={() => setPlaying(true)} aria-label={`Play ${v.title || "video"}`}>
            <img src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`} alt="" />
            <span className="vwall-play">▶</span>
            {v.title && <span className="vwall-title">{v.title}</span>}
          </button>
        )}
      </div>
      {videos.length > 1 && (
        <div className="vwall-strip" role="tablist" aria-label="Videos">
          {videos.map((vid, i) => (
            <button
              key={vid.id}
              role="tab"
              aria-selected={i === current}
              className={`vwall-thumb${i === current ? " active" : ""}`}
              onClick={() => { setCurrent(i); setPlaying(false); }}
            >
              <img src={`https://i.ytimg.com/vi/${vid.id}/mqdefault.jpg`} alt={vid.title || `Video ${i + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
