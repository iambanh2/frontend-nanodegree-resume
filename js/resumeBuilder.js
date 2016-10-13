/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: 'Tien Nguyen Duc',
    role: 'Full stack Deverlopver',
    contacts: {
        mobile: 0966984620,
        email: 'chocolates02031988@gmail.com',
        github: 'chocolates02031988',
        localtion: 'Ha noi, Viet nam'
    },
    skills: [
        "HTML", "CSS", "Javascript", "Angular1", "React",
        "Gulp", "grunt", "webpack", "npm"

    ],
    bioPic: 'images/fry.jpg',
}

var work = [
    {
        employer: 'IFI Solution',
        title: "",
        localtion: "",
        dates: "",
        description: ""
    }
]


var projects = [
    {
        title: "",
        dates: "",
        desciption: "",
        images: [

        ]
    }
]



var education = {
    schools: [
        {
            name: "University of Engineering and Technology",
            location: "Ha Noi, Vietnam",
            degree: "Master",
            major: ["Electronic and Telecommunication"],
            dates: "2013-2015",
            url: "http://uet.vnu.edu.vn/"
        },
        {
            name: "University of Engineering and Technology",
            location: "Ha Noi, Vietnam",
            degree: "BA",
            major: ["Electronic and Telecommunication"],
            dates: "2007-2011",
            url: "http://uet.vnu.edu.vn/"
        }
    ],
    onlieCourses: {
        nanodegree: {
            front_end_web_developver: [
                {
                    "title": "Responsive Web Design Fundamentals",
                    "school": "Udacity",
                    "dates": 2016,
                    "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
                },
                {
                    "title": "Intro to HTML and CSS",
                    "school": "Udacity",
                    "dates": 2016,
                    "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
                },
                {
                    "title": "Responsive Images",
                    "school": "Udacity",
                    "dates": 2016,
                    "url" : "https://www.udacity.com/course/responsive-images--ud882"
                },
                {
                    "title": "Javascript Basics",
                    "school": "Udacity",
                    "dates": 2016,
                    "url" : "https://www.udacity.com/course/javascript-basics--ud804"
                }
            ]
        }
    }
};

var projects = [

];


var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace ('%data%', bio.role);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);


if(bio.skills.length > 0 ) {
    $('#header').append(HTMLskillsStart);
}

for( var i = 0; i < bio.skills.length; ++i) {

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $('#skills').append(formattedSkill);
}










