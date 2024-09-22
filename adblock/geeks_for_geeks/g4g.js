var adIDs = document.querySelectorAll("[id*=GFG_AD]");

for(var i = 0; i < adIDs.length; ++i)
{
    var lid = adIDs[i];
    lid.remove();
}
