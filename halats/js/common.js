document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    /* скрипт для появления и исчезновения кнопки скролла вверх */

    window.onscroll = function() {function_for_scroll_top()};
    function function_for_scroll_top() {
        var ancor_to_top = document.querySelector(".ancor_to_top");
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            ancor_to_top.setAttribute("style", "transform: scale(1)");
        } else {
            ancor_to_top.setAttribute("style", "transform: scale(0)");
        }
    };

    /* слайдер swipper */

    var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    /* pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }, */
    
    breakpoints: {
        768: {
            slidesPerColumn: 1,
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: 30,
        },
        992: {
            slidesPerColumn: 2,
            slidesPerView: 2,
            autoHeight: false,
            spaceBetween: 30,
            spaceBetween: 15,
        },


    }
    });

    /* общие переменные */

    var body = document.querySelector("body");
    var navigationUl = document.querySelector(".navigation_ul");
    var soc_btn = document.querySelector(".soc_btn");
    var navigation = document.querySelector(".navigation");
    var overlay = document.querySelectorAll(".overlay");
    var popup_thanks = document.getElementById("popup_thanks");
    var btn_popup = document.querySelectorAll(".btn_popup");
    var popup_close = document.getElementsByClassName("popup_close");

    /* плавный скролл по ссылке */

    var goTo = document.querySelectorAll(".go_to");
    for (let i = 0; i < goTo.length; i++) {
        const element = goTo[i];
        element.addEventListener("click", function(e){
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
                    console.error(error + " проставьте верные id на которые ведёт ссылка")
                }
                
            }
        });
    }

    /* события для навигации в мобильном меню */

    var nav_circle = document.querySelector(".nav_circle");
    nav_circle.addEventListener("click", function(e){
        if (e.currentTarget.classList.contains("active")) {
            e.currentTarget.classList.remove("active");
            navigationUl.classList.remove("nav_action");
            soc_btn.classList.remove("nav_action");
        } else {
            e.currentTarget.classList.add("active");
            navigationUl.classList.add("nav_action");
            soc_btn.classList.add("nav_action");
        }
    });

    /* форма для полотенца */

    var polotence = document.getElementById("polotence");
    
    if (polotence) {
        polotence.addEventListener("change", function(e){
            console.log(e.currentTarget);
        });
    }

    /* поведение при клике на радиокнопки */

    var size_halat_checkbox = document.getElementsByClassName("size_halat_checkbox");
    for (let i = 0; i < size_halat_checkbox.length; i++) {
        size_halat_checkbox[i].addEventListener("click", function(){
            for (let i = 0; i < size_halat_checkbox.length; i++) {
                size_halat_checkbox[i].classList.remove("active");
            }

            size_halat_checkbox[i].classList.add("active");
        });
    }
    var color_halat_checkbox = document.getElementsByClassName("color_halat_checkbox");
    for (let i = 0; i < color_halat_checkbox.length; i++) {
        color_halat_checkbox[i].addEventListener("click", function(){
            for (let i = 0; i < color_halat_checkbox.length; i++) {
                color_halat_checkbox[i].classList.remove("active");
            }

            color_halat_checkbox[i].classList.add("active");
        });
    }
    var picture_top_checkbox = document.getElementsByClassName("picture_top_checkbox");
    for (let i = 0; i < picture_top_checkbox.length; i++) {
        picture_top_checkbox[i].addEventListener("click", function(){
            for (let i = 0; i < picture_top_checkbox.length; i++) {
                picture_top_checkbox[i].classList.remove("active");
            }
            picture_top_checkbox[i].classList.add("active");
        });
    }

    /* скрипт плавной прокрутки в header сайта */
    
    var ancorToTopArray = document.getElementsByClassName("ancor_to_top");
    for (let i = 0; i < ancorToTopArray.length; i++) {
        ancorToTopArray[i].addEventListener("click", function(e){
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        });
    }

    /* плавное появление текста на странице */

    var js_show_up_opacity = document.querySelectorAll(".js_show_up_opacity");

    window.addEventListener("scroll", function(){
        for (i = 0; i < js_show_up_opacity.length; i++) {
            if (js_show_up_opacity[i].offsetTop < window.pageYOffset + window.innerHeight) {
                js_show_up_opacity[i].classList.add("visible");
            } else {
                js_show_up_opacity[i].classList.remove("visible");
            }
        } 
        /* js_show_up_opacity.forEach(function() {
            for (i = 0; i < js_show_up_opacity.length; i++) {
                if (js_show_up_opacity[i].offsetTop < window.pageYOffset + window.innerHeight) {
                    js_show_up_opacity[i].classList.add("visible");
                } else {
                    js_show_up_opacity[i].classList.remove("visible");
                }
            }
        }); */
    });

    /* галлерея на странице галлерея */
    lightGallery(document.getElementById('lightgallery'));

    /* поворот коретки при клике на селектор 
    var select_wrap = document.querySelectorAll(".select_wrap");
    for (let i = 0; i < select_wrap.length; i++) {
        const element = select_wrap[i];
        element.addEventListener("click", function(e){
            e.preventDefault();
            if (e.currentTarget.classList.contains("active")) {
                e.currentTarget.classList.remove("active");
            } else {
                e.currentTarget.classList.add("active");
            }
        });
    }*/
    
    /* маска для телефона */
    /*
    var inputPhone = document.querySelectorAll(".input_phone");
    for (let i = 0; i < inputPhone.length; i++) {
        var cleave = new Cleave(inputPhone[i], {
            phone: true,
            // prefix: '+7',
            delimiter: '-',
            phoneRegionCode: 'RU'
        });
    }*/

    /* отправка формы 
    $(".form").submit(function(event) {
        event.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: form_data,
        success: function() {
            popup_thanks.style.visibility = "visible";
            popup_thanks.style.opacity = 1;
            $(".form").trigger("reset");
        },
        });
    });*/

    /* кастомный селект */

    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
    }
    function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect); 


    /* кастомный input range */

    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");

    if (slider && output) {
        output.innerHTML = slider.value; // Display the default slider value

        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
            output.innerHTML = this.value;
        } 
    }

    console.log("111");
});

/*
$(document).ready(function () {
    

 

$(".size_halat_checkbox").click(function(){
    $(".size_halat_checkbox").removeClass("active");
    $(this).addClass("active");
});
$(".color_halat_checkbox").click(function(){
    $(".color_halat_checkbox").removeClass("active");
    $(this).addClass("active");
});
$(".picture_top_checkbox").click(function(){
    $(".picture_top_checkbox").removeClass("active");
    $(this).addClass("active");
});

/* при клике на селекторы */
/*
$(".selector").click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("active");
    /* $(".selector").removeClass("active");
    $(this).addClass("active"); */
/*
});

});*/