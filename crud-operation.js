let selectedRow = null
var taskWrapper = document.getElementById("task_wrapper");

const onFormSubmit = () =>
 {
    if (validate()) 
    {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

let  data1= [];

 const onloadData = () =>
 {

    const data =JSON.parse(localStorage.getItem("emp"))
    if(data.length>0)
    {
        for(i=0;i<data.length;i++)
        {
            insertNewRecord(data[i]);
        }
    }
 }

const readFormData = () =>
{
    let formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["fullName"] = document.getElementById("fullName").value;
    formData["email"] = document.getElementById("email").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

const insertNewRecord = (data) =>  
{
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
    data1.push(data);
    localStorage.setItem("emp",JSON.stringify(data1));
   
}
const resetForm = () =>
{
    document.getElementById("id").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;

    
}

const onEdit = (td) =>
{
    selectedRow = td.parentElement.parentElement;
    
    document.getElementById("id").disabled=true;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
   
}
const updateRecord = (formData)  => 
{
   

   
     let myid=selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.salary;
    selectedRow.cells[4].innerHTML = formData.city;
    
        
        let editing=JSON.parse(localStorage.getItem("emp"));
        
        

        objIndex = editing.findIndex((obj => obj.id == myid));
    
    editing[objIndex] = formData
    
    localStorage.setItem("emp",JSON.stringify(editing));
    
        
    

}

const onDelete = (td) => 
 {
    if (confirm('Are you sure to delete this record ?')) 
    {
        row = td.parentElement.parentElement;
        const del= document.getElementById("employeeList").deleteRow(row.rowIndex);
        selectedRow = td.parentElement.parentElement;
        const deleteRecordIndex = selectedRow.cells[0].innerHTML
        let deleting = JSON.parse(localStorage.getItem('emp'));
        objIndex = deleting.findIndex((obj => obj.id == deleteRecordIndex));
        deleting.splice(objIndex,1);
        localStorage.setItem('emp',JSON.stringify(deleting));
            resetForm();
        }
    }
    

    
    


const validate =() => 
{
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

