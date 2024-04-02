window.onload = function ()
{
    const path = window.location.pathname.split("/");
    console.log(path[1]);
    switch (path[1]) {
        case "jeu":
        {
            console.log("path " + path);
            loadPage("jeu");
            break;
        }
        case "tournoi":
        {
            console.log("path " + path);
            loadPage("tournoi");
            break;
        }
        case "computer":
        {
            console.log("path " + path);
            loadPage("computer");
            break;
        }
        default:
        {
            console.log("path " + path);
            //loadPage("home");
            break;
        }
    }
}

document.querySelectorAll(".link").forEach((item) => 
{
    item.addEventListener("click", function()
    {
        const path = item.getAttribute("value");
        console.log("value: " + path);
        loadPage(path);
        if(path == "")
        {
            window.history.pushState("", "", "/");
            return;
        }
        window.history.pushState("", "", "pages/" + path + "/index.html");
    });
});

function loadPage(path)
{
    console.log("p: " + path);
    if(path == "")
        return;
    const container = document.getElementById("container");
    const request = new XMLHttpRequest();
    request.open("GET", "pages/" + path + "/index.html");
    request.send();
    request.onload = function()
    {
        if(request.status == 200)
        {
            container.innerHTML = request.responseText;
        }
    }
}