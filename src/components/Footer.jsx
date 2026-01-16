import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10">
      <aside>
        <img src={logo} alt="MedicalApp" className="w-12 h-12 mb-2" />
        <p className="font-bold">
          MedicalApp Ltd. <br />
          Providing reliable health care since 2024
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="#" className="hover:text-blue-600">
            𝕏
          </a>
          <a href="#" className="hover:text-blue-600">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-600">
            LinkedIn
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
