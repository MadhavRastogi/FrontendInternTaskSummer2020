/* ========================WRITE YOUR JS FROM HERE======================== */
function validateForm()
{
	//fetching values from textfields
	var x=document.getElementById('p').value;
	var y=document.getElementById('cp').value;
	var z=document.getElementById('pn').value;
	var lt=z.length;
	var flag=0;
	if(x != y)//matching password and confirm password values 
	{
		window.alert("Type password Correctly");
		return false;
	}
	if(lt!=10)//phone number must have 10 digits
	{
		window.alert("Invalid Phone Number");
		return false;
	}
	try//using try catch to check if the user enters text or special character instead 
	   //of digits 
	{
		var m=parseInt(z);
	}
	catch
	{
		window.alert("Invalid Phone Number");
		return false;
	}
	if(flag==0)//if all validations passed it returns true and we are redirected to 
		      //the login successful page 
	{
	  window.alert("Login Succesful");	
      return true;
    }
}