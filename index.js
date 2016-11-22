var swiper = new Swiper('#my-swiper-up .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    
var swiper = new Swiper('#my-swiper .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });
    
/**Функция Скрывает/Показывает блок **/
function showHide(element_kz) {
    //Если элемент с id-шником element_id существует
    if (document.getElementById(element_kz)) { 
        //Записываем ссылку на элемент в переменную obj
         var obj = document.getElementById(element_kz); 
            //Если css-свойство display не block, то: 
            if (obj.style.display != "block") { 
                obj.style.display = "block"; //Показываем элемент
}
            else obj.style.display = "none"; //Скрываем элемент
}
    //Если элемент с id-шником element_id не найден, то выводим сообщение
    else alert("Элемент с id: " + element_kz + " не найден!"); 
} 

$.fn.clicktoggle = function(a, b) {
    return this.each(function() {
        var clicked = false;
        $(this).click(function(e) {
            e.preventDefault();
            if (clicked) {    
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};
$(function(){
	$('.more').clicktoggle(function(){
		$(this).parent().prev().fadeIn(700);
		$(this).text('Скрыть');
	}, function(){
		$(this).parent().prev().fadeOut(700);
		$(this).text('Показать полностью');
	});
});