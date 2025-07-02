import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const packages = [
    {
      name: "Базовый",
      price: "25 000",
      duration: "4 часа",
      photos: "150+ фотографий",
      features: [
        "Съемка церемонии и банкета",
        "Базовая ретушь всех фотографий",
        "Онлайн-галерея",
        "Цветокоррекция",
        "Фотографии в высоком разрешении",
      ],
      popular: false,
    },
    {
      name: "Стандарт",
      price: "40 000",
      duration: "8 часов",
      photos: "300+ фотографий",
      features: [
        "Полный день съемки",
        "Подготовка невесты и жениха",
        "Церемония и банкет",
        "Профессиональная ретушь",
        "Онлайн-галерея",
        "USB-флешка с фотографиями",
        "Превью фото в течение 48 часов",
      ],
      popular: true,
    },
    {
      name: "Премиум",
      price: "60 000",
      duration: "12 часов",
      photos: "500+ фотографий",
      features: [
        "Весь свадебный день",
        "Подготовка и сборы",
        "Церемония, прогулка, банкет",
        "Второй фотограф",
        "Премиальная ретушь",
        "Фотокнига 30x30 см (30 страниц)",
        "USB-флешка в деревянной коробке",
        "Превью фото в день свадьбы",
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    { service: "Love Story съемка", price: "8 000" },
    { service: "Утро невесты (дополнительно)", price: "5 000" },
    { service: "Второй фотограф", price: "10 000" },
    { service: "Фотокнига 20x20 см (20 страниц)", price: "3 500" },
    { service: "Фотокнига 30x30 см (30 страниц)", price: "6 500" },
    { service: "Печать фотографий 10x15 (100 шт)", price: "2 000" },
    { service: "Экспресс-обработка (24 часа)", price: "5 000" },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Прайс-лист</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите пакет, который подходит именно вам. Все цены указаны за
            полный комплект услуг
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 p-8 ${
                pkg.popular
                  ? "border-gray-900 shadow-lg scale-105"
                  : "border-gray-200 hover:border-gray-300"
              } transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-light text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {pkg.price} ₽
                </div>
                <p className="text-gray-600">{pkg.duration}</p>
                <p className="text-gray-600">{pkg.photos}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 text-sm font-medium transition-colors ${
                  pkg.popular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                Выбрать пакет
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-8">
          <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
            Дополнительные услуги
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-gray-200"
              >
                <span className="text-gray-900">{item.service}</span>
                <span className="font-medium text-gray-900">
                  {item.price} ₽
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Не нашли подходящий пакет?
          </h3>
          <p className="text-gray-600 mb-8">
            Я всегда готова обсудить индивидуальные условия для вашей свадьбы
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Обсудить детали
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
