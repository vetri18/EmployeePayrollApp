class EmployeePayrollData
{
   
    //using spread method of array to define constructor
    //constructor can only be one in javascript, hence commenting out 1st constructor
    constructor (...params)
    {
        this.id= params[0];
        this.name= params[1];
        this.salary= params[2];
        this.gender= params[3];
        this.startDate= params[4];
        this.zip= params[5];
        this.email= params[6];
    }
    //getter and setter method
    //for defining variable inside a getter setter or properties, syntax is to use underscore and then name of variable.
    get name(){ return this._name;}
    set name(name)
    {
        //console.log("Setting: "+name);
        //this._name= name;
        let nameRegex= RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name=name;
        else throw 'Name is Incorrect!';
    }
    //getter setter for id
    get id(){return this._id}
    set id(id)
    {
        let idRegex= RegExp('^[1-9]{1}[0-9]*$');
        if(idRegex.test(id))
            this._id= id;
        else throw 'ID is incorrect!';
    }
    //getter setter for salary along with regular expression
    get salary(){return this._salary;}
    set salary(salary)
    {
        let salaryRegex= RegExp('^[1-9]{1}[0-9]*$');
        if(salaryRegex.test(salary))
            this._salary= salary;
        else throw 'salary is not valid';
    }
    //getter setter for gender
    get gender(){return this._gender;}
    set gender(gender1)
    {
        let genderRegex= RegExp('^(F|M)$');
        if(genderRegex.test(gender1))
            this._gender= gender1;
        else throw  'invalid gender';
    }
    //getter sette for date
    get startDate(){return this._startDate;}
    set startDate(startDate)
    {
        let currentDate= new Date();
        if(currentDate- startDate>=0)
            this._startDate= startDate;
        else throw  'invalid date';
    }
    //getter and setter for zip
    get zip(){return this._zip;}
    set zip(zip)
    {
        let zipRegex= RegExp('^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$');
        if(zipRegex.test(zip))
            this._zip= zip;
        else throw "Incorrect zip";
    }
    //getter and setter for email
    get email(){return this._email;}
    set email(email)
    {
        let emailRegex= RegExp('^[a-z]{1}[a-z0-9]{2,}([._+-]?[a-z0-9]+)?[@]{1}[a-z1-9]+[.]{1}(co|net|com|gov)([.]{1}[a-z]{2,3})?$')
        if(emailRegex.test(email))
            this._email= email;
        else throw "Invalid Email";
    }
    toString()
    {
        const options= {year:'numeric',month:'long',day:'numeric'};
        //3 Equals are used and return true when both datatype and value matches
        const empDate= this.startDate===undefined ? "undefined": this.startDate.toLocaleDateString("en-US",options); 
        return "id= "+this.id+", name= "+ this.name+", salary= "+this.salary+", gender= "+this.gender+", startdate= "+ empDate+", zip= "+this.zip+", email= "+this.email;
    }
}

//changing data directly
try
{
    //as i have defined array there and array is dynamic here, hence i am facing only 3 arguments here, other will be undefined by default in this case.
    //1 is added to month, 00 is january and 11 is december for new date()
    let employeePayrollData= new  EmployeePayrollData(1,"Mark",30000,'M',new Date(year=2020,month=01,day=12),343434,'vishal.garg@capgemini.com');
    console.log(employeePayrollData.toString());
    employeePayrollData.id=1;
    employeePayrollData.name= "Jeff";
    employeePayrollData.salary=10;
    employeePayrollData.gender='F';
    console.log(employeePayrollData.toString());
    //setting up new object
    let newEmployeePayrollData= new EmployeePayrollData(1,"Teresa",25000,"F",new Date(2021,12,11),222222,'vishl.garggoogle.com');
    //as new date() is used, it will display all the values like time upto seconds and weekend, if i need to print only year, month and day, i have to change some things in toString() method.
    console.log(newEmployeePayrollData.toString());
}
catch(e)
{
    console.error(e);
}