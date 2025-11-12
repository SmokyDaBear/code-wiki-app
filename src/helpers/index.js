const loadingSpinner = `<div class="spinner-bg">
        <div class="spinner"></div></div>`;
const leftNav = document.querySelector(".left-nav");
const rightNav = document.querySelector(".right-nav");
const mainContent = document.querySelector(".center.main");

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const showSpinner = () => {
  const spinnerBg = document.getElementById("spinner-bg");
  spinnerBg.style.display = "block";
};

const hideSpinner = () => {
  const spinnerBg = document.getElementById("spinner-bg");
  spinnerBg.style.display = "none";
};

// All Links

const allLinks = [
  { text: "Home 🏠", href: "/sql-index.md" }, //0
  { text: "SQL Constraints 📏", href: "/constraints.md" }, //1
  {
    text: "Advanced Manipulating Data 🛠️",
    href: "/advanced-manipulating-data.md",
  }, //2
  { text: "Data Types in SQL 📚", href: "/data-types.md" }, //3
  { text: "Get Started 🚀", href: "/get-started.md" }, //4
  { text: "Manipulating Data 🛠️", href: "/manipulating-data.md" }, //5
  { text: "Setting Up SQL Environment ⚙️", href: "/setting-up.md" }, //6
  { text: "Tables in SQL 🗄️", href: "/tables.md" }, //7
];
// Left Navigation Links
const leftLinks = [
  { ...allLinks[0] },
  {
    text: "Starting with SQL",
    children: [{ ...allLinks[4] }, { ...allLinks[6] }],
  },
  {
    text: "Core SQL Concepts",
    children: [
      { ...allLinks[5] },
      { ...allLinks[7] },
      { ...allLinks[1] },
      { ...allLinks[2] },
      { ...allLinks[3] },
    ],
  },
];

const markDownToHtml = (markDownString) => {
  // Simple markdown to HTML conversion (for demonstration purposes)
  return markDownString
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.*)\*/gim, "<i>$1</i>")
    .replace(/--- IGNORE ---/gim, "")
    .replace(/\n$/gim, "<br />");
};

const fetchChapter = async (child) => {
  const allLinks = document.querySelectorAll(".child-link");
  allLinks.forEach((link) => {
    link.classList.remove("active");
  });
  child.classList.add("active");

  {
    if (!child.href) return;
    mainContent.innerHTML = loadingSpinner;
    const pageData = fetch(`./notes/${child.href}`)
      .then((response) => response.text())
      .then((data) => markDownToHtml(data));
    await delay(500); // Simulate loading delay
    pageData.then((values) => {
      mainContent.innerHTML = values;
    });
  }
};

leftLinks.forEach((link) => {
  const { text, href, children } = link;
  const a = document.createElement("a");

  if (!href && children) {
    const div = document.createElement("div");
    div.className = "dropdown-parent";
    // Create section header
    const sectionHeader = document.createElement("p");
    sectionHeader.onclick = () => {
      div.classList.toggle("active");
    };
    sectionHeader.textContent = text;
    sectionHeader.className = "link-header";
    div.appendChild(sectionHeader);

    const dropdownDiv = document.createElement("div");
    dropdownDiv.className = "dropdown-content";

    children.forEach((child) => {
      const childA = document.createElement("a");
      childA.textContent = child.text;
      childA.className = "child-link";
      childA.addEventListener("click", () => fetchChapter(child));
      dropdownDiv.appendChild(childA);
    });
    div.appendChild(dropdownDiv);
    leftNav.appendChild(div);
    return;
  }
  if (!href) return;
  a.href = link.href;
  a.textContent = link.text;
  a.style.display = "block";
  a.style.marginBottom = "10px";
  leftNav.appendChild(a);
});

// Right Navigation Links
const rightLinks = [
  { text: "Previous: SQL Basics 🛠️", href: "basics.md" },
  { text: "Next: SQL Constraints 📏", href: "constraints.md" },
];

rightLinks.forEach((link) => {
  const a = document.createElement("a");
  a.href = link.href;
  a.textContent = link.text;
  a.style.display = "block";
  a.style.marginBottom = "10px";
  rightNav.appendChild(a);
});
