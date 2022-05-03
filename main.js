/*

const studentData = [
  {
    id: 1,
    name: "lilly",
    Expelled: true,
  },
  {
    id: 2,
    name: "Kelly",
    Expelled: false,
  },
  {
    id: 3,
    name: "Nelly",
    Expelled: true,
  },
  {
    id: 4,
    name: "Polly",
    Expelled: false,
  },
  {
    id: 5,
    name: "Stanely",
    Expelled: false,
  },
];

*/

const houses = ["Ravenclaw", "Gryffindor", "Slytherin", "Hufflepuff"];

const studentData = [];

// utility to add inner html
const setInnerHtml = (id, htmlString) =>
  (document.getElementById(id).innerHTML = htmlString);

// Add Title container - should display by default
const sortingCardContainer = () => {
  const domstring = `<div id="sortingCardIntroInner">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">The Sorting Hat</h5>
          <p class="card-text">
            "I've done this job for centuries. For I'm the famous Sorting Hat
            I've sorted high, I've sorted low, I've done the job through thick
            and thin. So put me on and you will know Which House you should be in
            !!!"
          </p>
          <a href="#" id="showSortingFormButton" class="btn btn-primary">
            Begin Sorting
          </a>
        </div>
      </div>
    </div>`;
  setInnerHtml("sortingCardIntro", domstring);
};

sortingCardContainer();

const renderStudentIntoHouse = () => {
  let studentDataCardHtml = "";

  if (studentData.length !== 0) {
    studentData.forEach((student) => {
      studentDataCardHtml += `<div id="firstYears">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/511/962/small/57_Student.jpg" class="img-fluid rounded-start" alt="student icon images">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.house}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    });
    setInnerHtml("sortedFirstYearsCard", studentDataCardHtml);
  }
};

renderStudentIntoHouse();

const getStudentHouse = () => {
  const random = Math.floor(Math.random() * houses.length);
  return houses[random];
}

// show sorting form:
document
  .getElementById("showSortingFormButton")
  .addEventListener("click", () => {
    const domstring = `<div id="SortingForm">
      <form class="row g-3">
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">student</label>
          <input
            type="text"
            readonly
            class="form-control-plaintext"
            id="staticEmail2"
            value="Student:"
          />
        </div>
        <div class="col">
    <input type="text" id="studentName" class="form-control" placeholder="Name" aria-label="name">
  </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3" id="sortToHouses">
            Sort!
          </button>
        </div>
      </form>
    </div>`;

    setInnerHtml("sortingFormContainer", domstring);

    // register sort function
    document.getElementById("sortToHouses").addEventListener("click", () => {
      const studentNameValue = document.getElementById("studentName").value;
      console.log(studentNameValue);

      const studentObject = {
          id: Math.random(),
          name: studentNameValue,
          expelled: false,
          house: getStudentHouse(),
        };
      
        studentData.push(studentObject);
        
        renderStudentIntoHouse();

    });
  });
