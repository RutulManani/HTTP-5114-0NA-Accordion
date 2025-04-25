function accordion_toggle(section){
    console.log("Open");
    console.log(section);

    var selection = document.getElementById(section);
    //selection.style.display = "block";

    if(selection.style.display === "block"){
        selection.style.display = "none";
    }
    else{

        var allsections = document.getElementsByClassName("accordion-section");

        for (var i=0; i<allsections.length; i++){
            allsections[i].style.display="none";
        }

        selection.style.display = "block";
    }
}

