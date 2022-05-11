
let roll =  prompt('Roll Number')



studentData.map( (data,index) => {

let bnGp = `${gpaCell(data.markes.bn)}`
let enGp = `${gpaCell(data.markes.en)}`
let mathGp = `${gpaCell(data.markes.math)}`
let sGp = `${gpaCell(data.markes.s)}`
let scGp = `${gpaCell(data.markes.sc)}`
let relGp = `${gpaCell(data.markes.rel)}`

let finalGpa = (`${Number(bnGp) + Number(enGp) + Number(mathGp) + Number(sGp) + Number(scGp) + Number(relGp) }`)

let bnGr = `${gradeCell(data.markes.bn)}`
let enGr = `${gradeCell(data.markes.en)}`
let mathGr = `${gradeCell(data.markes.math)}`
let sGr = `${gradeCell(data.markes.s)}`
let scGr = `${gradeCell(data.markes.sc)}`
let relGr = `${gradeCell(data.markes.rel)}`




if ( data.roll == roll ) {
    console.log(`

        Name : ${data.names}
        Class : ${data.class}
        Roll : ${data.roll}
        Gender : ${data.gender}
        Age : ${data.age}
        Location : ${data.location}
_________________________________________________
 
 Subject Name       Sub Gpa         Sub Grade
----------------------------------------------------------
 Bangla             ${bnGp}         ${bnGr}
----------------------------------------------------------
 English            ${enGp}         ${enGr}
----------------------------------------------------------
 Math               ${mathGp}       ${mathGr}
----------------------------------------------------------
 Science            ${sGp}          ${sGr}
----------------------------------------------------------
 S Science          ${scGp}         ${scGr}
----------------------------------------------------------
 Religion           ${relGp}        ${relGr}
_____________________________________________________________
  Your Final Gpa is ${finalGpa/6}





        
`);
}

});