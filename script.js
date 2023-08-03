//        JavaScript version
const imgs = [
  "mikhail-vasilyev-MEb2jandkbc-unsplash.jpg",
  "sajad-nori-s1puI2BWQzQ-unsplash.jpg",
  "zhang-kaiyv-ECfPmkOVZPA-unsplash.jpg",
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// const accordion = document.querySelector(".accordion");
// let accordionItem = document.createElement("div");

// for (let i = 1; i < 4; i++) {
//   accordionItem.innerHTML += `
//         <div class="accordion-item divider">
//             <div class="accordion-header d-flex">
//                 <div class="number">0${i}</div>
//                 <p class="accordion-button">Click to open fact</p>
//                 <div class="plus-sign">+</div>
//             </div>
//             <div class="accordion-content d-flex">
//                 <p class="cat-fact"></p>
//                 <img class="cat-image" src="#" alt="Cat Image">
//             </div>
//         </div>
//     `;
// }
// accordion.appendChild(accordionItem);

// let logo = document.createElement("div");
// logo.innerHTML = `
// <div class="accordion-item logo">
//         <div class="accordion-header d-flex">
//             <img class="cat-image" src="./images/Logo.svg" alt="Cat Image">
//         </div>
//     </div>`;

// accordion.appendChild(logo);
// let img = logo.querySelector("img");
// logo.onmouseover = () => {
//   img.src = "./images/Logo_inverted.svg";
// };
// logo.onmouseout = () => {
//   img.src = "./images/Logo.svg";
// };

// const accordionItems = document.querySelectorAll(".accordion-item");
// accordionItems.forEach((item) => {
//   const accordionButton = item.querySelector(".accordion-button");
//   const plusSign = item.querySelector(".plus-sign");
//   const catImage = item.querySelector(".cat-image");
//   const catFact = item.querySelector(".cat-fact");

//   accordionButton.addEventListener("click", () => {
//     fetch("https://catfact.ninja/fact")
//       .then((response) => response.json())
//       .then((data) => {
//         const imageUrl = imgs[getRandomInt(0, 2)];
//         const catFactText = data.fact;
//         catImage.src = `./images/${imageUrl}`;
//         catFact.innerText = catFactText;
//         item.classList.toggle("opened");
//         plusSign.innerText = item.classList.contains("opened") ? "-" : "+";
//       })
//       .catch((error) => {
//         console.error("Error fetching cat data:", error);
//         catFact.innerText = "Failed to fetch cat data.";
//       });
//   });
// });

//    Jquery version

$(document).ready(function () {
  const accordion = $(".accordion");
  for (let i = 1; i < 4; i++) {
    accordion.append(`
        <div class="accordion-item divider">
            <div class="accordion-header d-flex">
                <div class="number">0${i}</div>
                <p class="accordion-button">Click to open fact</p>
                <div class="plus-sign">+</div>
            </div>
            <div class="accordion-content d-flex">
                <p class="cat-fact"></p>
                <img class="cat-image" src="#" alt="Cat Image">
            </div>
        </div>
      `);
  }

  const logo = `
      <div class="accordion-item logo">
          <div class="accordion-header d-flex">
              <img class="cat-image" src="./images/Logo.svg" alt="Cat Image">
          </div>
      </div>
    `;

  accordion.append(logo);

  const img = $(".logo img");
  $(".logo").hover(
    function () {
      img.attr("src", "./images/Logo_inverted.svg");
    },
    function () {
      img.attr("src", "./images/Logo.svg");
    }
  );

  $(".accordion-button").on("click", function () {
    const item = $(this).closest(".accordion-item");
    const plusSign = item.find(".plus-sign");
    const catImage = item.find(".cat-image");
    const catFact = item.find(".cat-fact");

    $.ajax({
      url: "https://catfact.ninja/fact",
      dataType: "json",
      success: function (data) {
        const imageUrl = imgs[getRandomInt(0, 2)];
        const catFactText = data.fact;
        catImage.attr("src", `./images/${imageUrl}`);
        catFact.text(catFactText);
        item.toggleClass("opened");
        plusSign.text(item.hasClass("opened") ? "-" : "+");
      },
      error: function (error) {
        console.error("Error fetching cat data:", error);
        catFact.text("Failed to fetch cat data.");
      },
    });
  });
});
