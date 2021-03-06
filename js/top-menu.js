﻿function htmlEncode(e) {
    return $("<div/>").text(e).html()
}

function htmlDecode(e) {
    return $("<div/>").html(e).text()
}

function addEventClickLiveStream() {
    var e = !0
    $(window).scroll(function() {
        if ($("#k14-main-menu-wrapper-sticky-wrapper").hasClass("is-sticky") && $(".kbh-wca-gala-toggle").hasClass("kbhwgt-expanded") && e) {
            var a = $(".kbhwgt-btn").parents(".kbh-wca-gala-toggle")
            a.removeClass("kbhwgt-expanded"), a.addClass("kbhwgt-collapsed"), $(".khw-wca-gala-expand").hide(), $(".ktli-wca-gala").show(), e = !1
        }
    }), $(".kbhwgt-btn").unbind("click"), $(".kbhwgt-btn").click(function(e) {
        e.stopPropagation()
        var a = $(this).parents(".kbh-wca-gala-toggle")
        a.toggleClass("kbhwgt-collapsed"), a.toggleClass("kbhwgt-expanded"), $(".khw-wca-gala-expand").toggle(), $(".ktli-wca-gala").toggle(), liveStream.LiveAutoExpand && $.cookie("liveStreamAutoExpand", 1, {
            expires: 7,
            path: "/"
        }), 1 == liveStream.LiveStatus && (a.hasClass("kbhwgt-collapsed") ? ($(".khw-wca-gala-expand .khwwgel-video-frame iframe").remove(), $(".ktliwgbt-video-frame").append('<iframe width="100%" height="100%" src="' + liveStream.LiveEmbed + '&mute=true" id="ifVideo-166179" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen="" scrolling="no"></iframe>')) : ($(".khw-wca-gala-expand .khwwgel-video-frame").append('<iframe width="100%" height="100%" src="' + liveStream.LiveEmbed + '" id="ifVideo-166179" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen="" scrolling="no"></iframe>'), $(".ktliwgbt-video-frame iframe").remove())), hideExpandMenu()
    })
}

function checkStatusLiveStream(e) {}

function getCountViewSohaTv() {
    var e = "Z01xdHd5WkxzQlE9"
    $.ajax({
        url: Constants.apiHandlerUrl + "/Handler/GetExtendParamSocial.ashx",
        data: {
            c: "countviewsohatvbyurl",
            videoId: e
        },
        dataType: "json",
        type: "GET",
        beforeSend: function() {},
        success: function(e) {
            if (e.Success) {
                var a = JSON.parse(e.Data),
                    t = 0
                try {
                    t = 3 * a.data
                } catch (l) {}
                var i = numeral(t).format("0,0a").replace(",", ".")
                t > 0 ? ($(".khwwger-viewcount").show(), $(".khwwger-viewcount b").html(i)) : $(".khwwger-viewcount").hide()
            }
        },
        error: function() {
            return 0
        }
    })
}

function initLiveStream(e) {
    if (null != liveStream)
        if (e >= 0 && (liveStream.LiveOnOff = !0), liveStream.LiveOnOff) switch ($('.kbh-menu-list .kmli a[href="/tram-yeu.chn"]').first().hide(), $(".ktli-wca-gala").show(), $(".kbh-wca-gala-toggle").show(), $(".kbhwgt-btn").unbind("click"), $(".kbh-wca-gala-toggle").removeClass("kbhwgt-expanded"), $(".kbh-wca-gala-toggle").removeClass("live-now"), $(".kbh-wca-gala-toggle").removeClass("live-ended"), $(".ktli-wca-gala").show(), $(".khw-wca-gala-expand").hide(), $(".khw-wca-gala-expand .khwwgel-video-frame iframe").remove(), $(".khwwger-viewcount").hide(), $(".kbhwgt-btn").attr("href", "javascript:;"), $(".ktliwg-bar-toggle").attr("href", "javascript:;"), $(".kbhwgtb-text").html("live"), e >= 0 && (liveStream.LiveStatus = e), "" != liveStream.LiveAvatar && $(".ktliwgbt-video-frame img").attr("src", liveStream.LiveAvatar), liveStream.LiveStatus) {
            case 0:
                addEventClickLiveStream()
                var a = $.cookie("liveStreamAutoExpand");
                (void 0 === a || null == a) && liveStream.LiveAutoExpand && ($(".kbhwgt-btn").click(), $.cookie("liveStreamAutoExpand", null, {
                    path: "/"
                }))
                break
            case 1:
                addEventClickLiveStream(), $(".kbh-wca-gala-toggle").addClass("live-now"), getCountViewSohaTv(), curCountDown = timeInterval, liveTimer = setInterval(function() {
                    curCountDown--, -1 == curCountDown && (curCountDown = timeInterval, getCountViewSohaTv())
                }, 1e3)
                var a = $.cookie("liveStreamAutoExpand");
                (void 0 === a || null == a) && liveStream.LiveAutoExpand ? ($(".kbhwgt-btn").click(), $.cookie("liveStreamAutoExpand", null, {
                    path: "/"
                })) : $(".ktliwgbt-video-frame").append('<iframe width="100%" height="100%" src="' + liveStream.LiveEmbed + '&mute=true" id="ifVideo-166179" frameborder="0" allowfullscreen="" webkitallowfullscreen="" mozallowfullscreen="" oallowfullscreen="" msallowfullscreen="" scrolling="no"></iframe>')
                break
            case 2:
                $(".kbh-wca-gala-toggle").addClass("live-ended"), $(".kbhwgtb-text").html("xem lại"), $(".kbhwgt-btn").attr("href", liveStream.NewsLink), $(".ktliwg-bar-toggle").attr("href", liveStream.NewsLink)
        } else $(".ktli-wca-gala").hide(), $(".kbh-wca-gala-toggle").hide()
}
var liveStream = {
    Id: 1,
    LiveOnOff: !1,
    LiveAvatar: "",
    LiveEmbed: "",
    LiveStatus: 0,
    NewsLink: "",
    LastModifiedDate: "",
    AutoExpand: 0
}
$(function() {
    var e = htmlDecode($.cookie("k14-DynamicMenu"))
    e != $("#dynamicMenu").prop("outerHTML") && $("#dynamicMenu").length > 0 ? (e = $.cookie("k14-DynamicMenu"), $.cookie("k14-DynamicMenu", htmlEncode($("#dynamicMenu").prop("outerHTML").replace("active", "")), {
        expires: 7,
        path: "/"
    })) : $(".kmli.expand-icon").before($(e)), equalHeightBox(".list-other-cat-col", ".r1"), equalHeightBox(".list-other-cat-col", ".r2"), equalHeightBox(".list-other-cat-col", ".r3"), $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash)
            if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html, body").animate({
                scrollTop: e.offset().top
            }, 1e3), !1
        }
    })
    var a = "<%=url %>"
    $('#k14-main-menu-wrapper .kbh-menu-list .kmli a[href="/' + a + '.chn"]').parents("li").addClass("active"), checkStatusLiveStream(-1)
}), $(window).height() > 700 && $("#k14-main-menu-wrapper").sticky({
    offset: 20
})
var liveTimer = 0,
    timeInterval = 120,
    curCountDown = timeInterval