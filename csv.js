const fs = require("fs");
const csvParser = require("csv-parser");

const result = [];

fs.createReadStream("./stud.csv")
  .pipe(csvParser())
  .on("data", (data) => {
    result.push(data);
  })
  .on("end", () => {
    result.sort((a,b) => a.Age - b.Age);
    var length = result.length;

    const totalGrades = result.reduce(

    (sum, student) => sum + parseInt(student.Grade),

    0);
  var av = totalGrades / parseInt(length);
  console.log(`Average is ${av}`);
}
    console.log(result);
    console.log(average)
    
  });
  