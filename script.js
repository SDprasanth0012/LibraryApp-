import  bookEle from './bookElement.js';
const addbook = document.querySelector('.addbtn');
const popup = document.querySelector('dialog');
const confrm = document.querySelector('#confirm');
const clse = document.querySelector('#close')
 

// adding event listner to open and close popups 
addbook.addEventListener('click', ()=>{
    popup.showModal();
    confrm.addEventListener('click',(event)=>{
        popup.close();
    })
    clse.addEventListener('click',(event)=>{
        popup.close();
    })
})



// creating a  book object 
function book ( title, author, noPage, readStatus ){
  this.title = title,
  this.author= author,
  this.noPage = noPage,
  this.readStatus = readStatus
};

// array to stoore books 
const bookArray=[];

// selecting form elemnetn to add event listner
const form = document.querySelector('form');

//Adding a book to the bookarray 
form.addEventListener('submit',function(event){
     event.preventDefault();

     let title, author, page, readStatus;
     
     title= document.querySelector('#title').value;
     author=document.querySelector('#author').value;
     page=document.querySelector('#pages').value;
     readStatus=document.querySelector('#readStatus').value;
     let booktemp = new book(title,author,page,readStatus);
     bookArray.push(booktemp);
     form.reset();
     bookEle(booktemp);
     console.log(bookArray);
})      
 

