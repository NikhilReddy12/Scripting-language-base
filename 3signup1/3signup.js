
function validateform(){  
var nam=document.myform.uname.value;   
var mail=document.myform.email.value; 
var x = mail.indexOf("@");
var y = mail.lastIndexOf(".");
var pass=document.myform.password.value; 
var pass1=document.myform.password1.value; 
var fnam=document.myform.fname.value;
var lnam=document.myform.lname.value;
var gen=document.myform.gend.value;
//var gen=document.getElementById("gend");
/* var m=document.myform.genderm;
var f=document.myform.genderf;
var o=document.myform.gendero; */
var terms=document.myform.term;
if (nam==null || nam==""){  
  alert("choose UserName");  
  return false;  
}
 if(pass.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
 }
 if(pass1==null || pass1=="")
 {
	 alert("confirm ur password")
	 return false;
 }
 if(pass1!=pass){  
  alert("password doesn't match");  
  return false;  
 }
 if(mail==null || mail==""){
	 alert("email can't be blank");  
  return false; 
}
if (x < 1 || y < x + 2 || y + 2 >= x.length) {
                alert("Not a valid e-mail address");
                return false;
            }

 if(fnam==null ||fnam==""){  
  alert("Enter FirstName");  
  return false;  
 }
 if(lnam==null ||lnam==""){  
  alert("Enter LastName");  
  return false;  
 }
  
 if(gen == "Gender"  ){  
  alert("Select Gender");  
  return false;  
 } 
 if(terms.checked == false ){  
  alert("Accept Terms ");  
  return false;  
 } 
}