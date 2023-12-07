
function showPop1(){

    var popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = document.getElementById('pop1').innerHTML;
    popup.style.display = 'block';
}


function showPop2(){

    var popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = document.getElementById('pop2').innerHTML;
    popup.style.display = 'block';
}


function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
