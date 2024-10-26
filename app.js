function getParameter(name) {
    let vars =location.search.substring(1).split("&")
    
    for (let parameter of vars) {
        let keyValue = parameter.split("=")
        if (keyValue[0] === name) {
            return keyValue[1]
        }
    }
    return null;
}

let urlVar = getParameter("url");
let url = urlVar !== null ? urlVar : "https://embedstreams.me/mlb/mlb-network-stream-1";

document.body.innerHTML = `<iframe 
                            src=${url} 
                            frameborder="0" allow="autoplay; encrypted-media"  
                            style="width: 100dvw; height: 116dvh;" 
                            scrolling frameborder='0' 
                            allowfullscreen referrerpolicy='unsafe-url'>
                            </iframe>`
