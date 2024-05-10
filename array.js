// ~ ARRAY ~ //

/* 1. declare variable,
   2. declare name of the variable after that,
   3. assign assignmet parameter (=),
   4. write third brcaket [] right of the assignment operator,
   5. write data inside the brackets with comma,
   6. end of the bracket write semicolon (;), */

var studentAge = [23, 4, 54, 34, 27, 56, 78];

var rahim = 80;
var asif = 40;
var samim = 30;
var kabir = 60;

var donationByStudent = [80, 'amar', 30, 60, null, 'sakir', undefined];
var donationByStudentSet = donationByStudent.length;
//console.log(donationByStudentSet);

/*  ~ FIND INDEX OF ANY DATA IN THE ARRAY ~  */

var firstIndex = donationByStudent.indexOf(80);
//console.log(firstIndex);

var secondIndex = donationByStudent.indexOf('amar');
//console.log(secondIndex);

var thirdIndex = donationByStudent.indexOf(30);
//console.log(thirdIndex);

var fourthIndex = donationByStudent.indexOf(60);
//console.log(fourthIndex);

var fifthIndex = donationByStudent.indexOf(null);
//console.log(fifthIndex);

var sixthIndex = donationByStudent.indexOf('sakir');
//console.log(sixthIndex);

var seventhIndex = donationByStudent.indexOf(undefined);
//console.log(seventhIndex);

var eighthIndex = donationByStudent.indexOf('ihsan')
//console.log(eighthIndex);

/*  ~ search result of an unavailable index of any data gives result of -1 ~   */
/*  ~ when the logic is right but reult is not available, gives output as -1 ~   */

/*  ~ FIND DATA OF ANY INDEX IN THE ARRAY ~  */

donationByStudent = [80, 'amar', 30, 60, null, 'sakir', undefined];

var firstData = donationByStudent[0];
//console.log(firstData);

var secondData = donationByStudent[1];
//console.log(secondData);

var thirdData = donationByStudent[2];
//console.log(thirdData);

var fourthData = donationByStudent[3];
//console.log(fourthData);

var fifthData = donationByStudent[4];
//console.log(fifthData);

var sixthData = donationByStudent[5];
//console.log(sixthData);

var seventhData = donationByStudent[6];
//console.log(seventhData);

/*  ~ if data is not available against any index number, then it will show as undefined ~  */
var eighthIndex = donationByStudent[10];
//console.log(eighthIndex);

/* ~ change the value/data of an array ~  */

donationByStudent = [80, 'amar', 30, 60, null, 'sakir', undefined];
//console.log(donationByStudent);
donationByStudent[3] = "tamar";
//console.log(donationByStudent);
donationByStudent[2] = 100;
//console.log(donationByStudent);

/*  ~ add any data at the "end" of an array ~  */
donationByStudent.push(600);
donationByStudent.push('funny')
//console.log(donationByStudent);

/*  ~ remove any data at ghe "end" of an array ~  */
donationByStudent.pop();
//console.log(donationByStudent);
donationByStudent.pop();
//console.log(donationByStudent);

/*  ~ add any data in the "start" of an array ~  */
donationByStudent.unshift('mahabub');
//console.log(donationByStudent);

/*  ~ remove any data in the "start" of an array ~  */
donationByStudent.shift();
console.log(donationByStudent);

/* ~ remove any data from the "middle" of any array ~  */
donationByStudent.splice(4, 2); // variable.splice(startingIndex, howManyToDelete)
console.log(donationByStudent);