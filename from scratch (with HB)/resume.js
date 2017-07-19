var resume = 
{
  	"basics": {
	    "name": "Jamie Gray",
	    "label": "UX Designer",
	    "picture": "",
	    "email": "jamiegray2234@gmail.com",
	    "phone": "(817) 368-0224",
	    "website": "http://jamiegray.net",
	    "summary": "User Experience Designer seeking opportunities to connect with and work alongside skilled designers and developers. Looking for entry-level and internship design roles at tech companies or startups.",
	    "location": 
	    {
			"address": "505 Leta Lane",
			"postalCode": "76034",
			"city": "Colleyville",
			"countryCode": "US",
			"region": "Texas"
	  	},
    	"profiles":
  		[
  			{
  			"network": "Twitter",
  			"username": "@jamiefeedback",
  			"url": "https://twitter.com/jamiefeedback"
  			},
  			{
  			"network": "Angel List",
  			"username": "",
  			"url": "https://angel.co/jamie-gray-1"
  			},
  			{
  			"network": "LinkedIn",
  			"username": "",
  			"url": "https://www.linkedin.com/in/jamiegray2234/"
  			},
  			{
  			"network": "Github",
  			"username": "",
  			"url": "https://github.com/sirjamesgray"
  			}
  		]
  	},
  	"work": 
    [{
      "company": "",
      "position": "UX Designer",
      "website": "",
      "startDate": "2013-12-01",
      "endDate": "2014-12-01",
      "summary": "",
      "highlights": [
        "...",
        "..."
      ]
    }],
    "volunteer": [
      {
        "organization": "CoderDojo",
        "position": "Teacher",
        "website": "http://coderdojo.com/",
        "startDate": "2012-01-01",
        "endDate": "2013-01-01",
        "summary": "Global movement of free coding clubs for young people.",
        "highlights": [
          "Awarded 'Teacher of the Month'"
        ]
      }
    ],
  "education": [
    {
      "institution": "University of Oklahoma",
      "area": "Information Technology",
      "studyType": "Bachelor",
      "startDate": "2011-06-01",
      "endDate": "2014-01-01",
      "gpa": "4.0",
      "courses": [
        "DB1101 - Basic SQL",
        "CS2011 - Java Introduction"
      ]
    }
  ],
  "awards": [
    {
      "title": "Digital Compression Pioneer Award",
      "date": "2014-11-01",
      "awarder": "Techcrunch",
      "summary": "There is no spoon."
    }
  ],
  "publications": [
    {
      "name": "Video compression for 3d media",
      "publisher": "Hooli",
      "releaseDate": "2014-10-01",
      "website": "http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)",
      "summary": "Innovative middle-out compression algorithm that changes the way we store data."
    }
  ],
  "skills": [
    {
      "name": "Web Development",
      "level": "Master",
      "keywords": [
        "HTML",
        "CSS",
        "Javascript"
      ]
    },
    {
      "name": "Compression",
      "level": "Master",
      "keywords": [
        "Mpeg",
        "MP4",
        "GIF"
      ]
    }
  ],
  "languages": [
    {
      "language": "English",
      "fluency": "Native speaker"
    }
  ],
  "interests": [
    {
      "name": "Wildlife",
      "keywords": [
        "Ferrets",
        "Unicorns"
      ]
    }
  ],
  "references": [
    {
      "name": "Erlich Bachman",
      "reference": "It is my pleasure to recommend Richard, his performance working as a consultant for Main St. Company proved that he will be a valuable addition to any company."
    }
  ]
}

//To start up the JavaScript and run on browser, you need this script below:
//To debug and write our some console.log(data) so you can see what your variables are printing
//Open your browser and open the developer tool (Command + Options + I)
$(document).ready(function() {
  var greet = 'hello';
  console.log(greet);
  loadResume();
});

//This function is to load the resume object (json). 
function loadResume(){
  // leave this code here : commented out for now
	// $.ajax({
	//     url:'https://s3-us-west-1.amazonaws.com/huanbui/json/resume.json',
	//     type: 'GET',
	//     dataType: 'json',
	//     success: function(data) {
	//     	console.log('data');
	//     	console.log(data);
	//     },
	//     error: function() {
	//     	// The div id "resume" will display this message"
	//       	$('#info').html('<p>An error has occurred</p>');
	//     }
 //  });
 // leave this code here : commented out for now

  /*log out the resume object
  you should see something like 'resume.js'
  with Object {basics: Object, work: Array(1), volunteer: Array(1), education: Array(1), awards: Array(1)…}
  open that object out and see that it's reflecting back to your JSON object that has:
  - awards (Array)
  - basics (object)
  - education (Array)
  - interests (array)
  - languages (array)
  - etc ... you need to know the difference between "object" vs "array".
  --- they are two different data types so you will need to understand it to access its data.
  --- example : basics is an object, you will have to write a code that's different than:
  ------------- awards is an array, you will have to use index of its array. 
  */
  console.log(resume);

  /*
  Log out the basics object that you have:
  Object {name: "Jamie Gray", label: "UX Designer", picture: "", email: "jamiegray2234@gmail.com", phone: "(817) 368-0224"…}
  Note : object will display it neatly around {}
  */
  console.log(resume.basics);

  /*
  log out work array that you have:
  [Object]
  Note : array will display with the [] outside
  */
  console.log(resume.work);


  /*
  Calling function loadBasics(resume.basics)
  */
  loadBasics(resume.basics);

}

function loadBasics(data){
  console.log('loadBasics function is invoked');
  console.log('email : ' + data.email);
  console.log('label : ' + data.label);

  // NOTE: data.location is an object so it will not dispaly it with a string before it
  // i added the 'location : ' + data.location; therefore it will turn it into
  // location : [object Object]
  console.log('location : ' + data.location);

  // NOTE: data.location is an object
  console.log(data.location);

 

  $('#name').append(data.name);
  $('#label').append(data.label);

  //variable called phoneIconHtml
  //this variable will story the result from this method getFontAwesomeIconHtml with 'fa-phone-square' as parameter
  //once the method returns the result, it will be stored into phoneIconHtml
  var phoneIconHtml = getFontAwesomeIconHtml('fa-phone-square');
  // then you can append the div id "phone" with phoneIconHtml and the data.phone
  // meaning you have the icon to the left and then have the phone number next to it
  $('#phone').append(phoneIconHtml).append(' ' + data.phone);
  
  $('#website').append(data.website);

  var address = data.location.address;
  console.log('address: ' + address);
  //you can do it this way
  $('#location').append(data.location.address);
  // OR you can do it this way
  $('#location2').append(address);

}

/*
Function : getFontAwesomeIconHtml
Param : iconName (go to http://fontawesome.io/icons/)
----------- and click on an icon that you want, then copy that name as a variable into iconName
example:
- iconName = fa-phone-square
- returns <i class="fa fa-phone-square"></i>
*/
function getFontAwesomeIconHtml(iconName){
  var iconHtml = '<i class="fa '+iconName+'"></i>';
  return iconHtml;
}























