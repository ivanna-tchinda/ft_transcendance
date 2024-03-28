window.onload = function ()
{
    const path = window.location.pathname.split("/");
    console.log(path);
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

document.querySelectorAll(".link").forEach((item) => 
{
    item.addEventListener("click", function()
    {
        const path = item.getAttribute("value");
        console.log(path);
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
    request.open("GET", "file:///mnt/nfs/homes/itchinda/Documents/Projets/ft_transcendance/pages/" + $path + ".html");
    request.send();
    request.onload = function()
    {
        if(request.status == 200)
        {
            container.innerHTML = request.responseText;
        }
    }
}