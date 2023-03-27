var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = 'none';
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    $(x[myIndex-1]).fadeIn();  
    setTimeout(carousel, 2000);    
}










//Se encarga de mostrar el botón cuando se hace scroll
$(window).scroll(function(){
   if ($(this).scrollTop() > 800) {
        $('.arrowtop').fadeIn();
   } else {
        $('.arrowtop').fadeOut();
   }
});
//Se encarga de subir al top al hacer clic en el botón
function arriba(){
	$("html, body").animate({ scrollTop: 0 }, 600);
    return false;
}
function saludo(nombre) {
           alert('Hola, ' + nombre);
   }