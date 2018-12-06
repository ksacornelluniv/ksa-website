$(document).ready(function() {
  $("#vid1").click(function () {
    $('#video1').removeClass("hidden");
    $('#video2').addClass("hidden");
    $('#video3').addClass("hidden");
    $('#video4').addClass("hidden");
    $('#video5').addClass("hidden");
    $('#video6').addClass("hidden");
  });

  $("#vid2").click(function () {
    $('#video2').removeClass("hidden");
    $('#video1').addClass("hidden");
    $('#video3').addClass("hidden");
    $('#video4').addClass("hidden");
    $('#video5').addClass("hidden");
    $('#video6').addClass("hidden");
  });

  $("#vid3").click(function () {
    $('#video3').removeClass("hidden");
    $('#video1').addClass("hidden");
    $('#video2').addClass("hidden");
    $('#video4').addClass("hidden");
    $('#video5').addClass("hidden");
    $('#video6').addClass("hidden");
  });

  $("#vid4").click(function () {
    $('#video4').removeClass("hidden");
    $('#video1').addClass("hidden");
    $('#video2').addClass("hidden");
    $('#video3').addClass("hidden");
    $('#video5').addClass("hidden");
    $('#video6').addClass("hidden");
  });

  $("#vid4").click(function () {
    $('#video4').removeClass("hidden");
    $('#video1').addClass("hidden");
    $('#video2').addClass("hidden");
    $('#video3').addClass("hidden");
    $('#video5').addClass("hidden");
    $('#video6').addClass("hidden");
  });

  $("#vid5").click(function () {
    $('#video5').removeClass("hidden");
    $('#video1').addClass("hidden");
    $('#video2').addClass("hidden");
    $('#video3').addClass("hidden");
    $('#video4').addClass("hidden");
    $('#video6').addClass("hidden");
  });

  $("#vid6").click(function () {
    $('#video6').removeClass("hidden");
    $('#video1').addClass("hidden");
    $('#video2').addClass("hidden");
    $('#video3').addClass("hidden");
    $('#video4').addClass("hidden");
    $('#video5').addClass("hidden");
  });

});
