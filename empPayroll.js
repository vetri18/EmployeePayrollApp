//making salary output dynamic
const salary= document.querySelector('#salary');
const output= document.querySelector('.salary-output');
output.textContent= salary.value;
salary.addEventListener('input',function()
{
   output.textContent=salary.value;
});
//validation for name
let employeePayrollObject= new EmployeePayrollData();   
const name= document.querySelector('#name');
const nameError= document.querySelector(".name-error");
name.addEventListener('input',()=>
{
    try {
        if(name.value=="")
        {
            nameError.textContent='';
        }
        else
        {
        employeePayrollObject.name= name.value;
        nameError.textContent='';
        }
    } catch (e)
    {
        nameError.textContent=e;
    }
});
//validation for date
var months = new Array();
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
const dateError= document.querySelector(".date-error");
const year= document.querySelector('#year');
const month= document.querySelector('#month');
const day=document.querySelector('#day');
let currentDate= new Date();
year.addEventListener('input',()=>
    {
        if(year.value>currentDate.getFullYear())
        {
            dateError.textContent="you are entering a future date";
        }
        else
        {
            month.addEventListener('input',()=>
            {
                
                if(months.findIndex(monthValue=>monthValue==month.value)>currentDate.getMonth()   )
                {
                    dateError.textContent="you are entering a future date";
                }
                else
                {
                    day.addEventListener('input',()=>
                    {
                        if(day.value>currentDate.getDate())
                        {
                            dateError.textContent="you are entering a future date";
                        }
                    });
                }
            });
        }
    });