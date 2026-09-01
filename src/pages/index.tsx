import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { CORPUS } from '@/config/corpus';
import Menagerie from '@/components/Menagerie';

/**
 * Every number and every name on this page is one we can point at: the corpus
 * counts come from src/config/corpus.ts, the papers are real directories in
 * github.com/zooai/papers, and no organisation is named as a partner unless it
 * is one. A charity asking for money does not get to round any of that up.
 */

const WORK = [
  {
    hue: 'var(--cyan)',
    title: 'Open models',
    body: 'The Zen family is developed in the open and published with its weights, so anyone can run, inspect and build on it without asking us.',
    href: 'https://huggingface.co/zenlm',
    cta: 'Weights on Hugging Face',
  },
  {
    hue: 'var(--green)',
    title: 'Conservation research',
    body: 'Peer-style papers on wildlife population monitoring, species classification, habitat modelling and citizen science — written to be used, not cited.',
    href: 'https://papers.zoo.ngo',
    cta: 'Read the papers',
  },
  {
    hue: 'var(--magenta)',
    title: 'Teaching with Blue',
    body: 'Blue is a beluga whale who answers questions about the ocean for children, students and researchers, and says plainly when something is not known.',
    href: 'https://zoolabs.io',
    cta: 'Ask Blue',
  },
  {
    hue: 'var(--yellow)',
    title: 'Governed in public',
    body: 'Changes to what we build are proposed, argued and recorded as Zoo Improvement Proposals. Anyone can read the reasoning; anyone can write one.',
    href: 'https://zips.zoo.ngo',
    cta: 'Browse proposals',
  },
];

const PAPERS = [
  {
    topic: 'Conservation',
    title: 'Conservation AI: Deep Learning for Wildlife Population Monitoring and Habitat Assessment',
    href: 'https://github.com/zooai/papers/tree/main/zoo-conservation-ai',
  },
  {
    topic: 'Conservation',
    title: 'Decentralized Wildlife Tracking: Privacy-Preserving Animal Movement Analytics',
    href: 'https://github.com/zooai/papers/tree/main/zoo-wildlife-tracking',
  },
  {
    topic: 'Learning',
    title: 'Specialized Avatar Tutors: Personalized Learning with Prerequisite Scaffolding',
    href: 'https://github.com/zooai/papers/tree/main/zoo-avatar-tutors',
  },
];

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Zoo Labs Foundation — Open AI and Wildlife Research"
        description="A 501(c)(3) non-profit publishing open AI models and conservation research, and teaching with them. Everything we make is public."
      />
      <Navbar />

      <section className="container py-16">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="pill">501(c)(3) non-profit · EIN 88-3538992</span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight" style={{ maxWidth: '14ch' }}>
              Open AI, and the animals it is for.
            </h1>

            <p className="mt-6 text-lg text-secondary" style={{ maxWidth: '52ch' }}>
              Zoo Labs Foundation is a non-profit research organisation. We publish open AI
              models and conservation research, and we build the things that teach with them.
              All of it is public — the weights, the papers, the code and the arguments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://zoolabs.io" className="action" data-fill>
                Ask Blue
              </a>
              <Link href="/donation" className="action">
                Donate
              </Link>
              <a href="https://github.com/zooai" className="action">
                Read the code
              </a>
            </div>
          </div>

          <Menagerie />
        </div>

        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ['Papers published', String(CORPUS.papers)],
            ['Improvement proposals', String(CORPUS.proposals)],
            ['Open source', 'Everything'],
            ['Founded', '2021'],
          ].map(([label, value]) => (
            <div key={label} className="card p-4">
              <dd className="text-3xl font-black">{value}</dd>
              <dt className="mt-1 text-xs uppercase tracking-wide text-muted">{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container py-12">
        <h2 className="text-3xl md:text-4xl font-black">What we do</h2>
        <div className="mt-8 grid-cards">
          {WORK.map((item) => (
            <article key={item.title} className="card p-6" style={{ borderLeft: `10px solid ${item.hue}` }}>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-secondary">{item.body}</p>
              <a href={item.href} className="mt-4 inline-flex font-bold" style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>
                {item.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-black">Recent research</h2>
          <a href="https://papers.zoo.ngo" className="action">
            All {CORPUS.papers} papers
          </a>
        </div>

        <ul className="mt-8 grid-cards">
          {PAPERS.map((paper) => (
            <li key={paper.title} className="card p-6">
              <span className="text-xs uppercase tracking-wide font-bold" style={{ color: 'var(--magenta)' }}>
                {paper.topic}
              </span>
              <h3 className="mt-2 text-lg font-bold">
                <a href={paper.href} style={{ textDecoration: 'underline', textUnderlineOffset: 4 }}>
                  {paper.title}
                </a>
              </h3>
            </li>
          ))}
        </ul>
      </section>

      <section className="container py-12">
        <div className="card p-8 flex flex-wrap items-center justify-between gap-6">
          <div style={{ maxWidth: '52ch' }}>
            <h2 className="text-2xl md:text-3xl font-black">Support the work</h2>
            <p className="mt-3 text-secondary">
              Zoo Labs Foundation Inc. is a 501(c)(3) public charity, so gifts are
              tax-deductible to the extent the law allows. Donations fund the research and
              the people doing it. We publish what we spend.
            </p>
          </div>
          <Link href="/donation" className="action" data-fill>
            Donate
          </Link>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
