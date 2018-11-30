(function(win, doc, $) {

  "use strict";

  // KEY は https://console.developers.google.com にて公開APIキーを作成する必要があります
  // KEYWORD は 検索したいワードをつかってください

  $.ajax({
    type     : "get",
    dataType : "jsonp",
    url      : "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=" + "ゲーム" + "&key=" + "AIzaSyDj0DA0cntiRZ5eAvoxuITyHWuY0UdvcKc"
  }).done(function(evt) {
    console.log(evt);
  });
})(this, document, $);
