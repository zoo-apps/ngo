import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactCardFlip from "react-card-flip";
import axios from "axios";
import { useStripe } from '@stripe/react-stripe-js'
import animals from '@/components/animals/animals.json'
function Header({title,content,front,back,front_m,back_m,route}: {
  content: string;
  title: string;
  front: string;
  back: string;
  front_m: string;
  back_m: string;
  route: string;
}) {
  const [flip, setFlip] = useState(false);
  // const cardId = "prod_O76Ynu7J5bDEYy";
  const stripe = useStripe();
  /* Null whenever the build carries no publishable key, which a static export
     normally does not. Asserting past it turned "checkout is not configured"
     into a TypeError on click. */
  const buyCard = async () => {
    if (!stripe) return;
    const { data } = await axios.get(`/api/buy_card/${route}`);
    await stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div className="bg-background md:px-16 lg:px-32 xl:px-40 2xl:px-64 max-md:pt-20">
      <div className="flex max-md:flex-col items-center justify-between md:py-20 max-md:pt-2 max-md:pb-8">
        <div className={`relative md:w-1/2 ${flip ? 'front-card' : 'back-card'} max-md:w-full max-md:px-4 2xl:pr-32 xl:pr-28 lg:pr-24 md:pr-16`}>
            <ReactCardFlip isFlipped={flip}
              flipDirection="horizontal">
              {/* <Image
                  className='intro-bg border rounded-xl p-3'
                  src={front}
                  width='1000'
                  height='1000'
                  alt=''
              />
              <Image
                  className='intro-bg border rounded-xl p-3'
                  src={back}
                  width='1000'
                  height='1000'
                  alt=''
              /> */}
              <>
                <video autoPlay loop muted playsInline className="w-full aspect-[473/833] border rounded-xl p-1" src={front_m}>
                  <source src={front}  type="video/webm"/>
                  <source src={front_m}  type="video/mp4"/>
                </video>
                <div className={`absolute bottom-4 ${flip ? 'btn-flex' : ''} z-10 md:right-20 lg:right-28 xl:right-32 2xl:right-36 max-md:right-8 cursor-pointer max-md:right-4 w-[45px] h-[45px] flex justify-center bg-white rounded-full`} onClick={() => setFlip(!flip)}>
                    <svg width="15" height="45" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7586 2.72001H3.53201L4.52469 1.74131C4.78597 1.48362 4.88806 1.108 4.79244 0.756034C4.69675 0.403999 4.41795 0.129101 4.06091 0.0347546C3.70395 -0.059523 3.32299 0.0411294 3.06163 0.298754L0.303024 3.01872C0.109057 3.21004 0 3.46949 0 3.74C0 4.01051 0.109052 4.26997 0.303024 4.46128L3.06163 7.18124C3.32299 7.43886 3.70395 7.53951 4.06091 7.44524C4.41795 7.35089 4.69676 7.076 4.79244 6.72396C4.88806 6.372 4.78598 5.99637 4.52469 5.73868L3.53201 4.75998H12.7586C14.1305 4.75998 15.4461 5.29732 16.4162 6.2537C17.3862 7.21014 17.9311 8.50728 17.9311 9.86001C17.9311 11.2127 17.3862 12.5098 16.4162 13.4663C15.4462 14.4227 14.1306 14.96 12.7586 14.96H6.55177C6.18216 14.96 5.84071 15.1545 5.65587 15.47C5.4711 15.7856 5.4711 16.1745 5.65587 16.49C5.84071 16.8056 6.18216 17 6.55177 17H12.7586C16.7516 17 20 13.7972 20 9.8601C20 5.92304 16.7516 2.72019 12.7586 2.72019V2.72001Z" fill="black"/>
                    </svg>
                </div>
              </>
              <>
                <video autoPlay loop muted playsInline className="w-full aspect-[473/833] border rounded-xl p-1" src={back_m}>
                  {/* <source src={back}  type="video/webm"/> */}
                  <source src={back_m}  type="video/mp4"/>
                </video>
                <div className={`absolute bottom-4 ${flip ? 'btn-flex' : ''} z-10 md:right-20 lg:right-28 xl:right-32 2xl:right-36 max-md:right-8 cursor-pointer max-md:right-4 w-[45px] h-[45px] flex justify-center bg-white rounded-full`} onClick={() => setFlip(!flip)}>
                    <svg width="15" height="45" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7586 2.72001H3.53201L4.52469 1.74131C4.78597 1.48362 4.88806 1.108 4.79244 0.756034C4.69675 0.403999 4.41795 0.129101 4.06091 0.0347546C3.70395 -0.059523 3.32299 0.0411294 3.06163 0.298754L0.303024 3.01872C0.109057 3.21004 0 3.46949 0 3.74C0 4.01051 0.109052 4.26997 0.303024 4.46128L3.06163 7.18124C3.32299 7.43886 3.70395 7.53951 4.06091 7.44524C4.41795 7.35089 4.69676 7.076 4.79244 6.72396C4.88806 6.372 4.78598 5.99637 4.52469 5.73868L3.53201 4.75998H12.7586C14.1305 4.75998 15.4461 5.29732 16.4162 6.2537C17.3862 7.21014 17.9311 8.50728 17.9311 9.86001C17.9311 11.2127 17.3862 12.5098 16.4162 13.4663C15.4462 14.4227 14.1306 14.96 12.7586 14.96H6.55177C6.18216 14.96 5.84071 15.1545 5.65587 15.47C5.4711 15.7856 5.4711 16.1745 5.65587 16.49C5.84071 16.8056 6.18216 17 6.55177 17H12.7586C16.7516 17 20 13.7972 20 9.8601C20 5.92304 16.7516 2.72019 12.7586 2.72019V2.72001Z" fill="black"/>
                    </svg>
                </div>
              </>
            </ReactCardFlip>
        </div>
        <div className='w-1/2 max-md:w-full flex flex-col justify-between max-md:px-4'>
            <h1 className='text-foreground md:text-5xl xl:text-6xl max-md:text-3xl max-md:my-5 md:pb-16'>{title}</h1>
            <p className='text-foreground md:text-lg lg:text-xl xl:text-2xl max-md:pb-10 md:pb-10' dangerouslySetInnerHTML={{__html: content}}></p>

            <div className='flex items-center md:pt-10 space-x-8'>
                <button
                    onClick={buyCard}
                    className="bg-white hover:bg-background hover:text-foreground border border-white px-12 py-1 rounded-full text-lg font-medium text-black transition-colors"
                >
                    Buy $25
                </button>
                <button
                    className="text-foreground hover:bg-gray-700 bg-background hover:text-black px-6 py-1 rounded-full border-white border-2 text-lg font-medium md:block"
                >
                    Design
                </button>
            </div>
        </div>

      </div>
      {/* The switcher. It was seven links written out by hand — a third copy of
          a list animals.json already holds — in a `flex` row with no wrap,
          hidden below `md` by `max-md:hidden`, which the stylesheet does not
          answer. So on a phone it drew all seven anyway and ran from x=-74 to
          x=464 in a 390px viewport: the one thing on this site that scrolled
          sideways. It wraps now, which needs no breakpoint at all. */}
      <div className='container flex flex-wrap items-center justify-center gap-3'>
        {animals.map((a) => (
          <Link
            key={a.route}
            href={`/animals/${a.route}`}
            className='action'
            {...(a.name === title ? { 'data-fill': true } : {})}
            style={{ ['--fill']: 'var(--blue)' } as React.CSSProperties}
            aria-current={a.name === title ? 'page' : undefined}
          >
            {a.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
