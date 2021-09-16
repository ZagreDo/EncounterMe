function initialize() {
    var latlng = new google.maps.LatLng(54.69, 25.28);
    var options = {
        zoom: 14, center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), options);

    const image = "footprint.png";

    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Trail name</h1>' +
        '<div id="bodyContent">' +
        "<p>Trail information</p>" +
        "</div>" +
        "</div>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    const marker = new google.maps.Marker({
        position: latlng,
        map,
        icon: {
            size: new google.maps.Size(64, 64),
            scaledSize: new google.maps.Size(64, 64),
            url: image
        },
    });
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });

}