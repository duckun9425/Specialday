var to = 'My Teacher';
var gift_url = 'https://duckun9425.github.io/Specialday/?fbclid=IwAR2PVlYANbcQVHxAzTkcdcz4WNpVc_kO6eXD-pjA4tC5tLJCNQWFf-V5A6c';
var gift_image_url = 'https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.6435-9/60704178_865603677124679_1705792234936336384_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=go5nvDL7vlMAX9WwZrq&_nc_ht=scontent.fsgn8-2.fna&oh=00_AfAbk1D27IKOdLbmSAsvoKIRHok-Reo4zimGBpWZ4fkGgA&oe=6423C875';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    var _giftLink,
        _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function (e) {
        present.classList.toggle("open");
        document.getElementById('card').classList.add('cardshow');
    }, false);



    nametag.innerText = to;
}

init();
