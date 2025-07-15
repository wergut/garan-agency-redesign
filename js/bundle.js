/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 145:
/***/ (() => {

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
const menuItems = document.querySelectorAll('.main-menu > .menu-item-has-children');
if (menuItems.length > 0) {
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      document.querySelector('.main-menu').classList.add('has-hovered-item');
    });
    item.addEventListener('mouseleave', () => {
      document.querySelector('.main-menu').classList.remove('has-hovered-item');
    });
  });
}
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
  const subscriptionsSection = document.getElementById('plans');
  if (subscriptionsSection) {
    const tabButtons = subscriptionsSection.querySelectorAll('.tab-buttons .button');
    const subscriptionCards = subscriptionsSection.querySelectorAll('.subscription-card-wrapper');
    function switchTab(duration) {
      tabButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.duration === duration);
      });
      subscriptionCards.forEach(card => {
        card.style.display = card.dataset.duration === duration ? 'block' : 'none';
      });
    }
    tabButtons.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault();
        switchTab(button.dataset.duration);
      });
    });
    switchTab('3m');
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const bubbles = document.querySelectorAll('.parallax-bubble');
  const speed = 0.3;
  let isActive = false;
  function checkVisibility() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    bubbles.forEach(bubble => {
      const rect = bubble.getBoundingClientRect();
      const bubbleTop = rect.top + scrollY;
      const bubbleBottom = bubbleTop + rect.height;
      if (bubbleTop < scrollY + windowHeight && bubbleBottom > scrollY) {
        isActive = true;
      }
    });
  }
  function updateParallax() {
    if (!isActive) return;
    const scrollY = window.scrollY;
    bubbles.forEach(bubble => {
      const direction = bubble.classList.contains('bubble-left') ? -1 : 1;
      const offset = scrollY * speed * direction;
      bubble.style.transform = `translateY(${offset}px)`;
    });
    requestAnimationFrame(updateParallax);
  }
  checkVisibility();
  updateParallax();
  window.addEventListener('scroll', function () {
    checkVisibility();
    requestAnimationFrame(updateParallax);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.btn-page-up');
  const scrollThreshold = 100;
  let isScrolling = false;
  window.addEventListener('scroll', function () {
    if (!isScrolling) {
      window.requestAnimationFrame(function () {
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
  btn.addEventListener('click', function (e) {
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
      item.addEventListener('click', function (e) {
        if (window.innerWidth <= 1024) {
          if (!e.target.closest('a')) {
            e.preventDefault();
            subMenu.classList.toggle('open-menu');
            activeItem = subMenu.classList.contains('open-menu') ? item : null;
          }
        }
      });
      link.addEventListener('click', function (e) {
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
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.popup-menu .menu-item-has-children')) {
      document.querySelectorAll('.popup-menu .sub-menu').forEach(menu => {
        menu.classList.remove('open-menu');
      });
      activeItem = null;
    }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
      document.querySelectorAll('.popup-menu .sub-menu').forEach(menu => {
        menu.classList.remove('open-menu');
      });
      activeItem = null;
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.open-modal-dialog'),
    overlay = document.querySelector('body'),
    closeButtons = document.querySelectorAll('.modal-dialog .modal-close');
  async function openModal(modalBtn) {
    return new Promise(resolve => {
      var modalId = modalBtn.getAttribute('data-src'),
        modalElem = document.querySelector('.modal-dialog.' + modalId);
      overlay.classList.add('modal-open');
      modalElem.style.display = 'flex';
      setTimeout(function () {
        modalElem.classList.add('modal-opening');
        resolve();
      }, 0);
    });
  }
  async function closeModal(closeBtn) {
    return new Promise(resolve => {
      var modal = closeBtn.closest('.modal-dialog');
      modal.classList.remove('modal-opening');
      modal.classList.add('modal-closing');
      setTimeout(function () {
        modal.classList.remove('modal-closing');
        modal.style.display = 'none';
        overlay.classList.remove('modal-open');
        resolve();
      }, 500);
    });
  }

  /* open modal */
  modalButtons.forEach(function (modalBtn) {
    modalBtn.addEventListener('click', async function (e) {
      e.preventDefault();
      await openModal(modalBtn);
    });
  });

  /* close modal */
  closeButtons.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', async function (e) {
      await closeModal(closeBtn);
    });
  });
  document.querySelectorAll('.modal-dialog').forEach(function (item) {
    item.addEventListener('click', async function (e) {
      if (e.target !== e.currentTarget) {
        return;
      } else {
        await closeModal(this);
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (accordionItems) {
    accordionItems.forEach(item => {
      const trigger = item.querySelector('.accordion-item-header');
      const content = item.querySelector('.accordion-item-content');
      trigger.addEventListener('click', function () {
        const parent = this.parentNode;
        if (parent.classList.contains('active')) {
          parent.classList.remove('active');
          content.style.height = '0';
        } else {
          document.querySelectorAll('.accordion-item').forEach(child => {
            child.classList.remove('active');
            child.querySelector('.accordion-item-content').style.height = '0';
          });
          parent.classList.add('active');
          content.style.height = content.scrollHeight + 'px';
        }
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 600) {
    const navContainer = document.querySelector('.subscriptions-nav-mobile');
    const navItems = document.querySelectorAll('.subscriptions-nav-mobile .subscription-nav-item');
    const cards = document.querySelectorAll('.subscription-card');
    const scrollToElement = (element, offset = 0) => {
      if (!element) return;
      const container = element.closest('.row') || navContainer;
      if (container) {
        const scrollPosition = Math.max(0, element.offsetLeft - offset);
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    };
    const initialCurrentNavItem = document.querySelector('.subscriptions-nav-mobile .subscription-nav-item.current');
    const initialCurrentCard = document.querySelector('.subscription-card.current');
    if (initialCurrentNavItem) {
      scrollToElement(initialCurrentNavItem, 20);
    }
    if (initialCurrentCard) {
      scrollToElement(initialCurrentCard, 20);
    }
    navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        const typeId = navItem.getAttribute('data-type-id');
        navItems.forEach(item => item.classList.remove('current'));
        cards.forEach(card => card.classList.remove('current'));
        navItem.classList.add('current');
        const targetCard = document.querySelector(`.subscription-card[data-type-id="${typeId}"]`);
        if (targetCard) {
          targetCard.classList.add('current');
        }
        scrollToElement(navItem, 20);
        if (targetCard) {
          scrollToElement(targetCard, 20);
        }
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.mobile-dropdown');
  const header = dropdown?.querySelector('.dropdown-header');
  const items = dropdown?.querySelectorAll('.dropdown-item');
  if (header && items) {
    header.addEventListener('click', function () {
      dropdown.classList.toggle('active');
    });
    items.forEach(item => {
      item.addEventListener('click', function () {
        header.textContent = this.textContent;
        dropdown.classList.remove('active');
        console.log('Selected city:', this.dataset.city);
      });
    });
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }
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
    prevEl: ".case-studies .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.25,
      spaceBetween: 13
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 3,
      spaceBetween: 14
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    // when window width is >= 640px
    1601: {
      slidesPerView: 4,
      spaceBetween: 25
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
    prevEl: ".testimonials .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 1.5,
      spaceBetween: 24
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    // when window width is >= 640px
    1601: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }
});
var swiper2 = new Swiper(".images-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".images-slider .swiper-button-next",
    prevEl: ".images-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    1023: {
      slidesPerView: 1.5,
      spaceBetween: 24
    },
    // when window width is >= 640px
    1601: {
      slidesPerView: 1.5,
      spaceBetween: 32
    }
  }
});
var swiper3 = new Swiper(".articles-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".articles-slider .swiper-button-next",
    prevEl: ".articles-slider .swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 24
    },
    // when window width is >= 480px
    601: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1023: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    // when window width is >= 640px
    1601: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);
// Это - ваша точка входа для скриптов страницы. Импортируйте сюда нужные вам файлы.


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc291cmNlL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cclxuaWYgKGhlYWRlcikge1xyXG4gICAgY29uc3QgdG9nZ2xlU2Nyb2xsZWRDbGFzcyA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdzY3JvbGxlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVNjcm9sbGVkQ2xhc3MpO1xyXG4gICAgdG9nZ2xlU2Nyb2xsZWRDbGFzcygpO1xyXG59XHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51ID4gLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKTtcclxuXHJcbmlmIChtZW51SXRlbXMubGVuZ3RoID4gMCkge1xyXG4gIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51JykuY2xhc3NMaXN0LmFkZCgnaGFzLWhvdmVyZWQtaXRlbScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51JykuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWhvdmVyZWQtaXRlbScpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9ucy1jb21wb25lbnQnKTtcclxuICBidXR0b25zQ29udGFpbmVycy5mb3JFYWNoKGNvbnRhaW5lciA9PiB7XHJcbiAgICBjb25zdCBidG5GaXJzdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnRuLWZpcnN0Jyk7XHJcbiAgICBjb25zdCBidG5TZWNvbmQgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ0bi1zZWNvbmQnKTtcclxuXHJcbiAgICBpZiAoIWJ0bkZpcnN0IHx8ICFidG5TZWNvbmQpIHJldHVybjtcclxuXHJcbiAgICBidG5TZWNvbmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuICAgICAgYnRuRmlyc3QuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLWhvdmVyZWQnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGJ0blNlY29uZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICBidG5GaXJzdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWNvbmQtaG92ZXJlZCcpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHN1YnNjcmlwdGlvbnNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYW5zJyk7XHJcbiAgaWYgKHN1YnNjcmlwdGlvbnNTZWN0aW9uKSB7XHJcbiAgICBjb25zdCB0YWJCdXR0b25zID0gc3Vic2NyaXB0aW9uc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1idXR0b25zIC5idXR0b24nKTtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNhcmRzID0gc3Vic2NyaXB0aW9uc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnN1YnNjcmlwdGlvbi1jYXJkLXdyYXBwZXInKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hUYWIoZHVyYXRpb24pIHtcclxuICAgICAgdGFiQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGJ1dHRvbi5kYXRhc2V0LmR1cmF0aW9uID09PSBkdXJhdGlvbik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc3Vic2NyaXB0aW9uQ2FyZHMuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBjYXJkLmRhdGFzZXQuZHVyYXRpb24gPT09IGR1cmF0aW9uID8gJ2Jsb2NrJyA6ICdub25lJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFiQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHN3aXRjaFRhYihidXR0b24uZGF0YXNldC5kdXJhdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc3dpdGNoVGFiKCczbScpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgYnViYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbGxheC1idWJibGUnKTtcclxuICBjb25zdCBzcGVlZCA9IDAuMztcclxuICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tWaXNpYmlsaXR5KCkge1xyXG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgIGJ1YmJsZXMuZm9yRWFjaChidWJibGUgPT4ge1xyXG4gICAgICBjb25zdCByZWN0ID0gYnViYmxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBidWJibGVUb3AgPSByZWN0LnRvcCArIHNjcm9sbFk7XHJcbiAgICAgIGNvbnN0IGJ1YmJsZUJvdHRvbSA9IGJ1YmJsZVRvcCArIHJlY3QuaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGJ1YmJsZVRvcCA8IChzY3JvbGxZICsgd2luZG93SGVpZ2h0KSAmJiBidWJibGVCb3R0b20gPiBzY3JvbGxZKSB7XHJcbiAgICAgICAgaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xyXG4gICAgaWYgKCFpc0FjdGl2ZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICBidWJibGVzLmZvckVhY2goYnViYmxlID0+IHtcclxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gYnViYmxlLmNsYXNzTGlzdC5jb250YWlucygnYnViYmxlLWxlZnQnKSA/IC0xIDogMTtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2Nyb2xsWSAqIHNwZWVkICogZGlyZWN0aW9uO1xyXG4gICAgICBidWJibGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHtvZmZzZXR9cHgpYDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQYXJhbGxheCk7XHJcbiAgfVxyXG5cclxuICBjaGVja1Zpc2liaWxpdHkoKTtcclxuICB1cGRhdGVQYXJhbGxheCgpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjaGVja1Zpc2liaWxpdHkoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQYXJhbGxheCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tcGFnZS11cCcpO1xyXG4gICAgY29uc3Qgc2Nyb2xsVGhyZXNob2xkID0gMTAwO1xyXG4gICAgbGV0IGlzU2Nyb2xsaW5nID0gZmFsc2U7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghaXNTY3JvbGxpbmcpIHtcclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBzY3JvbGxUaHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLW1lbnUtYnRuJyk7XHJcbmNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpO1xyXG5cclxuaWYgKG1lbnVCdXR0b24gJiYgbWFpbk1lbnUpIHtcclxuICAgIG1lbnVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBpc01lbnVPcGVuID0gbWFpbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xyXG4gICAgICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGlzTWVudU9wZW4gPyAnaGlkZGVuJyA6ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVPbkNsaWNrT3V0c2lkZSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlTWVudU9uQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghbWFpbk1lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhbWVudUJ1dHRvbi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyNHB4KScpLm1hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lbnVPbkNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwLW1lbnUgLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nKTtcclxuICAgIGxldCBhY3RpdmVJdGVtID0gbnVsbDtcclxuXHJcbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBzdWJNZW51ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuc3ViLW1lbnUnKTtcclxuICAgICAgICBjb25zdCBsaW5rID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcblxyXG4gICAgICAgIGlmIChzdWJNZW51ICYmIGxpbmspIHtcclxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDI0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCdhJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tbWVudScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVJdGVtID0gc3ViTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tbWVudScpID8gaXRlbSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJNZW51LmNsYXNzTGlzdC5jb250YWlucygnb3Blbi1tZW51JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tbWVudScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVJdGVtID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVJdGVtID09PSBpdGVtICYmIHN1Yk1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLW1lbnUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAtbWVudSAuc3ViLW1lbnUnKS5mb3JFYWNoKG1lbnUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnb3Blbi1tZW51Jyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LmFkZCgnb3Blbi1tZW51Jyk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcucG9wdXAtbWVudSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbicpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cC1tZW51IC5zdWItbWVudScpLmZvckVhY2gobWVudSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4tbWVudScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYWN0aXZlSXRlbSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAtbWVudSAuc3ViLW1lbnUnKS5mb3JFYWNoKG1lbnUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLW1lbnUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuLW1vZGFsLWRpYWxvZycpLFxyXG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcclxuICAgIGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1kaWFsb2cgLm1vZGFsLWNsb3NlJyk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsQnRuKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHZhciBtb2RhbElkID0gbW9kYWxCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpLFxyXG4gICAgICAgIG1vZGFsRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kaWFsb2cuJyArIG1vZGFsSWQpO1xyXG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgbW9kYWxFbGVtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsRWxlbS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuaW5nJyk7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBjbG9zZU1vZGFsKGNsb3NlQnRuKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgIHZhciBtb2RhbCA9IGNsb3NlQnRuLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKTtcclxuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbmluZycpO1xyXG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jbG9zaW5nJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWNsb3NpbmcnKTtcclxuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyogb3BlbiBtb2RhbCAqL1xyXG4gIG1vZGFsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RhbEJ0bikge1xyXG4gICAgbW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGF3YWl0IG9wZW5Nb2RhbChtb2RhbEJ0bik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLyogY2xvc2UgbW9kYWwgKi9cclxuICBjbG9zZUJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoY2xvc2VCdG4pIHtcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgYXdhaXQgY2xvc2VNb2RhbChjbG9zZUJ0bik7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtZGlhbG9nJykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IGNsb3NlTW9kYWwodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICBjb25zdCBhY2NvcmRpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpO1xyXG5cclxuICBpZiAoYWNjb3JkaW9uSXRlbXMpIHtcclxuICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb24taXRlbS1oZWFkZXInKTtcclxuICAgICAgY29uc3QgY29udGVudCA9IGl0ZW0ucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKTtcclxuXHJcbiAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24taXRlbScpLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgY2hpbGQucXVlcnlTZWxlY3RvcignLmFjY29yZGlvbi1pdGVtLWNvbnRlbnQnKS5zdHlsZS5oZWlnaHQgPSAnMCc7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gNjAwKSB7XHJcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vic2NyaXB0aW9ucy1uYXYtbW9iaWxlJyk7XHJcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJzY3JpcHRpb25zLW5hdi1tb2JpbGUgLnN1YnNjcmlwdGlvbi1uYXYtaXRlbScpO1xyXG4gICAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3Vic2NyaXB0aW9uLWNhcmQnKTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxUb0VsZW1lbnQgPSAoZWxlbWVudCwgb2Zmc2V0ID0gMCkgPT4ge1xyXG4gICAgICBpZiAoIWVsZW1lbnQpIHJldHVybjtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudC5jbG9zZXN0KCcucm93JykgfHwgbmF2Q29udGFpbmVyO1xyXG4gICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSBNYXRoLm1heCgwLCBlbGVtZW50Lm9mZnNldExlZnQgLSBvZmZzZXQpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUbyh7XHJcbiAgICAgICAgICBsZWZ0OiBzY3JvbGxQb3NpdGlvbixcclxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxDdXJyZW50TmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJzY3JpcHRpb25zLW5hdi1tb2JpbGUgLnN1YnNjcmlwdGlvbi1uYXYtaXRlbS5jdXJyZW50Jyk7XHJcbiAgICBjb25zdCBpbml0aWFsQ3VycmVudENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vic2NyaXB0aW9uLWNhcmQuY3VycmVudCcpO1xyXG5cclxuICAgIGlmIChpbml0aWFsQ3VycmVudE5hdkl0ZW0pIHtcclxuICAgICAgc2Nyb2xsVG9FbGVtZW50KGluaXRpYWxDdXJyZW50TmF2SXRlbSwgMjApO1xyXG4gICAgfVxyXG4gICAgaWYgKGluaXRpYWxDdXJyZW50Q2FyZCkge1xyXG4gICAgICBzY3JvbGxUb0VsZW1lbnQoaW5pdGlhbEN1cnJlbnRDYXJkLCAyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2SXRlbXMuZm9yRWFjaChuYXZJdGVtID0+IHtcclxuICAgICAgbmF2SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCB0eXBlSWQgPSBuYXZJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlLWlkJyk7XHJcblxyXG4gICAgICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKSk7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpKTtcclxuXHJcbiAgICAgICAgbmF2SXRlbS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zdWJzY3JpcHRpb24tY2FyZFtkYXRhLXR5cGUtaWQ9XCIke3R5cGVJZH1cIl1gKTtcclxuICAgICAgICBpZiAodGFyZ2V0Q2FyZCkge1xyXG4gICAgICAgICAgdGFyZ2V0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY3JvbGxUb0VsZW1lbnQobmF2SXRlbSwgMjApO1xyXG4gICAgICAgIGlmICh0YXJnZXRDYXJkKSB7XHJcbiAgICAgICAgICBzY3JvbGxUb0VsZW1lbnQodGFyZ2V0Q2FyZCwgMjApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZS1kcm9wZG93bicpO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRyb3Bkb3duPy5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24taGVhZGVyJyk7XHJcbiAgY29uc3QgaXRlbXMgPSBkcm9wZG93bj8ucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWl0ZW0nKTtcclxuXHJcbiAgaWYgKGhlYWRlciAmJiBpdGVtcykge1xyXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGNpdHk6JywgdGhpcy5kYXRhc2V0LmNpdHkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAoIWRyb3Bkb3duLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIHN3aXBlcjEgPSBuZXcgU3dpcGVyKFwiLmNhc2Utc3R1ZGllcy1zbGlkZXJcIiwge1xyXG4gICAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgICBvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuICAgIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxyXG4gICAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogXCIuY2FzZS1zdHVkaWVzIC5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLmNhc2Utc3R1ZGllcyAuc3dpcGVyLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjI1LFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcclxuICAgICAgICA2MDE6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjM6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XHJcbiAgICAgICAgMTYwMToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDI1LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgc3dpcGVyMSA9IG5ldyBTd2lwZXIoXCIudGVzdGltb25pYWxzLXNsaWRlclwiLCB7XHJcbiAgICBvYnNlcnZlcjogdHJ1ZSxcclxuICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gICAgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IHRydWUsXHJcbiAgICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiBcIi50ZXN0aW1vbmlhbHMgLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgIHByZXZFbDogXCIudGVzdGltb25pYWxzIC5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxyXG4gICAgICAgIDYwMToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDIzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxyXG4gICAgICAgIDE2MDE6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIHN3aXBlcjIgPSBuZXcgU3dpcGVyKFwiLmltYWdlcy1zbGlkZXJcIiwge1xyXG4gIG9ic2VydmVyOiB0cnVlLFxyXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxyXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIuaW1hZ2VzLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICBwcmV2RWw6IFwiLmltYWdlcy1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNixcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxyXG4gICAgNjAxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcclxuICAgIH0sXHJcbiAgICAxMDIzOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuNSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxyXG4gICAgMTYwMToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLjUsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBzd2lwZXIzID0gbmV3IFN3aXBlcihcIi5hcnRpY2xlcy1zbGlkZXJcIiwge1xyXG4gIG9ic2VydmVyOiB0cnVlLFxyXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gIG9ic2VydmVTbGlkZUNoaWxkcmVuOiB0cnVlLFxyXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogXCIuYXJ0aWNsZXMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgIHByZXZFbDogXCIuYXJ0aWNsZXMtc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEuMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxyXG4gICAgNjAxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICB9LFxyXG4gICAgMTAyMzoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XHJcbiAgICAxNjAxOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vINCt0YLQviAtINCy0LDRiNCwINGC0L7Rh9C60LAg0LLRhdC+0LTQsCDQtNC70Y8g0YHQutGA0LjQv9GC0L7QsiDRgdGC0YDQsNC90LjRhtGLLiDQmNC80L/QvtGA0YLQuNGA0YPQudGC0LUg0YHRjtC00LAg0L3Rg9C20L3Ri9C1INCy0LDQvCDRhNCw0LnQu9GLLlxuXG5pbXBvcnQgJy4vc2NyaXB0JztcbiJdLCJuYW1lcyI6WyJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVTY3JvbGxlZENsYXNzIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsIml0ZW0iLCJidXR0b25zQ29udGFpbmVycyIsImNvbnRhaW5lciIsImJ0bkZpcnN0IiwiYnRuU2Vjb25kIiwic3Vic2NyaXB0aW9uc1NlY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsInRhYkJ1dHRvbnMiLCJzdWJzY3JpcHRpb25DYXJkcyIsInN3aXRjaFRhYiIsImR1cmF0aW9uIiwiYnV0dG9uIiwidG9nZ2xlIiwiZGF0YXNldCIsImNhcmQiLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJidWJibGVzIiwic3BlZWQiLCJpc0FjdGl2ZSIsImNoZWNrVmlzaWJpbGl0eSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiYnViYmxlIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImJ1YmJsZVRvcCIsInRvcCIsImJ1YmJsZUJvdHRvbSIsImhlaWdodCIsInVwZGF0ZVBhcmFsbGF4IiwiZGlyZWN0aW9uIiwiY29udGFpbnMiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJidG4iLCJzY3JvbGxUaHJlc2hvbGQiLCJpc1Njcm9sbGluZyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsIm1lbnVCdXR0b24iLCJtYWluTWVudSIsIm9uY2xpY2siLCJpc01lbnVPcGVuIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJib2R5Iiwib3ZlcmZsb3ciLCJjbG9zZU1lbnVPbkNsaWNrT3V0c2lkZSIsImV2ZW50IiwidGFyZ2V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUl0ZW0iLCJzdWJNZW51IiwibGluayIsImlubmVyV2lkdGgiLCJjbG9zZXN0IiwibG9jYXRpb24iLCJocmVmIiwibWVudSIsIm1vZGFsQnV0dG9ucyIsIm92ZXJsYXkiLCJjbG9zZUJ1dHRvbnMiLCJvcGVuTW9kYWwiLCJtb2RhbEJ0biIsIlByb21pc2UiLCJyZXNvbHZlIiwibW9kYWxJZCIsImdldEF0dHJpYnV0ZSIsIm1vZGFsRWxlbSIsInNldFRpbWVvdXQiLCJjbG9zZU1vZGFsIiwiY2xvc2VCdG4iLCJtb2RhbCIsImN1cnJlbnRUYXJnZXQiLCJhY2NvcmRpb25JdGVtcyIsInRyaWdnZXIiLCJjb250ZW50IiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNoaWxkIiwic2Nyb2xsSGVpZ2h0IiwibmF2Q29udGFpbmVyIiwibmF2SXRlbXMiLCJjYXJkcyIsInNjcm9sbFRvRWxlbWVudCIsImVsZW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsIk1hdGgiLCJtYXgiLCJvZmZzZXRMZWZ0IiwibGVmdCIsImluaXRpYWxDdXJyZW50TmF2SXRlbSIsImluaXRpYWxDdXJyZW50Q2FyZCIsIm5hdkl0ZW0iLCJ0eXBlSWQiLCJ0YXJnZXRDYXJkIiwiZHJvcGRvd24iLCJpdGVtcyIsInRleHRDb250ZW50IiwiY29uc29sZSIsImxvZyIsImNpdHkiLCJzd2lwZXIxIiwiU3dpcGVyIiwib2JzZXJ2ZXIiLCJvYnNlcnZlUGFyZW50cyIsIm9ic2VydmVTbGlkZUNoaWxkcmVuIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzd2lwZXIyIiwic3dpcGVyMyJdLCJzb3VyY2VSb290IjoiIn0=