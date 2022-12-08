function mobilenav(){
    document.getElementById('button').setAttribute('onclick','activemobilenav()')
    document.getElementById("mobilenav").style.display ="contents";
};   

function activemobilenav(){
    document.getElementById('button').setAttribute('onclick','mobilenav()')
    document.getElementById("mobilenav").style.display ="none";
};  