import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          MASSIMO
        </Link>
        <p>© ALL RIGHTS RESERVED.</p>
      </div>
      <div>
        <div>
          <footer class="footer p-10 bg-red-50 text-red-500">
            <nav>
              <header class="footer-title">Services</header>
              <a class="link link-hover">Items</a>
              <a class="link link-hover">Table</a>
              <a class="link link-hover">Orders</a>
              <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header class="footer-title">Company</header>
              <a class="link link-hover">About us</a>
              <a class="link link-hover">Contact</a>
              <a class="link link-hover">Jobs</a>
              <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header class="footer-title">Legal</header>
              <a class="link link-hover">Terms of use</a>
              <a class="link link-hover">Privacy policy</a>
              <a class="link link-hover">Cookie policy</a>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
