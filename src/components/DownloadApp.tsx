import { Apple, PlayCircle } from 'lucide-react';

export function DownloadApp() {
  return (
    <section id="descarga-app" className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Descarga Nuestra <span className="text-emerald-500">App</span>
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Disponible en iOS y Android. Conecta con profesionales del derecho en cualquier momento y lugar.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://apps.apple.com/app/id1234567890"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Apple className="w-8 h-8 mr-3" />
            <div>
              <div className="text-xs">Descarga en el</div>
              <div className="text-xl font-semibold">App Store</div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.procufy.app"
            className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayCircle className="w-8 h-8 mr-3" />
            <div>
              <div className="text-xs">Disponible en</div>
              <div className="text-xl font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}