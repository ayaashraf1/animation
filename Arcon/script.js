document.getElementById('menuIcon').addEventListener('click',(e)=>{
    debugger;
    if (e.currentTarget.classList.contains('closedMenu')) {
        e.currentTarget.classList.remove('closedMenu');
        document.getElementById('menu').style.display = "flex";
        document.getElementById('menuIconBox').style.top = '95px';
    }else {
        e.currentTarget.classList.add('closedMenu');
        document.getElementById('menu').style.display = "none";
        document.getElementById('menuIconBox').style.top = '0px';
    }    
});


//-------slider logic-------

var rect = $('#container')[0].getBoundingClientRect();
var mouse = {x: 0, y: 0, moved: false};

$("#container").mousemove(function(e) {
  mouse.moved = true;
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});
 
// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', function(){
  if (mouse.moved){    
    parallaxIt(".slide", -100);
    parallaxIt("img", -30);
  }
  mouse.moved = false;
});

function parallaxIt(target, movement) {
  TweenMax.to(target, 0.5, {
    x: (mouse.x - rect.width / 2) / rect.width * movement,
    y: (mouse.y - rect.height / 2) / rect.height * movement
  });
}

$(window).on('resize scroll', function(){
  rect = $('#container')[0].getBoundingClientRect();
})