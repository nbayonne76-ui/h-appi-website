import { CheckCircle } from 'lucide-react';

export default function PromiseSection() {
  const questions = [
    { q: 'Est-ce vraiment sur-mesure ?', detail: 'Pas de copier-coller, pas de template générique' },
    { q: 'Est-ce vraiment accessible ?', detail: 'Prix révolutionnaire, transparence totale, paiement flexible' },
    { q: 'Est-ce que ça va créer de la valeur métier ?', detail: 'Pas de gadget, uniquement des fonctionnalités à ROI positif' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-happi-dark mb-6">
          Notre Promesse
        </h2>

        <blockquote className="text-xl md:text-2xl font-semibold gradient-text leading-relaxed mb-12 max-w-3xl mx-auto">
          &laquo; Chez H'appi, nous créons des solutions digitales qui vous
          ressemblent, à des prix qui cassent les codes du marché, et qui
          évoluent pour devenir votre avantage compétitif. &raquo;
        </blockquote>

        <p className="text-gray-600 mb-8">
          Chaque ligne de code, chaque design, chaque fonctionnalité est
          guidée par trois questions :
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {questions.map((item, i) => (
            <div
              key={i}
              className="bg-happi-gray rounded-2xl p-6 border border-gray-100"
            >
              <CheckCircle
                className="text-happi-green mx-auto mb-4"
                size={32}
              />
              <h3 className="font-bold text-happi-dark mb-2">{item.q}</h3>
              <p className="text-sm text-gray-600">{item.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-happi-dark font-semibold text-lg">
          Si la réponse est trois fois oui, nous le faisons. Sinon, nous ne le
          faisons pas.
        </p>
      </div>
    </section>
  );
}
