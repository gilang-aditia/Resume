import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      {/* <section className="resume-content mt-10">
        <img
          src="https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/d0cfe7d1-0b8c-4e4a-9a66-875290ba6065"
          alt=""
        />
      </section> */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaGraduationCap />
          </div>
          <h3 className="h3">Pendidikan</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Institut Teknologi Telkom Purwokerto
            </h4>
            <span>2019 — 2023</span>
            <p className="timeline-text">
              Fakultas Informatika, Jurusan Software Engineering. IPK. 3,75
              Cumlaude
            </p>
          </li>
          {/* <li className="timeline-item">
            <h4 className="h4 timeline-item-title">New york academy of art</h4>
            <span>2006 — 2007</span>
            <p className="timeline-text">
              Ratione voluptatem sequi nesciunt, facere quisquams facere menda
              ossimus, omnis voluptas assumenda est omnis..
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              High school of art and design
            </h4>
            <span>2002 — 2004</span>
            <p className="timeline-text">
              Duis aute irure dolor in reprehenderit in voluptate, quila
              voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
            </p>
          </li> */}
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdOutlineWorkspacePremium />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Creative director</h4>
            <span>2015 — Present</span>
            <p className="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et qvuas molestias exceptur.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Art director</h4>
            <span>2013 — 2015</span>
            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web designer</h4>
            <span>2010 — 2013</span>
            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <PiCertificate />
          </div>
          <h3 className="h3">Sertifikasi</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Creative director</h4>
            <span>2015 — Present</span>
            <p className="timeline-text">
              Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit
              atque corrupti, quos dolores et qvuas molestias exceptur.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Art director</h4>
            <span>2013 — 2015</span>
            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Web designer</h4>
            <span>2010 — 2013</span>
            <p className="timeline-text">
              Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
              delenit atque corrupti, quos dolores et quas molestias exceptur.
            </p>
          </li>
        </ol>
      </section>
      {/* <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Web design</h5>
              <data value={80}>80%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "80%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Graphic design</h5>
              <data value={70}>70%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "70%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Branding</h5>
              <data value={90}>90%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "90%" }} />
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">WordPress</h5>
              <data value={50}>50%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{ width: "50%" }} />
            </div>
          </li>
        </ul>
      </section> */}
    </article>
  );
};

export default Resume;
