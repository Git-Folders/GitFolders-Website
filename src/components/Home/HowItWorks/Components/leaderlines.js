/* eslint-disable no-undef */

const numberOfImages = 7; // The total number of images in the How It Works section

// Utility: Debounce function to limit how often a function is called
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Utility: LeaderLine remove function
function removeLeaderLine(lines) {
  lines?.forEach((line) => {
    try {
      line.remove();
    } catch (_error) {
      // console.warn("Error removing LeaderLine:", error);
    }
  });
}

// Check if all images exist, are loaded, and have valid dimensions
function areImagesReady(images) {
  const ready = images.every((img) => {
    if (
      !img ||
      !img.complete ||
      img.naturalWidth === 0 ||
      img.getBoundingClientRect().width === 0
    ) {
      return false;
    }
    return true;
  });
  return ready;
}

// Function to handle AOS for Lines
function handleAOSForLines() {
  const tutorial = document.getElementById("tutorial");
  const lines = document.querySelectorAll('svg[class*="leader-line"]');

  const linesWrapper = document.createElement("div");
  linesWrapper.setAttribute("id", "lines-wrapper");

  lines.forEach((line) => {
    line.setAttribute("data-aos", "fade");
    line.setAttribute("data-aos-duration", "3000");
    linesWrapper.appendChild(line);
  });
  tutorial.appendChild(linesWrapper);
}
// Function to set up LeaderLines
function setupLeaderLines() {
  const images = Array.from({ length: numberOfImages }, (_, i) =>
    document.getElementById(`howToImage-${i + 1}`),
  );

  // Check if images are ready
  if (!areImagesReady(images)) {
    return false;
  }

  const isMobile = window.innerWidth < 768;

  // Remove existing LeaderLines to avoid duplicates
  removeLeaderLine(window.leaderLines);
  window.leaderLines = [];

  const baseOptions = {
    size: isMobile ? 2 : 3,
    startPlugColor: "#2563eb",
    endPlugColor: "#0891b2",
    gradient: true,
    dash: { animation: true },
    startPlug: "square",
  };

  try {
    const lines = [
      new LeaderLine(images[0], images[1], {
        ...baseOptions,
        startSocket: "left",
        endSocket: "top",
        startSocketGravity: isMobile ? [-150, 250] : [-200, 250],
      }),
      new LeaderLine(
        LeaderLine.pointAnchor(images[1], {
          x: "100%",
          y: isMobile ? "60%" : "80%",
        }),
        images[2],
        {
          ...baseOptions,
          startSocket: "right",
          endSocket: isMobile ? "top" : "bottom",
          startSocketGravity: isMobile ? [40, 200] : [],
          endSocketGravity: isMobile ? [0, -150] : [],
        },
      ),
      new LeaderLine(
        images[2],
        LeaderLine.pointAnchor(images[3], {
          x: isMobile ? "80%" : "50%",
          y: "0%",
        }),
        {
          ...baseOptions,
          startSocket: isMobile ? "bottom" : "top",
          endSocket: "top",
          startSocketGravity: isMobile ? [0, 120] : [150, -100],
        },
      ),
      new LeaderLine(
        LeaderLine.pointAnchor(images[3], {
          x: isMobile ? "80%" : "50%",
          y: "100%",
        }),
        images[4],
        {
          ...baseOptions,
          startSocket: "bottom",
          endSocket: isMobile ? "left" : "bottom",
          startSocketGravity: isMobile ? [20, 90] : [150, 150],
          endSocketGravity: isMobile ? [-150, -200] : [],
        },
      ),
      new LeaderLine(
        LeaderLine.pointAnchor(images[4], {
          x: isMobile ? "80%" : "100%",
          y: isMobile ? "100%" : "20%",
        }),
        images[5],
        {
          ...baseOptions,
          startSocket: "right",
          endSocket: "top",
          startSocketGravity: isMobile ? [20, 70] : [],
          endSocketGravity: isMobile ? [0, -70] : [],
        },
      ),
      new LeaderLine(
        LeaderLine.pointAnchor(images[5], {
          x: isMobile ? "0%" : "100%",
          y: "70%",
        }),
        LeaderLine.pointAnchor(images[6], {
          x: isMobile ? "50%" : "0%",
          y: isMobile ? "0%" : "50%",
        }),
        {
          ...baseOptions,
          startSocket: isMobile ? "left" : "right",
          endSocket: isMobile ? "top" : "right",
          startSocketGravity: isMobile ? [-70, 200] : [150, 0],
          endSocketGravity: isMobile ? [] : [-150, 0],
        },
      ),
    ];

    handleAOSForLines();
    // Store the lines for later removal
    window.leaderLines = lines;

    return true;
  } catch (_error) {
    return false;
  }
}

// Initialize LeaderLines when HowItWorks section is in view
function initializeLeaderLines() {
  const section = document.getElementById("how-it-works");

  if (!section) {
    return;
  }

  let isSetupComplete = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isSetupComplete) {
        // Attempt to set up LeaderLines
        isSetupComplete = setupLeaderLines();
        if (isSetupComplete) {
          // Stop observing once setup is complete
          observer.disconnect();
        }
      }
    },
    {
      rootMargin: "100px", // Trigger 100px before section is fully in view
      threshold: 0.01, // Trigger when 1% of the section is visible
    },
  );

  observer.observe(section);

  // Handle window resize
  const debouncedSetup = debounce(() => {
    if (isSetupComplete) {
      setupLeaderLines();
    }
  }, 100);

  window.addEventListener("resize", debouncedSetup);

  // Cleanup on page unload
  window.addEventListener("unload", () => {
    removeLeaderLine(window.leaderLines);

    window.leaderLines = [];
  });
}

// Run when all resources are loaded
window.addEventListener("load", initializeLeaderLines);
