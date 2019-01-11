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

    if (document.querySelector(".constructor")) {


        /* форма для полотенца */

        var polotence = document.getElementById("polotence");

        if (polotence) {
            polotence.addEventListener("change", function (e) {
                console.log(e.currentTarget);
            });
        }

        /* поведение при выборе верхнего рисунка */

        /* когда выбрали рисунок */
        var input_picture_top_image = document.querySelectorAll("input[name = 'picture_top_image'");

        for (var i = 0; i < input_picture_top_image.length; i++) {
            input_picture_top_image[i].addEventListener("change", function () {
                var newTopImg = this.previousElementSibling.cloneNode(true);
                newTopImg.classList.add("picture_top_in_preview");
                for (var i = 0; i < picture_top_checkbox.length; i++) {
                    if (picture_top_checkbox[i].checked == "small") {
                        document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                            e.classList.remove("small");
                            e.classList.remove("medium");
                            e.classList.remove("big");
                            e.classList.add("small");
                        });
                    }
                    if (picture_top_checkbox[i].checked == "medium") {
                        document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                            e.classList.remove("small");
                            e.classList.remove("medium");
                            e.classList.remove("big");
                            e.classList.add("medium");
                        });
                    }
                    if (picture_top_checkbox[i].checked == "big") {
                        document.querySelectorAll(".picture_top_in_preview").forEach(function (e) {
                            e.classList.remove("small");
                            e.classList.remove("medium");
                            e.classList.remove("big");
                            e.classList.add("big");
                        });
                    }
                }

                /* for (var i = 0; i < preview_img.children.length; i++) {
                    if (preview_img.children[i].classList.contains("picture_top_in_preview")) {
                        preview_img.children[i].remove();
                    }
                } */
                for (var i = 0; i < document.querySelector(".area_top_img").children.length; i++) {
                    if (document.querySelector(".area_top_img").children[i].classList.contains("picture_top_in_preview")) {
                        document.querySelector(".area_top_img").children[i].remove();
                    }
                }
                /* preview_img.appendChild(newTopImg); */
                document.querySelector(".area_top_img").appendChild(newTopImg);
                constructorData.topPicture = this.previousElementSibling.getAttribute("src");
                constructorData.threadType = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadType");
                constructorData.threadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColor");
                constructorData.properThreadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-properThreadColor");
                constructorData.threadColorRus = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColorRus");

                funcCalculateSizeAndChangeOrder();
                funcOutputInConsole();
            });
        }

        var input_picture_bottom_image = document.querySelectorAll("input[name = 'picture_bottom_image'");
        for (var i = 0; i < input_picture_bottom_image.length; i++) {
            input_picture_bottom_image[i].addEventListener("change", function () {
                var newTopImgBottom = this.previousElementSibling.cloneNode(true);
                newTopImgBottom.classList.add("picture_bottom_in_preview");

                /* for (var i = 0; i < preview_img.children.length; i++) {
                    if (preview_img.children[i].classList.contains("picture_bottom_in_preview")) {
                        preview_img.children[i].remove();
                    }
                } */
                for (var i = 0; i < document.querySelector(".area_bottom_img").children.length; i++) {
                    if (document.querySelector(".area_bottom_img").children[i].classList.contains("picture_bottom_in_preview")) {
                        document.querySelector(".area_bottom_img").children[i].remove();
                    }
                }
                /* preview_img.appendChild(newTopImgBottom); */
                document.querySelector(".area_bottom_img").appendChild(newTopImgBottom);
                constructorData.bottomPicture = this.previousElementSibling.getAttribute("src");
                constructorData.threadType = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadType");
                constructorData.threadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColor");
                constructorData.properThreadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-properThreadColor");
                constructorData.threadColorRus = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColorRus");

                funcCalculateSizeAndChangeOrder();
                funcOutputInConsole();
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
                constructorData.pictureSize = this.value;
                funcOutputInConsole();
            });
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
                    constructorData.bottomPictureGroup = e.target.innerHTML;
                    constructorData.bottomPicture = null;

                    if (constructorData.topPictureGroup === "Нет" || constructorData.topPictureGroup === null) {
                        if (constructorData.ifInitialOnChestTrueText === null && constructorData.ifInitialOnChestTrueImg === null) {
                            constructorData.threadType = null;
                            constructorData.threadColor = null;
                            constructorData.properThreadColor = null;
                            constructorData.threadColorRus = null;
                        }

                    }
                }
                if (e.target.innerHTML == "Вензеля") {
                    document.querySelector(".picture_bottom_images__block.venzelja").style.display = "block";
                    constructorData.bottomPictureGroup = e.target.innerHTML;
                }
                /* конец для верхних рисунков */
                if (e.target.innerHTML == "Нет") {
                    removeTopImg();
                    constructorData.topPictureGroup = e.target.innerHTML;
                    constructorData.topPicture = null;
                    if (constructorData.bottomPictureGroup === "Без рисунка" || constructorData.bottomPictureGroup === null) {
                        if (constructorData.ifInitialOnChestTrueText === null && constructorData.ifInitialOnChestTrueImg === null) {
                            constructorData.threadType = null;
                            constructorData.threadColor = null;
                            constructorData.properThreadColor = null;
                            constructorData.threadColorRus = null;
                        }
                    }
                }
                if (e.target.innerHTML == "Короны") {
                    document.querySelector(".picture_top_images__block.korona").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Животные") {
                    document.querySelector(".picture_top_images__block.animal").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Популярное") {
                    document.querySelector(".picture_top_images__block.popular").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Профессии") {
                    document.querySelector(".picture_top_images__block.profession").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Разное") {
                    document.querySelector(".picture_top_images__block.raznoe").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Рамки") {
                    document.querySelector(".picture_top_images__block.frame_and_name").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Рамки на грудь") {
                    document.querySelector(".picture_top_images__block.frame_on_chest").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }


                if (e.target.innerHTML == "Розы") {
                    document.querySelector(".picture_top_images__block.roses").style.display = "block";
                    /*  funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Спорт") {
                    document.querySelector(".picture_top_images__block.sport").style.display = "block";
                    /*  funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                if (e.target.innerHTML == "Вензиля") {
                    document.querySelector(".picture_top_images__block.venzilja").style.display = "block";
                    /* funcSetMiddleSizeTopImg(); */
                    constructorData.topPictureGroup = e.target.innerHTML;
                }
                funcCalculateSizeAndChangeOrder();
                funcOutputInConsole();
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

        if (document.querySelector(".preview_img") != null) {

        }
        var preview_img = document.querySelector(".preview_img");
        var img_preview_for_halat = document.querySelector("#img_preview_for_halat");


        var input_color_halat_checkbox = document.querySelectorAll("input[name='color_halat_checkbox'");
        for (var i = 0; i < input_color_halat_checkbox.length; i++) {
            input_color_halat_checkbox[i].addEventListener("click", function (e) {
                if (e.target.value == "white") {
                    constructorData.fabricColor = "white";
                    if (halat_mahr.classList.contains("active")) {
                        img_preview_for_halat.src = "img/halat_mahrovi_white.png";
                        constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                        funcOutputInConsole();
                    }
                    if (halat_velur.classList.contains("active")) {
                        img_preview_for_halat.src = "img/halat_velur_white.png";
                        constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                        funcOutputInConsole();
                    }

                    if (halat_polotence.classList.contains("active")) {
                        img_preview_for_halat.src = "img/constuctor_img_preview_polotence_white.png";
                        constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                        funcOutputInConsole();
                    }

                }
                if (e.target.value == "blue") {
                    constructorData.fabricColor = "blue";
                    if (halat_mahr.classList.contains("active")) {
                        img_preview_for_halat.src = "img/halat_mahrovi_blue.png";
                        constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                        funcOutputInConsole();
                    }
                    if (halat_velur.classList.contains("active")) {
                        img_preview_for_halat.src = "img/halat_velur_blue.png";
                        constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                        funcOutputInConsole();
                    }
                    if (halat_polotence.classList.contains("active")) {
                        img_preview_for_halat.src = "img/constuctor_img_preview_polotence_blue.png";
                        constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                        funcOutputInConsole();
                    }

                }
            });
        }

        var input_size_halat_checkbox = document.querySelectorAll(".input_size_checkbox");

        var trashSize = document.createElement("div");
        trashSize.classList.add("trashSize");
        if (preview_img != null) {
            preview_img.appendChild(trashSize);
        }

        trashSize.style.position = "absolute";
        trashSize.style.bottom = 10 + "px";
        trashSize.style.left = 40 + "%";

        for (var i = 0; i < input_size_halat_checkbox.length; i++) {
            input_size_halat_checkbox[i].addEventListener("click", function (e) {
                trashSize.innerHTML = e.target.value;
                if (constructorData.goodType == "polotence") {
                    constructorData.halatSize = "notApplicable";
                }
                if (constructorData.goodType == "halat") {
                    constructorData.polotenceSize = "notApplicable";
                }

            });
        }

        /* функция которая настраивает constructorData.totalEmbroideryZone */
        function funcSetTotalEmbroideryZone(){
            var clearHalatSize = constructorData.halatSize.slice(4);
            if(54<=clearHalatSize && clearHalatSize<=60){
                constructorData.totalEmbroideryZone = {
                    "width": "32",
                    "height": "32",
                    "order": "1"
                };
            }
            if(48<=clearHalatSize && clearHalatSize<=52){
                constructorData.totalEmbroideryZone = {
                    "width": "30",
                    "height": "30",
                    "order": "1"
                };;
            }
            if(44<=clearHalatSize && clearHalatSize<=46){
                constructorData.totalEmbroideryZone = {
                    "width": "28",
                    "height": "28",
                    "order": "1"
                };;
            }
            if(24<=clearHalatSize && clearHalatSize<=36){
                constructorData.totalEmbroideryZone = {
                    "width": "18",
                    "height": "18",
                    "order": "1"
                };
            }
            if(document.querySelector(".halat_polotence").classList.contains("active")){
                constructorData.totalEmbroideryZone = {
                    "width": "32",
                    "height": "32",
                    "order": "1"
                };
            }
        }

        /* заносим в constructorData halatSize */
        var arr_size_halat_checkbox_adult_mahra = document.querySelectorAll("input[name = 'size_halat_checkbox_adult_mahra']");
        for (var i = 0; i < arr_size_halat_checkbox_adult_mahra.length; i++) {
            arr_size_halat_checkbox_adult_mahra[i].addEventListener("click", function (e) {
                constructorData.halatSize = e.target.value;
                funcSetTotalEmbroideryZone();
                funcTotalEmbroideryOnChestZone();
                funcCalculateSizeAndChangeOrder();
                funcOutputInConsole();
            });
        }
        var arr_size_halat_checkbox_adult_velur = document.querySelectorAll("input[name = 'size_halat_checkbox_adult_velur']");
        for (var i = 0; i < arr_size_halat_checkbox_adult_velur.length; i++) {
            arr_size_halat_checkbox_adult_velur[i].addEventListener("click", function (e) {
                constructorData.halatSize = e.target.value;
                funcSetTotalEmbroideryZone();
                funcTotalEmbroideryOnChestZone();
                funcCalculateSizeAndChangeOrder();
                funcOutputInConsole();
            });
        }
        var arr_size_halat_checkbox = document.querySelectorAll("input[name = 'size_halat_checkbox']");
        for (var i = 0; i < arr_size_halat_checkbox.length; i++) {
            arr_size_halat_checkbox[i].addEventListener("click", function (e) {
                constructorData.halatSize = e.target.value;
                funcSetTotalEmbroideryZone();
                funcTotalEmbroideryOnChestZone();
                funcCalculateSizeAndChangeOrder();
                funcOutputInConsole();
            });
        }
        var arr_size_halat_checkbox_polotence = document.querySelectorAll("input[name = 'size_halat_checkbox_polotence']");
        for (var i = 0; i < arr_size_halat_checkbox_polotence.length; i++) {
            arr_size_halat_checkbox_polotence[i].addEventListener("click", function (e) {
                constructorData.halatSize = e.target.value;
                funcSetTotalEmbroideryZone();
                funcTotalEmbroideryOnChestZone();
                funcCalculateSizeAndChangeOrder();
                funcOutputInConsole();
            });
        }


        /* поведение поля "текст на полотенце" */
        var text_on_halat = document.querySelector("textarea[name = 'text_on_halat']");
        var textOnImg = document.createElement("div");
        textOnImg.classList.add("text_on_img");
        if (preview_img != null) {
            /* preview_img.appendChild(textOnImg); */
            document.querySelector(".area_text").appendChild(textOnImg);
        }

        text_on_halat.addEventListener("input", function () {
            textOnImg.innerText = this.value;
            constructorData.embroideryText = this.value;
            funcOutputInConsole();
            if (constructorData.embroideryText.length > 0) {
                constructorData.threadType = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadType");
                constructorData.threadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColor");
                constructorData.properThreadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-properThreadColor");
                constructorData.threadColorRus = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColorRus");
                constructorData.sliderFontSize = document.querySelector("#myRange").value;

                constructorData.font = "Arial";
                funcOutputInConsole();
            } else {
                constructorData.threadType = null;
                constructorData.threadColor = null;
                constructorData.properThreadColor = null;
                constructorData.threadColorRus = null;
                constructorData.sliderFontSize = null;

                constructorData.font = null;
                funcOutputInConsole();
            }
            funcCalculateSizeAndChangeOrder();
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
                constructorData.font = this.innerHTML;
                funcOutputInConsole();
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
            /* for (var i = 0; i < picture_top_check.length; i++) {
                picture_top_check[i].checked = false;
                picture_top_check[i].closest(".picture_top_check").classList.remove("active");
                picture_top_check[1].checked = true;
                picture_top_check[1].closest(".picture_top_check").classList.add("active");
            } */
        }

        /* функция изменения размера шрифта надписи */

        var resizeTextOnImg = function () {
            textOnImg.style.transform = "scale(" + this.value / 100 + ")";
            /* заполнения ползунка цветом #b09867 */
            myRangeLabel.style.width = (this.value - 50) + "%";
            if (constructorData.embroideryText !== null) {
                constructorData.sliderFontSize = this.value;
            }

            funcOutputInConsole();
        };

        var fontRange = document.getElementById("myRange");
        var myRangeLabel = document.querySelector('#myRangeLabel');
        fontRange.addEventListener("input", resizeTextOnImg);

        /* события при выборе цвета нити */
        var input_radio_color_box = document.querySelectorAll("input[name='input_radio_color_box']");
        for (var i = 0; i < input_radio_color_box.length; i++) {
            input_radio_color_box[i].addEventListener("click", function (e) {
                constructorData.threadType = e.target.getAttribute("data-threadType");
                constructorData.threadColor = e.target.getAttribute("data-threadColor");
                constructorData.properThreadColor = e.target.getAttribute("data-properThreadColor");
                constructorData.threadColorRus = e.target.getAttribute("data-threadColorRus");
                funcOutputInConsole();
            });
        }

        /* события формы */
        var form_input_name = document.querySelector(".form_input_name");
        form_input_name.addEventListener("input", function () {
            constructorData.orderName = this.value;
            funcOutputInConsole();
        });
        var form_input_phone = document.querySelector(".form_input_phone");
        form_input_phone.addEventListener("input", function () {
            constructorData.orderPhone = this.value;
            funcOutputInConsole();
        });
        var form_input_textarea = document.querySelector(".form_input_textarea");
        form_input_textarea.addEventListener("input", function () {
            constructorData.orderAddressComment = this.value;
            funcOutputInConsole();
        });

        /* действия при удалении пользователем текста*/
        document.addEventListener("keydown", KeyCheck);

        function KeyCheck(event) {
            var KeyID = event.keyCode;
            switch (KeyID) {
                case 8:
                    constructorData.deletedText += event.target.value + " | ";
                    funcOutputInConsole();
                    break;
                case 46:
                    constructorData.deletedText += event.target.value + " | ";
                    break;
                default:
                    break;
            }
        }

        /* генератор номера */

        function funcGeneratorNumberOrder() {
            var emptyString = "";
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
            emptyString += Math.floor(Math.random() * 1000);
            /* while (emptyString.length < 4) {
                emptyString += alphabet[Math.floor(Math.random() * alphabet.length)];
                emptyString += Math.floor(Math.random() * 100);
              }  */
            return emptyString;
        }
        /* конец генератор номера */

        /* события при отправке формы */
        document.querySelector('#form_for_order').addEventListener("submit", function (e) {
            e.preventDefault();
            constructorData.rundomNumberOrder = funcGeneratorNumberOrder();

            document.querySelector(".message_thanks").innerHTML = "Ваш заказ №" + constructorData.rundomNumberOrder + " отправлен";
            document.querySelector(".submit_order").value = "Сделать ещё один заказ";
            funcClearConstructorData();

            if (document.querySelector(".halat.halat_mahr.active")) {
                halat_mahrovi_func();
            }
            if (document.querySelector(".halat.halat_velur.active")) {
                halat_velur_func();
            }
            if (document.querySelector(".halat.halat_child_mahr.active")) {
                halat_child_func();
            }
            if (document.querySelector(".halat.halat_polotence.active")) {
                halat_polotence_func();
            }
            funcOutputInConsole();
        });
        /* конец события при отправке формы */


        /* функция очищения всех полей */

        function funcClearConstructorData() {
            constructorData.goodType = "";
            constructorData.fabricType = "";
            constructorData.modelAgeType = "";
            constructorData.halatSize = "";
            constructorData.polotenceSize = "";
            constructorData.fabricColor = "";
            constructorData.properFabricColor = "";
            constructorData.initialsOnChest = "";
            constructorData.ifInitialOnChestTrueText = "";
            constructorData.ifInitialOnChestTrueImg = "";
            constructorData.threadType = "";
            constructorData.threadColor = "";
            constructorData.properThreadColor = "";
            constructorData.threadColorRus = "";
            constructorData.sliderFontSize = "";
            constructorData.font = "";
            constructorData.embroideryText = "";
            constructorData.orderName = "";
            constructorData.orderPhone = "";
            constructorData.orderAddressComment = "";
            constructorData.deletedText = "";
            constructorData.rundomNumberOrder = "";
        }

        /* конец функции очищения всех полей */



        /* функция инициализации халатов */
        var block_size_polotence = document.querySelector(".block_size_polotence");
        var block_size_halat_mahra = document.querySelector(".block_size_halat.adult_mahra");
        var block_size_halat_velur = document.querySelector(".block_size_halat.adult_velur");
        var block_size_halat_child = document.querySelector(".block_size_halat_child");
        var color_halat_checkbox = document.querySelectorAll(".color_halat_checkbox");
        var changeTitle = document.querySelector(".size_halat .constructor_media .title");
        var changeTitleColor = document.querySelector(".color_halat .constructor_media .title");
        var changeTitleTextOn = document.querySelector(".text_on_halat .constructor_media .title");
        var color_halat_block = document.querySelector(".color_halat");
        var input_color_halat_block = color_halat_block.querySelectorAll("input");

        var halat_mahrovi_func = function () {
            changeTitle.innerHTML = "РАЗМЕР ХАЛАТА";
            changeTitleColor.innerHTML = "ЦВЕТ ХАЛАТА";
            changeTitleTextOn.innerHTML = "ТЕКСТ НА ХАЛАТЕ";
            preview_img.classList.remove("velur", "child", "polotence");
            preview_img.classList.add("mahrovi");
            for (var i = 0; i < color_halat_checkbox.length; i++) {
                if (document.querySelector("#color_halat_checkbox_white").checked) {
                    img_preview_for_halat.src = "img/halat_mahrovi_white.png";
                    constructorData.fabricColor = "white";
                    constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                }
                if (document.querySelector("#color_halat_checkbox_blue").checked) {
                    img_preview_for_halat.src = "img/halat_mahrovi_blue.png";
                    constructorData.fabricColor = "blue";
                    constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                }
            }
            block_size_polotence.classList.add("hide");
            block_size_halat_child.classList.add("hide");
            block_size_halat_velur.classList.add("hide");
            block_size_halat_mahra.classList.remove("hide");
            trashSize.innerHTML = "";
            document.querySelector(".name_on_chest").style.display = "block";
            /* наличие размера верхнего рисунка */
            document.querySelector(".block_picture_top_size").children[0].style.display = "inline-block";
            document.querySelector(".block_picture_top_size").children[1].style.display = "inline-block";
            document.querySelector(".block_picture_top_size").children[2].style.display = "inline-block";
            //document.querySelector(".block_picture_top_size").children[2].checked = true;
            document.querySelector(".block_picture_top_size").children[3].style.display = "inline-block";

            halat_mahr.classList.add("active");
            halat_velur.classList.remove("active");
            halat_child_mahr.classList.remove("active");
            halat_polotence.classList.remove("active");

            document.querySelector(".notation").style.display = "none";

            color_halat_block.classList.remove("hide");

            /* свойства по умолчанию */
            document.querySelector("#size50").checked = true;
            document.querySelector("#color_halat_checkbox_white").checked = true;
            document.querySelector("#picture_top_checkbox_medium").checked = true;
            document.querySelector("#input_name_on_chest").value = "";
            for (var i = 0; i < document.querySelectorAll("input[name='frame_on_chest'").length; i++) {
                document.querySelectorAll("input[name='frame_on_chest'")[i].checked = false;
            }
            document.querySelector(".text_on_halat textarea").value = "";
            /* for (var i = 0; i < document.querySelectorAll("input[name='input_radio_color_box'").length; i++) {
                document.querySelectorAll("input[name='input_radio_color_box'")[i].checked = false;
            } */
            document.querySelector("#myRange").value = 100;

            /* работа с объектом */

            constructorData.goodType = "halat";
            constructorData.fabricType = "mahra";
            constructorData.modelAgeType = "adult";
            constructorData.polotenceSize = "notApplicable";
            constructorData.halatSize = "size48";
            constructorData.fabricColor = funcCheckedFabricColor();
            constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
            constructorData.threadType = null;
            constructorData.threadColor = null;
            constructorData.properThreadColor = null;
            constructorData.threadColorRus = null;
            constructorData.sliderFontSize = null;
            constructorData.font = null;
            constructorData.embroideryText = null;
            constructorData.orderName = null;
            constructorData.orderPhone = null;
            constructorData.orderAddressComment = null;
            funcCommonIfInitialOnChestStartNull();
            funcCommonPictureStartNull();
            funcSetTotalEmbroideryZone();
            funcCommonEmbroideryStartNull();
            funcTotalEmbroideryOnChestZone();
            funcCalculateSizeAndChangeOrder();

            funcOutputInConsole();
        };
        var halat_velur_func = function () {
            changeTitle.innerHTML = "РАЗМЕР ХАЛАТА";
            changeTitleColor.innerHTML = "ЦВЕТ ХАЛАТА";
            changeTitleTextOn.innerHTML = "ТЕКСТ НА ХАЛАТЕ";
            preview_img.classList.remove("mahrovi", "child", "polotence");
            preview_img.classList.add("velur");
            for (var i = 0; i < color_halat_checkbox.length; i++) {
                if (document.querySelector("#color_halat_checkbox_white").checked) {
                    img_preview_for_halat.src = "img/halat_velur_white.png";
                    constructorData.fabricColor = "white";
                    constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                }
                if (document.querySelector("#color_halat_checkbox_blue").checked) {
                    img_preview_for_halat.src = "img/halat_velur_blue.png";
                    constructorData.fabricColor = "Blue";
                    constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                }
            }
            block_size_polotence.classList.add("hide");
            block_size_halat_child.classList.add("hide");
            block_size_halat_mahra.classList.add("hide");
            block_size_halat_velur.classList.remove("hide");
            trashSize.innerHTML = "";
            document.querySelector(".name_on_chest").style.display = "block";
            /* наличие размера верхнего рисунка */
            document.querySelector(".block_picture_top_size").children[0].style.display = "inline-block";
            document.querySelector(".block_picture_top_size").children[1].style.display = "inline-block";
            document.querySelector(".block_picture_top_size").children[2].style.display = "inline-block";
            //document.querySelector(".block_picture_top_size").children[2].checked = true;
            document.querySelector(".block_picture_top_size").children[3].style.display = "inline-block";

            /* наличие в превью картинки блока с инициалами */
            /* document.querySelector(".for_name_on_chest").style.display = "flex"; */

            halat_mahr.classList.remove("active");
            halat_velur.classList.add("active");
            halat_child_mahr.classList.remove("active");
            halat_polotence.classList.remove("active");
            document.querySelector(".notation").style.display = "none";

            color_halat_block.classList.remove("hide");

            /* свойства по умолчанию */
            document.querySelector("#size50").checked = true;
            document.querySelector("#color_halat_checkbox_white").checked = true;
            document.querySelector("#picture_top_checkbox_medium").checked = true;
            document.querySelector("#input_name_on_chest").value = "";
            for (var i = 0; i < document.querySelectorAll("input[name='frame_on_chest'").length; i++) {
                document.querySelectorAll("input[name='frame_on_chest'")[i].checked = false;
            }
            document.querySelector(".text_on_halat textarea").value = "";
            /* for (var i = 0; i < document.querySelectorAll("input[name='input_radio_color_box'").length; i++) {
                document.querySelectorAll("input[name='input_radio_color_box'")[i].checked = false;
            } */
            document.querySelector("#myRange").value = 100;

            /* работа с объектом */
            
            constructorData.goodType = "halat";
            constructorData.fabricType = "velur";
            constructorData.modelAgeType = "adult";
            constructorData.polotenceSize = "notApplicable";
            constructorData.halatSize = "size52";
            constructorData.fabricColor = funcCheckedFabricColor();
            constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
            funcCommonThreadTypeColorStartNull();
            constructorData.sliderFontSize = null;
            constructorData.font = null;
            constructorData.embroideryText = null;
            funcCommonIfInitialOnChestStartNull();
            funcCommonPictureStartNull();
            funcSetTotalEmbroideryZone();
            funcCommonEmbroideryStartNull();
            funcTotalEmbroideryOnChestZone();
            funcCalculateSizeAndChangeOrder();

            funcOutputInConsole();
        };
        var halat_child_func = function () {
            changeTitle.innerHTML = "РАЗМЕР ХАЛАТА";
            changeTitleColor.innerHTML = "ЦВЕТ ХАЛАТА";
            changeTitleTextOn.innerHTML = "ТЕКСТ НА ХАЛАТЕ";
            preview_img.classList.remove("mahrovi", "velur", "polotence");
            preview_img.classList.add("child");

            img_preview_for_halat.src = "img/halat_detski.png";
            block_size_polotence.classList.add("hide");
            block_size_halat_mahra.classList.add("hide");
            block_size_halat_velur.classList.add("hide");
            block_size_halat_child.classList.remove("hide");
            trashSize.innerHTML = "";
            document.querySelector(".name_on_chest").style.display = "block";
            /* наличие размера верхнего рисунка */
            document.querySelector(".block_picture_top_size").children[0].style.display = "none";
            document.querySelector(".block_picture_top_size").children[1].style.display = "none";
            document.querySelector(".block_picture_top_size").children[2].style.display = "none";
            document.querySelector(".block_picture_top_size").children[3].style.display = "none";
            //document.querySelector(".block_picture_top_size").children[4].checked = true;

            /* наличие в превью картинки блока с инициалами */
            /* document.querySelector(".for_name_on_chest").style.display = "flex"; */

            halat_mahr.classList.remove("active");
            halat_velur.classList.remove("active");
            halat_child_mahr.classList.add("active");
            halat_polotence.classList.remove("active");
            document.querySelector(".notation").style.display = "flex";

            color_halat_block.classList.add("hide");

            /* свойства по умолчанию */
            document.querySelector("#size28").checked = true;
            //document.querySelector("#color_halat_checkbox_white").checked = true;
            document.querySelector("#picture_top_checkbox_small").checked = true;
            document.querySelector("#input_name_on_chest").value = "";
            for (var i = 0; i < document.querySelectorAll("input[name='frame_on_chest'").length; i++) {
                document.querySelectorAll("input[name='frame_on_chest'")[i].checked = false;
            }
            document.querySelector(".text_on_halat textarea").value = "";
            /* for (var i = 0; i < document.querySelectorAll("input[name='input_radio_color_box'").length; i++) {
                document.querySelectorAll("input[name='input_radio_color_box'")[i].checked = false;
            } */
            document.querySelector("#myRange").value = 100;

            /* работа с объектом */

            constructorData.goodType = "halat";
            constructorData.fabricType = "mahra";
            constructorData.fabricColor = "white";
            constructorData.modelAgeType = "child";
            constructorData.polotenceSize = "notApplicable";
            constructorData.halatSize = "size28";
            constructorData.fabricColor = "white";
            constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
            funcCommonThreadTypeColorStartNull();
            constructorData.sliderFontSize = null;
            constructorData.font = null;
            constructorData.embroideryText = null;
            funcCommonIfInitialOnChestStartNull();
            funcCommonPictureStartNull();
            funcSetTotalEmbroideryZone();
            funcCommonEmbroideryStartNull();
            funcTotalEmbroideryOnChestZone();
            funcCalculateSizeAndChangeOrder();

            funcOutputInConsole();
        };
        var halat_polotence_func = function () {
            changeTitle.innerHTML = "РАЗМЕР ПОЛОТЕНЦА";
            changeTitleColor.innerHTML = "ЦВЕТ ПОЛОТЕНЦА";
            changeTitleTextOn.innerHTML = "ТЕКСТ НА ПОЛОТЕНЦЕ";
            preview_img.classList.remove("mahrovi", "child", "velur");
            preview_img.classList.add("polotence");
            for (var i = 0; i < color_halat_checkbox.length; i++) {
                if (document.querySelector("#color_halat_checkbox_white").checked) {
                    img_preview_for_halat.src = "img/constuctor_img_preview_polotence_white.png";
                    constructorData.fabricColor = "white";
                    constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                }
                if (document.querySelector("#color_halat_checkbox_blue").checked) {
                    img_preview_for_halat.src = "img/constuctor_img_preview_polotence_blue.png";
                    constructorData.fabricColor = "blue";
                    constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
                }
            }
            block_size_polotence.classList.remove("hide");
            block_size_halat_child.classList.add("hide");
            block_size_halat_mahra.classList.add("hide");
            block_size_halat_velur.classList.add("hide");
            trashSize.innerHTML = "";
            document.querySelector(".name_on_chest").style.display = "none";
            /* наличие размера верхнего рисунка */
            document.querySelector(".block_picture_top_size").children[0].style.display = "inline-block";
            document.querySelector(".block_picture_top_size").children[1].style.display = "inline-block";
            document.querySelector(".block_picture_top_size").children[2].style.display = "inline-block";
            //document.querySelector(".block_picture_top_size").children[2].checked = true;
            document.querySelector(".block_picture_top_size").children[3].style.display = "inline-block";

            /* наличие в превью картинки блока с инициалами */
            /* document.querySelector(".for_name_on_chest").style.display = "none"; */

            halat_mahr.classList.remove("active");
            halat_velur.classList.remove("active");
            halat_child_mahr.classList.remove("active");
            halat_polotence.classList.add("active");
            document.querySelector(".notation").style.display = "none";

            color_halat_block.classList.remove("hide");

            /* свойства по умолчанию */
            document.querySelector("#size70Х140").checked = true;
            document.querySelector("#color_halat_checkbox_white").checked = true;
            document.querySelector("#picture_top_checkbox_medium").checked = true;
            //document.querySelector("#input_name_on_chest").value = "";
            //for (var i = 0; i < document.querySelectorAll("input[name='frame_on_chest'").length; i++) {
            //    document.querySelectorAll("input[name='frame_on_chest'")[i].checked = false;
            //}
            document.querySelector(".text_on_halat textarea").value = "";
            /* for (var i = 0; i < document.querySelectorAll("input[name='input_radio_color_box'").length; i++) {
                document.querySelectorAll("input[name='input_radio_color_box'")[i].checked = false;
            } */
            document.querySelectorAll("input[name='input_radio_color_box'")[0].checked = false;
            document.querySelectorAll("input[name='input_radio_color_box'")[2].checked = true;
            document.querySelector("#myRange").value = 100;

            /* работа с объектом */
            constructorData.goodType = "polotence";
            constructorData.fabricType = "mahra";
            constructorData.modelAgeType = "notApplicable";
            constructorData.halatSize = "notApplicable";
            constructorData.polotenceSize = "size70Х140";
            constructorData.fabricColor = funcCheckedFabricColor();
            constructorData.properFabricColor = constructorData.fabricType + constructorData.fabricColor;
            funcCommonThreadTypeColorStartNull();
            constructorData.sliderFontSize = null;
            constructorData.font = null;
            constructorData.embroideryText = null;
            funcCommonIfInitialOnChestStartNull();
            funcCommonPictureStartNull();
            funcSetTotalEmbroideryZone();
            funcCommonEmbroideryStartNull();
            funcTotalEmbroideryOnChestZone();
            funcCalculateSizeAndChangeOrder();
            funcOutputInConsole();
        };

        function funcTotalEmbroideryOnChestZone(){
            if(document.querySelector(".halat.halat_polotence.active")){
                constructorData.totalEmbroideryOnChestZone = "Not applicable";
            }
            if(document.querySelector(".halat.halat_child_mahr.active")){
                var clearHalatSize = constructorData.halatSize.slice(4);
                
                if(24<=clearHalatSize && clearHalatSize<=26){
                    constructorData.totalEmbroideryOnChestZone = "4x4";
                }
                if(28<=clearHalatSize && clearHalatSize<=30){
                    constructorData.totalEmbroideryOnChestZone = "6x6";
                }
                if(32<=clearHalatSize && clearHalatSize<=34){
                    constructorData.totalEmbroideryOnChestZone = "8x8";
                }
            }
            else{
                if(constructorData.initialsOnChest){
                    var clearHalatSize = constructorData.halatSize.slice(4);
                    if(44<=clearHalatSize && clearHalatSize<=46){
                        constructorData.totalEmbroideryOnChestZone = "4x4";
                    }
                    if(48<=clearHalatSize && clearHalatSize<=52){
                        constructorData.totalEmbroideryOnChestZone = "8x8";
                    }
                    if(54<=clearHalatSize && clearHalatSize<=60){
                        constructorData.totalEmbroideryOnChestZone = "12x12";
                    }
                }else{
                    constructorData.totalEmbroideryOnChestZone = null;
                }
            }
        }

        function funcCommonThreadTypeColorStartNull(){
            constructorData.threadType = null;
            constructorData.threadColor = null;
            constructorData.properThreadColor = null;
            constructorData.threadColorRus = null;
        }

        function funcCommonIfInitialOnChestStartNull(){
            //constructorData.initialsOnChest = false;
            if(document.querySelector(".halat.halat_polotence.active")){
                constructorData.ifInitialOnChestTrueText = "Not applicable";
                constructorData.ifInitialOnChestTrueImg = "Not applicable";
            }else{
                constructorData.ifInitialOnChestTrueText = null;
                constructorData.ifInitialOnChestTrueImg = null;
            }
            if(constructorData.ifInitialOnChestTrueText === null && constructorData.ifInitialOnChestTrueImg === null){
                constructorData.initialsOnChest = false;
            }else{
                constructorData.initialsOnChest = true;
            }
        }

        function funcCommonPictureStartNull(){
            constructorData.pictureSize = null;
            constructorData.topPictureGroup = null;
            constructorData.topPicture = null;
            constructorData.bottomPictureGroup = null;
            constructorData.bottomPicture = null;
        }

        function funcCommonEmbroideryStartNull(){
            constructorData.topPictureEmbroideryZone = {"height": null, "width": null, "order": null, "frame": false};
            constructorData.bottomPictureEmbroideryZone = {"height": null, "width": null, "order": null};
            constructorData.textEmbroideryZone = {"height": null, "width": null, "order": null};
        }

        /* функция очищает консоль и выводит текущую структуру объекта данных */
        function funcOutputInConsole() {
            console.clear();
            console.log("constructorData.goodType ", constructorData.goodType);
            console.log("constructorData.fabricType ", constructorData.fabricType);
            console.log("constructorData.modelAgeType ", constructorData.modelAgeType);
            console.log("constructorData.halatSize ", constructorData.halatSize);
            console.log("constructorData.polotenceSize ", constructorData.polotenceSize);
            console.log("constructorData.fabricColor ", constructorData.fabricColor);
            console.log("properFabricColor ", constructorData.properFabricColor);
            console.log("constructorData.initialsOnChest ", constructorData.initialsOnChest);
            console.log("constructorData.ifInitialOnChestTrueText ", constructorData.ifInitialOnChestTrueText);
            console.log("constructorData.ifInitialOnChestTrueImg ", constructorData.ifInitialOnChestTrueImg);
            console.log("constructorData.threadType ", constructorData.threadType);
            console.log("constructorData.threadColor ", constructorData.threadColor);
            console.log("constructorData.properThreadColor ", constructorData.properThreadColor);
            console.log("constructorData.threadColorRus ", constructorData.threadColorRus);
            console.log("constructorData.sliderFontSize ", constructorData.sliderFontSize);
            console.log("constructorData.font ", constructorData.font);
            console.log("constructorData.embroideryText ", constructorData.embroideryText);
            console.log("constructorData.orderName ", constructorData.orderName);
            console.log("constructorData.orderPhone ", constructorData.orderPhone);
            console.log("constructorData.orderAddressComment ", constructorData.orderAddressComment);
            console.log("constructorData.deletedText", constructorData.deletedText);
            console.log("constructorData.rundomNumberOrder", constructorData.rundomNumberOrder);
            console.log("constructorData.pictureSize", constructorData.pictureSize);
            console.log("constructorData.topPictureGroup", constructorData.topPictureGroup);
            console.log("constructorData.topPicture", constructorData.topPicture);
            console.log("constructorData.bottomPictureGroup", constructorData.bottomPictureGroup);
            console.log("constructorData.bottomPicture", constructorData.bottomPicture);
            console.log("constructorData.padding-top", constructorData.padding-top);
            console.log("constructorData.totalEmbroideryZone", constructorData.totalEmbroideryZone);
            console.log("constructorData.topPictureEmbroideryZone", constructorData.topPictureEmbroideryZone);
            console.log("constructorData.bottomPictureEmbroideryZone", constructorData.bottomPictureEmbroideryZone);
            console.log("constructorData.textEmbroideryZone", constructorData.textEmbroideryZone);
            console.log("constructorData.totalEmbroideryOnChestZone", constructorData.totalEmbroideryOnChestZone);

        }


        /* события при выборе вида халата */
        var halat_mahr = document.querySelector(".halat_mahr");
        var halat_velur = document.querySelector(".halat_velur");
        var halat_child_mahr = document.querySelector(".halat_child_mahr");
        var halat_polotence = document.querySelector(".halat_polotence");

        halat_mahr.addEventListener("click", function () {
            halat_mahr.classList.remove("active");
            halat_velur.classList.remove("active");
            halat_child_mahr.classList.remove("active");
            halat_polotence.classList.remove("active");
            this.classList.add("active");

            halat_mahrovi_func();
        });
        halat_velur.addEventListener("click", function () {
            halat_mahr.classList.remove("active");
            halat_velur.classList.remove("active");
            halat_child_mahr.classList.remove("active");
            halat_polotence.classList.remove("active");
            this.classList.add("active");

            halat_velur_func();
        });
        halat_child_mahr.addEventListener("click", function () {
            halat_mahr.classList.remove("active");
            halat_velur.classList.remove("active");
            halat_child_mahr.classList.remove("active");
            halat_polotence.classList.remove("active");
            this.classList.add("active");

            halat_child_func();
        });
        halat_polotence.addEventListener("click", function () {
            halat_mahr.classList.remove("active");
            halat_velur.classList.remove("active");
            halat_child_mahr.classList.remove("active");
            halat_polotence.classList.remove("active");
            this.classList.add("active");

            halat_polotence_func();
        });

        /* функция проверяет какой цвет сейчас checked и возвращает его в объект */

        function funcCheckedFabricColor() {
            for (var i = 0; i < input_color_halat_block.length; i++) {
                if (input_color_halat_block[i].checked) {
                    //constructorData.fabricColor = input_color_halat_block[i].value;
                    return input_color_halat_block[i].value;
                }
            }
        }



        /* события нотификации в окне просмотра халата */
        document.querySelector(".close_notation").addEventListener("click", function () {
            this.closest(".notation").style.display = "none";
        });

        /* зачистка некоторых input-ов при загрузке страницы */
        function clearInputFrame_on_chest() {
            if (document.querySelector("#input_name_on_chest") != null) {
                document.querySelector("#input_name_on_chest").value = "";
            }
            if (document.querySelector("input[name='frame_on_chest']") != null) {
                for (var i = 0; i < document.querySelectorAll("input[name='frame_on_chest']").length; i++) {
                    document.querySelectorAll("input[name='frame_on_chest']")[i].checked = false;
                }
            }
        }
        clearInputFrame_on_chest();


        /* события для вышивки инициалов на груди */
        var input_name_on_chest = document.querySelector(".input_name_on_chest");
        var input_name_on_chest_text = document.querySelector("#text_for_name_on_chest");
        var for_name_on_chest = document.querySelector(".for_name_on_chest");
        var for_name_on_chest_close_btn = document.querySelector(".for_name_on_chest_close_btn");


        input_name_on_chest.addEventListener("input", function () {
            for_name_on_chest.style.display = "flex";
            input_name_on_chest_text.innerHTML = this.value;
            constructorData.initialsOnChest = true;
            if (this.value.length < 1) {
                constructorData.ifInitialOnChestTrueText = null;

                if (constructorData.topPictureGroup === "Нет" || constructorData.topPictureGroup === null && constructorData.bottomPictureGroup === "Нет" || constructorData.bottomPictureGroup === null && constructorData.ifInitialOnChestTrueImg===null) {
                    if (constructorData.ifInitialOnChestTrueText === null && constructorData.ifInitialOnChestTrueImg === null) {
                        constructorData.threadType = null;
                        constructorData.threadColor = null;
                        constructorData.properThreadColor = null;
                        constructorData.threadColorRus = null;
                    }

                }
            } else {
                constructorData.ifInitialOnChestTrueText = this.value;

                constructorData.threadType = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadType");
                constructorData.threadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColor");
                constructorData.properThreadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-properThreadColor");
                constructorData.threadColorRus = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColorRus");
            }


            //console.log(document.querySelector(".for_name_on_chest").style.backgroundImage);
            for (var i = 0; i < input_frame_on_chest.length; i++) {
                if (input_frame_on_chest[i].checked) {
                    constructorData.ifInitialOnChestTrueImg = input_frame_on_chest[i].previousElementSibling.getAttribute("src");
                }
            }

            funcTotalEmbroideryOnChestZone();
            funcOutputInConsole();
        });
        var input_frame_on_chest = document.querySelectorAll("input[name='frame_on_chest']");
        for (var i = 0; i < input_frame_on_chest.length; i++) {
            input_frame_on_chest[i].addEventListener("click", function () {
                var imgSrc = this.previousElementSibling.getAttribute("src");
                for_name_on_chest.style.backgroundImage = "url('./" + imgSrc + "')";
                document.querySelector(".for_name_on_chest").style.display = "flex";
                constructorData.ifInitialOnChestTrueImg = imgSrc;

                constructorData.threadType = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadType");
                constructorData.threadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColor");
                constructorData.properThreadColor = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-properThreadColor");
                constructorData.threadColorRus = document.querySelector("input[name='input_radio_color_box']:checked").getAttribute("data-threadColorRus");

                constructorData.initialsOnChest = true;

                funcTotalEmbroideryOnChestZone();
                funcOutputInConsole();
            });

        }

        for_name_on_chest_close_btn.addEventListener("click", function () {
            this.closest(".for_name_on_chest").style.display = "none";
            input_name_on_chest.value = "";
            for_name_on_chest.style.backgroundImage = "";
            for (var i = 0; i < input_frame_on_chest.length; i++) {
                input_frame_on_chest[i].checked = false;
            }
            constructorData.initialsOnChest = false;
            constructorData.ifInitialOnChestTrueText = null;
            constructorData.ifInitialOnChestTrueImg = null;
            if (constructorData.topPictureGroup === "Нет" || constructorData.topPictureGroup === null && constructorData.bottomPictureGroup === "Нет" || constructorData.bottomPictureGroup === null) {
                if (constructorData.ifInitialOnChestTrueText === null && constructorData.ifInitialOnChestTrueImg === null) {
                    constructorData.threadType = null;
                    constructorData.threadColor = null;
                    constructorData.properThreadColor = null;
                    constructorData.threadColorRus = null;
                }

            }

            funcTotalEmbroideryOnChestZone();
            funcOutputInConsole();
        });

        console.log(constructorData);

        var color_box_label = document.querySelectorAll(".color_box_label");
        for (var i = 0; i < color_box_label.length; i++) {
            color_box_label[i].addEventListener("mouseover", function () {
                document.querySelector(".ancor_to_top").style.zIndex = 2;
            });
            color_box_label[i].addEventListener("mouseleave", function () {
                document.querySelector(".ancor_to_top").style.zIndex = 6;
            });
        }

        /* расчёт размера и порядка в области отрисовки */
        function funcCalculateSizeAndChangeOrder(){
            if(constructorData.topPictureGroup === "Рамки"){
                document.querySelector(".area_top_img").classList.add("frame");
                constructorData.topPictureEmbroideryZone.frame = true;
            }else{
                document.querySelector(".area_top_img").classList.remove("frame");
                constructorData.topPictureEmbroideryZone.frame = false;
            }
            if(constructorData.topPicture!==null){
                if(constructorData.topPictureEmbroideryZone.frame){
                    constructorData.topPictureEmbroideryZone .height=constructorData.totalEmbroideryZone.height*0.75;
                } else{
                    constructorData.topPictureEmbroideryZone .height=constructorData.totalEmbroideryZone.height*0.5;
                }
                document.querySelector(".area_top_img").classList.remove("null");
            }else{
                
                document.querySelector(".area_top_img").classList.add("null");
            }
            
            if(constructorData.bottomPicture!==null){
                constructorData.bottomPictureEmbroideryZone.height=constructorData.totalEmbroideryZone.height*0.25;
                document.querySelector(".area_bottom_img").classList.remove("null");
            }else{
                constructorData.bottomPictureEmbroideryZone.height=null;
                document.querySelector(".area_bottom_img").classList.add("null");
            }
            
            if(constructorData.embroideryText !== null){
                constructorData.textEmbroideryZone.height=constructorData.totalEmbroideryZone.height*0.25;
                document.querySelector(".area_text").classList.remove("null");
            }else{
                document.querySelector(".area_text").classList.add("null");
            }
            
            

            funcOutputInConsole();
        }

    }
    /* конец для if (document.querySelector(".constructor")) */


    /* для показать на карте */
    if (document.querySelector(".show_on_map") != null) {
        var show_on_map = document.querySelector(".show_on_map");
        var wrap_for_map = document.querySelector(".wrap_for_map");
        var show_on_map_show = document.querySelector(".show_on_map_show");
        var show_on_map_hide = document.querySelector(".show_on_map_hide");
        show_on_map.addEventListener("click", function (e) {
            e.preventDefault();
            show_on_map_show.classList.toggle("hide");
            show_on_map_hide.classList.toggle("hide");
            wrap_for_map.classList.toggle("hidden");
        });
    }

    


    var constructorData = {
        "goodType": "",
        /* {
            "halat",
            "polotence"
        }; */
        "fabricType": "",
        /* {
            "mahra", 
            "velur"
        } */
        "fabricColor": "",
        /* {
            "white",
            "blue"
        } */
        "modelAgeType": "",
        /* {
            "adult",
            "child",
            "notApplicable"
        } */
        "properFabricColor": "",
        /* {
            "mahraWhite",
            "mahraBlue",
            "velurWhite",
            "velurBlue",
        } */
        "halatSize": "",
        /* {
            "notApplicable",
            "все размеры",
        } */
        "polotenceSize": "",
        /* {
            "notApplicable",
            "70*140",
        } */
        "initialsOnChest": false,
        /* {
            "",
            "",
        } */
        "ifInitialOnChestTrueText": "Not applicable",
        /* {
            "",
            "",
        } */
        "ifInitialOnChestTrueImg": "Not applicable",
        /* {
            "",
            "",
        } */
        "threadType": "",
        /* {
            "",
            "",
        } */
        "threadColor": "",
        /* {
            "",
            "",
        } */
        "properThreadColor": "",
        /* {
            "",
            "",
        } */
        "threadColorRus": "",
        /* {
            "",
            "",
        } */
        "sliderFontSize": "",
        /* {
            "",
            "",
        } */
        "font": "",
        /* {
            "",
            "",
        } */
        "embroideryText": "",
        /* {
            "",
            "",
        } */
        "orderName": "",
        /* {
            "",
            "",
        } */
        "orderPhone": "",
        /* {
            "",
            "",
        } */
        "orderAddressComment": "",
        /* {
            "",
            "",
        } */
        "deletedText": "",
        /* {
            "",
            "",
        } */
        "rundomNumberOrder": "",
        /* {
            "",
            "",
        } */
        "pictureSize": "",
        /* {
            "",
            "",
        } */
        "topPictureGroup": "",
        /* {
            "",
            "",
        } */
        "topPicture": "",
        /* {
            "",
            "",
        } */
        "bottomPictureGroup": "",
        /* {
            "",
            "",
        } */
        "bottomPicture": "",
        /* {
            "",
            "",
        } */
        "padding-top": "7",
        /* {
            "",
            "",
        } */
        "totalEmbroideryZone": {
            "width": "",
            "height": "",
            "order": "0"
        },
        "topPictureEmbroideryZone": {
            "width": "",
            "height": "",
            "order": "",
            "frame": false
        },

        "bottomPictureEmbroideryZone": {
            "width": "",
            "height": "",
            "order": ""
        },
        "textEmbroideryZone": {
            "width": "",
            "height": "",
            "order": ""
        },
        "totalEmbroideryOnChestZone": "",
        /* {
            "",
            "",
        } */
        "": "",
        /* {
            "",
            "",
        } */
    };
    console.log("constructorData.type");
    /* халат который изначально будет видно */
    halat_mahrovi_func();

});


