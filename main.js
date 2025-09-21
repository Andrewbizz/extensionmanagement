document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  let sortState = 1;
  const themeKey = "theme";
  const container = document.getElementById("ext-container");
  // Function to apply the theme based on local storage
  // JSON data with images
  const tools = [
    {
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      image: "assets/images/logo-devlens.svg",
    },
    {
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      image: "assets/images/logo-style-spy.svg",
    },
    {
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      image: "assets/images/logo-speed-boost.svg",
    },
    {
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      image: "assets/images/logo-json-wizard.svg",
    },
    {
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      image: "assets/images/logo-tab-master-pro.svg",
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
      image: "assets/images/logo-markup-notes.svg",
    },
    {
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      image: "assets/images/logo-grid-guides.svg",
    },
    {
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      image: "assets/images/logo-palette-picker.svg",
    },
    {
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      image: "assets/images/logo-link-checker.svg",
    },
    {
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      image: "assets/images/logo-dom-snapshot.svg",
    },
    {
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      image: "assets/images/logo-console-plus.svg",
    },
  ];

  const applyTheme = () => {
    if (localStorage.getItem(themeKey) === "dark") {
      body.classList.add("dark-theme");
      themeToggle.style.backgroundImage = "url('assets/images/icon-sun.svg')";
    } else {
      body.classList.remove("dark-theme");
      themeToggle.style.backgroundImage = "url('assets/images/icon-moon.svg')";
    }
  };

  // Apply the theme on page load
  applyTheme();

  // Add event listener for the toggle switch
  themeToggle.addEventListener("click", () => {
    const isCurrentlyDark = body.classList.contains("dark-theme");
    if (isCurrentlyDark) {
      body.classList.remove("dark-theme");
      localStorage.setItem(themeKey, "light");
      themeToggle.style.backgroundImage = "url('assets/images/icon-moon.svg')";
    } else {
      body.classList.add("dark-theme");
      localStorage.setItem(themeKey, "dark");
      themeToggle.style.backgroundImage = "url('assets/images/icon-sun.svg')";
    }
  });

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

    const checkState = function () {
      toolDiv.classList.toggle("active", toggle.checked);
      toolDiv.classList.toggle("inactive", !toggle.checked);

      if (
        sortState === 1 ||
        (sortState === 2 && toolDiv.classList.contains("inactive"))
      ) {
        toolDiv.classList.add("hide");
        toolDiv.classList.remove("show");
      } else {
        toolDiv.classList.add("hide");
        toolDiv.classList.remove("show");
      }
    };

    checkState();

    toggle.addEventListener("change", checkState);

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

  const childDiv = container.querySelectorAll(":scope > div.tool");
  const allSwitches = container.querySelectorAll(".switch");
  const showAll = document.getElementById("showAll");
  const showActive = document.getElementById("showActive");
  const showInactive = document.getElementById("showInactive");

  const stateSetter = function () {
    if (sortState === 1) {
      childDiv.forEach((child) => {
        if (child.classList.contains("hide")) {
          child.classList.remove("hide");
        }
      });
    } else if (sortState === 2) {
      childDiv.forEach((child) => {
        if (child.classList.contains("active")) {
          child.classList.add("show");
          child.classList.remove("hide");
        } else {
          child.classList.add("hide");
          child.classList.remove("show");
        }
      });
    } else {
      childDiv.forEach((child) => {
        if (child.classList.contains("inactive")) {
          child.classList.add("show");
        } else {
          child.classList.add("hide");
          child.classList.remove("show");
        }
      });
    }
  };

  const showAllfn = function () {
    sortState = 1;
    stateSetter();
    console.log(sortState);
  };

  const showActivefn = function () {
    sortState = 2;
    stateSetter();
    console.log(sortState);
  };

  const showInactivefn = function () {
    sortState = 3;
    stateSetter();
    console.log(sortState);
  };

  allSwitches.forEach((swit) => {
    swit.addEventListener("click", stateSetter());
  });

  showAll.addEventListener("click", showAllfn);
  showActive.addEventListener("click", showActivefn);
  showInactive.addEventListener("click", showInactivefn);
  console.log(sortState);
});
