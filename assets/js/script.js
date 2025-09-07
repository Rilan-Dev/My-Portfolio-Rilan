"use strict";

// Load all dynamic content when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  loadPersonalInfo();
  loadAboutSection();
  loadResumeSection();
  loadPortfolioSection();
  loadBlogSection();
  initTestimonialModals();
  initAllFunctionality();
});

// Personal Information Loader
function loadPersonalInfo() {
  // Set basic info
  document.getElementById("sidebar-name").textContent =
    portfolioData.personalInfo.name;
  document.getElementById("sidebar-title").textContent =
    portfolioData.personalInfo.title;
  document.getElementById("avatar-img").src = portfolioData.personalInfo.avatar;
  document.getElementById("avatar-img").alt = portfolioData.personalInfo.name;

  // Load contacts
  const contactsList = document.getElementById("contacts-list");
  portfolioData.personalInfo.contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.className = "contact-item";

    li.innerHTML = `
      <div class="icon-box">
        <ion-icon name="${contact.icon}"></ion-icon>
      </div>
      <div class="contact-info">
        <p class="contact-title">${contact.title}</p>
        ${
          contact.type === "link"
            ? `<a href="${contact.link}" class="contact-link">${contact.value}</a>`
            : `<${contact.type === "text" ? "address" : "time"}>${
                contact.value
              }</${contact.type === "text" ? "address" : "time"}>`
        }
      </div>
    `;

    contactsList.appendChild(li);
  });

  // Load social links
  const socialList = document.getElementById("social-list");
  portfolioData.personalInfo.socialLinks.forEach((social) => {
    const li = document.createElement("li");
    li.className = "social-item";

    li.innerHTML = `
      <a href="${social.link}" class="social-link">
        <ion-icon name="${social.icon}"></ion-icon>
      </a>
    `;

    socialList.appendChild(li);
  });
}

// About Section Loader
function loadAboutSection() {
  // Load about text
  const aboutText = document.getElementById("about-text");
  portfolioData.about.text.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    aboutText.appendChild(p);
  });

  // Load services
  const serviceList = document.getElementById("service-list");
  portfolioData.about.services.forEach((service) => {
    const li = document.createElement("li");
    li.className = "service-item";

    li.innerHTML = `
      <div class="service-icon-box">
        <img src="${service.icon}" alt="${service.title} icon" width="40">
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">${service.title}</h4>
        <p class="service-item-text">${service.description}</p>
      </div>
    `;

    serviceList.appendChild(li);
  });

  // Load testimonials
  const testimonialsList = document.getElementById("testimonials-list");
  portfolioData.about.testimonials.forEach((testimonial, index) => {
    const li = document.createElement("li");
    li.className = "testimonials-item";

    li.innerHTML = `
      <div class="content-card" data-testimonials-item>
        <figure class="testimonials-avatar-box">
          <img src="${testimonial.avatar}" alt="${testimonial.name}" width="60" data-testimonials-avatar>
        </figure>
        <h4 class="h4 testimonials-item-title" data-testimonials-title>${testimonial.name}</h4>
        <div class="testimonials-text" data-testimonials-text>
          <p>${testimonial.text}</p>
        </div>
      </div>
    `;

    testimonialsList.appendChild(li);
  });

  // Load clients
  const clientsList = document.getElementById("clients-list");
  portfolioData.about.clients.forEach((client) => {
    const li = document.createElement("li");
    li.className = "clients-item";

    li.innerHTML = `
      <a href="#">
        <img src="${client}" alt="client logo">
      </a>
    `;

    clientsList.appendChild(li);
  });
}

