var a=document.getElementById('contactusdropdown');
a.addEventListener("mouseover",function(){
document.getElementById('contactus').style.display="block";
document.getElementById('contactus').style.boxShadow="0px -2px #0000cc";

});

a.addEventListener("mouseout",function(){
    document.getElementById('contactus').style.display="none";
    });


    var b=document.getElementById('admissiondropdown');

    b.addEventListener("mouseover",function(){
        document.getElementById('admissions').style.display="block";
        document.getElementById('admissions').style.boxShadow="0px -2px #0000cc";
    });

    
    b.addEventListener("mouseout",function(){
        document.getElementById('admissions').style.display="none";
    });

    function learnmorebtn(){
        window.location="owner.html";
    }

    function validate(){
        var name= document.getElementById("formname").value;
        var email= document.getElementById("formemail").value;
        var msg = document.getElementById("comment").value;
        var validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(name==""){
            alert("Please Enter your Full Name");
            return false;
        }
       else if(email==""){
            alert("Please Enter Your Email");
            return false;
        }
       else if (validEmail.test(email)!=true){
            alert("Please Enter Correct email Adress");
        }
        else if(msg==""){
            alert("Please type Your message");
            return false;
        }

        alert("Thank you! You will be served soon");
    }