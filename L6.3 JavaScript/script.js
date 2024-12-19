function gg(e){
    e.preventDefault();
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const age=document.getElementById("age").value;
    const rdbox=document.getElementById("road");

    let message="";
    if(email===""){
        message="Please Enter Your Email ID";
        rdbox.style.color="red";
    }
    else if(pass===""){
        message="Your Passwrod Must be 8 Characters";
        rdbox.style.color="red";
    }
    else if (age===""){
        message="It must be between 12 to 60";
        rdbox.style.color="red";
    }
    else{
        message="Succefully Logged in";
        rdbox.style.color="green";
    }
    rdbox.innerText= message 


}