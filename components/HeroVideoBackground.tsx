"use client";

import React, { useEffect, useRef } from "react";

const CROSSFADE_SECONDS = 2; // length of the crossfade

export default function HeroVideoBackground() {
  const v1Ref = useRef<HTMLVideoElement | null>(null);
  const v2Ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v1 = v1Ref.current;
    const v2 = v2Ref.current;
    if (!v1 || !v2) return;

    let mounted = true;
    let switching = false;

    // ensure visual styles
    v1.style.position = "absolute";
    v2.style.position = "absolute";
    v1.style.inset = "0";
    v2.style.inset = "0";
    v1.style.width = "100%";
    v2.style.width = "100%";
    v1.style.height = "100%";
    v2.style.height = "100%";
    v1.style.objectFit = "cover";
    v2.style.objectFit = "cover";
    v1.style.transition = `opacity ${CROSSFADE_SECONDS}s linear`;
    v2.style.transition = `opacity ${CROSSFADE_SECONDS}s linear`;
    v1.style.opacity = "1";
    v2.style.opacity = "0";

    v1.muted = true;
    v2.muted = true;
    v1.playsInline = true;
    v2.playsInline = true;

    function startCycle(a: HTMLVideoElement, b: HTMLVideoElement) {
      // called to watch `a` and trigger a crossfade to `b`
      let timeUpdateHandler: (() => void) | null = null;

      const onLoaded = () => {
        if (!mounted) return;

        timeUpdateHandler = () => {
          if (!a.duration || switching) return;
          const remaining = a.duration - a.currentTime;
          if (remaining <= CROSSFADE_SECONDS) {
            switching = true;

            // start the next video from start
            try {
              b.currentTime = 0;
            } catch (e) {
              // some browsers may throw if not ready; ignore
            }
            const p = b.play();
            if (p && typeof (p as any).catch === "function") (p as any).catch(() => {});

            // crossfade via opacity transitions
            b.style.opacity = "1";
            a.style.opacity = "0";

            // after crossfade completes, pause `a` and swap watchers
            setTimeout(() => {
              if (!mounted) return;
              try {
                a.pause();
                a.currentTime = 0;
              } catch (e) {}

              if (timeUpdateHandler) a.removeEventListener("timeupdate", timeUpdateHandler as any);
              switching = false;
              // continue the cycle watching `b` -> `a`
              startCycle(b, a);
            }, CROSSFADE_SECONDS * 1000);
          }
        };

        a.addEventListener("timeupdate", timeUpdateHandler as any);

        // ensure `a` is playing
        const playPromise = a.play();
        if (playPromise && typeof (playPromise as any).catch === "function") (playPromise as any).catch(() => {});
      };

      if (a.readyState >= 1 && !isNaN(a.duration)) {
        onLoaded();
      } else {
        a.addEventListener("loadedmetadata", onLoaded, { once: true });
      }
    }

    // start the loop with v1 -> v2
    v1.currentTime = 0;
    startCycle(v1, v2);

    return () => {
      mounted = false;
      try {
        v1.pause();
        v2.pause();
        v1.removeAttribute("src");
        v2.removeAttribute("src");
      } catch (e) {}
    };
  }, []);

  return (
    <div className="video-bg" aria-hidden>
      <video ref={v1Ref} src="/videos/drone-to-top.mp4" preload="metadata" />
      <video ref={v2Ref} src="/videos/zoom-to-lake.mp4" preload="metadata" />
    </div>
  );
}
