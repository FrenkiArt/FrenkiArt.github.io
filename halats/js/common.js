document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    /* скрипт для появления и исчезновения кнопки скролла вверх */

    window.onscroll = function () {
        function_for_scroll_top();
    };

    function function_for_scroll_top() {
        var ancor_to_top = document.querySelector(".ancor_to_top");
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            ancor_to_top.setAttribute("style", "transform: scale(1)");
        } else {
            ancor_to_top.setAttribute("style", "transform: scale(0)");
        }
    }

    /* слайдер swipper */

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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
                spaceBetween: 15,
            },
        }
    });

    /* общие переменные */

    
    var navigationUl = document.querySelector(".navigation_ul");
    var soc_btn = document.querySelector(".soc_btn");
    var header_contact_block = document.querySelector(".header_contact_block");

    /* плавный скролл по ссылке */

    var goTo = document.querySelectorAll(".go_to");
    for (var i = 0; i < goTo.length; i++) {
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

    /* события для навигации в мобильном меню */

    var nav_circle = document.querySelector(".nav_circle");
    nav_circle.addEventListener("click", function (e) {
        if (e.currentTarget.classList.contains("active")) {
            e.currentTarget.classList.remove("active");
            navigationUl.classList.remove("nav_action");
            soc_btn.classList.remove("nav_action");
            header_contact_block.classList.remove("nav_action");
        } else {
            e.currentTarget.classList.add("active");
            navigationUl.classList.add("nav_action");
            soc_btn.classList.add("nav_action");
            header_contact_block.classList.add("nav_action");
        }
    });

if(document.querySelector(".constructor")){


    /* форма для полотенца */

    var polotence = document.getElementById("polotence");

    if (polotence) {
        polotence.addEventListener("change", function (e) {
            console.log(e.currentTarget);
        });
    }

    /* поведение при клике на радиокнопки */

    /* var input_size_halat_checkbox = document.querySelectorAll("input[name='size_halat_checkbox'");
    for (var i = 0; i < input_size_halat_checkbox.length; i++) {
        input_size_halat_checkbox[i].addEventListener("input", function(){
            console.log(this.closest("label"));
        });
    } */

    var size_halat_checkbox = document.querySelectorAll(".size_halat_checkbox");

    /* for (var i = 0; i < size_halat_checkbox.length; i++) {
        size_halat_checkbox[i].addEventListener("click", function () {
            size_halat_checkbox.forEach(function (e) {
                e.classList.remove("active");
            });
            this.classList.add("active");
        });
    }

    var color_halat_checkbox = document.querySelectorAll(".color_halat_checkbox");
    for (var i = 0; i < color_halat_checkbox.length; i++) {
        color_halat_checkbox[i].addEventListener("click", function () {
            color_halat_checkbox.forEach(function (e) {
                e.classList.remove("active");
            });
            this.classList.add("active");
        });
    }
    var picture_top_check = document.querySelectorAll(".picture_top_checkbox");
    for (var i = 0; i < picture_top_check.length; i++) {
        picture_top_check[i].addEventListener("click", function () {
            picture_top_check.forEach(function (e) {
                e.classList.remove("active");
            });
            this.classList.add("active");
        });
    } */

    /* поведение при выборе верхнего рисунка */

    /* когда выбрали рисунок */
    var input_picture_top_image = document.querySelectorAll("input[name = 'picture_top_image'");
    
    for (var i = 0; i < input_picture_top_image.length; i++) {
        input_picture_top_image[i].addEventListener("change", function () {
            var newTopImg = this.previousElementSibling.cloneNode(true);
            newTopImg.classList.add("picture_top_in_preview");
            for (var i = 0; i < picture_top_checkbox.length; i++) {
                if(picture_top_checkbox[i].checked=="small"){
                    document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                    e.classList.remove("small");
                    e.classList.remove("medium");
                    e.classList.remove("big");
                    e.classList.add("small");
                });
                }
                if(picture_top_checkbox[i].checked=="medium"){
                    document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                    e.classList.remove("small");
                    e.classList.remove("medium");
                    e.classList.remove("big");
                    e.classList.add("medium");
                });
                }
                if(picture_top_checkbox[i].checked=="big"){
                    document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                    e.classList.remove("small");
                    e.classList.remove("medium");
                    e.classList.remove("big");
                    e.classList.add("big");
                });
                }
            }

            for (var i = 0; i < preview_img.children.length; i++) {
                if (preview_img.children[i].classList.contains("picture_top_in_preview")) {
                    preview_img.children[i].remove();
                }
            }
            preview_img.appendChild(newTopImg);
            
        });
    }

    var input_picture_bottom_image = document.querySelectorAll("input[name = 'picture_bottom_image'");
    for (var i = 0; i < input_picture_bottom_image.length; i++) {
        input_picture_bottom_image[i].addEventListener("change", function () {
            var newTopImgBottom = this.previousElementSibling.cloneNode(true);
            newTopImgBottom.classList.add("picture_bottom_in_preview");

            for (var i = 0; i < preview_img.children.length; i++) {
                if (preview_img.children[i].classList.contains("picture_bottom_in_preview")) {
                    preview_img.children[i].remove();
                }
            }
            preview_img.appendChild(newTopImgBottom);
        });
    }

    /* когда выбрали размер верхней картинки */

   
    var picture_top_checkbox = document.querySelectorAll("input[name = 'picture_top_checkbox']");
    for (var i = 0; i < picture_top_checkbox.length; i++) {
        picture_top_checkbox[i].addEventListener("click", function () {
            if (this.value == "small") {
                document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                    e.classList.remove("small");
                    e.classList.remove("medium");
                    e.classList.remove("big");
                    e.classList.add("small");
                });
            }
            if (this.value == "medium") {
                document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                    e.classList.remove("small");
                    e.classList.remove("medium");
                    e.classList.remove("big");
                    e.classList.add("medium");
                });
            }
            if (this.value == "big") {
                document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                    e.classList.remove("small");
                    e.classList.remove("medium");
                    e.classList.remove("big");
                    e.classList.add("big");
                });
            }
        });
    }

    /* микросервис Табера */
    var tab = document.querySelectorAll(".tab");

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", function () {
            this.classList.toggle("active");
        });
    }
    /* конец микросервис Табера */

    /* скрипт плавной прокрутки в header сайта */
    var ancorToTopArray = document.getElementsByClassName("ancor_to_top");
    for (var i = 0; i < ancorToTopArray.length; i++) {
        ancorToTopArray[i].addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* плавное появление текста на странице */

    var js_show_up_opacity = document.querySelectorAll(".js_show_up_opacity");

    window.addEventListener("scroll", function () {
        for (i = 0; i < js_show_up_opacity.length; i++) {
            if (js_show_up_opacity[i].offsetTop < window.pageYOffset + window.innerHeight) {
                js_show_up_opacity[i].classList.add("visible");
            } else {
                js_show_up_opacity[i].classList.remove("visible");
            }
        }
    });

    /* галлерея на странице галлерея */
    lightGallery(document.getElementById('lightgallery'));

    if (window.matchMedia("(min-width: 769px)").matches) {

    } else {
        /* кнопка больше фоторгрфий */

        var btn_more_image = document.querySelector(".js_more_image");
        var imgs_for_cikl = document.querySelectorAll("#lightgallery .img");
        var count_imgs = 0; /* здесь точка отсчёта для фоток */
        var count_for_show_imgs = 2; /* сколько фотографий показывать */
        var how_mach = 2; /* переменная регулирует на сколько больше фоток показывать каждый раз при клике на кнопку тригер */

        /* цикл который при старте страницы скрывает лишние фотки */
        for (var i = 0; i < imgs_for_cikl.length; i++) {

            count_imgs += 1;
            if (count_imgs <= count_for_show_imgs) {
                imgs_for_cikl[i].style.display = "block";
            } else {
                imgs_for_cikl[i].style.display = "none";
            }
        }

        /* при нажатии на кнопку тригер, цикл заново проходит по фотографиям и показывает их больше на количество */
        if (btn_more_image) {
            btn_more_image.addEventListener("click", function () {
                count_for_show_imgs += how_mach;
                var count_imgs = 0;
                for (var i = 0; i < imgs_for_cikl.length; i++) {
                    count_imgs += 1;
                    if (count_imgs <= count_for_show_imgs) {
                        imgs_for_cikl[i].style.display = "block";

                        if (count_imgs >= imgs_for_cikl.length) {
                            //btn_more_image.innerHTML = "Фотографий больше нет";
                            btn_more_image.setAttribute("disabled", true);
                            btn_more_image.style.opacity = 0.5;
                        }

                    } else {
                        imgs_for_cikl[i].style.display = "none";
                    }
                    //console.log(count_imgs, imgs_for_cikl.length);
                }
            });
        }
        /* конец кнопка больше фоторгрфий */
    }




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
            c.addEventListener("click", function (e) {
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
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");

            /* мой код */
            var picture_top_images__block = document.querySelectorAll(".picture_top_images__block");
            for (var i = 0; i < picture_top_images__block.length; i++) {
                picture_top_images__block[i].style.display = "none";
            }
            var picture_bottom_images__block = document.querySelectorAll(".picture_bottom_images__block");
            for (var i = 0; i < picture_bottom_images__block.length; i++) {
                picture_bottom_images__block[i].style.display = "none";
            }
            /* для нижних рисунков */
            if (e.target.innerHTML == "Без рисунка") {
                removeBottomImg();
            }
            if (e.target.innerHTML == "Вензеля") {
                document.querySelector(".picture_bottom_images__block.venzelja").style.display = "block";
            }
            /* конец для верхних рисунков */
            if (e.target.innerHTML == "Нет") {
                removeTopImg();

            }
            if (e.target.innerHTML == "Короны") {
                document.querySelector(".picture_top_images__block.korona").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Животные") {
                document.querySelector(".picture_top_images__block.animal").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Популярное") {
                document.querySelector(".picture_top_images__block.popular").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Профессии") {
                document.querySelector(".picture_top_images__block.profession").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Разное") {
                document.querySelector(".picture_top_images__block.raznoe").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Рамки") {
                document.querySelector(".picture_top_images__block.frame_and_name").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Рамки на грудь") {
                document.querySelector(".picture_top_images__block.frame_on_chest").style.display = "block";
                funcSetMiddleSizeTopImg();
            }


            if (e.target.innerHTML == "Розы") {
                document.querySelector(".picture_top_images__block.roses").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Спорт") {
                document.querySelector(".picture_top_images__block.sport").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
            if (e.target.innerHTML == "Вензиля") {
                document.querySelector(".picture_top_images__block.venzilja").style.display = "block";
                funcSetMiddleSizeTopImg();
            }
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
                arrNo.push(i);
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
        slider.oninput = function () {
            output.innerHTML = this.value;
        };
    }


    /* js для конструктора */

    if(document.querySelector(".preview_img")!=null){
        var preview_img = document.querySelector(".preview_img");
        var img_preview_for_halat = document.querySelector("#img_preview_for_halat");
    }
    

    var input_color_halat_checkbox = document.querySelectorAll("input[name='color_halat_checkbox'");
    for (var i = 0; i < input_color_halat_checkbox.length; i++) {
        input_color_halat_checkbox[i].addEventListener("click", function (e) {
            if (e.target.value == "white") {
                if (halat_mahr.classList.contains("active")) {
                    img_preview_for_halat.src= "img/halat_mahrovi_white.png";
                }
                if (halat_velur.classList.contains("active")) {
                    img_preview_for_halat.src= "img/halat_velur_white.png";
                }
                /* if (halat_child_mahr.classList.contains("active")) {
                    img_preview_for_halat.src= "img/constuctor_img_preview_vzroslii_halat_white.png";
                } */
                if (halat_polotence.classList.contains("active")) {
                    img_preview_for_halat.src= "img/constuctor_img_preview_polotence_white.png";
                }
            }
            if (e.target.value == "blue") {
                if (halat_mahr.classList.contains("active")) {
                    img_preview_for_halat.src= "img/halat_mahrovi_blue.png";
                }
                if (halat_velur.classList.contains("active")) {
                    img_preview_for_halat.src= "img/halat_velur_blue.png";
                }
                /* if (halat_child_mahr.classList.contains("active")) {
                    img_preview_for_halat.src= "img/constuctor_img_preview_vzroslii_halat_blue.png";
                } */
                if (halat_polotence.classList.contains("active")) {
                    img_preview_for_halat.src= "img/constuctor_img_preview_polotence_blue.png";
                }
            }
        });
    }

    var input_size_halat_checkbox = document.querySelectorAll("input[name='size_halat_checkbox'");

    var trashSize = document.createElement("div");
    trashSize.classList.add("trashSize");
    if(preview_img!=null){
        preview_img.appendChild(trashSize);
    }
    
    trashSize.style.position = "absolute";
    trashSize.style.bottom = 10 + "px";
    trashSize.style.left = 40 + "%";

    for (var i = 0; i < input_size_halat_checkbox.length; i++) {
        input_size_halat_checkbox[i].addEventListener("click", function (e) {
            /* if (e.target.value == "size70Х140") {
                trashSize.innerHTML = e.target.value;
            }
            if (e.target.value == "size50Х100") {
                trashSize.innerHTML = e.target.value;
            } */
            trashSize.innerHTML = e.target.value;
        });
    }

    /* поведение поля "текст на полотенце" */
    var text_on_halat = document.querySelector("textarea[name = 'text_on_halat']");
    var textOnImg = document.createElement("div");
    textOnImg.classList.add("text_on_img");
    if(preview_img!=null){
        preview_img.appendChild(textOnImg);
    }
    
    text_on_halat.addEventListener("input", function () {
        textOnImg.innerText = this.value;
    });

    /* выбор шрифта для надписи */
    var select_arrow_active = document.querySelector(".font_halat > div:nth-child(2) > div:nth-child(2)");
    var fonts_halat = document.querySelectorAll(".font_halat .select-items div");
    for (var i = 0; i < fonts_halat.length; i++) {
        fonts_halat[i].addEventListener("click", function () {
            switch (this.innerText) {
                case 'Arial':
                    //console.log("arial");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'Ariston':
                    //console.log("Ariston");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'AGCENB':
                    //console.log("AGCENB");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'Ciyrillic':
                    //console.log("Ciyrillic");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'Majestic':
                    //console.log("Majestic");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'Mon-Amour':
                    //console.log("Mon-Amour");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'Mtcorsva':
                    //console.log("Mtcorsva");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'Pompadur':
                    //console.log("Pompadur");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                case 'Vivaldid':
                    //console.log("Vivaldid");
                    textOnImg.style.fontFamily = this.style.fontFamily;
                    this.closest(".select-items").previousSibling.style.fontFamily = this.style.fontFamily;
                    break;
                default:
                    break;
            }
            textOnImg.style.fontFamily = this.innerHTML;
        });
    }

    /* Разные функции */

    /* функция удаления верхнего рисунка в превью*/
    var removeTopImg = function () {
        for (var i = 0; i < preview_img.children.length; i++) {
            if (preview_img.children[i].classList.contains("picture_top_in_preview")) {
                preview_img.children[i].remove();
            }
        }
    };
    /* функция удаления нижнего рисунка в превью*/
    var removeBottomImg = function () {
        for (var i = 0; i < preview_img.children.length; i++) {
            if (preview_img.children[i].classList.contains("picture_bottom_in_preview")) {
                preview_img.children[i].remove();
            }
        }
    };
    /* функция выбора среднего размера верхнего рисунка */

    var funcSetMiddleSizeTopImg = function () {
        for (var i = 0; i < picture_top_check.length; i++) {
            picture_top_check[i].checked = false;
            picture_top_check[i].closest(".picture_top_checkbox").classList.remove("active");
            picture_top_check[1].checked = true;
            picture_top_check[1].closest(".picture_top_checkbox").classList.add("active");
        }
    }

    /* функция изменения размера шрифта надписи */

    var resizeTextOnImg = function () {
        textOnImg.style.transform = "scale(" + this.value / 100 + ")";
        /* заполнения ползунка цветом #b09867 */
        myRangeLabel.style.width = (this.value-50)+"%";
    };

    var fontRange = document.getElementById("myRange");
    var myRangeLabel = document.querySelector('#myRangeLabel');
    fontRange.addEventListener("input", resizeTextOnImg);

    /* другой rangeslide */

    /* var customRange = document.querySelector("#custom_range");
    customRange.addEventListener("input", function(){
        console.log(this);
    });
    var irs_single = document.querySelector(".irs-single");

    $("#custom_range").ionRangeSlider({
        min: 0,
        max: 100,
        from: 50,
        step: 5,
        onChange: function (data) {
            textOnImg.style.transform = "scale(" +  Number(irs_single.innerHTML) / 100 + ")";
            console.log(Number(irs_single.innerHTML) / 100);
        }
    }); */


/* функция инициализации халатов */
var block_size_polotence = document.querySelector(".block_size_polotence");
var block_size_halat = document.querySelector(".block_size_halat");
var block_size_halat_child = document.querySelector(".block_size_halat_child");
var color_halat_checkbox = document.querySelectorAll(".color_halat_checkbox");
var changeTitle = document.querySelector(".size_halat .constructor_media .title");
var color_halat_block = document.querySelector(".color_halat");

var halat_mahrovi_func = function(){
    changeTitle.innerHTML = "РАЗМЕР ХАЛАТА";
    preview_img.classList.remove("velur", "child", "polotence");
    preview_img.classList.add("mahrovi");
    for (var i = 0; i < color_halat_checkbox.length; i++) {
        if (document.querySelector("#color_halat_checkbox_white").checked) {
            img_preview_for_halat.src= "img/halat_mahrovi_white.png";
        }
        if (document.querySelector("#color_halat_checkbox_blue").checked) {
            img_preview_for_halat.src= "img/halat_mahrovi_blue.png";
        }
    }
    block_size_polotence.classList.add("hide");
    block_size_halat_child.classList.add("hide");
    block_size_halat.classList.remove("hide");
    trashSize.innerHTML = "";

    halat_mahr.classList.add("active");
    halat_velur.classList.remove("active");
    halat_child_mahr.classList.remove("active");
    halat_polotence.classList.remove("active");

    color_halat_block.classList.remove("hide");
};
var halat_velur_func = function(){
    changeTitle.innerHTML = "РАЗМЕР ХАЛАТА";
    preview_img.classList.remove("mahrovi", "child", "polotence");
    preview_img.classList.add("velur");
    for (var i = 0; i < color_halat_checkbox.length; i++) {
        if (document.querySelector("#color_halat_checkbox_white").checked) {
            img_preview_for_halat.src= "img/halat_velur_white.png";
        }
        if (document.querySelector("#color_halat_checkbox_blue").checked) {
            img_preview_for_halat.src= "img/halat_velur_blue.png";
        }
    }
    block_size_polotence.classList.add("hide");
    block_size_halat_child.classList.add("hide");
    block_size_halat.classList.remove("hide");
    trashSize.innerHTML = "";

    halat_mahr.classList.remove("active");
    halat_velur.classList.add("active");
    halat_child_mahr.classList.remove("active");
    halat_polotence.classList.remove("active");

    color_halat_block.classList.remove("hide");
};
var halat_child_func = function(){
    changeTitle.innerHTML = "РАЗМЕР ХАЛАТА";
    preview_img.classList.remove("mahrovi", "velur", "polotence");
    preview_img.classList.add("child");
    
    img_preview_for_halat.src= "img/halat_detski.png";
    block_size_polotence.classList.add("hide");
    block_size_halat.classList.add("hide");
    block_size_halat_child.classList.remove("hide");
    trashSize.innerHTML = "";

    halat_mahr.classList.remove("active");
    halat_velur.classList.remove("active");
    halat_child_mahr.classList.add("active");
    halat_polotence.classList.remove("active");

    color_halat_block.classList.add("hide");
};
var halat_polotence_func = function(){
    changeTitle.innerHTML = "РАЗМЕР ПОЛОТЕНЦА";
    preview_img.classList.remove("mahrovi", "child", "velur");
    preview_img.classList.add("polotence");
    for (var i = 0; i < color_halat_checkbox.length; i++) {
        if (document.querySelector("#color_halat_checkbox_white").checked) {
            img_preview_for_halat.src= "img/constuctor_img_preview_polotence_white.png";
        }
        if (document.querySelector("#color_halat_checkbox_blue").checked) {
            img_preview_for_halat.src= "img/constuctor_img_preview_polotence_blue.png";
        }
    }
    block_size_polotence.classList.remove("hide");
    block_size_halat_child.classList.add("hide");
    block_size_halat.classList.add("hide");
    trashSize.innerHTML = "";

    halat_mahr.classList.remove("active");
    halat_velur.classList.remove("active");
    halat_child_mahr.classList.remove("active");
    halat_polotence.classList.add("active");

    color_halat_block.classList.remove("hide");
};



/* события при выборе вида халата */
var halat_mahr = document.querySelector(".halat_mahr");
var halat_velur = document.querySelector(".halat_velur");
var halat_child_mahr = document.querySelector(".halat_child_mahr");
var halat_polotence = document.querySelector(".halat_polotence");

halat_mahr.addEventListener("click", function(){
    halat_mahr.classList.remove("active");
    halat_velur.classList.remove("active");
    halat_child_mahr.classList.remove("active");
    halat_polotence.classList.remove("active");
    this.classList.add("active");

    halat_mahrovi_func();
});
halat_velur.addEventListener("click", function(){
    halat_mahr.classList.remove("active");
    halat_velur.classList.remove("active");
    halat_child_mahr.classList.remove("active");
    halat_polotence.classList.remove("active");
    this.classList.add("active");

    halat_velur_func();
});
halat_child_mahr.addEventListener("click", function(){
    halat_mahr.classList.remove("active");
    halat_velur.classList.remove("active");
    halat_child_mahr.classList.remove("active");
    halat_polotence.classList.remove("active");
    this.classList.add("active");

    halat_child_func();
});
halat_polotence.addEventListener("click", function(){
    halat_mahr.classList.remove("active");
    halat_velur.classList.remove("active");
    halat_child_mahr.classList.remove("active");
    halat_polotence.classList.remove("active");
    this.classList.add("active");

    halat_polotence_func();
});



/* халат который изначально будет видно */
halat_child_func();
}


/* для показать на карте */
if(document.querySelector(".show_on_map")!=null){
    var show_on_map = document.querySelector(".show_on_map");
    var wrap_for_map = document.querySelector(".wrap_for_map");
    var show_on_map_show = document.querySelector(".show_on_map_show");
    var show_on_map_hide = document.querySelector(".show_on_map_hide");
    show_on_map.addEventListener("click", function(e){
        e.preventDefault();
        show_on_map_show.classList.toggle("hide");
        show_on_map_hide.classList.toggle("hide");
        wrap_for_map.classList.toggle("hide");
    });
}



});