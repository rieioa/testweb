$(function() {
  $(".hamburger").on("click", function() {
    var that = $(this);
    if (that.hasClass("is-open")) {
      that.removeClass("is-open").addClass("is-closed");
    } else {
      that.removeClass("is-closed").addClass("is-open");
    }
  });
});


CSS.registerProperty({
  name: "--p",
  syntax: "<integer>",
  initialValue: 0,
  inherits: true
});


var nowDate = new Date();
var joinDate = new Date(2021, 07, 17);
var endDate = new Date(2023, 01, 16);
var btMs = nowDate.getTime() - joinDate.getTime() ;
var WkMs = endDate.getTime() - joinDate.getTime() ;
var a = parseInt((btMs*100)/WkMs) ; 

document.documentElement.style.setProperty("--rate", a);