const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const copyButton = document.querySelector("#copy-citation");
const bibtexBlock = document.querySelector("#bibtex-block");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

if (copyButton && bibtexBlock) {
  copyButton.addEventListener("click", async () => {
    const label = copyButton.querySelector("span");
    const originalText = label ? label.textContent : copyButton.textContent;

    try {
      await navigator.clipboard.writeText(bibtexBlock.textContent.trim());
      if (label) {
        label.textContent = "Copied";
      } else {
        copyButton.textContent = "Copied";
      }
    } catch (error) {
      if (label) {
        label.textContent = "Copy failed";
      } else {
        copyButton.textContent = "Copy failed";
      }
    }

    window.setTimeout(() => {
      if (label) {
        label.textContent = originalText;
      } else {
        copyButton.textContent = originalText;
      }
    }, 1800);
  });
}
