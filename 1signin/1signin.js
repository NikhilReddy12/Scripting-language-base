function validateform(){  
var log=document.myform.login.value;
var pass=document.myform.password.value;
if( log == null || log == "")
{
	alert("Enter UserName");
	return false;
}
if( pass == null || pass == "")
{
	alert("Enter Password");
	return false;
}
}
function myFunction(){
	var psw = document.getElementById("password");
	
	if(psw.type == "password"){
		psw.type = "text";
	}
		else{
			psw.type = "password";
		}


}