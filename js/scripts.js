// $(function() {
//     $(".carousel").carousel( { interval: 2000, pause: "false" } );
//     $("#carouselButton").click(function(){
//         if ($("#carouselButton").children("i").hasClass("fa-pause")) {
//             $(".carousel").carousel("pause");
//             $("#carouselButton").children("i").removeClass("fa-pause");
//             $("#carouselButton").children("i").addClass("fa-play");
//         } else {
//             $(".carousel").carousel("cycle");
//             $("#carouselButton").children("i").removeClass("fa-play");
//             $("#carouselButton").children("i").addClass("fa-pause");
//         }
//     });
//             $("#reserveButton").click(function() {
//                 $("#reserveModal").modal("show");
//             });

//             $("#loginButton").click(function() {
//                 $("#loginModal").modal("show");
//             });
// });

let $item = $(".carousel-item");
let $wHeight = $(window).height();

$item.height($wHeight);
$item.addClass("full-screen");

$(".carousel img").each(function() {
    let $src = $(this).attr("src");
    let $color = $(this).attr("data-color");
    $(this).parent().css({
        "background-image" : "url(" + $src + ")",
        "background-color" : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
    })
})

// $(function() {
//     $("#reserveButton").click(function() {
//         $("#reserveModal").modal("show");
//     })
// })

// $(function() {
//     $("#loginButton").click(function() {
//         $("#loginModal").modal("show");
//     })
// })
