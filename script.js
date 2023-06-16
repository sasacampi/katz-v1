const next=document.querySelector('#next');
const prev=document.querySelector('#prev');

function handleScrollNext (direction) {
  const cards = document.querySelector('.card-content');
  cards.scrollLeft=cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100;
}

function handleScrollPrev (direction) {
  const cards = document.querySelector('.card-content');
  cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth /2 : window.innerWidth -100;
}

next.addEventListener('click', handleScrollNext);
prev.addEventListener('click', handleScrollPrev);


const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-section]'),
  smooth: true,
  lass: 'is-inview',
    getSpeed: true,
    getDirection: true,
    reloadOnContextChange: true
});

// DATA BACKGROUND IMAGE
  var pageSection = $("*");
  pageSection.each(function (indx) {
    if ($(this).attr("data-background")) {
      $(this).css("background", "url(" + $(this).data("background") + ")");
    }
  });