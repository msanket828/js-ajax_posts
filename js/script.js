// var posts=document.querySelector('.posts'),
//     loadBtn=document.querySelector('.load-button'),
//     url='http://jsonplaceholder.typicode.com/posts',
//     output=" ";
// loadBtn.addEventListener('click',function(){
//   var xHr= new XMLHttpRequest();
//   xHr.onload=function() {
//     if(this.status==200 && this.readyState==4) {
//       // console.log(xHr.responseText);
//       jsonArray=JSON.parse(xHr.responseText);
//       // console.log(jsonArray);
//       jsonArray.forEach(function(value) {            
//         posts.innerHTML+=`<li>
//                           <p>Id: ${value.id}</p>
//                           <p>Title: ${value.title}</p>
//                           <p>Body: ${value.body}</p>                          
//                         </li>`;
//       })     
//     }
//   }
//   xHr.open('GET',url,true);
//   xHr.send();
// });



var posts=document.querySelector('.posts'),
    loadBtn=document.querySelector('.load-button'),
    url='http://jsonplaceholder.typicode.com/posts',
    output=" ";
  var xHr= new XMLHttpRequest();
  xHr.onload=function() {
    if(this.status==200 && this.readyState==4) {     
      jsonArray=JSON.parse(xHr.responseText);   
      function Initial(limit) {
        for( var i=0; i<limit; i++) {
          posts.innerHTML+=`<li>
                              <p>Id: ${jsonArray[i].id}</p>
                              <p>Title: ${jsonArray[i].title}</p>
                              <p>Body: ${jsonArray[i].body}</p>                          
                            </li>`;
        }
      }
      Initial(4);
      
      //after clicking on elements the we get;      
      var limit=4;
      loadBtn.addEventListener("click", function() {      
        console.log(limit);
        for (i = limit; i < limit+4; i++) {       
          if( i >= jsonArray.length) {          
            loadBtn.classList.toggle('hideBtn');
            break;
          } else {
              posts.innerHTML+=`<li>
                                <p>Id: ${jsonArray[i].id}</p>
                                <p>Title: ${jsonArray[i].title}</p>
                                <p>Body: ${jsonArray[i].body}</p>                          
                              </li>`;                                               
            }
        }
          limit = limit + 4;
      });      
        
    }
  
  }
  xHr.open('GET',url,true);
  xHr.send();  