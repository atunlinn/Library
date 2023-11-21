
let myLibrary=[]
   

 

function book(title,author,page,lang,read){
    this.title=title;
    this.author=author;
    this.page=page;
    this.lang=lang;
    this.read=read;
  
    
    }
    
    function addBookToLibrary(){
    
        const title=document.querySelector("#title").value;
    
        const author=document.querySelector("#author").value;
        const page=document.querySelector("#page").value;
        const lang=document.querySelector("#lang").value;
        const read=document.querySelector("#read").checked;
      
        const newBook= new book(title,author,page,lang,read)
        myLibrary.push(newBook)
    
        bookInLibrary()
    }
          
     const bookForm=document.getElementById("book-form");
     bookForm.addEventListener("submit",function(e){
        e.preventDefault();
       
        addBookToLibrary()
     })
  
 function bookInLibrary(){
  let tbody = document.querySelector('tbody')
  
   tbody.innerHTML=""
  for(let i=0;i<myLibrary.length;i++){

    let b=myLibrary[i];
    let tr = document.createElement('tr')
    let data="<td>"+b.title+"</td><td>"+b.author+"</td><td>"+b.page+"</td><td>"+b.lang+"</td>"+
    `<td>
  
    <button  onclick="updateBook(${i})">${ b.read ? "Read" : "Not Read"}</button>
  
    
  
  
    </td>`
   +`<td><button  onclick="deleteBook(${i})">Delete</button></td>`
   tr.innerHTML=data;
  tr.classList.add('book-style')
  tbody.appendChild(tr)

  }
 
  
 }
  function deleteBook(index){
    myLibrary.splice(index,1)
    bookInLibrary()
  }


 
 
 book.prototype.updateBook=function (){
    this.read= !this.read;
  
 }
 

   function updateBook(index){
  
    myLibrary[index].updateBook()
    bookInLibrary()
   }
  
