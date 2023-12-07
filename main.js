
   

 

    class Book{
    constructor(title,author,page,lang,read){
    this.title=title;
    this.author=author;
    this.page=page;
    this.lang=lang;
    this.read=read;
  
  }

  updateBook(){
    this.read= !this.read;
  }


    }
    


    class Library{

     constructor(){
      this.myLibrary=[]
      this.bookForm=document.getElementById("book-form");
      this.bookForm.addEventListener("submit",(e)=>{
         e.preventDefault();
        
         this.addBookToLibrary()
      })
     
     }
     addBookToLibrary(){
    
      const title=document.querySelector("#title").value;
  
      const author=document.querySelector("#author").value;
      const page=document.querySelector("#page").value;
      const lang=document.querySelector("#lang").value;
      const read=document.querySelector("#read").checked;
    
      const newBook= new Book(title,author,page,lang,read)
      this.myLibrary.push(newBook)
  
      this.bookInLibrary()
  }
   

  bookInLibrary(){
    let tbody = document.querySelector('tbody')
    
     tbody.innerHTML=""
    for(let i=0;i<this.myLibrary.length;i++){
  
      let b=this.myLibrary[i];
      let tr = document.createElement('tr')
      let data="<td>"+b.title+"</td><td>"+b.author+"</td><td>"+b.page+"</td><td>"+b.lang+"</td>"+
      `<td>
    
      <button  onclick="library.updateBook(${i})">${ b.read ? "Read" : "Not Read"}</button>
    
      
    
    
      </td>`
     +`<td><button  onclick="library.deleteBook(${i})">Delete</button></td>`
     tr.innerHTML=data;
    tr.classList.add('book-style')
    tbody.appendChild(tr)
  
    }
   
    
   }

   deleteBook(index){
    this.myLibrary.splice(index,1)
    this.bookInLibrary()
  }


  updateBook(index){
  
    this.myLibrary[index].updateBook()
    this.bookInLibrary()
   }


    }
  const library= new Library()