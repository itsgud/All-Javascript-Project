document.getElementById("btnajax").addEventListener("click",makerequest);



//Arrow ke through
function makerequest() 
{
    console.log("Button Clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","data.txt",true);
    xhr.timeout=2000;

    xhr.onload=  () =>
    {
        
        
            if(xhr.status===200)
            {
                console.log(xhr);
                console.log(xhr.responseText);
            }
            else 
            {
                console.log("problem occured");
            }
        
    };
    xhr.onprogress=(e) =>
    {
        console.log('Tranasaction Proceess is started');
        console.log(e.loaded);
        console.log(e.total);
        
    }

    xhr.onerror=(e) =>
    {
        console.log('Network Not Available');
    }
     
    xhr.onloadstart=(e) =>
    {
        console.log(' Transction has started');
    }

    xhr.onloadend=(e) =>
    {
        console.log('Transaction End');
    }


    xhr.onabort=(e) =>
    {
        console.log('Transaction Abort');
    }
    xhr.ontimeout=(e) =>
    {
        console.log('Time out');
    }


    xhr.send();
}



