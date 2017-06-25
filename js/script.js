'use strict'


$(document).ready(function () {
    // Zmienne
    var slider = $('#slider');
    var slideShow = $('#slider .slide-show');

    // liczenie sldów j
    var slideCount = slideShow.children().length;
    //console.log(slideCount);

    /*
    //wersja druga 
    var slideCount = $('.single-slide').length;
    console.log(slideCount);
    */

    var slideWidth = 100 / slideCount;
    //console.log(slideWidth);

    var slideIndex = 0;

    // ustawienie szerokości kontenera
    slideShow.css('width', slideCount * 100 + '%');

    // Ustawienie marginesów i szerokości dla pojedynczychslajdów 
    slideShow.find('.single-slide').each(function (index) {
        var leftPercent = (slideWidth * index) + '%';
        $(this).css('margin-left', leftPercent);
        $(this).css('width', slideWidth + '%');
    })

    // Wywołanie funkcji slide na click
    $('.prev-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex - 1);
    })

    $('.next-slide').click(function(event) {
        event.preventDefault();
        slide(slideIndex + 1);
    })

    // Definicja funkcji slide
    function slide(newSlideIndex) {
        // Sprawdzamy czy pierwszy, czy ostatni slajd i wtedy nic nie robimy
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }

        // elemnty slideCaption przypisanie do funkcji
        var slideCaption = slider.find('.slider-caption').eq(newSlideIndex);

        // Ukrywanie napisu
        slideCaption.hide();
        
        // Zmienna trzymająca lewy margines do przesówania kontenera
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        // Animacja na slideShow
        slideShow.animate({'margin-left': marginLeft}, 800, function() {
            // prxypisanie do slideIndex nowego indeksu slajdu
            slideIndex = newSlideIndex;
            
            // pokazanie napisu przez fadeIn()
            slideCaption.fadeIn('slow');
            
            
            
        })




    }





})