// Resume Section Loader
function loadResumeSection() {
  // Load education
  const educationList = document.getElementById("education-list");
  portfolioData.resume.education.forEach((edu) => {
    const li = document.createElement("li");
    li.className = "timeline-item";

    li.innerHTML = `
      <h4 class="h4 timeline-item-title">${edu.institution}</h4>
      <span>${edu.period}</span>
      <p class="timeline-text">${edu.description}</p>
    `;

    educationList.appendChild(li);
  });

  // Load experience
  const experienceList = document.getElementById("experience-list");
  portfolioData.resume.experience.forEach((exp) => {
    const li = document.createElement("li");
    li.className = "timeline-item";

    li.innerHTML = `
      <h4 class="h4 timeline-item-title">${exp.position}</h4>
      <span>${exp.period}</span>
      <p class="timeline-text">${exp.description}</p>
    `;

    experienceList.appendChild(li);
  });

  // Load skills
  const skillsList = document.getElementById("skills-list");
  portfolioData.resume.skills.forEach((skill) => {
    const li = document.createElement("li");
    li.className = "skills-item";

    li.innerHTML = `
      <div class="title-wrapper">
        <h5 class="h5">${skill.name}</h5>
        <data value="${skill.percentage}">${skill.percentage}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${skill.percentage}%"></div>
      </div>
    `;

    skillsList.appendChild(li);
  });
}

// Portfolio Section Loader
function loadPortfolioSection() {
  const projectList = document.getElementById("project-list");

  portfolioData.portfolio.projects.forEach((project) => {
    const li = document.createElement("li");
    li.className = "project-item active";
    li.setAttribute("data-filter-item", "");
    li.setAttribute("data-category", project.category);

    li.innerHTML = `
      <a href="${project.link}">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </figure>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-category">${project.category}</p>
      </a>
    `;

    projectList.appendChild(li);
  });
}

// Blog Section Loader
function loadBlogSection() {
  const blogList = document.getElementById("blog-list");

  portfolioData.blog.posts.forEach((post) => {
    const li = document.createElement("li");
    li.className = "blog-post-item";

    li.innerHTML = `
      <a href="${post.link}">
        <figure class="blog-banner-box">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
        </figure>
        <div class="blog-content">
          <div class="blog-meta">
            <p class="blog-category">${post.category}</p>
            <span class="dot"></span>
            <time datetime="${post.date}">${post.date}</time>
          </div>
          <h3 class="h3 blog-item-title">${post.title}</h3>
          <p class="blog-text">${post.excerpt}</p>
        </div>
      </a>
    `;

    blogList.appendChild(li);
  });
}

// Initialize testimonial modals with dynamic data
function initTestimonialModals() {
  const testimonialsItem = document.querySelectorAll(
    "[data-testimonials-item]"
  );
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // modal variable
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // add click event to all modal items
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      const testimonial = portfolioData.about.testimonials[i];

      modalImg.src = testimonial.avatar;
      modalImg.alt = testimonial.name;
      modalTitle.innerHTML = testimonial.name;

      // Set date if available
      const dateElement = document.getElementById("modal-date");
      if (dateElement && testimonial.date) {
        dateElement.textContent = testimonial.date;
        dateElement.setAttribute("datetime", testimonial.date);
      }

      // Set testimonial text
      const modalTextElement = document.getElementById("modal-text");
      if (modalTextElement) {
        modalTextElement.innerHTML = `<p>${testimonial.text}</p>`;
      }

      testimonialsModalFunc();
    });
  }

  // add click event to modal close button
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// Initialize all functionality
function initAllFunctionality() {
  // element toggle function
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });

  // custom select variables
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });

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
  const filterBtns = document.querySelectorAll("[data-filter-btn]");

  // Filter function
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

  // Add event in all filter button items
  let lastClickedBtn = filterBtns[0];

  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
      let selectedValue = this.dataset.category;
      filterFunc(selectedValue);

      // Update active class on buttons
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

      // Update the select dropdown value
      selectValue.innerText = this.innerText;
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
      for (let j = 0; j < pages.length; j++) {
        if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
          pages[j].classList.add("active");
          navigationLinks[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
          navigationLinks[j].classList.remove("active");
        }
      }
    });
  }
}