/* 
var  objectMain = {
  "type": ["halat", "polotence"],
  "Тип ткани": [
    махровый велюровый
  ],
  "Цвет ткани": [
    белый
    синий
  ],
  "Если халат то ": {
    "размер": "",
    "рост": ""
  },
  "Если полотенце то ": {
    "размер": ""
  },
  "тип лекала": {
    мужское,
    Женское,
    унисекс
  },
  
  Область нанесения на спине
    размер зоны,
  
  Зоны нанесения
    зона верхняя
    зона средняя
    зона нижняя
  
  Назначение зоны
    для рисунка верхнего,
    для рисунка нижнего,
    для текста
  

  
  "верний рисунок": "",
  текст
    размер
      размер букв сантиметров на вышвивке
      количество букв на вышивке
  
      размер шрифта на ползунке
        1, 2, 3
      относительный размер на рисунке в px
    
    Содержание (строка текста)
    
    Шрифт
      ....
  
  нижний рисунок
  инициалы
    текст инициалов (строка)
    рамка инициалов
  сторона изделия
    передняя
    задняя
 
 Нитки
 
 Тип ниток
    металлизированный
    неметализированный
 
 Цвет ниток
    цвет .....
  
 Имя заказчика

Телефон заказчика
 
 Заказ
    комментарий
 
 адрес доставки
  
 дата совершения заказа

 Инициалы
    если фалсe
        инициалы.текс="Not applicable";
        инициалы.картинка ="Not applicable";
    если тру 
        инициалы.текс="строка 2 символа || либо пустая строка";
        инициалы.картинка =null || либо .value картинки;
        : string(2)
инициалы.текс
инициалы.картинка
 
  
} */