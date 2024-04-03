window.onload = function ()
{
    const path = window.location.pathname.split("/");
    console.log("path: " + path);
    switch (path[1]) {
        case "home":
        {
            loadPage("home");
            break;
        }
        case "jeu":
        {
            loadPage("jeu");
            break;
        }
        case "tournoi":
        {
            loadPage("tournoi");
            break;
        }
        case "computer":
        {
            loadPage("computer");
            break;
        }
        default:
        {
            break;
        }
    }
}


document.querySelectorAll(".link").forEach((item) => 
{
    item.addEventListener("click", function()
    {
        const stateObject1 = "http://localhost:8000";
        const path = item.getAttribute("value");
        console.log("path: "+ path);
        loadPage(path);
        if(path == "")
        {
            //window.history.pushState("", "", "/");
            return;
        }
        if (path == "home") {
            window.history.replaceState(stateObject1, "", "/index.html");
            // window.location.href = "/index.html";
        } else {
            window.history.replaceState(stateObject1, "", "/pages/" + path + "/index.html");
        }
        console.log(document.documentElement.innerHTML);
   
    });
});

function loadPage(path)
{
    console.log("page loading");
    if(path == "")
        return;
    const container = document.getElementById("container");
    const request = new XMLHttpRequest();
    const scriptRequest = new XMLHttpRequest();
    if(path == "home")
        request.open("GET", "/index.html");
    else
    {
        request.open("GET", "pages/" + path + "/index.html");
        scriptRequest.open('GET', "pages/" + path + "/script.js");
    }
    request.send();
    request.onload = function()
    {
        if(request.status == 200)
            container.innerHTML = request.responseText;

    }  
    // scriptRequest.send();
    // scriptRequest.onload = function()
    // {
    //     if(scriptRequest.status == 200)
    //         container.innerHTML += "<script>" + scriptRequest.responseText + "</script>";
    
    // }  

}