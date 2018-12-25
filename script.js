function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    if (cssFile == "negative.css"){
        document.getElementById("logo").src="assets/logoNegative.png";
        document.getElementById("background").src="assets/header-backgroundNegative.png";
        document.getElementById("charity").src="assets/image-charityNegative.png";
        document.getElementById("handshake").src="assets/image-handshakeNegative.png";
    }

    else{
        document.getElementById("logo").src="assets/logo.png";
        document.getElementById("background").src="assets/header-background.png";
        document.getElementById("charity").src="assets/image-charity.png";
        document.getElementById("handshake").src="assets/image-handshake.png";
    }

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}