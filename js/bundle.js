const header = document.querySelector('header');

if (header) {
  const toggleScrolledClass = () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', toggleScrolledClass);
  toggleScrolledClass();
}

document.querySelectorAll('.main-menu > li.menu-item-has-children').forEach(item => {
  item.addEventListener('mouseenter', () => {
    document.querySelector('.main-menu').classList.add('has-hovered-item');
  });

  item.addEventListener('mouseleave', () => {
    document.querySelector('.main-menu').classList.remove('has-hovered-item');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainers = document.querySelectorAll('.buttons-component');

  buttonsContainers.forEach(container => {
    const btnFirst = container.querySelector('.btn-first');
    const btnSecond = container.querySelector('.btn-second');

    if (!btnFirst || !btnSecond) return;

    btnSecond.addEventListener('mouseenter', () => {
      btnFirst.classList.add('second-hovered');
    });

    btnSecond.addEventListener('mouseleave', () => {
      btnFirst.classList.remove('second-hovered');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const bubbles = document.querySelectorAll('.parallax-bubble');
  const speed = 0.3;
  function updateParallax() {
    const scrollY = window.scrollY;

    bubbles.forEach(bubble => {
      const direction = bubble.classList.contains('bubble-left') ? -1 : 1;

      const offset = scrollY * speed * direction;
      bubble.style.transform = `translateY(${offset}px)`;
    });

    requestAnimationFrame(updateParallax);
  }

  updateParallax();

  window.addEventListener('scroll', function() {
    requestAnimationFrame(updateParallax);
  });
});

const certWrapper = document.querySelector('.certifications-wrapper');
const certRows = document.querySelectorAll('.certificates-row');

certWrapper.addEventListener('mouseenter', () => {
  certRows.forEach(row => {
    row.style.animationPlayState = 'paused';
  });
});

certWrapper.addEventListener('mouseleave', () => {
  certRows.forEach(row => {
    row.style.animationPlayState = 'running';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.btn-page-up');
  const scrollThreshold = 100;
  let isScrolling = false;

  window.addEventListener('scroll', function() {
    if (!isScrolling) {
      window.requestAnimationFrame(function() {
        if (window.pageYOffset > scrollThreshold) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

const menuButton = document.querySelector('.popup-menu-btn');
const mainMenu = document.querySelector('.navbar');

if (menuButton && mainMenu) {
  menuButton.onclick = function () {
    const isMenuOpen = mainMenu.classList.toggle('show');
    menuButton.classList.toggle('active');

    if (window.matchMedia('(max-width: 1024px)').matches) {
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    document.addEventListener('click', closeMenuOnClickOutside);

    function closeMenuOnClickOutside(event) {
      if (!mainMenu.contains(event.target) && !menuButton.contains(event.target)) {
        mainMenu.classList.remove('show');
        menuButton.classList.remove('active');

        if (window.matchMedia('(max-width: 1024px)').matches) {
          document.body.style.overflow = '';
        }

        document.removeEventListener('click', closeMenuOnClickOutside);
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.popup-menu .menu-item-has-children');
  let activeItem = null;

  menuItems.forEach(item => {
    const subMenu = item.querySelector('.sub-menu');
    const link = item.querySelector('a');

    if (subMenu && link) {
      item.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
          if (!e.target.closest('a')) {
            e.preventDefault();
            subMenu.classList.toggle('open-menu');
            activeItem = subMenu.classList.contains('open-menu') ? item : null;
          }
        }
      });

      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
          if (subMenu.classList.contains('open-menu')) {
            e.preventDefault();
            subMenu.classList.remove('open-menu');
            activeItem = null;
          }
          return;
        }

        if (activeItem === item && subMenu.classList.contains('open-menu')) {
          window.location.href = this.href;
          return;
        }

        e.preventDefault();
        document.querySelectorAll('.popup-menu .sub-menu').forEach(menu => {
          menu.classList.remove('open-menu');
        });
        subMenu.classList.add('open-menu');
        activeItem = item;
      });
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.popup-menu .menu-item-has-children')) {
      document.querySelectorAll('.popup-menu .sub-menu').forEach(menu => {
        menu.classList.remove('open-menu');
      });
      activeItem = null;
    }
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 600) {
      document.querySelectorAll('.popup-menu .sub-menu').forEach(menu => {
        menu.classList.remove('open-menu');
      });
      activeItem = null;
    }
  });
});


var swiper1 = new Swiper(".case-studies-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".case-studies .swiper-button-next",
    prevEl: ".case-studies .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.25,
      spaceBetween: 13,
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    // when window width is >= 640px
    1601: {
      slidesPerView: 4,
      spaceBetween: 25,
    }
  }
});

var swiper1 = new Swiper(".testimonials-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".testimonials .swiper-button-next",
    prevEl: ".testimonials .swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 640px
    1601: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});