import React from "react";
import Profile from "../assets/img/gilang.png";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdMyLocation } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";

const Sidebar = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Profile} alt="gambar-profile" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Gilang Aditia">
            Gilang Aditia
          </h1>
          <p className="title">Front End Developer</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Lihat Kontak</span>
          <CiCircleChevDown />
        </button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineEmail />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:gaditia744@gmail.com" className="contact-link">
                gaditia744@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <BsTelephone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Telepom</p>
              <a href="tel:+12133522795" className="contact-link">
                +62877-3288-6254
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <LiaBirthdayCakeSolid />
            </div>
            <div className="contact-info">
              <p className="contact-title">Ulang Tahun</p>
              <time dateTime="1982-06-23">15 Mei, 2001</time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <MdMyLocation />
            </div>
            <div className="contact-info">
              <p className="contact-title">Lokasi</p>
              <address>Tangerang, Banten</address>
            </div>
          </li>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <CiFacebook />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <LuTwitter />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <AiOutlineInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
