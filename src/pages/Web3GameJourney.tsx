import { ArrowLeft, Gamepad2 } from 'lucide-react';

interface Web3GameJourneyProps {
  onNavigate: (page: string) => void;
}

const games = [
  {
    title: 'Maple Story Universe',
    description: 'Petualangan saya di MapleStory Universe benar-benar mendefinisikan ulang konsep gaming, di mana nostalgia dunia Maple yang penuh warna kini berpadu sempurna dengan sistem yang inovatif. Pengalaman mengeksplorasi map ikonik sambil berburu aset digital memberikan kepuasan progres karakter yang jauh lebih bermakna daripada sekadar menaikkan level. Dengan ekosistem yang transparan, setiap item langka yang saya dapatkan menjadikan setiap detik petualangan di dunia virtual ini seru sebagai hiburan.',
    color: 'from-red-500 to-orange-600',
  },
  {
    title: 'Gensokishi',
    description: 'Bermain Gensokishi memberikan pengalaman MMORPG klasik yang luar biasa dengan sentuhan ekonomi modern yang nyata. Menjelajahi dunia fantasi terasa sangat imersif karena setiap item langka yang saya dapatkan dari mengalahkan bos bukan sekadar angka di layar, melainkan aset digital (NFT) bernilai yang bisa diperdagangkan. Kebebasan untuk merancang peralatan kustom melalui fitur UGC (User Generated Content) hingga memiliki lahan strategis di dalam metaverse menjadikan petualangan ini lebih dari sekadar hobi, melainkan ekosistem play to earn yang benar-benar hidup dan menguntungkan.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Lord Nine',
    description: 'Petualangan saya di Lord Nine benar-benar memberikan standar baru bagi MMORPG berbasis web3 melalui visualnya yang memukau dan sistem kustomisasi senjata yang sangat mendalam. Rasanya luar biasa bisa menjelajahi dunia fantasi yang luas dengan kebebasan penuh tanpa batasan class, di mana setiap strategi dan waktu yang saya investasikan untuk memperkuat karakter terasa sangat bernilai berkat ekonomi play to earn yang stabil. Menemukan item langka di tengah pertempuran kolosal bukan lagi sekadar pencapaian dalam game, melainkan keuntungan nyata yang membuat setiap momen grinding terasa jauh lebih memuaskan dan kompetitif.',
    color: 'from-blue-500 to-cyan-600',
  },
];

export function Web3GameJourney({ onNavigate }: Web3GameJourneyProps) {
  return (
    <main className="pt-20">
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto max-w-5xl">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-100 transition-colors mb-12"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="space-y-12">
            <div className="space-y-4 mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
                Web3 Game Journey
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-400 font-light">
                Current Activity
              </h2>
            </div>

            <div className="space-y-12">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-3 gap-8 p-8 sm:p-10">
                    <div className={`md:col-span-1 flex items-center justify-center`}>
                      <div className={`w-40 h-40 sm:w-48 sm:h-48 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
                        <Gamepad2 className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-80" />
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-4 flex flex-col justify-center">
                      <h3 className="text-2xl sm:text-3xl font-light tracking-wide">
                        {game.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
