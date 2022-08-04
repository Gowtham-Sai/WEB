function Validation()
{
	var a = document.forms["Registration"]["student name"].value;
	var g = /^(?=.*?[A-z])(?=.*?[a-z])/;
	if(!g.test(a))
	{
		alert("student name should be only letters");
		return false;
	}
	var b = document.getElementById("number").value;
	if(isNaN(b))
	{
		alert("Invalid input for Phone no.");
		return false;
	}
	else if(b.length < 10)
	{
		alert("Phone no should be of 10 digits.")
		return false;
	}
	var c = document.getElementById("password").value;
	if(c.length < 6)
	{
		alert("password length should be less than 6.");
		return false;
	}
	var d = document.getElementById("aadhar_no").value;
	if(d.length < 12)
	{
		alert("aadhar_no should not be less than 12.");
		return false;
	}
	var e = document.getElementById("email").value;
	var f = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;
	if(!f.test(e))
	{
		alert("email should contain only the following : A-Z, a-z, 0-9");
		return false;
	}
}