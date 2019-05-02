function mobileNavToggle(x) {
    x.classList.toggle("change");
  }

$(document).ready(function() {
  $("#mobileNavToggle").click(function() {
  $("#mobile-nav-content").toggleClass("hidden");
  });
});