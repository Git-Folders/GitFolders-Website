// wait for both the LeaderLine lib and your images to be parsed
window.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth < 768;

  const image1 = document.getElementById("howToImage-0");
  const image2 = document.getElementById("howToImage-1");
  const image3 = document.getElementById("howToImage-2");
  const image4 = document.getElementById("howToImage-3");
  const image5 = document.getElementById("howToImage-4");
  const image6 = document.getElementById("howToImage-5");
  const image7 = document.getElementById("howToImage-6");

  const baseOptions = {
    size: isMobile ? 2 : 3,
    startPlugColor: "#1a6be0",
    endPlugColor: "#1efdaa",
    gradient: true,
    dash: { animation: true },
    startPlug: "square",
  };

  const line1 = new LeaderLine(image1, image2, {
    ...baseOptions,
    startSocket: "left",
    endSocket: "top",
    startSocketGravity: isMobile ? [-150, 250] : [-200, 250],
  });

  const line2 = new LeaderLine(
    LeaderLine.pointAnchor(image2, { x: "100%", y: isMobile ? "60%" : "80%" }),
    image3,
    {
      ...baseOptions,
      startSocket: "right",
      endSocket: isMobile ? "top" : "bottom",
      startSocketGravity: isMobile ? [60, 150] : [],
      endSocketGravity: isMobile ? [0, -40] : [],
    },
  );
  const line3 = new LeaderLine(
    image3,
    LeaderLine.pointAnchor(image4, { x: isMobile ? "80%" : "50%", y: "0%" }),
    {
      ...baseOptions,
      startSocket: isMobile ? "bottom" : "top",
      endSocket: "top",
      startSocketGravity: isMobile ? [0, 120] : [150, -100],
    },
  );
  const line4 = new LeaderLine(
    LeaderLine.pointAnchor(image4, { x: isMobile ? "80%" : "50%", y: "100%" }),
    image5,
    {
      ...baseOptions,
      startSocket: "bottom",
      endSocket: isMobile ? "left" : "bottom",
      startSocketGravity: isMobile ? [20, 90] : [150, 150],
      endSocketGravity: isMobile ? [-150, -200] : [],
    },
  );
  const line5 = new LeaderLine(
    LeaderLine.pointAnchor(image5, {
      x: isMobile ? "80%" : "100%",
      y: isMobile ? "100%" : "20%",
    }),
    image6,
    {
      ...baseOptions,
      startSocket: "right",
      endSocket: "top",
      startSocketGravity: isMobile ? [20, 70] : [],
      endSocketGravity: isMobile ? [0, -70] : [],
    },
  );
  const line6 = new LeaderLine(
    LeaderLine.pointAnchor(image6, { x: isMobile ? "0%" : "100%", y: "70%" }),
    LeaderLine.pointAnchor(image7, { x: isMobile ? "80%" : "50%", y: "0%" }),
    {
      ...baseOptions,
      startSocket: isMobile ? "left" : "right",
      endSocket: "top",
      startSocketGravity: isMobile ? [-70, 200] : [350, 0],
      endSocketGravity: isMobile ? [] : [150, -150],
    },
  );
});
