const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/playground')
.then(() => console.log('connected to mongodb...'))
.catch(err => console.error('could not connect to mongodb...',err))

const authorSchema =new mongoose.Schema({
    name:String,
    bio:String,
    website:String
});

const Author=mongoose.model('Author',authorSchema);

const Course=mongoose.model('Course',new mongoose.Schema({
    name:String,
     authors:[authorSchema]
         
     }
    
));



async function createCourse(name,authors){
    const course =new Course({
        name,
        author
    });

    const result =await course.save();
    console.log(result);
}

async function listCourses(){
    const course=await Course.find()
    
    console.log(course);
}


//createAuthor('bhumi','My bio','My website');

createCourse('Node Course',[
    new Author({name:'bhumi'}),
    new Author({name:'janvi'})
])

//listCourses();
