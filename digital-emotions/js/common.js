document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    /* маска для телефона */

    var inputPhone = document.querySelectorAll(".input_phone");
    for (var i = 0; i < inputPhone.length; i++) {
        var cleave = new Cleave(inputPhone[i], {
            phone: true,
            // prefix: '+7',
            delimiter: '-',
            phoneRegionCode: 'RU'
        });
    }
    /* конец маски для телефона */

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
                myNum='01'
                break;
                case 2:
                myNum='02'
                break;
                case 3:
                myNum='03'
                break;
                case 4:
                myNum='04'
                break;
                case 5:
                myNum='05'
                break;
                case 6:
                myNum='06'
                break;
                case 7:
                myNum='07'
                break;
                case 8:
                myNum='08'
                break;
                case 9:
                myNum='09'
                break;
                default:myNum= number
              }
            return myNum; 
          },
          formatFractionTotal: function (number) {
            switch(number)
              {
                case 1:
                myNum='01'
                break;
                case 2:
                myNum='02'
                break;
                case 3:
                myNum='03'
                break;
                case 4:
                myNum='04'
                break;
                case 5:
                myNum='05'
                break;
                case 6:
                myNum='06'
                break;
                case 7:
                myNum='07'
                break;
                case 8:
                myNum='08'
                break;
                case 9:
                myNum='09'
                break;
                default:myNum= number
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
  for (let i = 0; i < acc_block.length; i++) {
    const element = acc_block[i];
    element.addEventListener("click", function(){
      for (let i = 0; i < acc_block.length; i++) {
        acc_block[i].classList.remove("active");
      }
      element.classList.add("active");
    });
  }

  var acc_tab = document.querySelectorAll(".acc_tab");
  var acc_conditions = document.querySelector(".acc_conditions");
  var acc_risks = document.querySelector(".acc_risks");
  var acc_guarantee = document.querySelector(".acc_guarantee");

  for (let i = 0; i < acc_tab.length; i++) {
    const element = acc_tab[i];
    element.addEventListener("click", function(){
      for (let i = 0; i < acc_tab.length; i++) {
        acc_tab[i].classList.remove("active");
      }
      element.classList.add("active");
      if (element.classList.contains("js_acc_conditions_tab")) {
        acc_conditions.style.display = "block";
        acc_risks.style.display = "none";
        acc_guarantee.style.display = "none";
      }
      if (element.classList.contains("js_acc_risks_tab")) {
        acc_conditions.style.display = "none";
        acc_risks.style.display = "block";
        acc_guarantee.style.display = "none";
      }
      if (element.classList.contains("js_acc_guarantee_tab")) {
        acc_conditions.style.display = "none";
        acc_risks.style.display = "none";
        acc_guarantee.style.display = "block";
      }
    })

  }
  /* конец для аккардеона и табера */

  /* для табера Мыслим масштабно */
  var js_labels_title = document.querySelectorAll(".js_labels_title");
  var labels_imgs = document.querySelectorAll(".labels_imgs");

  for (var i = 0; i < js_labels_title.length; i++) {
    js_labels_title[i].addEventListener("mouseover", function(){
      js_labels_title.forEach(function(el){
        el.classList.remove("active");
      })

      this.classList.add("active");
      
      for (let i = 0; i < js_labels_title.length; i++) {
        if (js_labels_title[i].classList.contains("active")) {
          labels_imgs.forEach(function(el){
            el.classList.remove("active");
          })
          labels_imgs[i].classList.add("active");
        }
      }
    });
  }
  /* конец для табера Мыслим масштабно */

  /* для табера our_expertise */
  
  var js_title_expertise = document.querySelectorAll(".js_title_expertise");
  var js_taber_content_expertise = document.querySelectorAll(".js_taber_content_expertise");

  for (var i = 0; i < js_title_expertise.length; i++) {
    js_title_expertise[i].addEventListener("mouseover", function(){
      js_title_expertise.forEach(function(el){
        el.classList.remove("active");
      });
      this.classList.add("active");

      for (let i = 0; i < js_title_expertise.length; i++) {
        if (js_title_expertise[i].classList.contains("active")) {
          js_taber_content_expertise.forEach(function(el){
            el.classList.remove("active");
          })
          js_taber_content_expertise[i].classList.add("active");
        }
      }
    })
  }
  /* конец для табера our_expertise */

});