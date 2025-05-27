// let student ={
//     name:'varun',
//     rollNo:'234567',
//     age:22,
//     marks:97

// }
// console.log(typeof student);
// console.log(student);

// //Adding new property to object
//  student.desegnation='cr';
//  console.log(student)
//  student.city='warangal';
//  console.log(student)

//  // deletion of elements in object
//  delete student.desegnation
//  console.log(student)

//  //Modification of object
//  student.city='Hyderabad';
//  console.log(student)

//  //Acessing of object 
//  console.log(student.age)

//  //iterate through object
//  for (let k in student ){
//     console.log(student[k]);
//  }

// complex object 

// let studentdetails ={
//     name:'varun',
//     branch:'cse',
//     fee:20000,
//     feePaid:5600,
//     college:'ngit',
//     skills:['java','spring boot','sql','html','css'],
//     address:{
//         street:'30-2-980/a nehru nagar',
//         mandal:'kazipet',
//         district:'Hanmakonda',
//         city:'warangal'
//     },
//     getFeeDetails: function (){
//         if(this.fee !== this.feepaid){
//             return 'pending';
//         }else{
//             return 'paid';
//         }
//     }

    

// }
// // console.log(studentdetails.getFeeDetails());
// console.log(studentdetails.address.district);


//constructor Object

// function Student(sno,name,fee,feePaid,age,course,skills,address){
//     this.sno =sno,
//     this.name=name,
//     this.fee=fee,
//     this.feePaid=feePaid,
//     this.age =age,
//     this.course=course,
//     this.skills=skills,
//     this.address=address
// }
// Student.prototype.getFeeDetails = function (){
//     if(this.fee===this.feePaid){
//         return 'paid';
//     }else{
//         return 'pending';
//     }
// }

// let std1 =new Student(100,'ravi',20000,12000,22,'fsjd',['c','c++'],{colony:'jntu'});
// let std2 =new Student(101,'ram',20000,20000,23,'fsjd',['java','Spring boot'],{colony:'uppal'});
// let std3 =new Student(102,'kavitha',20000,12000,21,'fsjd',['sql','php'],{colony:'kphb'});

// console.log(std2);


class StudentInfo{
    constructor(sno,name,fee,feePaid,age,course,skills,address){
        this.sno =sno,
        this.name=name,
        this.fee=fee,
        this.feePaid=feePaid,
        this.age =age,
        this.course=course,
        this.skills=skills,
        this.address=address
    }

    getFeeDetails(){
        if(this.fee===this.feePaid){
            return 'paid';
        }else{
            return 'pending';
        }
    }


}

let std1 =new StudentInfo(100,'ravi',20000,12000,22,'fsjd',['c','c++'],{colony:'jntu'});
let std2 =new StudentInfo(101,'ram',20000,20000,23,'fsjd',['java','Spring boot'],{colony:'uppal'});
let std3 =new StudentInfo(102,'kavitha',20000,12000,21,'fsjd',['sql','php'],{colony:'kphb'});

console.log(std2.getFeeDetails());