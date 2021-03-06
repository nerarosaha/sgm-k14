﻿function hoverSlider(e) {
    e.find(".swiper-button-next").on("hover", function() {
        $(this).hasClass("swiper-button-disabled") || $(this).parent().parent().find(".swiper-container-horizontal ul").toggleClass("str-right-hover")
    }), e.find(".swiper-button-prev").on("hover", function() {
        $(this).hasClass("swiper-button-disabled") || $(this).parent().parent().find(".swiper-container-horizontal ul").toggleClass("str-left-hover")
    })
}

function clickSlider(e) {
    e.find(".swiper-button-next").on("click", function() {
        $(this).hasClass("swiper-button-disabled") && $(this).parent().parent().find(".swiper-container-horizontal ul").removeClass("str-right-hover")
    }), e.find(".swiper-button-prev").on("click", function() {
        $(this).hasClass("swiper-button-disabled") && $(this).parent().parent().find(".swiper-container-horizontal ul").removeClass("str-left-hover")
    })
}

function InitSuKien() {
    new Swiper(".hot-dsk .knswli-object-content", {
        slidesPerView: "auto",
        pagination: ".hot-dsk .knswli-object-content .swiper-pagination",
        nextButton: ".hot-dsk .knswli-object-content .swiper-button-next",
        prevButton: ".hot-dsk .knswli-object-content .swiper-button-prev",
        slidesPerGroup: 2,
        simulateTouch: !0,
        speed: 600,
        hashNav: !0,
        paginationClickable: !0,
        preventClicks: !1,
        preventClicksPropagation: !1
    })
    equalHeightBox(".hot-dsk .knswli-object-list", ".koli"), hoverSlider($(".hot-dsk")), clickSlider($(".hot-dsk")), $(".kds-dsk.normal-dsk").hide()
    var e = !1
    $(".kds-dsk .kds-switch-prev").off("click").on("click", function() {
        $(this).parents(".normal-dsk").fadeOut(450, function() {
            $(this).parents(".knswli").find(".hot-dsk").fadeIn(450)
        })
    }), $(".kds-dsk .kds-switch-next").off("click").on("click", function() {
        $(this).parents(".hot-dsk").fadeOut(450, function() {
            if ($(this).parents(".knswli").find(".normal-dsk").fadeIn(450), !e) {
                new Swiper(".kdsdsk-wrapper", {
                    slidesPerView: "auto",
                    nextButton: ".kdsdsk-wrapper .swiper-button-next",
                    prevButton: ".kdsdsk-wrapper .swiper-button-prev",
                    pagination: ".kdsdsk-wrapper .swiper-pagination",
                    slidesPerGroup: 2,
                    simulateTouch: !0,
                    speed: 600,
                    hashNav: !0,
                    paginationClickable: !0,
                    preventClicks: !1,
                    preventClicksPropagation: !1
                })
                hoverSlider($(".normal-dsk")), clickSlider($(".normal-dsk")), e = !0
            }
        })
    })
}

function GetBoxQuizz() {
    var e = "http://quizz.kenh14.vn"
    $.ajax({
        url: e + "/services/NewBoxQuizK14Flat.ashx?top=3",
        data: {},
        dataType: "JSON",
        success: function(e) {
            var t = "",
                i = "",
                n = 0
            $.each(e, function(e, l) {
                if (0 == n) {
                    var a = "http://quizk.kenh14cdn.com/zoom/210_131/" + l.Avatar,
                        s = "",
                        r = a.substr(a.lastIndexOf(".") + 1)
                    "gif" == r || "GIF" == r ? (s = "class='lazy' data-original='" + a + "'", a = "http://quizk.kenh14cdn.com/zoom/210_131/" + l.Avatar + ".png") : a = "http://quizk.kenh14cdn.com/zoom/210_131/" + l.Avatar, t += '<a href="' + l.sURL + '" class="klwcngrn-thumb">', t += '    <img src="' + a + '" alt="' + l.Title + '" ' + s + ">", t += "</a>", t += '<h4 class="klwcngrn-title">', t += '    <a href="' + l.sURL + '">' + l.Title + "</a>", t += "</h4>"
                } else i += '<li class="klwcngrn clearfix">', i += '<h4 class="klwcngrn-title">', i += '<a href="' + l.sURL + '">' + l.Title + "</a>", i += "</h4>", i += "</li>"
                n++
            }), $("#box-quizz-data").html(t), $("#box-quizz").append(i)
        }
    })
}

