document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    

    /* вызываем слайдеры */
    
    var swiperStandart = new Swiper('.swiper-standart', {
        initialSlide: 0,
        speed: 700,
        spaceBetween: 0,
        slidesPerView: 1,
        loop: false,
        grabCursor: true,

        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: function (number) {
            switch(number)
              {
                case 1:
                myNum='01';
                break;
                case 2:
                myNum='02';
                break;
                case 3:
                myNum='03';
                break;
                case 4:
                myNum='04';
                break;
                case 5:
                myNum='05';
                break;
                case 6:
                myNum='06';
                break;
                case 7:
                myNum='07';
                break;
                case 8:
                myNum='08';
                break;
                case 9:
                myNum='09';
                break;
                default:myNum= number;
              }
            return myNum; 
          },
          formatFractionTotal: function (number) {
            switch(number)
              {
                case 1:
                myNum='01';
                break;
                case 2:
                myNum='02';
                break;
                case 3:
                myNum='03';
                break;
                case 4:
                myNum='04';
                break;
                case 5:
                myNum='05';
                break;
                case 6:
                myNum='06';
                break;
                case 7:
                myNum='07';
                break;
                case 8:
                myNum='08';
                break;
                case 9:
                myNum='09';
                break;
                default:myNum= number;
              }
            return myNum; 
          },
          

        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          1024: {
            
          },
          768: {
            
          },
        }
      });
    var main_slider = new Swiper('.main_slider', {
        initialSlide: 0,
        speed: 700,
        spaceBetween: 0,
        slidesPerView: 1,
        loop: false,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          formatFractionCurrent: function (number) {
            switch(number)
              {
                case 1:
                myNum='01';
                break;
                case 2:
                myNum='02';
                break;
                case 3:
                myNum='03';
                break;
                case 4:
                myNum='04';
                break;
                case 5:
                myNum='05';
                break;
                case 6:
                myNum='06';
                break;
                case 7:
                myNum='07';
                break;
                case 8:
                myNum='08';
                break;
                case 9:
                myNum='09';
                break;
                default:myNum= number;
              }
            return myNum; 
          },
          formatFractionTotal: function (number) {
            switch(number)
              {
                case 1:
                myNum='01';
                break;
                case 2:
                myNum='02';
                break;
                case 3:
                myNum='03';
                break;
                case 4:
                myNum='04';
                break;
                case 5:
                myNum='05';
                break;
                case 6:
                myNum='06';
                break;
                case 7:
                myNum='07';
                break;
                case 8:
                myNum='08';
                break;
                case 9:
                myNum='09';
                break;
                default:myNum= number;
              }
            return myNum; 
          },
        

        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
          1024: {
            
          },
          768: {
            
          },
        }
      });
  

    /* js для аккардеона и табера */

  var acc_block = document.querySelectorAll(".acc_block");
  for ( i = 0; i < acc_block.length; i++) {
    acc_block[i].addEventListener("click", function(){
      for ( x = 0; x < acc_block.length; x++) {
        acc_block[x].classList.remove("active");
      }
      this.classList.add("active");
    });
  }

  var acc_tab = document.querySelectorAll(".acc_tab");
  var acc_conditions = document.querySelector(".acc_conditions");
  var acc_risks = document.querySelector(".acc_risks");
  var acc_guarantee = document.querySelector(".acc_guarantee");

  for ( i = 0; i < acc_tab.length; i++) {
    
    acc_tab[i].addEventListener("click", function(){
      for ( i = 0; i < acc_tab.length; i++) {
        acc_tab[i].classList.remove("active");
      }
      this.classList.add("active");
      if (this.classList.contains("js_acc_conditions_tab")) {
        acc_conditions.style.display = "block";
        acc_risks.style.display = "none";
        acc_guarantee.style.display = "none";
      }
      if (this.classList.contains("js_acc_risks_tab")) {
        acc_conditions.style.display = "none";
        acc_risks.style.display = "block";
        acc_guarantee.style.display = "none";
      }
      if (this.classList.contains("js_acc_guarantee_tab")) {
        acc_conditions.style.display = "none";
        acc_risks.style.display = "none";
        acc_guarantee.style.display = "block";
      }
    });

  }
  /* конец для аккардеона и табера */

  /* для табера Мыслим масштабно */
  var js_labels_title = document.querySelectorAll(".js_labels_title");
  var labels_imgs = document.querySelectorAll(".labels_imgs");

  for ( i = 0; i < js_labels_title.length; i++) {
    js_labels_title[i].addEventListener("mouseover", function(){
      js_labels_title.forEach(function(el){
        el.classList.remove("active");
      });

      this.classList.add("active");
      
      for ( i = 0; i < js_labels_title.length; i++) {
        if (js_labels_title[i].classList.contains("active")) {
          labels_imgs.forEach(function(el){
            el.classList.remove("active");
          });
          labels_imgs[i].classList.add("active");
        }
      }
    });
  }
  /* конец для табера Мыслим масштабно */

  /* для табера our_expertise */
  
  var js_title_expertise = document.querySelectorAll(".js_title_expertise");
  var js_taber_content_expertise = document.querySelectorAll(".js_taber_content_expertise");

  for ( i = 0; i < js_title_expertise.length; i++) {
    js_title_expertise[i].addEventListener("mouseover", function(){
      js_title_expertise.forEach(function(el){
        el.classList.remove("active");
      });
      this.classList.add("active");

      for ( i = 0; i < js_title_expertise.length; i++) {
        if (js_title_expertise[i].classList.contains("active")) {
          js_taber_content_expertise.forEach(function(el){
            el.classList.remove("active");
          });
          js_taber_content_expertise[i].classList.add("active");
        }
      }
    });
  }
  /* конец для табера our_expertise */

  /* плавный скролл по ссылке */

  var goTo = document.querySelectorAll(".go_to");
  for ( i = 0; i < goTo.length; i++) {
      var element = goTo[i];
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
                  console.error(error + " проставьте верные id на которые ведёт ссылка");
              }
              
          }
      });
  }
  /* конец плавный скролл по ссылке */

  /* события для навигации в мобильном меню */
  var nav_circle = document.querySelector(".nav_circle");
  var navigationUl = document.querySelector(".navigation_ul");
  
  nav_circle.addEventListener("click", function(e){
    if (e.currentTarget.classList.contains("active")) {
        e.currentTarget.classList.remove("active");
        navigationUl.classList.remove("nav_action");
    } else {
        e.currentTarget.classList.add("active");
        navigationUl.classList.add("nav_action");
    }
  });

  /* скрипты в зависимости от размера экрана */

  if (window.matchMedia("(min-width: 769px)").matches) {
  } else {
      /* the viewport is less than 769px pixels wide */
      /* для навигации для мобильников */
      navigationUl.addEventListener("click", function(){
          navigationUl.classList.remove("nav_action");
          nav_circle.classList.remove("active");
      });
  }

  /* для появления кнопки скролла вверх */

  var scroll_top = document.getElementById("scroll_top");
  var scrollHeightDocument = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  window.addEventListener("scroll", function(){
    /* console.log(window.pageYOffset/scrollHeightDocument); */
    if (window.pageYOffset > 1500) {
      scroll_top.classList.add("visible");
    } else {
      scroll_top.classList.remove("visible");
    }
    if (window.pageYOffset/scrollHeightDocument > 0.82) {
      scroll_top.classList.add("bottom");
    } else {
      scroll_top.classList.remove("bottom");
    }
    

  });

  /* маска для телефона */

  var inputPhone = document.querySelectorAll(".input_phone");
  for ( i = 0; i < inputPhone.length; i++) {
      var cleave = new Cleave(inputPhone[i], {
          phone: true,
          /* prefix: '+7',*/
          delimiter: '-',
          phoneRegionCode: 'RU'
      });
  }
  /* конец маски для телефона */

  function mapProject(){
    ymaps.ready(init);
    function init(){ 
        var myMap = new ymaps.Map("map", {
            center: [55.710053, 37.444263],
            zoom: 17,
            controls: [],
        });

        myMap.balloon.open(
            // Позиция балуна
            [55.710153, 37.442450], {
            contentBody: 
            '<div class="custom_label"><div class="triger"><div class="toggle_anime"><div class="circle"></div></div></div><div class="text">БЦ «Верейская Плаза 1»</div><div class="triangle"></div></div>',
            }, 
            {
            // Опции балуна. В данном примере указываем, что балун не должен иметь кнопку закрытия.
            closeButton: false,
            balloonContentHeader: '',
            balloonMaxWidth: 643,
            balloonMaxheight: 235,
            balloonMinWidth:  400,
            balloonMinheight: 131,
        });

        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.enable('drag');
        var zoomControl = new ymaps.control.ZoomControl({
            options: {
                position:{
                    left: "auto",
                    right: 10,
                    top: 116
                }
            }
        });
        myMap.controls.add(zoomControl);
        myMap.controls.add('fullscreenControl');
    }
}
mapProject();

});