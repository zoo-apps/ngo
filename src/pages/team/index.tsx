import React from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import Link from 'next/link';

const leadership = [
  {
    name: 'Antje Worring',
    role: 'Executive Director & Co-Founder',
    bio: 'Building safer AI for children since founding Zoo Labs Foundation in 2021.',
    img: '/leadership/antje-worring.png',
    expertise: ['AI Safety', 'Nonprofit Leadership', 'Research Strategy'],
  },
  {
    name: 'Zach Kelling',
    role: 'Co-Founder & CTO',
    bio: 'Technical founder. Leads architecture across Zen models, Gym, and Zoo Network.',
    img: '/leadership/zach-kelling.png',
    expertise: ['AI Architecture', 'Distributed Systems', 'Blockchain'],
  },
  {
    name: 'Woo Bin',
    role: 'VP Engineering',
    bio: 'Full-stack and AI engineer leading Zoo AI, Gym, and desktop app development.',
    img: '/leadership/woo-bin.png',
    expertise: ['Full-Stack Engineering', 'AI/ML', 'Desktop Apps'],
  },
  {
    name: 'Marcus White',
    role: 'VP Research',
    bio: 'Advancing Zen model capabilities. Applied AI research to production.',
    img: '/leadership/marcus-white.png',
    expertise: ['AI Research', 'Model Training', 'Applied ML'],
  },
  {
    name: 'Dave Lorenzini',
    role: 'Chief Strategy Officer',
    bio: 'Decades of experience in immersive computing and AI strategy.',
    img: '/leadership/dave-lorenzini.jpg',
    expertise: ['Strategy', 'Immersive Computing', 'Business Development'],
  },
  {
    name: 'Major "Dream" Williams',
    role: 'Chief Visionary Officer',
    bio: 'International collaboration to transform AI for social good.',
    img: '/leadership/major-williams.png',
    expertise: ['Global Partnerships', 'Social Impact', 'AI Ethics'],
  },
  {
    name: 'Danielle Savage',
    role: 'Chief Brand Officer',
    bio: "Elevating Zoo's global presence and research communications.",
    img: '/leadership/danielle-savage.png',
    expertise: ['Brand Strategy', 'Communications', 'Marketing'],
  },
  {
    name: 'Anastasia Zacharaoff',
    role: 'VP Engineering',
    bio: 'Building high-performing engineering teams and scalable AI systems.',
    img: '/leadership/anastasia-zacharaoff.png',
    expertise: ['Engineering Management', 'Scalable Systems', 'AI Infrastructure'],
  },
  {
    name: 'Jackson Mori',
    role: 'VP Engineering',
    bio: 'Distributed systems, performance, reliability, and developer experience.',
    img: '/leadership/jackson-mori.png',
    expertise: ['Distributed Systems', 'Reliability', 'Developer Experience'],
  },
];

const board = [
  {
    name: 'Zach Kelling',
    role: 'Board Member & Co-Founder',
    affiliation: 'Technology & AI Research',
  },
  {
    name: 'Kamron Pahlavi',
    role: 'Board Member',
    affiliation: 'Strategic Development',
  },
  {
    name: 'Antje Worring',
    role: 'Board Member & Executive Director',
    affiliation: 'Zoo Labs Foundation',
  },
];

export default function Team() {
  return (
    <Layout>
      <Seo
        templateTitle="Our Team"
        description="Meet the researchers, engineers, and leaders advancing open AI at Zoo Labs Foundation"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Researchers, engineers, and leaders building open-source frontier AI.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-background py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Leadership</h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Our team brings together decades of experience in AI research,
              distributed systems, and open-source development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="bg-background border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all group">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-16 h-16 rounded-full object-cover bg-gray-900 mb-4"
                />
                <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{person.role}</p>
                <p className="text-sm text-gray-400 mb-4">{person.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {person.expertise.map((skill) => (
                    <span key={skill} className="text-xs border border-gray-700 px-2 py-0.5 rounded text-gray-500">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-background py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Board of Directors</h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              Strategic guidance and governance oversight for the foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((member) => (
              <div key={`${member.name}-${member.role}`} className="border border-gray-800 p-6 rounded-xl hover:border-gray-600 transition-all">
                <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                <p className="text-gray-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2 text-foreground">Open Source</h3>
              <p className="text-gray-400 text-sm">
                Every model, paper, and tool published openly
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2 text-foreground">Verifiable</h3>
              <p className="text-gray-400 text-sm">
                Formal proofs and reproducible results
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2 text-foreground">Community</h3>
              <p className="text-gray-400 text-sm">
                Governed by ZIPs, funded by donations
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2 text-foreground">Safe</h3>
              <p className="text-gray-400 text-sm">
                Safety research integrated from day one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="bg-background py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We are looking for researchers, engineers, and contributors who want to
            advance open AI.
          </p>
          <Link
            href="/careers"
            className="inline-block bg-white text-black px-8 py-4 font-medium rounded-full hover:bg-gray-200 transition-all"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
