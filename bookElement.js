
export default  function bookEle(book) {
  const liel = document.createElement('li')
  liel.innerHTML=`<h3> Title :${book.title}</h3> 
                    <h3> Author :${book.author}</h3>
                    <h3> Page Count : ${book.noPage}</h3>
                    <h3> Have you Read :${book.readStatus}</h3>
                    <button >Delet </button>`
  document.querySelector('ul').appendChild(liel);
  const delele = document.querySelectorAll('li button');
  const del = Array.from(delele);
  const lilist = Array.from(document.querySelectorAll('li'));
  del.forEach((bun)=>{
    bun.addEventListener('click',()=>{
       lilist[del.indexOf(bun)].remove();
    })
  })
}
