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
  e.preventDefault();
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
