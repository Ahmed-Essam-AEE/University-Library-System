function login()
	{
		var email = document.getElementById("pass").value;
		var pwd = document.getElementByname("password").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(email =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(email))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 8 )
		{
			alert("Password min length is 8.");
		}