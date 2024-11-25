const carouselItems = document.querySelectorAll(".carousel-item");
let i = 1;

setInterval(() => {
  // Acessando todos os items do carrossel
  Array.from(carouselItems).forEach((item, index) => {

    if(i < carouselItems.length){
      item.style.transform = 'translateX(-${i*100}%)'
    }
  })

  if(i < carouselItems.length){
    i++;
  }
  else{
    i=0
  }
},2000)