window.onload = function ()
{
    const path = window.location.pathname.split("/");
    if(path[8] == "pages")
    {
        switch (path[9]) {
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
            case "ordinateur":
            {
                loadPage("ordinateur");
                break;
            }
        }
    }
}

document.querySelectorAll(".link").forEach((item) => 
{
    item.addEventListener("click", function()
    {
        const path = item.getAnimations("value");
        loadPage(path);
        if(path == "")
        {
            window.history.pushState("", "", "/");
            return;
        }
        window.history.pushState("", "", "/");
    });
});

function loadPage($path)
{
    if($path == "")
        return;
    const container = document.getElementById("container");
    const request = new XMLHttpRequest();
    request.open("GET", "pages/" + $path + ".html");
    request.send();
    request.onload = function()
    {
        if(request.status == 200)
        {
            container.innerHTML = request.responseText;
        }
    }
}