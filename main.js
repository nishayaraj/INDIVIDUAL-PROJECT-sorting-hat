const houses = ["ravenclaw", "gryffindor", "slytherin", "hufflepuff"];

const studentData = [];

const expelledStudentData = [];

// UTILITIES

// 1. utility to add inner html
const setInnerHtml = (id, htmlString) =>
  (document.getElementById(id).innerHTML = htmlString);

// 2. utility to assign a random house
const assignStudentHouse = () => {
  const random = Math.floor(Math.random() * houses.length);
  return houses[random];
};

// Show sorting app banner
const showSortingAppBanner = () => {
  const domString = `<div id="sortingCardIntroInner" class="cardContainer">
      <div class="cardContainer card text-center">
        <div class="card-body">
          <h1 class="card-title"><b>The Sorting Hat</b></h1>
          <img src="https://www.ajc.com/resizer/wxDSY-p7kk0Q1lxejmryhdWnJds=/814x458/cloudfront-us-east-1.images.arcpublishing.com/ajc/TE2SYSUPX7MLF2EK3KLRQILO4A.jpg" alt="Sorting hat from HP" width="500" height="400">
          <p class="card-text">
           <em> <b>"I've done this job for centuries. For I'm the famous Sorting Hat
            I've sorted high, I've sorted low, I've done the job through thick
            and thin. So put me on and you will know Which House you should be in
            !!!"</b></em>
          </p>
          <a href="#" id="showSortingFormButton" class="btn btn-dark">
            Begin Sorting
          </a>
        </div>
      </div>
    </div>`;
  setInnerHtml("sortingCardIntro", domString);
};

// show form to add student
const showSortingFormContainer = () => {
  document
    .getElementById("showSortingFormButton")
    .addEventListener("click", () => {
      const domString = `<div id="SortingForm">
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

      setInnerHtml("sortingFormContainer", domString);
      registerSortToHousesButtonClick();
    });
};

// register sort to house button click
const registerSortToHousesButtonClick = () => {
  document.getElementById("sortToHouses").addEventListener("click", () => {
    const studentNameValue = document.getElementById("studentName").value;

    const studentObject = {
      id: Math.floor(Math.random() * 10),
      name: studentNameValue,
      house: assignStudentHouse(),
    };

    studentData.push(studentObject);
    document.getElementById("studentName").value = "";
    renderStudentIntoHouse();
  });
};

// function used to display all students or display filtered students
const renderStudentIntoHouse = (houseName) => {
  let studentDataCardHtml = "";

  if (studentData.length !== 0) {
    studentData.forEach((student) => {
      if (houseName && houseName !== "") {
        if (houseName === student.house) {
          studentDataCardHtml += `<div>
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/000/511/962/small/57_Student.jpg" class="img-fluid rounded-start" alt="student icon images">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${student.name}</h5>
                    <p class="card-text">${student.house}</p>
                    <button id="expelBtn-${student.id}">Expel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        }
      } else {
        studentDataCardHtml += `<div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/511/962/small/57_Student.jpg" class="img-fluid rounded-start" alt="student icon images">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.house}</p>
              <button id="expelBtn-${student.id}">Expel</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      }
    });

    setInnerHtml("sortedFirstYearsCard", studentDataCardHtml);
  }
};

// render expelled students from expelled data source
const renderExpelledStudents = () => {
  let studentDataCardHtml = "";

  if (expelledStudentData.length !== 0) {
    expelledStudentData.forEach((student) => {
      studentDataCardHtml += `<div>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://image.shutterstock.com/z/stock-vector-student-vector-icon-flat-red-symbol-pictogram-is-isolated-on-a-black-background-designed-for-web-553952884.jpg" class="img-fluid rounded-start" alt="student icon images red">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.house}</p>
              <button id="expelBtn-${student.id}">Expel</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    });

    setInnerHtml("voldysArmyCard", studentDataCardHtml);
  }
};

// add event listener for expel button click
const addExpelButtonEventListener = () => {
  document
    .getElementById("sortedFirstYearsCard")
    .addEventListener("click", (event) => {
      if (event.target.id.includes("expelBtn-")) {
        const idToRemove = event.target.id.replace("expelBtn-", "");
        const indexOfStudentToExpel = studentData.findIndex(
          (student) => student.id == idToRemove
        );

        expelledStudentData.push(studentData[indexOfStudentToExpel]);
        studentData.splice(indexOfStudentToExpel, 1);

        renderExpelledStudents();
        renderStudentIntoHouse();
      }
    });
};

//house filter button click
const registerHouseFilterBtnClick = () => {
  document.addEventListener("click", (event) => {
    if (event.target.id.includes("HouseFilterBtn")) {
      const filterHouseName = event.target.id.replace("HouseFilterBtn", "");
      renderStudentIntoHouse(filterHouseName);
    }
  });
};

const startApp = () => {
  showSortingAppBanner();
  showSortingFormContainer();
  renderStudentIntoHouse();
  renderExpelledStudents();
  addExpelButtonEventListener();
  registerHouseFilterBtnClick();
};

startApp();
