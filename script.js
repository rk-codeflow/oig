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
    sub: "Engineering Mathematics I",
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
const course = document.querySelector(".course-box");

// University list here
const getUniversityList = () => {
  let universityList = univs.map((univ) => {
    return `<div class="cursor-pointer flex gap-x-2" key="${univ.id}">
              <i class="icofont-star-shape icofont-2x "></i>
              <div>
                <h5 class="font-semibold">${univ.name}</h5>
                <p class="font-light text-sm">${univ.numberOfPapers} papers</p>
              </div>
            </div>`;
  });
  university.innerHTML = universityList.join("");
};

window.addEventListener("DOMContentLoaded", () => {
  getUniversityList();
});

// Course list here
const getCourseList = () => {
  let courseList = subjects.map((subject) => {
    return `
    <div
    key=${subject.id}
    class="p-4 cursor-pointer rounded-xl bg-white border-2 border-primary-100 group transition duration-300 ease-in-out hover:bg-primary-100"
  >
    <div class="flex justify-between">
      <p class="font-medium text-xl group-hover:text-white">Semestar</p>
      <p class="font-medium text-xl group-hover:text-white">${subject.sem}</p>
    </div>
    <h5 class="font-medium mt-4 mb-2 text-md group-hover:text-white">
      ${subject.sub}
    </h5>
    <p class="font-normal text-sm mb-4 group-hover:text-white">
      ${subject.desc}
    </p>
    <div
      class="px-2 py-1 text-primary-100 border-2 border-primary-100 font-normal text-sm rounded-3xl max-w-32 flex group-hover:border-white"
    >
      <div class="flex justify-between w-full">
        <span class="group-hover:text-white">Credit</span>
        <span class="group-hover:text-white">${subject.credit} hrs</span>
      </div>
    </div>
  </div>
    `;
  });

  course.innerHTML = courseList.join("");
};

window.addEventListener("DOMContentLoaded", () => {
  getCourseList();
});

// footer year
const getYear = document.querySelector(".year");

getYear.innerHTML = new Date().getFullYear();
