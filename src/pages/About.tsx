import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Анна Петрова - свадебный фотограф"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-4xl font-light text-gray-900 mb-6">
              О фотографе
            </h1>
            <div className="space-y-6 text-gray-600">
              <p>
                Привет! Меня зовут Анна, и я свадебный фотограф с 8-летним
                опытом. Моя страсть — создавать естественные, эмоциональные
                снимки, которые рассказывают историю вашего особенного дня.
              </p>

              <p>
                Я верю, что лучшие кадры получаются в моменты искренних эмоций.
                Поэтому мой подход основан на создании комфортной атмосферы, где
                вы можете быть собой и наслаждаться каждым мгновением.
              </p>

              <p>
                За годы работы я сфотографировала более 200 свадеб и знаю, как
                важно сохранить воспоминания о самом счастливом дне в вашей
                жизни.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Мой подход
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Heart" size={20} className="text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Естественность
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Фиксирую живые эмоции без постановочных поз
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Eye" size={20} className="text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Внимание к деталям
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Замечаю и запечатлеваю важные мелочи
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Пунктуальность
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Всегда готова к съемке в назначенное время
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Icon name="Smile" size={20} className="text-gray-400 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Позитивный настрой
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Создаю легкую и радостную атмосферу
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Образование и награды
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Диплом фотографа, Московский институт фотографии</li>
                <li>
                  • Победитель конкурса "Лучший свадебный фотограф года" (2022)
                </li>
                <li>• Сертификат мастер-класса от Анны Резниченко</li>
                <li>• Член Российской ассоциации свадебных фотографов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
