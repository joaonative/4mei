import { Link } from "react-router-dom";
import { useUser } from "../UserContext";
import { Home, Info, Phone } from "lucide-react";

const Header = () => {
  const { user } = useUser();
  return (
    <>
      <header className="bg-white flex items-center justify-between px-5 lg:px-20 py-4 text-primary font-bold lg:border-b-0 border-b-[3px] border-primary">
        <span className="text-2xl">
          <h1>4Mei</h1>
        </span>
        <nav className="hidden text-xl lg:flex items-center gap-12 pr-4">
          <Link to={"/"}>Home</Link>
          <Link to={"/sobre"}>Sobre</Link>
          <Link to={"/contato"}>Contato</Link>
        </nav>
        <Link
          to={"/perfil"}
          className="lg:hidden flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-lg"
        >
          <img
            src={user.imageUrl}
            alt=""
            className="h-8 w-8 object-cover rounded-full"
          />
          <h2>{user.name}</h2>
        </Link>
      </header>
      <nav className="lg:hidden fixed bottom-0 w-full flex items-center justify-between px-5 py-4 bg-white border-t-[3px] border-primary">
        <Link to={"/"}>
          <Home size={32} className="text-primary" />
        </Link>
        <Link to={"/sobre"}>
          <Info size={32} className="text-primary" />
        </Link>
        <Link to={"/contato"}>
          <Phone size={32} className="text-primary" />
        </Link>
      </nav>
    </>
  );
};

export default Header;
