// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

const main = document.querySelector("main");
const peopleTable = document.querySelector("#people-table");
const peopleTableContent =
  "<tr><th>Name</th><th>Year</th></tr>" +
  people
    .map((people) => {
      return `
            <tr>
                <td>${people.name}</td>
                <td>${people.year}</td>
            </tr>
          `;
    })
    .join("");
peopleTable.innerHTML = peopleTableContent;

const commentTable = document.querySelector("#comments-table");
const commentTableContent =
  "<tr><th>Id</th><th>Comment</th></tr>" +
  comments
    .map((comment) => {
      return `
            <tr>
                <td>${comment.id}</td>
                <td>${comment.text}</td>
            </tr>
          `;
    })
    .join("");
commentTable.innerHTML = commentTableContent;

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const checkAgeButton = document.querySelector("#check-age");
const checkAgeAnswer = document.querySelector("#check-age-answer");
checkAgeButton.addEventListener("click", () => {
  const answer = people.some((person) => {
    return new Date().getFullYear() - person.year >= 19;
  });
  checkAgeAnswer.innerHTML = answer;
});

// Array.prototype.every() // is everyone 19 or older?
const checkAllAgeButton = document.querySelector("#check-all-age");
const checkAllAgeAnswer = document.querySelector("#check-all-age-answer");
checkAllAgeButton.addEventListener("click", () => {
  const answer = people.every((person) => {
    return new Date().getFullYear() - person.year >= 19;
  });
  checkAllAgeAnswer.innerHTML = answer;
});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findByIdInput = document.querySelector("#find-by-id-input");
const findByIdButton = document.querySelector("#find-by-id-button");
const findByIdAnswer = document.querySelector("#find-by-id-answer");

findByIdButton.addEventListener("click", (e) => {
  findByIdAnswer.innerHTML = comments.find(
    (comment) => comment.id == findByIdInput.value
  ).text;
});

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIndexInput = document.querySelector("#delete-by-id-input");
const findByIndexButton = document.querySelector("#delete-by-id-button");

findByIndexButton.addEventListener("click", (e) => {
  const index = comments.findIndex(
    (comment) => Comment.id == findIndexInput.value
  );
  comments.splice(index, 1);
  const commentTableContent =
    "<tr><th>Id</th><th>Comment</th></tr>" +
    comments
      .map((comment) => {
        return `
              <tr>
                  <td>${comment.id}</td>
                  <td>${comment.text}</td>
              </tr>
            `;
      })
      .join("");
  commentTable.innerHTML = commentTableContent;
});
