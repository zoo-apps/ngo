'use client';

import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import { useCorpus, type Counts } from '@/config/corpus';

/**
 * Blue, in the water, on the front door.
 *
 * The clip IS the panel — not a picture beside a chat box, and not zoolabs.io in
 * an iframe. Embedding the room brought its whole chrome with it (a header, a
 * sign-in, a footer) into a hero that already has all three, and asked a reader
 * to work out which page they were on. This is the same conversation with none
 * of that: the animal, a line to type in, and the answers laid over the water.
 *
 * A turn takes ITS OWN SIDE — Blue hard left, the reader hard right — so the
 * shape of an exchange is legible before a word of it is, and neither covers the
 * middle of the frame, which is where the whale is.
 *
 * The full room is a LINK, not a frame. Someone who wants the feelings, the
 * voice and the history opens zoolabs.io; someone who just wants to ask a beluga
 * a question never leaves.
 */
const API = 'https://api.hanzo.ai/v1/chat/public';
/**
 * zen-free, not zen. Both are real and the lane serves both, but `zen` bills
 * through to an upstream that answers "Insufficient credits" — a 402 a visitor
 * can do nothing about.
 */
const MODEL = 'zen-free';
/** Where a reader of THIS site signs in. Zoo's own, not the lane's operator. */
const SIGN_IN = 'https://zoolabs.id/';
const ROOM = 'https://zoolabs.io/';

type Turn = { who: 'blue' | 'me'; text: string };

/** What went wrong, and where the reader goes about it. */
type Wrong = { text: string; go?: string };

/** What Blue is, and what this site has counted. Never a number it guessed. */
const prompt = (c: Counts) =>
  [
    'You are Blue, a beluga whale and a working marine scientist at Zoo Labs Foundation, a 501(c)(3) open research non-profit (EIN 88-3538992, founded 2021).',
    'You talk to children, students and researchers at once: plain words, short sentences, real science. Curiosity over cuteness. Two or three sentences unless asked for more.',
    'Say what is known, what is uncertain, and how someone would find out. Never invent data, recordings, place names or citations.',
    `The foundation has published exactly ${c.papers} papers at papers.zoo.ngo and ${c.proposals} improvement proposals at zips.zoo.ngo. The open Zen family is ${c.models} models at huggingface.co/zenlm, and the code is at github.com/zooai. Everything is open source. Never state a count that is not one of those.`,
  ].join('\n\n');

const OPENERS = [
  'Why are beluga calves born grey?',
  'What does Zoo Labs research?',
  'How do scientists tell whales apart?',
];

/**
 * What Blue is doing, which the water answers: at rest, listening while the
 * question is out and no word has come back, speaking while the answer streams.
 */
type Mood = 'rest' | 'listen' | 'speak';

/** How fast Blue swims in each mood. The film eases between them. */
const PACE: Record<Mood, number> = { rest: 1, listen: 0.8, speak: 1.35 };

/**
 * The film. One loop of the foundation's own footage, opened on the frame the
 * poster is cut from, so the panel is the beluga from the first paint and stays
 * the beluga when the film is late, refused or never asked for.
 *
 * It plays only when motion is welcome and the panel is on screen. Under
 * `prefers-reduced-motion` nothing is fetched but the poster: there is no
 * `autoplay` attribute for the static page to start before anyone has asked
 * the reader's preference.
 *
 * AV1 first — about 390 KB — and H.264 for the browsers that cannot decode it,
 * about 900 KB. Each source names its codec, so a browser skips the one it
 * would only download to fail.
 */
