require(
    [
        'jquery',
        "handlebars",
        "template"
    ],
    function($, handlebars, template) {

        $.ajax({
            url: "/getnav",
            type: 'get',
            dataType: 'json',
            success: function(data) {
                var Data = data
                console.log(Data)
                console.log(template('#nav', { data: Data }, ".nav"))
            }
        })
        $.ajax({
            url: "/getlist",
            type: 'get',
            dataType: 'json',
            success: function(data) {
                var Data = data
                console.log(Data)
                template('#page', { data: Data },
                    ".page")
            }
        })
        $('.nav ul li').click(function() {
            console.log(0)
            var index = $(this).index()
            $(this).addClass('active').siblings().removeClass('active');
            $(".box page").eq(index).show().siblings().hide()
        })


    })