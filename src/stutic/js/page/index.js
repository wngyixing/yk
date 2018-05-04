// require(
//     [
//         'jquery',
//         "handlebars",
//         "template"
//     ],
//     function($, handlebars, template) {

//         $.ajax({
//             url: "/getlists",
//             type: 'get',
//             dataType: 'json',
//             success: function(data) {
//                 var Data = data
//                 console.log(Data)
//                 console.log(template('#nav', { data: Data }, ".section"))
//             }
//         })


//     })
$('.header-tit ul li').click(function() {
    var index = $(this).index()
    $(this).addClass('on').siblings().removeClass('on')
    $('.page .section').eq(index).show().siblings().hide()
})