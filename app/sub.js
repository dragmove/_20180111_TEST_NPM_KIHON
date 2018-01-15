console.log('Kihon :', Kihon);

var fullSizeBg = new Kihon.FullSizeBg({
  wrap: null,
  imgWrap: null,
  imgWidth: 4592, // natural image width
  imgHeight: 3064, // natural image height
  alignX: 'center', // 'left' or 'center' or 'right'
  alignY: 'center' // 'top' or 'center' or 'bottom'
}).init();

/*
(function ($) {
  "ust strict";

  $(document).ready(init);

  function init() {
    var fullSizeBg = new Kihon.FullSizeBg({
      wrap: $('.wrap-full-size-bg'), // wrap
      imgWrap: $('.full-size-bg'), // image wrap
      imgWidth: 4592, // natural image width
      imgHeight: 3064, // natural image height
      alignX: 'center', // 'left' or 'center' or 'right'
      alignY: 'center' // 'top' or 'center' or 'bottom'
    }).init();
  }
}(jQuery));
  */