var books = [
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
function searchBook(){
  
  var title =  document.getElementById("title").value ,
      author = document.getElementById("author").value ,
      ISBN =  document.getElementById("ISBN").value ,
      pubyear =  document.getElementById("PubYear").value ; 

  if(title == "" || author == "" || ISBN == "" || pubyear == ""){
        alert("this must be filled out");
        document.getElementById(myform).focus();
        return false;

  }else if (isNaN(ISBN)){ 
        alert("Enter only numbers");
				document.getElementById("ISBN").style.color="Red";
				return false;
  }else if (isNaN(pubyear)){ 
    alert("Enter only numbers");
    document.getElementById("PubYear").style.color="Red";
    return false;
  }else{
    books.forEach (book => {
    if (book.title_ == title || book.author_ == author || book.ISBN_ == ISBN || book.Pubyear_ == pubyear){
      document.getElementById("res").innerHTML = book.title_ ;
    }else{
      document.getElementById("res").innerHTML = "no results" ;
    }
  });
  }

  





}