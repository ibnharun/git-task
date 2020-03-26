let name = "Ibrahim Haruna";
const course =["html", "css", "JavaScript", "Nodejs"];
console.log("My name is " + name)

for(let i = 0; i < 200; i++){
	if(i%2 === 0){
		course.push(i);
	}
}
 console.log(course);