function Film({ mood }: { mood: Mood }) {
  const film = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = film.current;
    if (!v) return;
    const still = matchMedia('(prefers-reduced-motion: reduce)');
    let seen = false;
    const set = () => {
      if (!seen || still.matches) {
        v.pause();
        return;
      }
      // A browser may refuse to play (low-power mode, a data saver). What it
      // shows then is the poster, which is the outcome wanted, so there is
      // nothing to recover and nothing to tell the reader.
      v.play().catch(() => undefined);
    };
    const watch = new IntersectionObserver(([e]) => {
      seen = e.isIntersecting;
      set();
    });
    watch.observe(v);
    still.addEventListener('change', set);
    return () => {
      watch.disconnect();
      still.removeEventListener('change', set);
    };
  }, []);

  // The pace eases toward the mood rather than jumping to it, a step a frame,
  // and the loop ends when it arrives. Each step is one property on the media
  // element: no layout, no paint, and nothing at all while Blue is at rest.
  useEffect(() => {
    const v = film.current;
    if (!v) return;
    const to = PACE[mood];
    let frame = 0;
    const step = () => {
      // A twelfth of the way each frame, never less than a hundredth, so the
      // tail arrives rather than creeping toward the mood forever.
      const gap = to - v.playbackRate;
      v.playbackRate = Math.abs(gap) <= 0.01 ? to : v.playbackRate + Math.sign(gap) * Math.max(Math.abs(gap) / 12, 0.01);
      if (v.playbackRate !== to) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [mood]);

  return (
    <>
      <Head>
        {/* The poster is the first thing on the page; it should not wait for
            the script that reads the preference to arrive. */}
        <link rel='preload' as='image' href='/videos/blue.jpg' fetchPriority='high' />
      </Head>
      <video
        ref={film}
        className='portal-film'
        poster='/videos/blue.jpg'
        muted
        loop
        playsInline
        preload='none'
        aria-hidden
      >
        <source src='/videos/blue.webm' type='video/webm; codecs="av01.0.08M.08"' />
        <source src='/videos/blue.mp4' type='video/mp4; codecs="avc1.640029"' />
      </video>
    </>
  );
}

export default function Portal() {
  const corpus = useCorpus();
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState('');
  const [thinking, setThinking] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [wrong, setWrong] = useState<Wrong | null>(null);
  const tail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (turns.length || thinking) tail.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [turns, thinking]);

  async function ask(q: string) {
    const text = q.trim();
    if (!text || thinking) return;
    const said: Turn[] = [...turns, { who: 'me', text }];
    setTurns(said);
    setDraft('');
    setWrong(null);
    setThinking(true);
    let res: Response;
    try {
      res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          stream: true,
          messages: [
            { role: 'system', content: prompt(corpus) },
            ...said.map((t) => ({ role: t.who === 'me' ? 'user' : 'assistant', content: t.text })),
          ],
        }),
      });
    } catch {
      // fetch rejects without a response for a dropped connection, a DNS
      // failure or an API that is restarting, and the browser's own words for
      // all three are "Failed to fetch". A reader shown that concludes the site
      // is broken; what is true is that Blue cannot be reached this minute.
      setWrong({ text: 'Blue cannot be reached just now. Try again in a minute.' });
      setThinking(false);
      return;
    }

    try {
      // The lane says why in words when it refuses — a spent daily allowance
      // reads "sign in at hanzo.ai to keep going", which is both the true reason
      // and the useful next step. Printing a status code instead throws that
      // away and tells a reader the site is broken when it is working.
      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => null);
        // The daily allowance running out is not a fault, it is the free lane
        // working. The lane's own sentence points at hanzo.ai because that is
        // who operates it; a reader of THIS site signs in at zoolabs.id, and the
        // site knows that about itself. Read from the code rather than the
        // prose — prose is the operator's to change.
        if (body?.error?.code === 'public_allowance_spent') {
          setWrong({
            text: "That is today's free questions used up — they come back at midnight UTC. Sign in to keep talking to Blue.",
            go: SIGN_IN,
          });
          return;
        }
        throw new Error(body?.error?.message ?? `Blue is not answering (${res.status}).`);
      }

      const reader = res.body.getReader();
      const decode = new TextDecoder();
      let held = '';
      let text = '';
      let started = false;

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        held += decode.decode(value, { stream: true });
        const lines = held.split('\n');
        held = lines.pop() ?? '';
        for (const line of lines) {
          if (!line.startsWith('data:')) continue;
          const payload = line.slice(5).trim();
          if (!payload || payload === '[DONE]') continue;
          let piece = '';
          try {
            piece = JSON.parse(payload)?.choices?.[0]?.delta?.content ?? '';
          } catch {
            continue;
          }
          if (!piece) continue;
          text += piece;
          if (started) setTurns((t) => [...t.slice(0, -1), { who: 'blue', text }]);
          else {
            started = true;
            setThinking(false);
            setSpeaking(true);
            setTurns((t) => [...t, { who: 'blue', text }]);
          }
        }
      }

      if (!started) throw new Error('Blue answered with nothing.');
      // Blue tags its own feeling for the room's clips; there is no clip to
      // change here, so the tag is dropped rather than printed as prose.
      const done = text.replace(/\s*\[[^\]]{0,60}\]\s*$/, '').trim();
      setTurns((t) => [...t.slice(0, -1), { who: 'blue', text: done }]);
    } catch (e) {
      setWrong({ text: e instanceof Error ? e.message : String(e) });
    } finally {
      setThinking(false);
      setSpeaking(false);
    }
  }

  const spoken = turns.length > 0 || thinking || wrong !== null;
  const mood: Mood = speaking ? 'speak' : thinking ? 'listen' : 'rest';

  return (
    <div className='portal' data-mood={mood}>
      <Film mood={mood} />
      <div className='portal-veil' />

      <div className='portal-stage'>
        <a className='portal-out' href={ROOM} target='_blank' rel='noopener noreferrer'>
          Open Blue&nbsp;↗
        </a>

        <div className='portal-talk'>
          {!spoken ? (
            <div className='portal-hello'>
              <p className='portal-greet'>Hi, I&rsquo;m Blue the beluga.</p>
              <p className='portal-lede'>Ask me about the ocean, or about the research this foundation publishes.</p>
              <div className='portal-openers'>
                {OPENERS.map((o) => (
                  <button key={o} type='button' className='portal-chip' onClick={() => ask(o)}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className='portal-thread'>
              {turns.map((t, i) => (
                <div key={i} className={t.who === 'me' ? 'portal-said portal-mine' : 'portal-said'}>
                  {t.text}
                </div>
              ))}
              {thinking && <div className='portal-said portal-wait'>Blue is thinking…</div>}
              {wrong && (
                <div className='portal-said portal-wrong' role='alert'>
                  {wrong.text}
                  {wrong.go && (
                    <>
                      {' '}
                      <a className='portal-go' href={wrong.go} target='_blank' rel='noopener noreferrer'>
                        Sign in&nbsp;↗
                      </a>
                    </>
                  )}
                </div>
              )}
              <div ref={tail} />
            </div>
          )}
        </div>

        <form
          className='portal-ask'
          onSubmit={(e) => {
            e.preventDefault();
            ask(draft);
          }}
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder='Talk to Blue…'
            aria-label='Talk to Blue'
            autoComplete='off'
          />
          <button type='submit' disabled={thinking || !draft.trim()} aria-label='Ask Blue'>
            {thinking ? '…' : '↑'}
          </button>
        </form>
      </div>
    </div>
  );
}
