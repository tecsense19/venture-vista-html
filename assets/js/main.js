/**
* Template Name: Rapid - v4.9.1
* Template URL: https://bootstrapmade.com/rapid-multipurpose-bootstrap-business-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

// document.addEventListener("DOMContentLoaded", function() {
//   const typedTextElement = document.getElementById("typedText");
//   const originalText = typedTextElement.textContent || typedTextElement.innerText; 
//   const typingSpeed = 100;

//   function typeText() {
//     for (let i = 0; i <= originalText.length; i++) {
//       setTimeout(() => {
//         typedTextElement.textContent = originalText.slice(0, i);
//       }, i * typingSpeed);
//     }

//     // After typing, remove the blur effect (you can adjust the delay as needed)
//     setTimeout(() => {
//       typedTextElement.style.filter = "none";
//     }, originalText.length * typingSpeed + 1000); // 1000 milliseconds = 1 second
//   }

//   // Initial setup: Apply blur effect and start typing
//   // typedTextElement.style.filter = "blur(5px)";
//   typeText();
// });


// <p id="typedText">Hey there… have we met before?</p>
var lastScrollTop = 0;

window.addEventListener('scroll', function () {
  if (window.innerWidth >= 992) {
    var boyImage = document.getElementById('boy-image');
    // var right = document.getElementById('right-author-image');
  //  var rightjourney= document.getElementById('rightjourney');
    var scrollY = window.scrollY || document.documentElement.scrollTop;
    var deltaY = scrollY - lastScrollTop;

    if (deltaY > 0) {
      // Scrolling down, move diagonally downward
      boyImage.style.transform = 'translate(calc(5vw - 10%), calc(5vh - 10%))';
      // right.style.transform = 'translate(calc(8vw + 0%), calc(0vh + 0%))';
      // rightjourney.style.transform = 'translate(calc(0vw - 5%), calc(10vh - 10%))';
    } else {
      // Scrolling up, move diagonally upward
      boyImage.style.transform = 'translate(calc(-5vw + 10%), calc(-5vh + 10%))';
      // right.style.transform = 'translate(calc(5vw - 10%), calc(0vh - 0%))';
      // rightjourney.style.transform = 'translate(calc(10vw - 10%), calc(0vh - 5%))';
    }

    lastScrollTop = scrollY;
  }
});
window.addEventListener('load', () => {
  if (window.innerWidth >= 992) {
    // Get the width of both boxes
    const menu1 = document.getElementById('box1');
    const menu2 = document.getElementById('box2');

    const width1 = menu1.offsetWidth;
    const width2 = menu2.offsetWidth;

    // Set the width of both boxes to the maximum width
    if (width1 > width2) {
      box2.style.width = `${width1}px`;
    } else {
      box1.style.width = `${width2}px`;
    }
  }
});
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)



  var swiper = new Swiper(".mySwiper", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 50
      },
    }

    //   speed: 400,
    // loop: true,
    // autoplay: {
    //   delay: 1000
    //   // disableOnInteraction: false
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   clickable: true
    // }
  });


  var swiperss = new Swiper(".stepscarousel", {
    speed: 400,
    loop: true,
    //  center: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1140: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      1240: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  var swipers = new Swiper(".sponsered", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1240: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1500: {
        slidesPerView: 6,
        spaceBetween: 40
      }
    }
  });

  // Hide pagination bullets on desktop
  if (window.innerWidth >= 768) {
    swipers.pagination.bullets.forEach(bullet => {
      bullet.style.display = 'none';
    });
  }


  //   var lecturers = function () {
  //     var owl = $(".main-lactures");
  //     owl.owlCarousel({
  //     loop:true,
  //     margin:10,
  //   video:true,
  //     nav:true,
  //   lazyLoad:true,
  //   autoplay:true,
  //   autoplayTimeout:1000,
  //   autoplayHoverPause:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         480:{
  //             items:1
  //         },
  //         560:{
  //             items:2
  //         },
  //         760:{
  //             items:2
  //         },
  //         990:{
  //             items:3
  //         },
  //         1200:{
  //             items:3
  //         },
  //         1500:{
  //             items:4
  //         }
  //     }
  // });
  // }
  // (function ($) {
  // lecturers();
  // })(jQuery);

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });



  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });



  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    if (window.innerWidth >= 768) {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    } else {
      // You can optionally disable or reset AOS for smaller screens
      AOS.init({
        disable: function () {
          var maxWidth = 768;
          return window.innerWidth < maxWidth;
        }
      });
    }


  });


  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

const select = document.querySelector('.mobile-select');
const selectDynamicText = () => {
  //mobile select
  Array.from(select.nextElementSibling.children).forEach(li => {
    Array.from(li.children).forEach(child => {
      if (child.classList.contains('active')) {
        let activeText = child.textContent;
        select.textContent = activeText;
      }
    });
  });
}
select.addEventListener('click', function () {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('show');
});

const handleCloseSelect = () => {
  select.classList.remove('active');
  select.nextElementSibling.classList.remove('show');
}

//custom tabs
const tabContainer = document.querySelector('.tab-container');

tabContainer.addEventListener('click', e => {
  e.stopPropagation();
  const tabNavs = document.querySelectorAll('.tab-nav button');
  const tabItems = document.querySelectorAll('.tab-item');
  if (e.target.classList.contains('tab-btn')) {
    tabNavs.forEach(tabNav => tabNav.classList.remove('active'));
    tabItems.forEach(tabItem => {
      tabItem.classList.add('hide');
      let tabId = tabItem.getAttribute('data-id');

      if (e.target.getAttribute('id') === tabId) {
        e.target.classList.add('active');
        tabItem.classList.remove('hide');
      }
    });
    selectDynamicText();
    handleCloseSelect();
  }
});


selectDynamicText();
