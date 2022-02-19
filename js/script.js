const epicMix = [
  "Fight Like a Girl",
  "Numb Little Bug",
  "Into the Unknown",
  "Eyes on You",
  "We Can Do Hard Things",
  "Wild Things",
  "Venus",
  "Final Bow",
  "Want You Back",
  "White Flag",
  "Little Girl",
  "Blow Me (One Last Kiss)",
  "Gaslighter"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
