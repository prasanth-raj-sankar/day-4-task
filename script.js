
//1. Create your own resume data in JSON format

var resume={
    "basics":{
        "name": "prasanth raj",
        "number": 8825445696,
        "email": "prasanthraj0910@gmail.com",
        "degree": "B.E",
    },
    "location": {
       
        "address":"4/219 voc Street",
        "pincode":600052,
        "city":"chennai",
        "area":"redhills"
    },

    "profiles": [
        {
            "git":"https://github.com/prasanth-raj-sankar/git-demo/blob/main/script.js"
        }
    ],


    "work": [
        {
          "company": "yetlo",
          "position": "full stack developer",
          "startDate": "2020-11-22",
          "endDate": "2023-08-22",
          "summary": "developer react",
        }

      ],
    "eduction": [
        {
            "institution": "panimalar",
            "department": "cse",
            "studyType": "fulltime",
            "batch start year": 2016,
            "batch end year": 2021,
            "gpa": 7.5,
        },

        {
            "institution": "panimalar",
            "department": "cse",
            "studyType": "fulltime",
            "batch start year": 2016,
            "batch end year": 2021,
            "gpa": 7.5,
        }

    ]

    

    }
 console.log(resume)

// //for loop
//  for(var i=0;i<eduction.length;i++){
//      var obj = eduction[i];

//      console.log(obj.institution)
//      console.log(obj.department)
//      console.log(obj.studyType)
//      console.log(obj.batchstartyear)
//      console.log(obj.batchendyear)
//      console.log(obj.gpa)
//  }


//2. For the given JSON iterate over all for loops (for, for in, for of, for Each)

var resume={
    "basics":{
        "name": "prasanth raj",
        "number": 8825445696,
        "email": "prasanthraj0910@gmail.com",
        "degree": "B.E",
    },
    "location": {
       
        "address":"4/219 voc Street",
        "pincode":600052,
        "city":"chennai",
        "area":"redhills"
    },

    "profiles": [
        {
            "git":"https://github.com/prasanth-raj-sankar/git-demo/blob/main/script.js"
        }
    ],


    "work": [
        {
          "company": "yetlo",
          "position": "full stack developer",
          "startDate": "2020-11-22",
          "endDate": "2023-08-22",
          "summary": "developer react",
        }

      ],
    "eduction": [
        {
            "institution": "panimalar",
            "department": "cse",
            "studyType": "fulltime",
            "batchstartyear": 2016,
            "batchendyear": 2021,
            "gpa": 7.5,
        },

        {
            "institution": "srm",
            "department": "mca",
            "studyType": "fulltime",
            "batchstartyear": 2016,
            "batchendyear": 2021,
            "gpa": 7.5,
        }

    ]

    

    }
//for loop 
var res = resume.eduction
for(var i=0;i<res.length;i++){
    console.log(res[i].institution,res[i].batchstartyear,res[i].studyType)
}


var res = resume.profiles
for(var i=0;i<res.length;i++){
    console.log(res[i].git)
}

//for in 

for(var key in resume.work){
    if (resume.work.hasOwnProperty(key)){
        console.log(resume.work[key].company)
        console.log(resume.work[key].position)
    }
}


//for of 

var text = "";
for(var x of resume.work[key].endDate){
    text += x;
}
 console.log(text)


