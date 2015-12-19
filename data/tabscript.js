var links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++){
    if (links[i].getAttribute("href") != null){
       links[i].addEventListener("mouseover", function(){
            var link = links[i].protocol+"//"+links[i].host+links[i].pathname+links[i].search+links[i].hash;
            self.port.emit("hover-link", link);
        }
        , false);
    }
}

