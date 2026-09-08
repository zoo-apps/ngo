import React, { useEffect, useRef, useState } from 'react';

/**
 * The deep — Blue's room, live, inside this page.
 *
 * Not a picture of the beluga and not a second chat: it is zoolabs.io, where
 * Blue actually lives. Blue swims on the foundation's own footage, answers for
 * itself, and changes clip with how it feels about what was just said — one of
 * twenty-four feelings — and none of that is reimplemented here. A copy would
 * be a second system prompt, a second transport and a second thing to be wrong.
 * The foundation has one Blue.
 *
 * `?embed` is the whole of what the room does differently in here: it drops the
 * header this page already draws and offers `Open Blue ↗` instead, which opens
 * the full room at the top of the window carrying the question already asked.
 * No account is needed on either side of that link.
 *
 * [Blue] is the still, and it is the poster: it paints immediately, the room
 * fades over it when it is ready, and if the frame never arrives what is left
 * is the beluga rather than a white rectangle.
 */
import Blue from '@/components/Blue';

const ROOM = 'https://zoolabs.io/?embed=1';

export default function Deep({ label = 'Talk to Blue' }: { label?: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [ready, setReady] = useState(false);

  // The room is several megabytes of video. It is fetched when it is about to
  // be seen rather than when the page parses, and on a browser with no observer
  // it is fetched straight away rather than never.
  useEffect(() => {
    const el = box.current;
    if (!el || typeof IntersectionObserver === 'undefined') return setNear(true);
    const watch = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setNear(true), watch.disconnect()),
      { rootMargin: '200px' },
    );
    watch.observe(el);
    return () => watch.disconnect();
  }, []);

  return (
    <div ref={box} className='deep-room'>
      <Blue />
      {near && (
        <iframe
          src={ROOM}
          title={label}
          loading='lazy'
          allow='autoplay; microphone'
          onLoad={() => setReady(true)}
          style={{ opacity: ready ? 1 : 0 }}
        />
      )}
    </div>
  );
}
