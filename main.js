const studentData = [
  {
    id: 1,
    name: "lilly",
  },
  {
    id: 2,
    name: "Kelly",
  },
  {
    id: 3,
    name: "Nelly",
  },
  {
    id: 4,
    name: "Polly",
  },
  {
    id: 5,
    name: "Stanely",
  },
];

const setInnerHtml = (id, htmlString) =>
  (document.getElementById(id).innerHTML = htmlString);

//html functions//
//first card//
const sortingCardIntro = () => {
  const domstring = `<div id="sortingCardIntroInner">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">The Sorting Hat</h5>
          <p class="card-text">
            "I've done this job for centuries. For I'm the famous Sorting Hat
            I've sorted high, I've sorted low, I've done the job through thick
            and thin So put me on and you will know Which House you should be in
            !!!"
          </p>
          <a href="#" id="showSortingFormButton" class="btn btn-primary">Begin Sorting</a>
        </div>
      </div>
    </div>`;
  setInnerHtml("sortingCardIntro", domstring);
};

sortingCardIntro();

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
        <div class="col-auto"> 
          <label for="inputPassword2" class="visually-hidden">name</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="name"
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
            Sort!
          </button>
        </div>
      </form>
    </div>`;

    setInnerHtml("SortingFormContainer", domstring);
  });
