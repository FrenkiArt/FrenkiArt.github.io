document.addEventListener("DOMContentLoaded", function(event) {

/* скролл в топ */
var scroll_top = document.createElement("a");
var scroll_top__arrow = document.createElement("div");
var scroll_top__text = document.createElement("div");
var footer = document.querySelector(".footer");

scroll_top.setAttribute("id", "scroll_top");
scroll_top.setAttribute("href", "#header");
scroll_top.classList.add("go_to");
scroll_top.style.position = "fixed";
scroll_top.style.left = 80 + "%";
scroll_top.style.bottom = -100 + "px";
scroll_top.style.opacity = 0.5;
scroll_top.style.zIndex = 5;
scroll_top.style.textDecoration = "none";
scroll_top.style.width = 80 + "px";
scroll_top.style.height = 80 + "px";
scroll_top.style.borderRadius = 100 + "%";
scroll_top.style.backgroundColor = "white";
scroll_top.style.boxShadow = "0px 3px 15px -3px rgba(0,0,0, 0.6)";
scroll_top.style.textAlign = "center";
scroll_top.style.transition = "transform 0.5s linear, top 0.3s linear, bottom 0.7s linear, left 0.7s linear, opacity 0.3s linear";
scroll_top.style.transform = "scale(0)";
scroll_top.appendChild(scroll_top__arrow);
scroll_top__arrow.setAttribute("class", "scroll_top__arrow");
scroll_top__arrow.style.width = 50 + "%";
scroll_top__arrow.style.height = 50 + "%";
scroll_top__arrow.style.borderRight = "3px solid #000000";
scroll_top__arrow.style.borderTop = "3px solid #000000";
scroll_top__arrow.style.position = "absolute";
scroll_top__arrow.style.top = 40 + "%";
scroll_top__arrow.style.left = 25 + "%";
scroll_top__arrow.style.transform = "rotate(-45deg)";
scroll_top.appendChild(scroll_top__text);
scroll_top__text.setAttribute("class", "scroll_top__text");
scroll_top__text.innerHTML = "вверх";
scroll_top__text.style.color = "#000000";
scroll_top__text.style.marginTop = 67 + "%";
scroll_top__text.style.textShadow = "0px 3px 10px rgba(0,0,0, 0.8)";

var show_scroll_top = function(){
    scroll_top.style.transform = "translate(0px, 0px) scale(1)";
};
var hide_scroll_top = function(){
    scroll_top.style.transform = "translate(0px, 200px) scale(0)";
};
var footer_join_scroll_top = function(){
    scroll_top.style.bottom = footer.offsetHeight - 50 + "px";
};
var footer_disconnect_scroll_top = function(){
    scroll_top.style.bottom = 100 + "px";
};

document.body.appendChild(scroll_top);

window.addEventListener("scroll", function(){
    /* появление и исчезновение scroll_top в зависимости от прокрутки экрана от верха*/
    if (window.pageYOffset > screen.height - 300) {
        show_scroll_top();
    } else {
        hide_scroll_top();
    }

    /* прикрепить scroll_top к высоте футера когда доскролил почти до конца страницы */
    if (footer.offsetTop + footer.offsetHeight/2 <= window.pageYOffset + window.innerHeight) {
        footer_join_scroll_top();
    } else {
        footer_disconnect_scroll_top();
    }
});

scroll_top.addEventListener("mouseover", function(){
    scroll_top.style.opacity = 1;
});
scroll_top.addEventListener("mouseout", function(){
    scroll_top.style.opacity = 0.5;
});

/* конец скролл в топ */

/* маска для телефона */

var inputPhone = document.querySelectorAll(".input_phone");
for (i = 0; i < inputPhone.length; i++) {
  var cleave = new Cleave(inputPhone[i], {
    phone: true,
    /* prefix: '+7',*/
    delimiter: '-',
    phoneRegionCode: 'RU'
  });
}
/* конец маски для телефона */

/* плавный скролл по ссылке */

var goTo = document.querySelectorAll(".go_to");
for (i = 0; i < goTo.length; i++) {
var element = goTo[i];
element.addEventListener("click", function (e) {
    e.preventDefault();
    var scrollEl = e.currentTarget.getAttribute("href");
    if (scrollEl.length != 0) {
    try {
        var ourTarget = document.querySelector(scrollEl);
        window.scrollTo({
        top: ourTarget.offsetTop,
        behavior: "smooth"
        });
    } catch (error) {
        console.error(error + " проставьте верные id на которые ведёт ссылка");
    }

    }
});
}
/* конец плавный скролл по ссылке */

/* всплывающие окна */

var overlay = document.querySelector("#overlay");
var popup = document.querySelectorAll(".popup");
var body = document.querySelector("body");
var popup_form = document.querySelector(".popup_form");
var close_this_popup = document.querySelectorAll(".close_this_popup");
var popup_thanks = document.querySelector(".popup_thanks");

var showOverlay = function funcShowOverlay(){
    overlay.classList.add("visible");
    body.style.overflow = "hidden";
};
var hideOverlay = function funcHideOverlay(){
    overlay.classList.remove("visible");
    body.style.overflow = "auto";
};

var showPopup_form = function funcShowPopup_form(){
    popup_form.classList.add("visible");
};
var hidePopup_form = function funcHidePopup_form(){
    popup_form.classList.remove("visible");
};
var hideAllPopup = function funcHideAllPopup(){
    for (var i = 0; i < popup.length; i++) {
        popup[i].classList.remove("visible");
    }
};

var js_triger_popup_form = document.querySelectorAll(".js_triger_popup_form");
for (var i = 0; i < js_triger_popup_form.length; i++) {
    js_triger_popup_form[i].addEventListener("click", function(){
        showOverlay();
        showPopup_form();
    });
}

for (var i = 0; i < close_this_popup.length; i++) {
    close_this_popup[i].addEventListener("click", function(){
        this.closest(".popup").classList.remove("visible");
        hideOverlay();
    });
}

overlay.addEventListener("click", function(){
    hideAllPopup();
    hidePopup_thanks();
    this.classList.remove("visible");
});

var showPopup_thanks = function funcShowPopup_thanks(){
    popup_thanks.classList.add("visible");
};
var hidePopup_thanks = function funcHidePopup_thanks(){
    popup_thanks.classList.remove("visible");
};

/* конец всплывающих окон */

function mapProject() {
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
        center: [55.830417, 49.067122],
        zoom: 17,
        controls: ["geolocationControl", "fullscreenControl"],
        });

        /* myMap.balloon.open(
        // Позиция балуна
        [55.710153, 37.442450], {
            contentBody: '<!--<div class="custom_label"><div class="triger"><div class="toggle_anime"><div class="circle"></div></div></div><div class="text">БЦ «Верейская Плаза 1»</div><div class="triangle"></div></div>-->',
        }, {
            // Опции балуна. В данном примере указываем, что балун не должен иметь кнопку закрытия.
            closeButton: false,
            balloonContentHeader: '',
            balloonMaxWidth: 643,
            balloonMaxheight: 235,
            balloonMinWidth: 400,
            balloonMinheight: 131,
        }); */

        // Создание метки 
        var myPlacemark = new ymaps.Placemark(
            // Координаты метки
            [55.830417, 49.067122], {
            balloonContentHeader: '<strong>promoLike</strong>',
            balloonContentBody: 'Улица Шамиля Усманова, 27',
            //balloonContentFooter: 'Подвал'
            }	
        );
        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.enable('drag');
        var zoomControl = new ymaps.control.ZoomControl({
        options: {
            position: {
            left: "auto",
            right: 10,
            top: 116
            }
        }
        });
        myMap.controls.add(zoomControl);
    }
}
mapProject();

/* аяксовая отправка формы через mailer.php */
$('.form_send').submit(function(event) {
    event.preventDefault();
    var form_data = $(this).serialize(); //собераем все данные из формы
    $.ajax({
    type: "POST", //Метод отправки
    url: "mailer/smart.php", //путь до php фаила отправителя
    data: form_data,
    success: function() {
        hideAllPopup();
        showPopup_thanks();
        $("form").trigger("reset");
    },
    });
    /* $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        //alert("Сообщение успешно отправлено");
        hideAllPopup();
        showPopup_thanks();
        $("form").trigger("reset");
    });
    return false; */
});
/* конец аяксовая отправка формы через mailer.php */

});