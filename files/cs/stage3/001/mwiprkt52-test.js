// test.js - Simple JavaScript test file
// Run: node test.js   (also loaded by test.html)

const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 78 },
  { name: "Sara", score: 85 },
];

function rankStudents(list) {
  return [...list].sort((a, b) => b.score - a.score);
}

function average(list) {
  return list.reduce((sum, s) => sum + s.score, 0) / list.length;
}

console.log("Hello from JavaScript!");
console.log("Students ranked by score:");
rankStudents(students).forEach((s) => console.log(`  ${s.name}: ${s.score}`));
console.log(`Average score: ${average(students).toFixed(2)}`);
