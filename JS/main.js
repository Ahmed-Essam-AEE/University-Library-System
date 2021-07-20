
  
function addBookValidation(){
  var name = document.getElementById("name").value ,
      category = document.getElementById("Category").value,
      price =  document.getElementById("price").value ;

  if (name == ""  ){
      alert("this must be filled out");
      document.getElementById("name").focus ();
      return false;
  }else if( category == ""){
      alert("this must be filled out");
      document.getElementById("Category").focus ();
      return false;
  }else if ( price == ""){
      alert("this must be filled out");
      document.getElementById("price").focus ();
      return false;
  }

  if (isNaN(price))
    {
      alert("Enter only numbers");
      document.getElementById("Price").style.color="Red";
      return false;
    }
  
  
}
document.getElementById("form").addEventListener('submit',(e)=>{
  let name = document.getElementById("name").value;
  let category = document.getElementById("Category").value;
  let price =document.getElementById("price").value ;
  creatBook(name,category,price);
});

var Books = [];

function creatBook(name,category,price) {
  var book = {
    name : name,
    category : category,
    price : price 
  }
  Books.push(book);
  console.log (Books);
  addBookValidation()
}


function searchBook(){

  var title =  document.getElementById("title").value ,
      author = document.getElementById("author").value ,
      ISBN =  document.getElementById("ISBN").value ,
      pubyear =  document.getElementById("PubYear").value ; 

  if(title == "" || author == "" || ISBN == "" || pubyear == "")
  {
        alert("this must be filled out");
        document.getElementById(myform).focus();
        return false;

  }
  else if (isNaN(ISBN))
  { 
        alert("Enter only numbers");
				document.getElementById("ISBN").style.color="Red";
				return false;
  }
  else if (isNaN(pubyear))
  { 
    alert("Enter only numbers");
    document.getElementById("PubYear").style.color="Red";
    return false;
  }
  else if (isNaN(price))
    {
      alert("Enter only numbers");
      document.getElementById("Price").style.color="Red";
      return false;
    }
}

/*var books = [
  {
    "title_" : "T1",
    "author_" : "A1",
    "ISBN_" : "I1",
    "Pubyear_" : "Y1"
  },
  {
    "title_" : "T2",
    "author_" : "A2",
    "ISBN_" : "I2",
    "Pubyear_" : "Y2"
  },
  {
    "title_" : "T3",
    "author_" : "A3",
    "ISBN_" : "I3",
    "Pubyear_" : "Y3"
  }
]

function searchBook(title,author,ISBN,pubyear){

  var title =  document.getElementById("title").value ,
      author = document.getElementById("author").value ,
      ISBN =  document.getElementById("ISBN").value ,
      pubyear =  document.getElementById("PubYear").value ; 

  if(title == "" || author == "" || ISBN == "" || pubyear == "")
  {
        alert("this must be filled out");
        document.getElementById(myform).focus();
        return false;

  }
  else if (isNaN(ISBN))
  { 
        alert("Enter only numbers");
				document.getElementById("ISBN").style.color="Red";
				return false;
  }
  else if (isNaN(pubyear))
  { 
    alert("Enter only numbers");
    document.getElementById("PubYear").style.color="Red";
    return false;
  }
  else
  {
    books.forEach (book => {
    if (book.title_ == title || book.author_ == author || book.ISBN_ == ISBN || book.Pubyear_ == pubyear)
    {
      document.getElementById("res").innerHTML = book.title_ ;
    }
    else
    {
      document.getElementById("res").innerHTML = "no results" ;
    }
  if (isNaN(price))
    {
      alert("Enter only numbers");
      document.getElementById("Price").style.color="Red";
      return false;
    }
  });
  }
}  */

  
 
