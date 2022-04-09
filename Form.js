let sbt = document.getElementById("submit");
sbt.addEventListener("click", function (e) {

})

//FirstName
firstName = document.getElementById("First Name");
firstName.addEventListener("click", function (e) {
    

})
firstName.addEventListener("mouseout", function (e) {
    console.log(firstName.value);

    let txt = document.getElementById("First Name").value;
    if (txt == "") 
    {
        firstName.style.borderColor="#FF0000";
      let t= document.getElementById("error").innerHTML = "Please Fill This";
      
    }

})
firstName.addEventListener("mouseover", function (e) {

    firstName.style.borderColor="black";
    document.getElementById("error").innerHTML = "";


})

//LastName
lastName = document.getElementById("Last Name");
lastName.addEventListener("mouseout", function (e) {
    console.log("Yes");
    let txt = document.getElementById("Last Name").value;
    if (txt == "") {
        document.getElementById("error1").innerHTML = "Please Fill This";
    }

})
lastName.addEventListener("mouseover", function (e) {


    document.getElementById("error1").innerHTML = "";


})

//Password
let password=document.getElementById("inputPassword");
let confirm=document.getElementById("inputPasswordConfirm");
confirm.addEventListener("mouseout",function(e)
{
    
    if(password.value!=confirm.value)
    {
        console.log("passprd");
        document.getElementById("pass").innerHTML="Password Not Matched";
    }
    else if(password.value==confirm.value&&password.value!="")
    {
        document.getElementById("pass").innerHTML="Password Matched";
    }
   else if(password.value==""&&confirm.value=="")
    {
        document.getElementById("pass").innerHTML="";
    }
})


//Email
let email=document.getElementById("inputEmail");
let emailconfirm=document.getElementById("inputEmailConfirm");
emailconfirm.addEventListener("mouseout",function(e)
{
    
    
    if(email.value!=emailconfirm.value)
    {
        console.log("email");
        document.getElementById("email").innerHTML="Email Not Matched";
    }
    else if(email.value==emailconfirm.value&&email.value!="")
    {
        document.getElementById("email").innerHTML="Email Matched";
    }
    else if(email.value==""&&emailconfirm.value=="")
    {
        document.getElementById("email").innerHTML="";
    }
    

})
    
    //Mobile Number
    let number=document.getElementById("number");
    number.addEventListener("mouseout",function(e)
    {
        if(number.value=="")
        {
            document.getElementById("num").innerHTML="Please Fill This";
        }
        else if(number.value!="")
        {
            document.getElementById("num").innerHTML="";
        }
    })
