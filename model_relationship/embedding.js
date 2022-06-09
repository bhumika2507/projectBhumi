const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to mongodb..."))
  .catch((err) => console.error("could not connect to mongodb...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: authorSchema,
      required: true,
    },
  })
);

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const course = await Course.find();

  console.log(course);
}

async function updateAuthor(courseId) {
  const course = await Course.updateOne(
    { _id: courseId },
    {
      // $set:{
      //     'author.name':'janvi suru'
      // }
      $unset: {
        author: "",
      },
    }
  );
}

updateAuthor("62a1a19d668e346959727ec2");
//createAuthor('bhumi','My bio','My website');

//createCourse('Node Course',new Author({name:'bhumii'}));

//listCourses();
