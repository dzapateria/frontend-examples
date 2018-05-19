import { IStudentInfo } from './IStudentInfo';
import { Students } from './Student';

//Enum declaration
enum LanguagesKnown { English, Spanish }

//Declaring Student
let student: IStudentInfo = {
    Name: "David",
    Age: 35,
    Phone: 601123123,
    Language: LanguagesKnown[LanguagesKnown.Spanish]
}

//List of Students
let studentsList: IStudentInfo[] = [
    { Name: "Javier", Age: 26, Phone: 2345, Language: LanguagesKnown[LanguagesKnown.Spanish] },
    { Name: "Maria", Age: 19, Phone: 5678, Language: LanguagesKnown[LanguagesKnown.English] },
]

//############################################## Functions advanced ############################################

//Anonymous function
let StudentName = function (lName: string, fName: string) {
    return fName + "..." + lName;
}

console.log(StudentName("Anonimous", "Hacker"));

//Arrow Function
let StudentFullName = (lName: string, fName: string) => { return fName + ".." + lName };

console.log(StudentFullName("Fungincio", "Lopez"));

//**************************** Classes ************************** */
let s = new Students("Caperuzita", "Roja");
console.log(s.GetFullName());
