let bar=document.querySelector("#bar")
let close=document.querySelector("#close")
let list=document.querySelector("ul")
bar.addEventListener("click",()=>{
          list.classList.add("active")
          bar.style.display="none"
          close.style.display="block"
})
close.addEventListener("click",()=>{
          list.classList.remove("active")
          close.style.display="none"
          bar.style.display="block"
})
// swiper 
var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation:{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        breakpoints:{
          1000:{
                       slidesPerView: 3,
                        spaceBetween: 40,
          },
          768:{
                       slidesPerView: 2,
                        spaceBetween: 40,
          },

        },
      });
      