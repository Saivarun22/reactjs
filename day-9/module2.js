export class Student{
    constructor(name,age,rollno,course,address){
        this.name =name;
        this.age =age;
        this.rollno =rollno;
        this.course =course;
        this.address =address;
    }


        printdata(){
            console.log("Name: "+this.name);
            console.log("Age: "+this.age);
            console.log("Roll No: "+this.rollno);
            console.log("Course: "+this.course);
            console.log("Address: "+this.address);
        }
}