import Layout from "@/components/Layout";

const Portfolio = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "https://cdn.poehali.dev/files/3cd3645a-9fc9-49ff-9a03-74fae96a3366.jpg",
      alt: "Романтичная свадебная фотосессия в парке",
      category: "Романтика",
    },
    {
      id: 2,
      src: "/placeholder.svg",
      alt: "Романтичные портреты молодоженов",
      category: "Портреты",
    },
    {
      id: 3,
      src: "/placeholder.svg",
      alt: "Детали свадебного декора",
      category: "Детали",
    },
    {
      id: 4,
      src: "/placeholder.svg",
      alt: "Эмоциональные моменты торжества",
      category: "Эмоции",
    },
    {
      id: 5,
      src: "/placeholder.svg",
      alt: "Свадебный банкет",
      category: "Банкет",
    },
    {
      id: 6,
      src: "/placeholder.svg",
      alt: "Первый танец молодоженов",
      category: "Танцы",
    },
    {
      id: 7,
      src: "/placeholder.svg",
      alt: "Подготовка невесты",
      category: "Подготовка",
    },
    {
      id: 8,
      src: "/placeholder.svg",
      alt: "Семейные портреты с гостями",
      category: "Семья",
    },
    {
      id: 9,
      src: "/placeholder.svg",
      alt: "Закат с молодоженами",
      category: "Романтика",
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Портфолио</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждая свадьба уникальна, и я стремлюсь запечатлеть самые важные
            моменты вашего особенного дня
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden bg-gray-100 aspect-[4/5]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-white text-gray-900 px-3 py-1 text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">
            Хотите увидеть больше работ или обсудить вашу свадьбу?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Связаться со мной
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
