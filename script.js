const univs = [
  {
    id: 1,
    name: "Pokhara University",
    numberOfPapers: 200,
  },
  {
    id: 2,
    name: "Tribhuvan University",
    numberOfPapers: 300,
  },
  {
    id: 3,
    name: "Kathmandu University",
    numberOfPapers: 400,
  },
  {
    id: 4,
    name: "Khowpa University",
    numberOfPapers: 500,
  },
  {
    id: 5,
    name: "Far Western University",
    numberOfPapers: 600,
  },
];

// university
const university = document.querySelector(".university");

const getUniversityList = () => {
  let universityList = univs.map((univ) => {
    return `<div class="cursor-pointer">
      <h5 class="font-semibold">${univ.name}</h5>
        <p class="font-light text-sm">${univ.numberOfPapers} papers</p>
      </div>`;
  });
  university.innerHTML = universityList.join("");
};

window.addEventListener("DOMContentLoaded", () => {
  getUniversityList();
});

// footer year
const getYear = document.querySelector(".year");

getYear.innerHTML = new Date().getFullYear();
