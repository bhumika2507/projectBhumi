const Joi = require('@hapi/joi');
const express = require('express');
const app = express();
app.use(express.json());


const courses = 
[
  { id: 1, name: 'bhumika' },
  { id: 2, name: 'ankita' },
  { id: 3, name: 'shobha' },
];

app.get('/api/courses', (req, res) => 
{
  res.send(courses);
});

app.post('/api/courses', (req, res) => 
{
  const { error } = validateCourses(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id',(req,res) =>
{
    const course=courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the give id was not found');

    const result=validateCourses(req.body);
    if(result.error)
    {
        res.status(400).send(result.error.details[0].message);
        return;
    }
    course.name=req.body.name;
    res.send(course);

});

app.delete('/api/courses/:id',(req,res) =>
{
    const course=courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the give id was not found');

    const index =courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});


function validateCourses(course) 
{
  const schema = {
    name: Joi.string().min(3).required()
  };
  return Joi.validate(course, schema);
}

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
