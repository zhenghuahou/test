import './css/pageA.css'
var tt1 = require('./img/p1.png'); //url-loader(-->base64)

var tt2 = require('./img/p2.png?nobase'); //命名是按照url-loader来的,最终经过file-loader
var banner = require('./banner.min.png'); //命名是按照url-loader来的,最终经过file-loader
// var partnermin = require('./pic/partnermin.png'); //命名是按照url-loader来的,最终经过file-loader
// console.log('   tt:',tt1);
// console.log('   tt2:',tt2);

var img1 = document.createElement("img");
img1.src = tt1;
img1.classList.add('tt1');
document.body.appendChild(img1);


function backgroundImage () {
    // let iconUrl = require('global/img/location.nobase.png?nobase').replace('https', 'http')
    // let iconUrl2 = require('global/img/logo.png').replace('https', 'http')
    console.log('  iconUrl--->', iconUrl)
    console.log('  iconUrl2>', iconUrl2)
    return `-webkit-linear-gradient(left, rgba(255, 255, 255, 1) 33.3%, rgba(255, 255, 255, 0) 75%) ${iconUrl})` 
}

var img2 = document.createElement("img");
img2.src = tt2;
img2.classList.add('tt2');
// img2.style.backgroundImage = 
document.body.appendChild(img2);