
$('#btn_popup, #btn_popup_2, #btn_popup_3, #btn_popup_4, #btn_popup_5').on('click', function(event) {
    event.preventDefault();
    $('.popup_1').show('500');
});

$('.popup_close').on('click', function(event) {
    $('.overlay').hide('slow');
});
$('.overlay').mouseup(function(e) { // событие клика по веб-документу 
    var div = $(".popup"); // тут указываем ID элемента 
    if (!div.is(e.target) // если клик был не по нашему блоку 
        &&
        div.has(e.target).length === 0) { // и не по его дочерним элементам 
        //div.hide(); // скрываем его 
        $('.overlay').hide('slow');
    }
});
/*
    $('.owl-main').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: false,
        margin: 10,
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 700,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
*/



/*
    $('.more_shorten').shorten({
        ellipsesText: '...',
        moreText: '>>',
        lessText: '<<',
        showChars: 300,
    });*/

$('.navigation_callback').on('click', function(event) {
    $(this).toggleClass('active');
    $('#callback_inner').toggleClass('active');
});

$('.nav_circle').on('click', function(event) {
    $(this).toggleClass('active');
    $('.header__contacts').toggleClass('active');
});



$('.show_big_a').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});
/*
    $('.certificates_sheet_content').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small></small>';
            }
        }
    });
*/
/*
$(".tel").mask("+7 (999) 999-99-99", {
    placeholder: " "
}), {
    autoclear: false
};
*/

/* скрипт который определяет есть ли текст внутри элемента, если нет то скрывает */
var if_empty;

if_empty = $('.js_if_empty');

if_empty.each(function() {
    var x = $(this).text();
    x = $.trim(x).length;
    /* если длина больше 0 значит не пусто*/
    console.log(x);
    if (x < 1) {
        $(this).hide();
        console.log('пусто, скрываю элемент .js_if_empty');
    };
    if (x > 1) {
        $(this).closest('.shadow').removeClass('shadow'); /* скрываю тень элемента "хит" */
    };
});

$(".link_youtube:not([href^='http'])").hide();

/*
$('.link_youtube').fancybox({
    openEffect: 'none',
    closeEffect: 'none',
    helpers: {
        media: {}
    }
});
*/


/* скрипт плавной прокруткипо сайту */
$('.go_to').click(function() { // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
});


/* если отправляется форма */
/*
    $("form").submit(function(event) {
        console.log('попытка отправки формы');
        event.preventDefault();
        $('#popup_1').hide('500');
        $('#popup_thanks').show('500');
        $('.form_bottom, .form_main').css('display', 'none');
        $('.form_thanks').css('display', 'flex');
    });*/

/* скрипт отправки почты
$('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "<?php bloginfo('template_url') ?>/mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        //alert("Сообщение успешно отправлено");
        $('#popup_1').hide('500');
        $('#popup_thanks').show('500');
        $("form").trigger("reset");
    });
    return false;
});*/


