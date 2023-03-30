

window.addEventListener("load", function(){

    /*let menuBtn = document.getElementById("menu-btn");
    let mobileManu = document.getElementById("mobile-manu");
    let closeBtn = document.getElementById("close-btn");


    menuBtn.addEventListener("click", () =>{

        mobileManu.style.display="block";
    });

    closeBtn.addEventListener("click", () =>{
        mobileManu.style.display= "none";
    })

    let mobileMenuItem = this.document.getElementsByClassName("mobile-menu-item");

    for(let i=0; i < mobileMenuItem.length; i++){
        mobileMenuItem[i].addEventListener("click", () =>{
            mobileManu.style.display= "none";
        })
    }*/


    $("#menu-btn, #close-btn").click(() =>{
        $("#mobile-manu").toggle();
    });



    //for HEADER
/*
    let heroSection = document.getElementById("hero-section");
    let heroSectionHeight = heroSection.clientHeight;

    let header = document.getElementById("header");

    document.addEventListener("scroll", () =>{
        
        if(document.documentElement.scrollTop > heroSectionHeight){
            if(!header.classList.contains("solid-header")){
                header.classList.add("solid-header")
            }
        }else{
            if(header.classList.contains("solid-header")){
                header.classList.remove("solid-header");
            }
        }
    });
*/

$(this.document).scroll(()=>{
    let header = $("#header");
    if($(this).scrollTop() > $("#hero-section").height()){
        if(!header.hasClass("solid-header")){
           header.addClass("solid-header"); 
        }

    }else {
        if(header.hasClass("solid-header")){
            header.removeClass("solid-header");
        }
    }
});


var myMap = L.map('map', {
    center: [40.741770, -73.983090],
    zoom: 17
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

var myIcon = L.icon({
    iconUrl : 'img/map-icon.png'
})

var marker = L.marker([40.741770, -73.983090], {
    icon: myIcon
}).addTo(myMap)

marker.bindPopup("We are hear");

});


