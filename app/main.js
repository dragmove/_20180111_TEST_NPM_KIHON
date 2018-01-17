import {FullSizeBg} from 'kihon';

console.log('FullSizeBg :', FullSizeBg);

var fullSizeBg = new FullSizeBg({
  wrap: $('.wrap-full-size-bg'),
  imgWrap: $('.full-size-bg'),
  imgWidth: 4592, // natural image width
  imgHeight: 3064, // natural image height
  alignX: 'center', // 'left' or 'center' or 'right'
  alignY: 'center' // 'top' or 'center' or 'bottom'
}).init();