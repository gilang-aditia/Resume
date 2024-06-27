import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // element toggle function
    const elementToggleFunc = function (elem) {
      if (elem) {
        // Check if element exists before accessing classList
        elem.classList.toggle("active");
      }
    };

    // sidebar variables
    // const sidebar = document.querySelector("[data-sidebar]");
    // const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    // Add event listener only if sidebarBtn exists
    // if (sidebarBtn) {
    //   sidebarBtn.addEventListener("click", () => {
    //     elementToggleFunc(sidebar);
    //   });
    // } else {
    //   console.error("sidebarBtn not found");
    // }

    // testimonials variables
    const testimonialsItem = document.querySelectorAll(
      "[data-testimonials-item]"
    );
    const modalContainer = document.querySelector("[data-modal-container]");
    // Remove the declaration of the 'modalCloseBtn' variable
    const overlay = document.querySelector("[data-overlay]");

    // modal variable
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    // modal toggle function
    const testimonialsModalFunc = function () {
      if (modalContainer) {
        modalContainer.classList.toggle("active");
      }
      if (overlay) {
        overlay.classList.toggle("active");
      }
    };

    // add click event to all modal items
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener("click", function () {
        if (modalImg) {
          modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        }
        if (modalImg) {
          modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        }
        if (modalTitle) {
          modalTitle.innerHTML = this.querySelector(
            "[data-testimonials-title]"
          ).innerHTML;
        }
        if (modalText) {
          modalText.innerHTML = this.querySelector(
            "[data-testimonials-text]"
          ).innerHTML;
        }
        testimonialsModalFunc();
      });
    }

    // add click event to modal close button
    // Remove these lines since modalCloseBtn and overlay are already defined above

    // custom select variables
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    // add event in all select items
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }

    // filter variables
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {
      for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
          filterItems[i].classList.add("active");
        } else if (selectedValue === filterItems[i].dataset.category) {
          filterItems[i].classList.add("active");
        } else {
          filterItems[i].classList.remove("active");
        }
      }
    };

    // add event in all filter button items for large screen
    let lastClickedBtn = filterBtn[0];

    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    }

    // contact form variables
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    // add event to all form input field
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }

    // page navigation variables
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
          if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
            pages[i].classList.add("active");
            navigationLinks[i].classList.add("active");
            window.scrollTo(0, 0);
          } else {
            pages[i].classList.remove("active");
            navigationLinks[i].classList.remove("active");
          }
        }
      });
    }
  }, []);

  return (
    <main>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <Navbar />
        {/* About */}
        <About />
        {/* Resume */}
        <Resume />
        {/* Portofolio */}
        <Portofolio />
        {/* Contact */}
        <Contact />
      </div>
    </main>
  );
};

export default App;
