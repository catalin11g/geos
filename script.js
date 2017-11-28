/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("open-close-button").style.left = "330px"
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    if(window.innerWidth < 630){
        document.getElementById("search").style.width = "0px";
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("open-close-button").style.left = "80px"
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("search").style.width = "250px";
}

function toggleNav(x) {
    if (x.classList.toggle("change")) {
        openNav();
    }
    else {
        closeNav();
    }
}

function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}




/* Nohai Bogdan 
   
*/


document.getElementById("open-close-button").addEventListener("click", toggleTimelineNav);



function toggleTimelineNav() {
    var bottomTimeline = document.getElementById("bottom-timeline");

    if (bottomTimeline.style.height == "150px"){
        bottomTimeline.style.height = "0px";
        document.getElementById("googleMap").style.marginBottom = "0px"
        document.getElementById("open-close-button").style.bottom = "0px";
    }
    else {
        bottomTimeline.style.height = "150px";
        document.getElementById("googleMap").style.marginBottom = "150px";
        document.getElementById("open-close-button").style.bottom = "150px";
    }

}


document.getElementById("btn-show-size").addEventListener("click", function(){
    toggleSizeAttr("size-container");
}, false);

document.getElementById("btn-show-type").addEventListener("click", function(){
    toggleSizeAttr("type-container");
}, false);

document.getElementById("btn-show-color").addEventListener("click", function(){
    toggleSizeAttr("color-container");
}, false);

document.getElementById("btn-show-time").addEventListener("click", function(){
    toggleSizeAttr("time-date-container");
}, false);


function toggleSizeAttr(someAttrId){
    var someAttrIdVar = document.getElementById(someAttrId);
  
    if (someAttrIdVar.style.display == "inherit"){
        someAttrIdVar.style.display = "none";
    }
    else {
        someAttrIdVar.style.display = "inherit";
    }
}




function updateRangeLocation(val) {
    document.getElementById("nr-km").innerHTML = val + " km"; 
}