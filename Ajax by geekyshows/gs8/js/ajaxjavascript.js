document.getElementById("btnajax").addEventListener("click",makerequest);


 let nm=document.getElementById("name-id")
 let r=document.getElementById("roll-id")
 
//Arrow ke through
function makerequest() 
{
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.xml",true);
    xhr.responseType="document";

    xhr.onload=  () =>
    {  
        
        
            if(xhr.status===200)
            {
                console.log(xhr.response); 
                console.log(xhr.response.getElementsByTagName("student")); 
                
                console.log(
                    xhr.response
                    .getElementsByTagName("student")[0]
                    .getElementsByTagName("name")[0] 
                );
                
                console.log(
                    xhr.response
                    .getElementsByTagName("student")[0]
                    .getElementsByTagName("name")[0].childNodes[0]
                );

                console.log(
                    xhr.response
                    .getElementsByTagName("student")[0]
                    .getElementsByTagName("name")[0].childNodes[0].nodeValue
                );
                // display data on the webpage.....
                nm.innerText=xhr.response
                .getElementsByTagName("student")[0]
                .getElementsByTagName("name")[0].childNodes[0].nodeValue;

                r.innerText=xhr.response
                .getElementsByTagName("student")[0]
                .getElementsByTagName("roll")[0].childNodes[0].nodeValue;
            
            
              
            }
            else 
            {
                console.log("problem occured");
            }
        
    };
   

    xhr.send();
}



