import React from "react";

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
      {/*
              - service
            */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
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
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width={40}
              />
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
              <img
                src="./assets/images/icon-app.svg"
                alt="mobile app icon"
                width={40}
              />
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
