$(function() {
  "use strict";
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2019, 9, 30), format: 'DHMS'});
});
