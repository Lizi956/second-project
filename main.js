document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href =
        "https://www.facebook.com/profile.php?id=61571633125408";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const productBoxes = document.querySelectorAll(".left-box, .right-box");

  productBoxes.forEach(function (box) {
    box.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
      this.style.transition = "all 0.3s ease";

      const svg = this.querySelector("svg");
      if (svg) {
        svg.style.fill = "#3498db";
        svg.style.transition = "fill 0.3s ease";
      }
    });

    box.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";

      const svg = this.querySelector("svg");
      if (svg) {
        svg.style.fill = "";
      }
    });

    box.addEventListener("click", function () {
      const title = this.querySelector(".h4-elements").textContent;

      let info = "";
      if (title.includes("Qualityfull")) {
        info = "ჩვენი პროდუქცია არის ხარისხიანი.";
      } else if (title.includes("Elegant")) {
        info =
          "თანამედროვე დიზაინი და ელეგანტური სტილი გამოგარჩევთ ყველასგან. შეარჩიეთ თქვენი სტილი ჩვენი კოლექციიდან.";
      }

      const existingInfo = this.querySelector(".product-info");

      if (existingInfo) {
        existingInfo.remove();
      } else {
        const infoElement = document.createElement("p");
        infoElement.classList.add("product-info");
        infoElement.textContent = info;
        infoElement.style.marginTop = "10px";
        infoElement.style.fontSize = "14px";
        infoElement.style.color = "#555";
        infoElement.style.animation = "fadeIn 0.5s";

        if (!document.getElementById("animations-css")) {
          const style = document.createElement("style");
          style.id = "animations-css";
          style.textContent = `
                      @keyframes fadeIn {
                          from { opacity: 0; transform: translateY(-10px); }
                          to { opacity: 1; transform: translateY(0); }
                      }
                  `;
          document.head.appendChild(style);
        }

        this.appendChild(infoElement);
      }
    });
  });

  function addEntryAnimation() {
    productBoxes.forEach(function (box, index) {
      setTimeout(function () {
        box.style.opacity = "1";
        box.style.transform = "translateY(0)";
      }, index * 200);
    });
  }

  productBoxes.forEach(function (box) {
    box.style.opacity = "0";
    box.style.transform = "translateY(20px)";
    box.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    box.style.cursor = "pointer";
  });

  addEntryAnimation();

  const containerElement = document.querySelector(".other-div-container");
  if (containerElement) {
    const filterContainer = document.createElement("div");
    filterContainer.className = "filter-buttons";
    filterContainer.style.textAlign = "center";
    filterContainer.style.marginBottom = "20px";

    const filterButtons = `
          <button class="filter-btn active" data-filter="all">ყველა</button>
          <button class="filter-btn" data-filter="Qualityfull">ხარისხიანი პროდუქცია</button>
          <button class="filter-btn" data-filter="Elegant">ელეგანტური ტანისამოსი</button>
      `;

    filterContainer.innerHTML = filterButtons;

    containerElement.parentNode.insertBefore(filterContainer, containerElement);

    const style = document.createElement("style");
    style.textContent = `
    `;
    document.head.appendChild(style);

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        productBoxes.forEach(function (box) {
          const title = box.querySelector(".h4-elements").textContent;

          if (filter === "all") {
            box.style.display = "";

            box.style.opacity = "0";
            box.style.transform = "translateY(20px)";
            setTimeout(function () {
              box.style.opacity = "1";
              box.style.transform = "translateY(0)";
            }, 100);
          } else if (title.includes(filter)) {
            box.style.display = "";

            box.style.opacity = "0";
            box.style.transform = "translateY(20px)";
            setTimeout(function () {
              box.style.opacity = "1";
              box.style.transform = "translateY(0)";
            }, 100);
          } else {
            box.style.display = "none";
          }
        });
      });
    });
  }
});
