const sidebar_ads = document.getElementsByClassName("sidebar-tall-ad");
const sidebar_sticky_ads = document.getElementsByClassName("sidebar-tall-ad sticky");
const footer_ads = document.getElementsByClassName("fs-sticky-footer");
const sponsor_ads = document.getElementsByClassName("sponsor-ad");
const passage_bottom_ads = document.getElementsByClassName("passage-bottom-ad");
const popup_ads = document.getElementsByClassName("bg-popup-root");
const wrapper_ads = document.getElementsByClassName("wrapper");
const pagebottomads = document.getElementsByClassName("page-bottom-ad");

for (let i = 0; i < sidebar_ads.length; ++i) {
    sidebar_ads[i].remove();
}

for (let i = 0; i < sidebar_sticky_ads.length; ++i) {
    sidebar_sticky_ads[i].remove();
}

for (let i = 0; i < footer_ads.length; ++i) {
    footer_ads[i].remove();
}

for (let i = 0; i < sponsor_ads.length; ++i) {
    sponsor_ads[i].remove();
}

for (let i = 0; i < passage_bottom_ads.length; ++i) {
    passage_bottom_ads[i].remove();
}

for (let i = 0; i < popup_ads.length; ++i) {
    popup_ads[i].remove();
}

for (let i = wrapper_ads.length - 1; i >=0; --i) {
    wrapper_ads[i].remove();
}

for (let i = 0; i < pagebottomads.length; ++i) {
    pagebottomads[i].remove();
}

console.log("Removed Ads");
