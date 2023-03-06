//for side lists
var testlist=1;
function showlist(i,stop){
    if(testlist==1)
    {
        document.getElementById(i).style.transform="rotate(90deg)";
        var y = document.getElementsByClassName('list0');
        for(var c=0 ; c<stop ;c++)
        {
            y[i+c].style.visibility="visible";
            y[i+c].style.position="relative";
        }
        return testlist=0;
    }
    else
    {
        document.getElementById(i).style.transform="rotate(0deg)";
        var y = document.getElementsByClassName('list0');
        for(var c=0; c<stop ;c++)
        {
            y[i+c].style.visibility="hidden";
            y[i+c].style.position="absolute";
        }
        return testlist=1;
    }
}
// if(window.innerWidth < 1200 )
// {
//     var s = document.getElementsByTagName("section");
//     s[0].style.visibility="hidden";
// }

