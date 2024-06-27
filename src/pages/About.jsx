import React from "react";
import Development from "../assets/img/icon-dev.svg";
import Design from "../assets/img/icon-design.svg";

const About = () => {
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">Tentang Saya</h2>
      </header>
      <section className="about-text">
        <p>
          Saya saat ini adalah seorang Frontend Developer yang selalu tertarik
          pada perkembangan teknologi. Selain itu, saya juga berpengalaman
          sebagai UI/UX Designer. Keahlian dalam menggabungkan aspek estetika
          dan fungsionalitas membuatnya mampu menciptakan antarmuka pengguna
          yang menarik dan intuitif. saya selalu bersemangat untuk mempelajari
          tren dan teknologi terbaru guna meningkatkan kualitas karya saya dan
          memberikan pengalaman terbaik bagi pengguna
        </p>
      </section>
      {/* skill */}
      <section className="clients mb-3">
        <h3 className="h3 clients-title">Tools Keahlian</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://user-images.githubusercontent.com/74038190/212257465-7ce8d493-cac5-494e-982a-5a9deb852c4b.gif"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/29fd6286-4e7b-4d6c-818f-c4765d5e39a9"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://user-images.githubusercontent.com/74038190/212280805-9bcb336b-8c55-46a8-abf8-ff286ab55472.gif"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center mt-10">
              <img
                src="https://user-images.githubusercontent.com/74038190/212281775-b468df30-4edc-4bf8-a4ee-f52e1aaddc86.gif"
                alt=""
              />
            </div>
          </li>
          <li className="clients-item">
            <div className="relative flex items-center">
              <img
                src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/67f477ed-6624-42da-99f0-1a7b1a16eecb"
                alt=""
              />
            </div>
          </li>
        </ul>
      </section>
      {/* service */}
      <section className="service">
        <h3 className="h3 service-title">Keahlian</h3>
        <ul className="service-list">
          {/* <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-design.svg
                    "
                alt="design icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Developer</h4>
              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li> */}
          <li className="service-item">
            <div className="service-icon-box">
              <img src={Development} width={80} alt="" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>
              <p className="service-item-text">
                Membuat website yang menarik dan interaktif dengan teknologi web
                terbaru.
              </p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={Design} width={60} alt="" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Designer</h4>
              <p className="service-item-text">
                Membuat antarmuka pengguna yang menarik dan interaktif.
              </p>
            </div>
          </li>
          {/* <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-photo.svg"
                alt="camera icon"
                width={40}
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>
              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li> */}
        </ul>
      </section>
    </article>
  );
};

export default About;
