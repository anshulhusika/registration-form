

let mailList=[];

let details = document.getElementById('details');
let alerts = document.getElementById('alert');



submit = () =>{
    let name =document.getElementById('name').value;  
    let email=document.getElementById('email').value;  
    let age =document.getElementById('age').value;  

    let Centers = [ "delhi" , "gurugram" , "faridabad" , "palwal" , "noida"];
    let centerNumber = Math.floor(Math.random()*5)
    let examCenter = Centers[centerNumber];
    console.log(examCenter);

    // console.log(name);
    // console.log(email);
    // console.log(age);

 let validate = mailList.filter((user)=>{
    return user.email == email;
 })
  console.log(validate);

    let tempUser= {
        name : name,
        email : email,
        age : age,
        examCenter : examCenter,

    }
    
    console.log(tempUser.email);
    if (validate.length != 0 ) {
        
        console.log("not succes");
        details.classList.remove('none');
        details.classList.remove('details');
        details.classList.add('details2');
        alerts.classList.add('m5');
        // alerts.classList.remove('m4');
        alerts.innerHTML= 'Enter email is already registered';
       
        setTimeout(()=>{
            
        details.classList.add('none');
        alerts.classList.remove('m5');
        details.classList.remove('details2');
           
      
        }, 2000)
        
        
    } else {
        if (age >= 18 && age <= 25) {
            
            console.log("success");
            mailList.push(tempUser);
            details.classList.remove('none');
             details.classList.add('details');
             let a = document.getElementById('a');
             a.innerHTML= name;
             let b = document.getElementById('b');
             b.innerHTML= email;
             let c = document.getElementById('c');
             c.innerHTML= age;
             let d = document.getElementById('d');
             d.innerHTML= examCenter;

    
           
            setTimeout(()=>{
                details.classList.remove('details');
                details.classList.remove('details2');
                details.classList.add('none');
               
            }, 2000)

           
           
        } else {
            details.classList.remove('none');
            details.classList.add('details2');
            details.classList.remove('details');

            alerts.innerHTML= 'You are not eligible';
            console.log("you are not eligible");
            setTimeout(()=>{
                details.classList.remove('details2');
                
                details.classList.add('none');
               
            }, 2000)
        }
        
    }
    

    console.table(mailList);

}

