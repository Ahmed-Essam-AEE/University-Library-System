function signup()
	{
		var fname = document.getElementByname("first name").value;
        var sname = document.getElementByname("second name").value;
        var email = document.getElementByname("e-mail").value;
		var number = document.getElementByname("number").value;
		var pwd = document.getElementByname("password").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(fname ==''||sname =='')
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
		else if(pwd.length < 8)
		{
			alert("Password min length is 8.");
		}
		else if(number.length < 11)
		{
			alert("number min length is 11.");
		}