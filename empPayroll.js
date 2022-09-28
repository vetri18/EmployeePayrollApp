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
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
const dateError= document.querySelector(".date-error");
const year= document.querySelector('#year');
const month= document.querySelector('#month');
const day=document.querySelector('#day');
let currentDate= new Date();
year.addEventListener('select',()=>
    {
        if(year.value>currentDate.getFullYear)
        {
            dateError.textContent="you are entering a future date";
        }
        else
        {
            month.addEventListener('select',()=>
            {
                
                if(months.findIndex(month.value)>currentDate.getMonth)
                {
                    dateError.textContent="you are entering a future date";
                }
                else
                {
                    day.addEventListener('select',()=>
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