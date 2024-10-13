import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="mt-3 mb-3 lg:mt-12 lg:mb-12">
      <img src={Logo} alt="The Daybreak Times" className="m-auto h-16 p-2" />
    </header>
  );
};

export default Header;
