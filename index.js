// code your solution here
function superbowlWin(record) {
  const winningRecord = record.find((game) => game.result === "W");

  return winningRecord ? winningRecord.year : undefined;
}

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];

console.log(superbowlWin(record)); // Output: 2017
