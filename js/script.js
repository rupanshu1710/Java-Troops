x=navigator.geolocation;
x.getCurrentPosition(success, failure);
function success(position)
{
   var mylat=position.coords.latitude;
var mylong = position.coords.longitude; 
console.log(mylat);
document.getElementById("loc1").innerHTML=mylat;
document.getElementById("loc2").innerHTML=mylong;
var coords = new google.maps.LatLng(mylat,mylong);
var mapOptions={
     zoom: 9,
     center: coords,
     mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map=new google.maps.Map(document.getElementById("map"),mapOptions);
var marker=new google.map.Marker({map: map, position: coords});
}
function failure()
{

}