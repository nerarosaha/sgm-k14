﻿/* var trendingTag = {
    init: function() {
        var t = 0 "undefined" != typeof zoneid && (t = zoneid),
            $.ajax({
                url: Constants.apiHandlerUrl + "/Handler/RequestHandlers.ashx",
                data: {
                    c: "trendingtag",
                    zoneId: t
                },
                dataType: "json",
                type: "GET",
                crossDomain: !0,
                beforeSend: function() {},
                success: function(t) {
                    if (null != t) {
                        var n = ""
                        $.each(t, function(t, e) {
                            n += "<li class='khwtht'>", n += "        <a href='" + (e.Id + "" == "" ? e.Url : "/" + e.Url + ".html") + "' title='" + e.Name + "'>" + e.Name + "</a>", n += "</li>"
                        }), "" != n ? $(".list-khwtht").html(n) : $(".list-khwtht").hide()
                    } else $(".list-khwtht").hide()
                }
            })
    },
    error: function(t) {
        console.log("error", t), $(".list-khwtht").hide()
    }
}
$(function() {
    trendingTag.init()
}) */