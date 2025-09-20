document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Function to apply the theme based on local storage
  const applyTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-theme");
      themeToggle.checked = true;
    } else {
      body.classList.remove("dark-theme");
      themeToggle.checked = false;
    }
  };

  // Apply the theme on page load
  applyTheme();

  // Add event listener for the toggle switch
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });

  // JSON data with images
  const tools = [
    {
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      image: "assets/images/logo-viewport-buddy.svg",
    },
    {
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      image: "/assets/images/logo-viewport-buddy.svg",
    },
  ];

  const container = document.getElementById("ext-container");

  tools.forEach((tool) => {
    const toolDiv = document.createElement("div");
    toolDiv.classList.add("tool");

    const mainInner = document.createElement("div");
    mainInner.classList.add("mainInner");

    // === Image ===
    const img = document.createElement("div");
    img.style.backgroundImage = `url('${tool.image}')`;
    img.classList.add("toolImg");

    // === Content ===
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("tool-content");

    const headerDiv = document.createElement("div");
    headerDiv.classList.add("tool-header");

    const title = document.createElement("h3");
    title.textContent = tool.name;

    // === Toggle switch ===
    const switchLabel = document.createElement("label");
    switchLabel.classList.add("switch");

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = true;

    const slider = document.createElement("span");
    slider.classList.add("slider");

    switchLabel.appendChild(toggle);
    switchLabel.appendChild(slider);

    // === Remove button ===
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";

    // Toggle logic
    toggle.addEventListener("change", () => {
      toolDiv.classList.toggle("active", toggle.checked);
    });

    // Remove logic with confirmation
    removeBtn.addEventListener("click", () => {
      const confirmRemove = confirm(
        `Are you sure you want to remove "${tool.name}"?`
      );
      if (confirmRemove) {
        toolDiv.remove();
      }
    });

    const desc = document.createElement("div");
    desc.classList.add("descDiv");
    desc.textContent = tool.description;

    container.appendChild(toolDiv);

    toolDiv.appendChild(mainInner);
    mainInner.appendChild(img);
    mainInner.appendChild(contentDiv);
    contentDiv.appendChild(title);

    contentDiv.appendChild(desc);

    //     toolDiv.appendChild(contentDiv);
    toolDiv.appendChild(headerDiv);
    headerDiv.appendChild(removeBtn);
    headerDiv.appendChild(switchLabel);
  });
});
