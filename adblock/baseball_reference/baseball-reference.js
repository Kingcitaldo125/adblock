const adblock_ads = document.getElementsByClassName("adblock");
const footer_ads = document.getElementsByClassName("fs-sticky-footer");
const stathead_ads = document.getElementsByClassName("stathead_ad");

for (let i = adblock_ads.length - 1; i >= 0; --i) {
    adblock_ads[i].remove();
}

for (let i = 0; i < footer_ads.length; ++i) {
    footer_ads[i].remove();
}

for (let i = 0; i < stathead_ads.length; ++i) {
    stathead_ads[i].remove();
}

console.log("Removed Ads");
