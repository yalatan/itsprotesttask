let randomText="";
let country = ["США", "Беларусь", "Албания", "Гондурас", "Дания", "Сербия", "Малайзия"];
let nameVisitor = ["Арнольд Ш.", "Матильда Р.", "Тарас П.", "Алекс В.", "Мария Ф.", "Гера К.", "Иванко У."];
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  }


document.addEventListener("DOMContentLoaded", ready);
function ready (){


/* create reviews*/  
let reviews = document.getElementById("reviews");
function createReview(){
let responseText;
var xhr = new XMLHttpRequest();
let text_random_amount = randomInteger(1, 4);
let text_random_number = randomInteger(8, 20);
let text_random_number_max = randomInteger(21, 60);
let path = 'http://www.randomtext.me/api/lorem/p-' + text_random_amount + '/' + text_random_number + '-' + text_random_number_max;
xhr.open('GET', path, true);
xhr.send();
xhr.onreadystatechange = function() {
  if (this.readyState != 4) return;
  if (this.status != 200) {
    alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
    return;
  }  
  randomText = JSON.parse(this.responseText);
  
  var div = document.createElement('div');
  div.className = "reviews_section_div";
let stars=document.createElement('p');
stars.className = 'stars';
let starnumber = randomInteger(1,5);
for(let i=0; i<starnumber; i++){
    let img=document.createElement('img');
    img.setAttribute("src", "assets/home/StarFill.png");
    stars.appendChild(img);
}
for(let i=starnumber; i<5; i++){
    let img=document.createElement('img');
    img.setAttribute("src", "assets/home/Star.png");
    stars.appendChild(img);
}
reviews.appendChild(div);
div.appendChild(stars);

let textreviews=document.createElement('p');
textreviews.className = 'text_reviews';
textreviews.innerHTML = randomText.text_out;
div.appendChild(textreviews);
let next=document.createElement('p');
next.className = 'next bold_text';
next.innerHTML = 'Читать дальше &#8250';
div.appendChild(next);
let q = randomInteger(0, country.length);
let w = randomInteger(0, nameVisitor.length);
let author=document.createElement('p');
author.className = 'author';
author.innerHTML = nameVisitor[w]+", "+" "+country[q];
div.appendChild(author);

}
};
for(let t=0; t<3; t++){createReview();}
 
/*slider*/
  let left_arrow = document.getElementById("left_arrow");

  let right_arrow = document.getElementById("right_arrow");
  var slideIndex = 4;
  let arrSlides = document.getElementsByClassName("slide_image");
 
  let q = 0;
  for (let i = 0; i < arrSlides.length; i++) {
    arrSlides[i].style.display = "none";
  }
  for (q; q < slideIndex; q++) {
    arrSlides[q].style.display = "inline-block";
  }
  left_arrow.style.color = "grey";

  
  function showDivs(n) {
    for (let i = 0; i < arrSlides.length; i++) {
      arrSlides[i].style.display = "none";
    }
    let slideIndNew = slideIndex + n;
   
    if (slideIndNew <= 4) {
      slideIndex = 4;
      q = slideIndex - 4;
      left_arrow.style.color = "grey";
    }

    if (slideIndNew> 4 && slideIndNew <= arrSlides.length) {
      slideIndex = slideIndNew;
      q = slideIndex - 4;
      left_arrow.style.color = "#774989";
      right_arrow.style.color = "#774989";
    }
    if (slideIndNew == arrSlides.length) {
      right_arrow.style.color = "grey";
    };
    if (slideIndNew > arrSlides.length) {
      slideIndex = arrSlides.length;
      q = slideIndex - 4;
    };
   
   
    for (q; q < slideIndex; q++) {
      arrSlides[q].style.display = "inline-block";
    }
  };
  
  left_arrow.onclick = function f(){
    showDivs(-1);
  }
  right_arrow.onclick = function f(){ showDivs(1);}

/*MENU OPEN */
let menuOpen = document.getElementById("menu_button_open");
let menu_open_wrapper = document.getElementById("menu_open_wrapper");
  let menu_button_close = document.getElementById("menu_button_close");
menuOpen.onclick = function (){  

  menu_open_wrapper.style.display = "block";
  menuOpen.style.display = "none";
  menu_button_close.style.display = "inline";
  search_open_wrapper.style.display = "none";
  searchOpen.style.display = "inline";
  search_button_close.style.display = "none";
}
menu_button_close.onclick = function (){  
  menu_open_wrapper.style.display = "none";
  menuOpen.style.display = "inline";
  menu_button_close.style.display = "none";
}
/*SEARCH OPEN */
let searchOpen = document.getElementById("search_button_open");
let search_open_wrapper = document.getElementById("search_open_wrapper");
  let search_button_close = document.getElementById("search_button_close");
searchOpen.onclick = function (){  
  search_open_wrapper.style.display = "block";
  searchOpen.style.display = "none";
  search_button_close.style.display = "inline";
  menu_open_wrapper.style.display = "none";
  menuOpen.style.display = "inline";
  menu_button_close.style.display = "none";
}
search_button_close.onclick = function (){  
  search_open_wrapper.style.display = "none";
  searchOpen.style.display = "inline";
  search_button_close.style.display = "none";
}
/**FAQ open */

let faq_section_div = document.getElementsByClassName("faq_section_div");
let faq_section_div_text = document.getElementsByClassName("faq_section_div_text");
for(let i=0; i<faq_section_div.length; i++){  
  faq_section_div[i].onclick = function (e){
let svgArr = faq_section_div[i].getElementsByTagName("svg");
if(svgArr[0].style.display == "none"){
svgArr[1].style.display = "none";
svgArr[0].style.display = "inline";
faq_section_div_text[i].style.display="none";
}
else{
svgArr[0].style.display = "none";
svgArr[1].style.display = "inline";
faq_section_div_text[i].style.display="block";
}
     };    
}

/**TEXTAREA OPEN */
document.getElementById("info_form").onclick = function(){
  document.getElementById("addTextarea").style.display= 'inline';
  let elemDiv = document.getElementById("info_form");
  let elem = document.getElementById("info_form_text");
  elem.classList.remove("info_form_text");
  elemDiv.style.order = "-1";
  
}
/**SCROLL */
window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
/**MAP */
var myMap;
ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
function init () {
  var lpMapOptions1 = {
    center: [53.938623, 27.600566],
    zoom: 16,
    controls: ['fullscreenControl', 'zoomControl']
};
var lpPlacemark1 = new ymaps.Placemark(lpMapOptions1.center, {
  hintContent: 'ИТСПРО',
  balloonContentHeader: 'ИТСПРО',
  balloonContentBody: 'IT компания. Основное направление деятельности нашей компании – системная интеграция',
  balloonContentFooter: 'Минск, ул.Мележа, 25'
});
  myMap = new ymaps.Map("map", lpMapOptions1);
  myMap.geoObjects.add(lpPlacemark1); 
}






/*contacts open*/
let navigation = document.getElementsByClassName("header_navigation_page_span");
let sections = document.getElementsByTagName("section");
for(let i=0; i<navigation.length; i++){  
  navigation[i].onclick = function (e){
   if(i == "1"){
    navigation[0].classList.remove("bold_text"); 
    navigation[1].classList.add("bold_text");
    for(let q=0; q<sections.length; q++){
      sections[q].style.display= 'none';

    }  
    document.getElementsByClassName("first_section")[0].style.display= 'none'; 
    document.getElementsByClassName("contacts_section")[0].style.display= 'block'; 
    document.getElementsByClassName("how_works_section")[0].style.display= 'block'; 
    document.getElementsByClassName("form_section")[0].style.display= 'block'; 
    if (document.documentElement.clientWidth < 800) {
      document.getElementsByClassName("specialization_section")[0].style.display= 'block';
  }
    document.addEventListener("resize", function(){
      if (document.documentElement.clientWidth < 800) {
        document.getElementsByClassName("specialization_section")[0].style.display= 'block'; 
    }else{
      document.getElementsByClassName("specialization_section")[0].style.display= 'none';
    }
    });
  
    
   }
   if(i == "0"){
    navigation[1].classList.remove("bold_text"); 
    navigation[0].classList.add("bold_text"); 
    
    for(let q=0; q<sections.length; q++){
      sections[q].style.display= 'block';
    }  
    document.getElementsByClassName("first_section")[0].style.display= 'block';
    document.getElementsByClassName("contacts_section")[0].style.display= 'none';    
   }
  }
};



/*slider banner top*/

let arrSlidesBanner= document.getElementsByClassName("first_section_slide");
let numberSlidesBanner = document.getElementsByClassName("first_section_pages_circle");
for (let i = 0; i < arrSlidesBanner.length; i++) {
  arrSlidesBanner[i].style.display = "none";
}
arrSlidesBanner[0].style.display = "block";

for (let i = 0; i < arrSlidesBanner.length; i++) {
  numberSlidesBanner[i].onclick = function (e) {
    for (let q = 0; q < arrSlidesBanner.length; q++) {
      arrSlidesBanner[q].style.display = "none";
      numberSlidesBanner[q].classList.remove("fill_circle");
    };
    arrSlidesBanner[i].style.display = "block";
    numberSlidesBanner[i].classList.add("fill_circle");
  };
};
/*scroll button_up*/
button_up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
});
};


};