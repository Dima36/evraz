$(document).ready(function () {

    // hide/show tabs
    $(".page .tab").hide().eq(0).show();
    $(".footer").hide().eq(0).show();
    $('nav .item').live("click", function () {
        var chack = $(this).hasClass('active');
        if (chack) {
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
        var chack = $(this).hasClass('big');
        if (!chack) {
            $(this).addClass('active').siblings('.popup').show();
        }
    });

    $('.popup .close, .big-popup .close-big').live("click", function () {
        $(this).parent().hide();
        $(this).parent().siblings('.popup-title').removeClass('active');
    });



    $('.content-block h3').live("click", function () {
        var blockCount = $(this).parent().index();

        if (blockCount == 2) {
            return false;
        } else {
            $(this).addClass('active').parent().addClass('open');
        }
    });

    $('.turn').live("click", function () {
        $(this).parent().parent().find('h3').removeClass('active');
        $(this).parent().parent().removeClass('open');
    });
});
