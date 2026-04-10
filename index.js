/* ============================================
   Republiek Bloemendaal — Index Page Scripts
============================================ */

(function(){
      var n=5, cur=0, timer;
      function show(i){
        document.getElementById('rc'+cur).style.opacity='0';
        document.getElementById('rd'+cur).style.background='rgba(255,255,255,0.35)';
        cur=i;
        document.getElementById('rc'+cur).style.opacity='1';
        document.getElementById('rd'+cur).style.background='rgba(255,255,255,0.9)';
      }
      function tick(){ show((cur+1)%n); }
      function reset(){ clearInterval(timer); timer=setInterval(tick,5000); }
      for(var j=0;j<n;j++){
        (function(k){
          document.getElementById('rd'+k).onclick=function(e){ e.stopPropagation(); show(k); reset(); };
        })(j);
      }
      document.getElementById('rc').onclick=function(){ tick(); reset(); };
      timer=setInterval(tick,5000);
    })();

const navLinks = document.querySelectorAll('.nav-links a');

// Home is always active on this page - no scroll-based switching

(function(){
  var nav = document.querySelector('nav');
  var hero = document.querySelector('.hero');
  nav.classList.add('transparent');
  function onScroll() {
    // Don't change nav appearance when mobile menu is open
    var menuOpen = document.getElementById('nav-links') && document.getElementById('nav-links').classList.contains('open');
    if (menuOpen) return;
    if (window.scrollY > hero.offsetHeight - 80) {
      nav.classList.add('scrolled');
      nav.classList.remove('transparent');
    } else {
      nav.classList.remove('scrolled');
      nav.classList.add('transparent');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();
})();