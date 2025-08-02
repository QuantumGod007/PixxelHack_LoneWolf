function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: true,
    resetNativeScroll: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
  
  window.locoScroll = locoScroll;
}
function loadingAnimation() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 27);
    },
  });
  tl.to(".line h2", {
    animationName: "loaderAnime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.6,
  });
  tl.from("#page1", {
    delay: 0.1,
    y: 1600,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
  tl.from(
    "#hero1, #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}
function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#nav-part2 h4");

  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video")
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".mousefollower", {
        opacity: 0
      });
      
      
      if (window.innerWidth <= 768) {
        gsap.to("#video-cursor", {
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        });
      } else {
        gsap.to("#video-cursor", {
          left: dets.x - 570,
          y: dets.y - 300,
        });
      }
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1
    });
    
    if (window.innerWidth <= 768) {
      gsap.to("#video-cursor", {
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      });
    } else {
      gsap.to("#video-cursor", {
        left: "70%",
        top: "-15%",
      });
    }
  });



  var flag = 0
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play()
      video.style.opacity = 1
      document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
      gsap.to("#video-cursor", {
        scale: 0.5
      })
      flag = 1
    } else {
      video.pause()
      video.style.opacity = 0
      document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
      gsap.to("#video-cursor", {
        scale: 1
      })
      flag = 0
    }
  })
}
function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
}
function flagAnimation() {

  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y
    })
  })
  document.querySelector("#hero3").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1
    })
  })
  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0
    })
  })

}
function footerAnimation() {

  var clutter = ""
  var clutter2 = ""
  document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#footer h1").innerHTML = clutter
  document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`
  })
  document.querySelector("#footer h2").innerHTML = clutter2


  document.querySelector("#footer-text").addEventListener("mouseenter", function () {
    gsap.to("#footer h1 span", {
      opacity: 0,
      stagger: 0.05
    })
    gsap.to("#footer h2 span", {
      delay: 0.35,
      opacity: 1,
      stagger: 0.1
    })
  })
  document.querySelector("#footer-text").addEventListener("mouseleave", function () {
    gsap.to("#footer h1 span", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.35,

    })
    gsap.to("#footer h2 span", {
      opacity: 0,
      stagger: 0.05
    })
  })
}

function sideNavigation() {
  
  document.querySelectorAll('#side-nav a, #top-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection && window.locoScroll) {
        window.locoScroll.scrollTo(targetSection);
      } else if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

function hamburgerMenu() {
  const hamburger = document.getElementById('hamburger-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeBtn = document.querySelector('.close-btn');
  const menuBlocks = document.querySelectorAll('.menu-block');

  
  hamburger.addEventListener('click', function() {
    menuOverlay.classList.add('active');
    
    
    gsap.fromTo('.menu-block', 
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
    );
  });

  
  closeBtn.addEventListener('click', function() {
    menuOverlay.classList.remove('active');
  });

  
  document.addEventListener('click', function(e) {
    if (menuOverlay.classList.contains('active') && 
        !menuOverlay.contains(e.target) && 
        !hamburger.contains(e.target)) {
      menuOverlay.classList.remove('active');
    }
  });

  
  menuBlocks.forEach(block => {
    block.addEventListener('click', function(e) {
      e.preventDefault();
      
      
      gsap.to(block, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
      
      
      setTimeout(() => {
        const targetId = block.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        menuOverlay.classList.remove('active');
        
        if (targetSection && window.locoScroll) {
          window.locoScroll.scrollTo(targetSection);
        } else if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 300);
    });
  });
}

loadingAnimation();
cursorAnimation();
locomotiveAnimation();
sheryAnimation();
flagAnimation()
footerAnimation()
sideNavigation()
hamburgerMenu()