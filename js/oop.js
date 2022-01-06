class Employee{
    constructor(id,fname,email,bs){
        this.emp_id=id
        this.emp_name=fname
        this.emp_email=email
        this.emp_bs=bs
    }
    getEmployee(){
    console.log("employee id :",this.emp_id)
    console.log("employee name :",this.emp_name)
    console.log("employee email",this.emp_email)
    }
    setEmail(updated_email){
        this.emp_email=updated_email
    }
    
}
class Student{
    constructor(sid,semail){
        this.stu_id=sid
        this.stu_email=semail
    }
}
let obj1=new Employee("cram_12","jsl","jsl@gmail.com",20000)
let obj2=new Employee("cram_13","jsl2","jsl2@gmail.com",20000)
let stu1=new Student("cram_stu_12","cramstu@gmail.com")
obj1.setEmployee("newemail@gmail.com")
obj2.setEmployee("newemail2@gmail.com")
obj1.getEmployee()
obj2.getEmployee()

