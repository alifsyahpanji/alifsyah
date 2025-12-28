import { Gamepad2, Sparkles, Twitter, Instagram } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <main className="pt-20">
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-center space-y-8 py-20">
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
              Menyeimbangkan Dunia<br />Digital dan Kedalaman<br />Batin.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
              Catatan perjalanan seorang gamer Web3 yang sedang mencari hakikat kesadaran.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 pt-16 max-w-4xl mx-auto">
            <button
              onClick={() => onNavigate('web3')}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 sm:p-10 hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 text-left"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-center">
                  Web3 Game Journey
                </h3>
                <p className="text-gray-400 leading-relaxed text-center">
                  Eksplorasi game Play to Earn di ekosistem Web3.
                </p>
              </div>
            </button>

            <button
              onClick={() => onNavigate('spiritual')}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl p-8 sm:p-10 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1 text-left w-full">
              <div className="space-y-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light tracking-wide text-center">
                  Spiritual Path
                </h3>
                <p className="text-gray-400 leading-relaxed text-center">
                  Refleksi tentang meditasi, kesadaran diri, dan misteri realitas alam semesta.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-gray-900/20 to-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl sm:text-5xl font-light text-center mb-16 sm:mb-24 tracking-wide">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-amber-500 to-teal-500 p-1">
                <img
                  src="/alifsyah.webp"
                  alt="Alifsyah Panji"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-light">
                  Halo, saya Alifsyah Panji.
                </h3>
                <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
                  Dulu saya menghabiskan waktu merangkai nada sebagai musisi. Kini, saya telah pensiun dari dunia musik dan menemukan ketenangan dalam perjalanan baru. Hari-hari saya diisi dengan menjelajahi ekosistem Web3 melalui game Play to Earn. Di luar layar, saya adalah seorang yang mendalami misteri kesadaran, meditasi, dan luasnya alam semesta.
                </p>
              </div>

              <div className="pt-8">
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Connect</p>
                <div className="flex gap-6 justify-center md:justify-start">
                  <a
                    href="https://x.com/alifsyah666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-amber-500/50 hover:bg-gray-700 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/alifsyahpanji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-amber-500/50 hover:bg-gray-700 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
