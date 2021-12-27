import ParticlesComponent from "react-tsparticles";

const Particles = () => (
  <ParticlesComponent
    id="tsparticles"
    options={{
      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            value_area: 600,
          },
          value: 30,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 3,
        },
      },
    }}
  />
);

export default Particles;
