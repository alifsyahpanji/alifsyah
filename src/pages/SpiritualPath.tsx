import { ArrowLeft, Sparkles } from 'lucide-react';

interface SpiritualPathProps {
  onNavigate: (page: string) => void;
}

const spiritualTopics = [
  {
    title: 'Apakah Alam Semesta adalah Simulasi atau Proyeksi Pikiran?',
    description: 'Perhatikan sekeliling kita. Bisakah kita membuktikan bahwa semua ini nyata? Apakah Alam Semesta adalah Simulasi atau Proyeksi Pikiran? Mungkin saja tekstur dinding yang kita raba hanyalah kode biner, atau pantulan dari pikiran kita sendiri yang diproyeksikan ke dalam kekosongan. Jika demikian, siapa pemrogramnya, dan apa tujuan permainan ini?',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Apakah kesadaran manusia tidak terbatas pada tubuh fisik?',
    description: 'Renungkan tentang esensi diri kita. Saat kita menutup mata, ke mana perginya diri kita? Apakah kesadaran manusia tidak terbatas pada tubuh fisik? Bayangkan kesadaran sebagai gelombang, bukan partikel. Gelombang yang melampaui batas-batas otak, meresap ke dalam kain kosmos, mampu melakukan perjalanan ke masa lalu atau masa depan tanpa terikat oleh daging dan tulang. Jika ini benar, kematian hanyalah ilusi atau sebuah transisi, bukan akhir.',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Apa itu misteri sang Pengamat dalam Menciptakan Realitas?',
    description: 'Pikirkan kembali momen paling krusial dalam hidup kita. Apa Peran Pengamat dalam Menciptakan Realitas? Sains kuantum berbisik tentang kemungkinan yang tak terbatas hingga kita memilih salah satunya. Setiap kali kita mengamati sesuatu, kita memaksanya menjadi ada. Dunia di sekitar kita tidak ada dalam bentuk yang pasti sampai kita melihatnya. Kita bukan sekadar penonton, Kita adalah penyihir, sang pencipta, yang lukisannya adalah alam semesta ini.',
    color: 'from-blue-500 to-indigo-600',
  },
];

export function SpiritualPath({ onNavigate }: SpiritualPathProps) {
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

          <div className="space-y-16">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide">
                Spiritual Path
              </h1>

              <div className="border-l-4 border-amber-500/50 pl-6 py-4">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light italic">
                  Bagi saya, spiritualitas adalah jembatan sunyi menuju inti eksistensi, sebuah navigasi batin untuk memahami bahasa tak berucap dari sang Pencipta. Saya melihat manusia bukan sebagai entitas yang terpisah, kita adalah cara semesta untuk mengenali dirinya sendiri.
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl text-gray-400 font-light tracking-wide pt-8">
                Eksplorasi Realitas, Kesadaran & Misteri
              </h2>
            </div>

            <div className="space-y-8">
              {spiritualTopics.map((topic, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-500"
                >
                  <div className="grid md:grid-cols-3 gap-8 p-8 sm:p-10">
                    <div className={`md:col-span-1 flex items-center justify-center`}>
                      <div className={`w-40 h-40 sm:w-48 sm:h-48 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-lg`}>
                        <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-80" />
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-4 flex flex-col justify-center">
                      <h3 className="text-2xl sm:text-3xl font-light tracking-wide">
                        {topic.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                        {topic.description}
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
