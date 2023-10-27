document.getElementById("btnajax").addEventListener("click",makerequest);


 let nm=document.getElementById("name-id")
 let r=document.getElementById("roll-id")
 
//Arrow ke through
function makerequest() 
{
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.json",true);
    xhr.responseType="json";

    xhr.onload=  () =>
    {  
        
        
            if(xhr.status===200)
            {
                console.log(xhr.response); 
                console.log(xhr.response.name); 
                console.log(xhr.response.roll); 
                nm.innerText=xhr.response.name;
                r.innerText=xhr.response.roll;
                
               /// dt.innerText= xhr.responseText
            }
            else 
            {
                console.log("problem occured");
            }
        
    };
   

    


    xhr.send();
}



