

    const saveData = () =>
   {
       let id,name,salary,city;

       id=document.getElementById("id").value;
       name=document.getElementById("name").value;
       salary=document.getElementById("salary").value;
       city=document.getElementById("city").value;

       localStorage.setItem("id",id)
       localStorage.setItem("name",name);
       localStorage.setItem("salary",salary)
       localStorage.setItem("city",city)

   }

   
