const COURSES = [
	{
		id: "course-1",
		course_title: "Asia",
		course_subtitle: "China, Janpan, Korea...",
		course_description: "Asia is the largest of the five continents on Planet Earth in area and population. The term Asia refers conventionally to the eastern portion of the Eurasian landmass plus the island country of Japan and the island nations of Maritime Southeast Asia.", 
		image: "images/Asia.png",
		image_title: "Asia"
	},
	{
		id: "course-2",
		course_title: "America",
		course_subtitle: "USA, Canada, Argentina ...",
		course_description: "Strictly speaking, the Americas consists of two continents, North America and South America. Central America and the Caribbean are considered part of North America.",
		image: "images/America.png",
		image_title: "America"
	},
	{
		id: "course-3",
		course_title: "Africa",
		course_subtitle: "Algeria, Egypt ...",
		course_description: "Africa is the second-largest continent in the world in both area and population. It is an almost entirely isolated landmass with only a small land bridge in the northeast, connecting the African Mainland with Western Asia.",
		image: "images/Africa.png",
		image_title: "Africa"
	},
	{
		id: "course-4",
		course_title: "Australia and Oceania",
		course_subtitle: "Australia, Fiji ...",
		course_description: "Australia is the smallest of the seven continents on Earth. Oceania covers an area of about 100 million square kilometers, this is about one-fifth of Earth's surface area.",
		image: "images/Oceania.png",
		image_title: "Oceania"
	},
	{
		id: "course-5",
		course_title: "Europe",
		course_subtitle: "UK, France, Germany ...",
		course_description: "Europe is the second-smallest continent, and it could be described as a large peninsula or as a subcontinent. Europe is the western portion of the Eurasian landmass and is located entirely in the Northern Hemisphere. ",
		image: "images/Europe.png",
		image_title: "Europe"
	},
 ];

function createCourseHTML(course) {
	let courseHTML = $("<article>");
	let figure = $("<figure>");
	let image = $("<img>", {src: course.image, alt: course.image_title});
	let caption = $("<figcaption>" + course.image_title + "</figcaption>");
	figure.append(image);
	figure.append(caption);
	courseHTML.append(figure);
	let title = $("<h2>" + course.course_title + "</h2>");
	courseHTML.append(title);
	let subtitle = $("<h3>" + course.course_subtitle + "</h3>");
	courseHTML.append(subtitle);
	let description = $("<p>" + course.course_description + "</p>");
	courseHTML.append(description);
	return courseHTML;
}

function displayCourses(courses) {
	let coursesList = $("#coursesList");
	coursesList.empty();
	for(let course of courses) {
		let courseHTML = createCourseHTML(course);
		coursesList.append(courseHTML);
	}
}

$(document).ready(function(){
	let mainCourses = [COURSES[0], COURSES[1]];
	displayCourses(mainCourses);
	$("#searchText").on("keyup", search)
});

function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();
		let matches = [];
		for(let course of COURSES) {
			let courseTitle = course.course_title.toLowerCase();
			if(courseTitle.includes(query)) {
				matches.push(course);
			}
		}
		displayCourses(matches);
}

function myFunction() {
	var x = document.getElementById("myDIV");
	if (x.style.display == "none") {
	x.style.display = "block";
	myButton.value = "show less";
	} else {
	x.style.display = "none";
	myButton.value = "See more Intorduction";
}}