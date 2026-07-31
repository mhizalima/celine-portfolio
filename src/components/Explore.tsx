export default function Explore() {
  const tags = [
    "Blockchain",
    "Smart Contracts",
    "DeFi",
    "NFTs",
    "DAOs",
    "On-chain data",
    "Wallets",
    "Web3 UX",
  ];

  return (
    <section id="explore" className="bg-offwhite text-navy">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-widest uppercase text-gold mb-5">Explore</p>
          <h2 className="text-3xl font-bold mb-4">Web3 and what is next</h2>
          <p className="text-neutral-600 max-w-md">
            Curiosity over claims. I explore Web3 the same way I explore any
            new technology, by building and asking questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-neutral-600">
            <p>
              Web3 is an area I am actively exploring, not a space I claim
              expertise in. I am interested in what decentralization actually
              changes for developers and users, and in building real things
              to find out, rather than repeating the hype.
            </p>
            <p>
              That means asking practical questions: what problem does this
              solve, who benefits, and what are the trade-offs, before
              deciding a technology is worth using.
            </p>
            <div className="border-l-2 border-gold pl-4 text-sm text-neutral-600">
              CryptoPulse is my current entry point into this space, a market
              dashboard today, with wallet and on-chain features planned as I
              go deeper.
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span key={tag} className="font-mono text-sm font-semibold px-4 py-2 rounded-lg border border-gold/40 bg-gold/10 text-gold">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}