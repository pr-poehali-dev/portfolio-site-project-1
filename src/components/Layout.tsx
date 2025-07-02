import { NavLink, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="text-2xl font-light text-gray-900">
              Юлия Логинова
              <span className="block text-sm text-gray-500 font-normal">
                свадебный фотограф
              </span>
            </NavLink>

            <nav className="flex space-x-8">
              <NavLink
                to="/"
                className={`text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Портфолио
              </NavLink>
              <NavLink
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                О фотографе
              </NavLink>
              <NavLink
                to="/pricing"
                className={`text-sm font-medium transition-colors ${
                  isActive("/pricing")
                    ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Прайс
              </NavLink>
              <NavLink
                to="/contact"
                className={`text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Контакты
              </NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2025 Юлия Логинова. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="mailto:info@example.com"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
