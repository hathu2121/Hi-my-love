const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const content = document.querySelector(".content");
const sliderBtns = document.querySelector(".slider-navigation");
const videoBg = document.querySelector(".video-slide");

console.log(content, sliderBtns);
const renderBtns = (btns) => {
  const btnList = [];
  for (i = 0; i < btns.length; i++) {
    btnList.push(`
        <div class="nav-btn"></div>
        `);
  }
  sliderBtns.innerHTML = btnList.toString().trim().replace(",", " ");
};

const renderContent = (listContent, position) => {
  contentFilter = listContent[position];
  videoBg.setAttribute("src", contentFilter.video);
  content.innerHTML = `
  <h1>${contentFilter.title}<br/><span>${contentFilter.subtitle}....</span></h1>
  <p>
    ${contentFilter.content}
  </p>
  <a href="#">Read More <ion-icon name="heart"></ion-icon> </a>
  `;
};

const carouselList = [
  {
    video: "./assets/video/1.mp4",
    title: "Hello everyone",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quisquam odio adipisci aliquid iusto a ex libero! Soluta laboriosam, qui fuga molestias dolores, dicta minima rem, hic beatae dolor quisquam dolore ullam tempore veritatis a quia provident corrupti error. Eum fugit voluptate officiis. Laudantium quisquam deserunt a voluptatem corporis nemo libero delectus accusantium adipisci, eveniet nihil maxime dignissimos exercitationem distinctio repellendus eaque aspernatur odio! Pariatur minima praesentium iure eveniet, dolores consequuntur enim deleniti explicabo nesciunt placeat illo in sint! Dignissimos blanditiis laborum numquam adipisci officiis fuga, sint facere, ullam deleniti dolorem laudantium odio porro. Cum, magnam ullam. Laudantium, reiciendis omnis?",
    subtitle: "♥ ",
  },
  {
    video: "./assets/video/2.mp4",
    title: "This is my little love",
    content:
      "Five years in love. He ruthlessly said goodbye to her. She vowed to hate him for the rest of her life. One day, she walked into a small alley and found him being beaten by people. She went crazy, picked up the rock, and desperately hit the other people with a stick. The others were frightened and ran away. Friends asked her, swore hatred to the bone, why did she help him? She gently touched her trembling heart and said, because love is more than hate. ",
    subtitle: "oh !!!",
  },
  {
    video: "./assets/video/3.mp4",
    title: "But my love ♥",
    content:
      " A guy dating a girl always hurts him. One day, the girl broke up with him and told him, I don't want to see you again. A few months later, the girl changed her mind. She realized she loved the boy, so she turned around and told him, Give me one more chance. I love you and I need you. I promise I ll never hurt you again But the boy just laughed and said to her, Only a fool would go back to the person who hurt him so much The girl was frustrated and started to cry, but the boy put his arm around her, hugged her tightly, and said,...and you're one of those idiots.",
    subtitle: "Sometimes very big ",
  },
  {
    video: "./assets/video/4.mp4",
    title: "And my love is nurtured",
    content:
      "How important is it to you?” -350 grams-Oh, so little. - Idiot, 350 grams is the weight of that heart, the whole heart is for you, what more do you want.    ",
    subtitle: "guess",
  },
  {
    video: "./assets/video/5.mp4",

    title: "YOU",
    content:
      "♥♥♥3000",
    subtitle: " I Love You ♥ H",
  },
];
renderContent(carouselList, 0);
renderBtns(carouselList);

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});
// const btns = document.querySelector(".nav-btn");
// var sliderNav = function (manual) {
//   btns[manual].classList.add("active");
// };

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     sliderNav(i);
//   });
// });
console.log(sliderBtns);
const btns = document.querySelectorAll(".nav-btn");
console.log(btns);
btns.forEach((element, index) => {
  element.addEventListener("click", () => renderContent(carouselList, index));
});