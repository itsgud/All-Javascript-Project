document.getElementById("btnajax").addEventListener("click",makerequest);
let t=document.getElementById("title")
let b=document.getElementById("body")
let table=document.getElementById("table")

//Arrow ke through
function makerequest() 
{
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://dummyjson.com/carts",true);
    xhr.responseType="json";

    xhr.onload=  () =>
    {  
         
        
            if(xhr.status===200)
            {

               console.log(xhr.response);
               x=xhr.response;
               console.log("length of the response is :  ",x.limit);
               for( i=0;i<x.limit;i++)
               {
                 table.innerHTML+=
                          "<tr> <td>"+
                          x[i].id+
                          " <td></td> "+
                          x[i].title+
                          "<td></td>"+
                          x[i].price+
                          "</td> </tr> "

               
               }
            //    console.log(xhr.response.userId)
            //    console.log(xhr.response.id)
            //    console.log(xhr.response.title)
            //    console.log(xhr.response.body)

               // t.innerText=xhr.response.title
            //    b.innerText=xhr.response.body
               
               
                
            }
            else 
            {
                console.log("problem occured");
            }
        
    };
   

    xhr.send();
}



