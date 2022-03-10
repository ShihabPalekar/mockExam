const questionsDataEnglish: any = [
  {
    id: 1,
    type: "mcq",
    que: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    options: ["dummy1", "dummy2", "dummy3", "dummy4"],
    answer: "dummy3",
  },
  {
    id: 2,
    type: "fill-up",
    que: "Donec pede justo, fringilla _________ aliquet nec, vulputate eget, arcu.",
    answer: "ans",
  },
  {
    id: 3,
    type: "boolean",
    que: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    answer: "true",
  },
  {
    id: 4,
    type: "match-up",
    que: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    options: [
      { id: 1, q: "Apple", a: "Fruit" },
      { id: 2, q: "Chair", a: "Object" },
      { id: 3, q: "Red", a: "Colour" },
      { id: 4, q: "India", a: "Country" },
    ],
  },
  {
    id: 5,
    type: "multi-select",
    que: "Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
    options: ["dummy1", "dummy2", "dummy3", "dummy4"],
  },
];

const questionsDataHindi: any = [];

const questionsDataSpanish: any = [];

export { questionsDataEnglish, questionsDataHindi, questionsDataSpanish };
