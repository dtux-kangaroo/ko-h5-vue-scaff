// 页面单位rem
rem = () => {
  var docEl = document.documentElement,
  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
  recalc =  () => {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth >= 750) {
          docEl.style.fontSize = '100px';
      } else {
          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
  };
  recalc();
  window.addEventListener(resizeEvt, recalc, false);
}