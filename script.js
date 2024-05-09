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

const subjects = [
  {
    id: 1,
    sub: "Engineering Maths",
    sem: "I",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nisi aut excepturi iure tenetur at",
    credit: 3,
  },
  {
    id: 2,
    sub: "Chemistry",
    sem: "I",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nisi aut excepturi iure tenetur at",
    credit: 4,
  },
  {
    id: 3,
    sub: "Communication Technique",
    sem: "I",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nisi aut excepturi iure tenetur at",
    credit: 2,
  },
  {
    id: 4,
    sub: "Programming in C",
    sem: "I",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nisi aut excepturi iure tenetur at",
    credit: 3,
  },
  {
    id: 5,
    sub: "Basic Electrical Engineering",
    sem: "I",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nisi aut excepturi iure tenetur at",
    credit: 3,
  },
  {
    id: 6,
    sub: "Mechanical workshop",
    sem: "I",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam nisi aut excepturi iure tenetur at",
    credit: 1,
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
