function addBookValidation(){
    var name = document.getElementById("bookName").value ,
        category = document.getElementById("secName").value,
        price =  document.getElementById("Price").value ;

    if (name == ""  ){
        alert("this must be filled out");
        document.getElementById("bookName").focus ();
        return false;
    }else if( category == ""){
        alert("this must be filled out");
        document.getElementById("secName").focus ();
        return false;
    }else if ( price == ""){
        alert("this must be filled out");
        document.getElementById("Price").focus ();
        return false;
    }

    if (isNaN(price))
			{
				alert("Enter only numbers");
				document.getElementById("Price").style.color="Red";
				return false;
			}
    
    
}