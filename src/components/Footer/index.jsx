import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="mb-0">সোশ্যাল মিডিয়াতে যুক্ত হতেঃ</p>
      <ul className="Footer-Social">
        <li>
          <a href="https://facebook.com/MuslimBD.official">
            <FontAwesomeIcon 
              size="2x"
              color="#4263a9"
              icon={faFacebook} 
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/MuslimBD147">
            <FontAwesomeIcon 
              size="2x"
              color="#40aaea"
              icon={faTwitter} 
            />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/muslimbd.official">
            <FontAwesomeIcon 
              size="2x"
              color="#c13584"
              icon={faInstagram} 
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC-7hgvhO4MKOotLEVKhNxNA?view_as=subscriber">
            <FontAwesomeIcon 
              size="2x"
              color="#cd201f"
              icon={faYoutube} 
            />
          </a>
        </li>
      </ul>
      <p className="Footer-Copyright">
        নর্থ ধানমন্ডি, কলাবাগান, ঢাকা ১২০৫<br />
        &copy; সর্বস্বত্ব সংরক্ষিত। এই ওয়েবসাইটের কোন লেখা, ছবি, ভিডিও অনুমতি ছাড়া ব্যবহার বেআইনি।
      </p>
    </footer>
  );
}

export default Footer;