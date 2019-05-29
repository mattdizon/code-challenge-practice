/*
Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.

grades lower than 38 do not get rounded

if diff between grade and next multiple of 5 is less than 3 round up to next multiple of 5
*/

function gradingStudents(grades){
    let rounded = []
    for(let i = 0; i < grades.length;i++){
        if (grades[i] < 38) {
            rounded.push(grades[i])
        }
        else if(grades[i]%5>=3){
            rounded.push(Math.ceil(grades[i]/5)*5)
        }
        else{
            rounded.push(grades[i])
        }
    }
    console.log(rounded);
}
gradingStudents([73,67,38,33])
