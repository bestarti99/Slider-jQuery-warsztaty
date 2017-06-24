'use strict'

var slider = $('#slider');
var slideShow = $('.slide-show');
var slideCount = $('.slide-show').length;
console.log($('.slide-show').length);

var slideWidth = slideCount/100;
var slideIndex = 0;

$('.slide-show').css('slideCount', '400%');

$('.slideShow').find('.single-slide');
$('.single-slide').each(function(index){
    
})




    

/*4.	W obiekcie slideShow za pomocą metody find() slide(.single-slide) i dla każdego (metoda each() - https://api.jquery.com/each/) wykonaj funkcję, która przypisze elementowi .single-slide lewy margines w procentach (szerokość slidu razy indeks) oraz szerokość w procentach (dla 5 slidów to 100%/5 czyli 20%)*/