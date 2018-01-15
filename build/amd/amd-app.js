console.log('define :', define);

define(['jquery', 'kihon'], function ($, Kihon) {
  console.log('Kihon :', Kihon);

  var fullSizeBg = new Kihon.FullSizeBg({
    wrap: null,
    imgWrap: null,
    imgWidth: 4592, // natural image width
    imgHeight: 3064, // natural image height
    alignX: 'center', // 'left' or 'center' or 'right'
    alignY: 'center' // 'top' or 'center' or 'bottom'
  }).init();
});

