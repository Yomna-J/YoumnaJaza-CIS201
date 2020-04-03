/**
 * index.js
 * - All our useful JS goes here, awesome!
 Maruf-Al Bashir Reza
 */

function myFunction(x) {
  
  let size = 150;
  if (x.matches) {
    // If media query matches
    size = 100;
  }



    function animateElements() {
      $(".progressbar").each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find(".circle").attr("data-percent");
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data("animate");
        if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
          $(this).data("animate", true);
          $(this)
            .find(".circle")
            .circleProgress({
              startAngle: -Math.PI / 2,
              value: percent / 100,
              thickness: 4,
              lincCape: "round",
              emptyFill: "#d4d4d4",
              fill: {
                color: "#1F88E9",
              },
              size: size,
            });
          $(this).data("animate", false);
        }
      });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
}

var x = window.matchMedia("(max-width: 750px)");
myFunction(x);

$(window).on("resize", function (e) {
  var x = window.matchMedia("(max-width: 750px)");
  myFunction(x); // Call listener function at run time
});