function getAf() {
    $.getJSON("http://s.afamily.vn/Handlers/EmbedHandler.ashx?callback=?", {
        command: "homenew",
        catId: 70
    }, function(e) {
        if (null != e) {
            var t = 3,
                i = ""
            e.objJson.TinHay.length > 0 && ($.each(e.objJson.TinHay, function(e, n) {
                t > e && (i += getHtmlItem(e, n.Url, n.Title, n.Src.replace("152_98", "210_131"), n.Title))
            }), $("#lst-af-hay").html(i)), e.objJson.Dep.length > 0 && (i = "", $.each(e.objJson.Dep, function(e, n) {
                t > e && (i += getHtmlItem(e, n.Url, n.Title, n.Src.replace("152_98", "210_131"), n.Title))
            }), $("#lst-af-dep").html(i)), struncateString(".klwcn-grid.type6 ul.list-klwcngrn li.klwcngrn h4.klwcngrn-title a.normal-child", 75)
        }
    })
}

function getSoha() {
    $.ajax({
        type: "GET",
        url: "http://s.soha.vn/Services/GetEmbedData.ashx?Top=3&ImageWidth=210&ImageHeight=131&Type=4",
        dataType: "jsonp",
        success: function(e) {
            if (e.Success) {
                var t = ""
                $.each(e.Data, function(e, i) {
                    t += getHtmlItem(e, i.AbsoluteURL, i.EncodedTitle, i.EmbedImage, i.Title)
                }), $("#lst-af-soha").html(t), struncateString(".klwcn-grid.type6 ul.list-klwcngrn li.klwcngrn h4.klwcngrn-title a.normal-child", 75)
            }
        }
    })
}

function getHtmlItem(e, t, i, n, l) {
    var a = "",
        s = n.substr(n.lastIndexOf(".") + 1);
    ("gif" == s || "GIF" == s) && (a = 'class="lazy" data-original="' + n + '"', n += ".png")
    var r = ""
    return r += '<li class="klwcngrn clearfix">', 0 == e && (r += '    <a target="_blank" href="' + t + '" title="' + i + '" class="klwcngrn-thumb">', r += '        <img src="' + n + '" alt="' + i + '" ' + a + ">", r += "    </a>"), r += '    <h4 class="klwcngrn-title">', r += 0 == e ? '        <a target="_blank" href="' + t + '" title="' + i + '"  class="first-child">' + l + "</a>" : '        <a target="_blank" href="' + t + '" title="' + i + '"  class="normal-child">' + l + "</a>", r += "    </h4>", r += "</li>"
}

function getFbDataByListUrl(e, t) {
    var i = "",
        n = 0
    $(e).find(".item-fb").each(function() {
        var e = $(this).attr("rel"); - 1 == i.indexOf(Constants.host + e) && (i += 0 == n ? Constants.host + e : "," + Constants.host + e, n++)
    }), 1 > n || $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://sharefb.cnnd.vn/?urls=" + i,
        success: function(e) {
            $.each(e, function(e, i) {
                var n = i.url.replace(Constants.host, ""),
                    l = $(".item-fb[rel*='" + n + "']"),
                    a = i.total_count >= 1e6 ? "0.0a" : "0,0a",
                    s = numeral(i.total_count).format(a).replace(",", ".")
                l.html(s), t && 0 == i.total_count && l.hide(), l.removeClass("item-fb"), l.addClass("item-fb-loaded")
            })
        }
    })
}

