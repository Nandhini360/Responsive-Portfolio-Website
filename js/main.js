particlesJS("particles-js", {
  particles: {
    number: {
      value: 300,   // increase number!
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#F5F3CE",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
    },
    size: {
      value: 2,
      random: true,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true, // let them scatter more freely
      straight: false,
      out_mode: "out",
      bounce: false,
    },
    line_linked: {
      enable: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});
