import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  // function validateform(e) {
  //   e.preventDefault()
  //   var name = document.getElementById('name')
  //   // var password=document.myform.password.value;  

  //   if (name.length < 20) {
  //     alert("Name must be at least 20 characters");
  //     return false;
    
  //   }
  // }

  function validateForm(event){

    event.preventDefault();

    // FULL NAME
    let name = document.getElementById("name").value;
    let namePattern = /^[a-zA-Z]{20,} [a-zA-Z]{20,}$/

    if (namePattern.test(name)) {
      alert('gggg')
        document.getElementById("full-name-msg").innerHTML = "";
    } else {
        document.getElementById("full-name-msg").innerHTML = "Invalid name.";
    }


    // PHONE
    let nameSlug = document.getElementById("name-slug").value;

    let nameSlugPattern = /^0[0-9]{5,}$/

    if(nameSlugPattern.test(nameSlug)){
      document.getElementById("phone-msg").innerHTML = "";
    }
    else{
      document.getElementById("phone-msg").innerHTML = "Invalid phone number.";
      document.getElementById("phone-msg").style.color = "red";
    }

    // CONTRIBUTERS
    let contributers = document.getElementById("contributers").value;

    let contributersPattern = /^0[0-9]{1,100}$/

    if(contributersPattern.test(contributers)){
      document.getElementById("email-msg").innerHTML = "";
    }
    else{
      document.getElementById("email-msg").innerHTML = "Invalid email.";
      document.getElementById("email-msg").style.color = "red";
    }

     // BRANCHES
     let branches = document.getElementById("branches").value;

     let branchesPattern = /^0[0-9]{1,100}$/
 
     if(branchesPattern.test(branches)){
       document.getElementById("country-msg").innerHTML = "";
     }
     else{
       document.getElementById("country-msg").innerHTML = "Invalid email.";
       document.getElementById("country-msg").style.color = "red";
     }


    
  



   



  }


});