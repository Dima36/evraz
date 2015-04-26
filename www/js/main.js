$(document).ready(function () {

    // ie 6 hover
    $(".hover").hover(
        function () {
            $(this).addClass('hovered');
        },
        function () {
            $(this).removeClass('hovered');
        }
    );


    // hide/show tabs
    $(".page .tab").hide().eq(0).show();
    $(".footer").hide().eq(0).show();
    $('nav .item').live("click", function () {
        var test = $(this).hasClass('active');
        if (test) {
            return false;
        } else {
            $('nav .item').removeClass("active");
            var tabCount = $(this).addClass("active").index();
            $(".page .tab").hide().eq(tabCount).show();
            $(".footer").hide().eq(tabCount).show();
        }
    });

    $('#siberia').live("click", function () {
        $('nav .item').removeClass("active").eq(2).addClass("active");
        $(".page .tab").hide().eq(2).show();
        $(".footer").hide().eq(2).show();
    });

    $('#ural').live("click", function () {
        $('nav .item').removeClass("active").eq(1).addClass("active");
        $(".page .tab").hide().eq(1).show();
        $(".footer").hide().eq(1).show();
    });


    // big popups
    $('.popup-big').hide();
    $('.item').live("click", function () {
        var popupid = $(this).attr('id');
        var popup = $("#" + popupid + "_open").show();
    });

    $('.popup-big .close-big').live("click", function () {
        $(this).parent().hide();
    });


    // map popups
    $('.item .popup-title').live("click", function () {
        $(this).addClass('active').siblings('.popup').show();
    });

    $('.popup .close, .big-popup .close-big').live("click", function () {
        $(this).parent().hide();
        $(this).parent().siblings('.popup-title').removeClass('active');
    });

});
