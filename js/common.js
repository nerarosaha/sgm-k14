﻿function closeAdmPopup() {
    $(".kbw-content").css("visibility", ""), goToByScroll("#liVideo1")
}

function goToByScroll(i) {
    if ($(i).length) {
        var e = $(i).offset().top
        $("html,body").animate({
            scrollTop: e
        }, "fast")
    }
}

function showExpandMenu() {
    $(".kmli.expand-icon").addClass("visibilityToggle expandToggle"), $(".kmli-menu-expand-wrapper").addClass("visibilityToggle")
}

function hideExpandMenu() {
    $(".kmli.expand-icon").removeClass("visibilityToggle expandToggle"), $(".kmli-menu-expand-wrapper").removeClass("visibilityToggle")
}

function pushPlayListUrl(i, e, o, t) {
    if (console.log("đổi url không có adsZoneId ", i, e, o, t), i) {
        var n = window.location.origin,
            l = n + "/" + UnicodeToKoDauAndGach(o) + "-" + e + "-" + i + "-" + commonNewsId + "-" + commonCateId + ".chn"
        playlist_id = i, isFistPopup ? (window.history.pushState({
            type: "videoUrl",
            url: l,
            title: o,
            key: t
        }, o, l), isFistPopup = !1) : window.history.replaceState({
            type: "videoUrl",
            url: l,
            title: o,
            key: t
        }, o, l), document.title = o
    } else window.history.replaceState({
        type: "orgUrl",
        url: orgUrl,
        title: orgTitle
    }, orgTitle, orgUrl), document.title = orgTitle
}

function pushPlayListUrlByZone(i, e, o, t, n) {
    if (console.log("đổi url có adsZoneId ", i, e, o, t, n), i) {
        var l = window.location.origin,
            s = l + "/" + UnicodeToKoDauAndGach(o) + "-" + e + "-" + i + "-" + commonNewsId + "-" + commonCateId + "-" + n + ".chn"
        playlist_id = i, isFistPopup ? (window.history.pushState({
            type: "videoUrl",
            url: s,
            title: o,
            key: t
        }, o, s), isFistPopup = !1) : window.history.replaceState({
            type: "videoUrl",
            url: s,
            title: o,
            key: t
        }, o, s), document.title = o
    } else window.history.replaceState({
        type: "orgUrl",
        url: orgUrl,
        title: orgTitle
    }, orgTitle, orgUrl), document.title = orgTitle
}
var orgUrl = "",
    orgTitle = ""
$(window).resize(function() {
    $(".kmli-menu-expand-wrapper").css("width", $(window).width() + "px")
})
var changestyle = {
        init: function() {
            var i = this
            $(window).load(function() {
                i.change()
            }), $(window).resize(function() {
                i.change()
            })
        },
        change: function() {
            $(".knswli-video-right").css("height", $(".knswli-video-left").height() + "px"), $(".knswli.video .knswli-object-wrapper").width($(window).width()), $(window).width() < 1010 ? $(".knswli.video .knswli-object-wrapper").css("margin-left", "-5px") : $(".knswli.video .knswli-object-wrapper").css("margin-left", -($(window).width() - 1040) / 2 + "px")
        }
    },
    isFistPopup = !0
$(function() {
    changestyle.init(), $(".kmli-menu-expand-wrapper").css("width", $(window).width() + "px"), $(".kmli.expand-icon").click(function(i) {
        i.stopPropagation(), $(this).hasClass("visibilityToggle") ? hideExpandMenu() : showExpandMenu()
    }), $(".kmli.expand-icon").mouseenter(function(i) {
        i.stopPropagation(), showExpandMenu()
    }), $(".kenh14-header-wrapper").hover(function() {}, function(i) {
        i.stopPropagation(), hideExpandMenu()
    }), $(".kbw-content").length > 0 && $(window).scroll(function() {
        var i = $(".kbw-content").offset().top,
            e = $(window).scrollTop()
        e >= i ? $(".newver-sticky").addClass("showSticky") : $(".newver-sticky").removeClass("showSticky")
    }), orgUrl = "undefined" == typeof hidOrgUrl ? window.location.href : $("#hidOrgUrl").val(), orgTitle = "undefined" == typeof hidOrgTitle ? document.title : $("#hidOrgTitle").val(), $(window).on("load", function() {
        setTimeout(function() {
            window.addEventListener("popstate", function(i) {
                if ("undefined" != typeof isShowPopup)
                    if (isShowPopup) isFistPopup = !0, admClosePopup(), goToByScroll("#liVideo1")
                else if (i.state && "videoUrl" == i.state.type) {
                    var e = !1
                    video_key = i.state.key, isShowPopup ? (console.log(video_key), admScrollPopup(video_key, e)) : admOpenPopup(playlist_id, video_key, e), document.title = i.state.title
                }
            })
        }, 500)
    }), $(".ktli .search").click(function(i) {
        i.stopPropagation()
        var e = $(".ktli-search")
        "" != $("#searchinput").val() && e.hasClass("active") ? CheckValue() : (e.toggleClass("active"), setTimeout(function() {
            $("#searchinput").focus()
        }, 500))
    }), $("#searchinput").click(function(i) {
        i.stopPropagation()
    }), $("body").click(function() {
        $(".ktli-search").removeClass("active"), $(".kmli.expand-icon").removeClass("expandToggle"), $(".kmli-menu-expand-wrapper").removeClass("visibilityToggle")
    }), $(".ktli-login a").click(function() {
        $(".VID-action").length > 0 ? $(".VID-action").removeClass("VID-action") : $("#VID-setting").length > 0 ? $("#VID-setting").parent().addClass("VID-action") : $("#VID_ul_taskbar").addClass("VID-action")
    })
})