function CheckShowTypeEpl() {
    $(".epl-home-type2").show(), $(".epl-home-type2 .event-link .event-name a.event-name-title").trimLine(3), $(".epl-home-type2 .info-new-cate li .title a").trimLine(3)
}
$(document).ready(function() {
    getLabelNews(), CheckShowTypeEpl(), getFbDataByObj(".trendAd-left .item-fb", "total", !0, !1), getCountViewNotFormat(".trendAd-left")
    var e = $(".knswli:not([.done-get-type)")
    e.each(function(e, t) {
        getTypeNews($(this)), getStickerInNews($(this))
    }), getCountView("Home k14Flat"), $("img.lazy").lazyload({
        effect: "fadeIn"
    }).removeClass("lazy"), $("ul.knsw-list .knswli .knswli-time").timeago()
    new Swiper(".klwfn-slide-wrapper", {
        slidesPerView: "auto",
        pagination: ".klwfn-slide-wrapper .swiper-pagination",
        nextButton: ".klwfn-slide-wrapper .swiper-button-next",
        prevButton: ".klwfn-slide-wrapper .swiper-button-prev",
        slidesPerGroup: 2,
        simulateTouch: !0,
        speed: 600,
        hashNav: !0,
        paginationClickable: !0,
        preventClicks: !1,
        preventClicksPropagation: !1
    })
    hoverSlider($(".klwfn-slide-wrapper")), clickSlider($(".klwfn-slide-wrapper"))
    for (var t = {}, i = $("#liNewsMostView .knswli-object-list .koli"), n = 0; n < i.length; n++) {
        var l = $(i[n]),
            a = l.find(".koli-ava").attr("newsid")
        t[a] ? l.remove() : t[a] = !0
    }
    new Swiper("#trend", {
        slidesPerView: "auto",
        pagination: "#trend .swiper-pagination",
        nextButton: "#trend .swiper-button-next",
        prevButton: "#trend .swiper-button-prev",
        slidesPerGroup: 2,
        simulateTouch: !0,
        speed: 600,
        hashNav: !0,
        paginationClickable: !0,
        preventClicks: !1,
        preventClicksPropagation: !1
    })
    equalheight("#liNewsMostView ul.knswli-object-list li.koli"), $("#liNewsMostView .social-count").each(function() {
        var e = $(this).html() >= 1e6 ? "0.0a" : "0,0a",
            t = numeral($(this).html()).format(e).replace(",", ".")
        $(this).html(t)
    }), hoverSlider($("#liNewsMostView")), clickSlider($("#liNewsMostView")), equalHeightBox("#liNewsMostView", ".koli")
    new Swiper("#dbl", {
        slidesPerView: "auto",
        pagination: "#dbl .swiper-pagination",
        nextButton: "#dbl .swiper-button-next",
        prevButton: "#dbl .swiper-button-prev",
        slidesPerGroup: 2,
        simulateTouch: !0,
        speed: 600,
        hashNav: !0,
        paginationClickable: !0,
        preventClicks: !1,
        preventClicksPropagation: !1
    })
    hoverSlider($("#liDungBoLo")), clickSlider($("#liDungBoLo")), equalHeightBox("#liDungBoLo", ".koli"), struncateString(".trendAd .klwcngrn-title a", 70), $(".klwfnswn-title a").trimLine(3)
    new Swiper(".knswlidn-content", {
        nextButton: ".knswlidn-next",
        prevButton: ".knswlidn-prev",
        slidesPerView: "auto",
        slidesPerGroup: 4,
        direction: "vertical",
        paginationType: "fraction",
        scrollbar: ".swiper-scrollbar",
        scrollbarHide: !1,
        mousewheelControl: !0
    })
    $("ul.list-knswlidnc .knswlidnc .kscliw-time").timeago(), brandContentStream.init(".knsw-list"), $(".knswli-video-right").css("height", $(".knswli-video-left").height() + "px"), $(".knswli.video .knswli-object-wrapper").width($(window).width()), $(window).width() < 1010 ? $(".knswli.video .knswli-object-wrapper").css("margin-left", "-5px") : $(".knswli.video .knswli-object-wrapper").css("margin-left", -($(window).width() - 1040) / 2 + "px"), videoHD.init(".knswlic-welax", {
        type: videoHD.videoType.stream
    }), videoInContent.init(".knswlic-welax"), getViewVideo(".knswlic-welax", " lượt xem"), getFbDataByObj(".knswlic-welax .item-fb", "share", !1, !0)
}), $(document).ajaxStop(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    }).removeClass("lazy")
})
var timelineHome = {
    isLoadedTimeline: !1,
    init: function() {
        var e = this
        $(window).scroll(function() {
            var t = $(window).scrollTop(),
                i = $(".trendAd ").offset().top
            t >= i && !e.isLoadedTimeline && (e.LoadTimeLineHome(), e.isLoadedTimeline = !0)
        })
    },
    LoadTimeLineHome: function() {
        $.ajax({
            type: "GET",
            url: "/timeline/home.chn",
            dataType: "html",
            success: function(e) {
                "" != e && "Error" != e && setTimeout(function() {
                    $(".kds-new-stream-wrapper").after(e)
                    prNews.homeCategory(), getLabelNews(), $(".klwcn-grid.type6 ul.list-klwcngrn li.klwcngrn h4.klwcngrn-title a.normal-child").trimLine(3), $(".klwcn-grid.type6 ul.list-klwcngrn li.klwcngrn h4.klwcngrn-title a.first-child").trimLine(4), InitSuKien(), equalHeightBox(".klwcn-grid.type1.r1", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r2", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r3", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r4", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r5", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r6", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r7", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r8", ".klwcng-left"), equalHeightBox(".klwcn-grid.type1.r9", ".klwcng-left"), equalHeightBox(".klw-category-news", ".r7"), getAf(), getSoha()
                }, 0)
            }
        })
    }
}
timelineHome.init()