import Layout from "@/components/Layout";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Контакты</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Готова обсудить вашу свадьбу и ответить на все вопросы. Свяжитесь со
            мной любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-8">
              Свяжитесь со мной
            </h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Телефон</p>
                  <a
                    href="tel:+79001234567"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    +7 (900) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a
                    href="mailto:anna@example.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    anna@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-gray-600"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Telegram</p>
                  <a
                    href="https://t.me/annaphotographer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    @annaphotographer
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="Instagram" size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Instagram</p>
                  <a
                    href="https://instagram.com/anna_photographer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    @anna_photographer
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Город</p>
                  <p className="text-gray-600">Москва и область</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Время работы
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Понедельник - Пятница: 10:00 - 20:00</p>
                <p>Суббота - Воскресенье: По договоренности</p>
                <p className="text-sm text-gray-500 mt-4">
                  * В дни съемок график может изменяться
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Напишите мне
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Дата свадьбы
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition-colors resize-none"
                    placeholder="Расскажите о вашей свадьбе..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                * Обязательные поля. Отвечу в течение 24 часов.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h3>
          <div className="max-w-2xl mx-auto space-y-6 text-left">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                За сколько нужно бронировать дату?
              </h4>
              <p className="text-gray-600 text-sm">
                Рекомендую бронировать дату за 3-6 месяцев до свадьбы, особенно
                в популярные сезоны.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Когда я получу готовые фотографии?
              </h4>
              <p className="text-gray-600 text-sm">
                Готовые фотографии будут готовы в течение 2-3 недель после
                съемки. Превью фото отправлю в течение 48 часов.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">
                Работаете ли вы в других городах?
              </h4>
              <p className="text-gray-600 text-sm">
                Да, выезжаю в другие города. Стоимость зависит от расстояния и
                времени поездки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
