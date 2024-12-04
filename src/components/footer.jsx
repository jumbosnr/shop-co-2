import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#0000001A] py-12">
      <div className="container px-12 mx-auto grid grid-cols-[30%_70%] gap-5 max-w-6xl">
        <div className="left">
          <div className="col">
            <h2 className="text-black text-3xl font-bold mb-5">SHOP.CO</h2>
            <p className="text-base text-black mb-11">
              We have clothes that suit your style and which you're proud to wear.
              From women to men.
            </p>
            <div className="socials flex align-middle text-lg gap-5">
              <a href="#" className="bi bi-facebook bg-slate-100 p-3 rounded-full hover:text-lg hover:font-bold transition-transform duration-500 transform hover:-translate-y-2" aria-label="Facebook">
                {/* <i className="bi bi-facebook"></i> */}
              </a>
              <a href="#" className="bi bi-instagram bg-slate-100 p-3 rounded-full hover:text-lg hover:font-bold transition-transform duration-500 transform hover:-translate-y-2" aria-label="Instagram">
                {/* <i className="bi bi-instagram"></i> */}
              </a>
              <a href="#" className="bi bi-github bg-slate-100 p-3 rounded-full hover:text-lg hover:font-bold transition-transform duration-500 transform hover:-translate-y-2" aria-label="Github">
                {/* <i className="bi bi-github"></i> */}
              </a>
              <a href="#" className="bi bi-twitter-x bg-slate-100 p-3 rounded-full hover:text-lg hover:font-bold transition-transform duration-500 transform hover:-translate-y-2" aria-label="Twitter">
                {/* <i className="bi bi-twitter-x"></i> */}
              </a>
            </div>
          </div>
        </div>
        <div className="right grid grid-cols-4 gap-5">
          <nav>
            <h4 className="text-lg font-semibold text-black mb-5">COMPANY</h4>
            <ul className="font-light text-base mb-10">
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">About</a>
              </li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">Features</a>
              </li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">Works</a>
              </li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">Career</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-lg font-semibold text-black mb-5">HELP</h4>
            <ul className="font-light text-base mb-5">
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">Customer Support</a>
              </li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">Delivery Details</a>
              </li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">Terms & Condition</a>
              </li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-lg font-semibold text-black mb-5">FAQ</h4>
            <ul className="font-light text-base mb-5">
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">Account</a></li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">Manage Deliveries</a></li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">Orders</a></li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">Payments</a></li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-lg font-semibold text-black mb-5">RESOURCES</h4>
            <ul className="font-light text-base mb-5">
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">Free eBooks</a></li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">Development Tutorial</a></li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">How to - Blog</a></li>
              <li className="font-light text-base mb-5 text-black hover:text-black hover:text-lg hover:underline transform hover-scale-110 transition duration-300"><a href="#">Youtube Playlist</a></li>
            </ul>
          </nav>
        </div>
      <hr />
      <div className="bottom flex items-center justify-between px-10">
        <div className="left">
          <p className="text-base text-black">Shop.co c 2000-2023. all Right Reserved</p>
        </div>
        <div className="right flex items-center justify-between">
          <p className="text-base text-black">
            Payment Methods:
            <img src="/assets/images/payment-icons.png" alt="Payment icons" />
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;