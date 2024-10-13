import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-6">
      <p className="max-w-screen-lg m-auto text-center text-xl p-6">
        Designed and built as a demonstration by 
          nikhilmwarrier.
        <br />
        <a className="text-cyan-300 hover:text-cyan-500" href="https://github.com/nikhilmwarrier/react-news-api-demo">Source code (GitHub)</a>
        <br />
        <br />
        <img
          src={Logo}
          alt="The Daybreak Times"
          className="invert inline mx-2 h-5"
        />
      </p>
    </footer>
  );
};

export default Footer;
