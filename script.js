! function (e) {

    function t(e, t) {
        if (!e) return [];
        for (var a = [], n = new RegExp("(^| )" + t + "( |\\d|$)"), r = e.getElementsByTagName("*"), s = 0, o = r.length; o > s; s++) n.test(r[s].className) && a.push(r[s]);
        return a
    }

    function a(e, t) {
        var a = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
        return a.test(e.className) || (e.className = (e.className + " " + t).replace(/\s+/g, " ").replace(/(^ | $)/g, "")), e
    }

    function n(e, t) {
        var a = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
        return e.className = e.className.replace(a, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, ""), e
    }

    function r(e, t) {
        for (var a in t) e.style[a] = t[a]
    }

    function s(e, t, a) {
        if (e) {
            t = t.split(" ");
            for (var n in t) e.addEventListener(t[n], a, !1)
        }
    }

    function o(o) {
        a(o, "cs_handle");
        var i = t(o.getElementsByTagName("ul")[0], "img"),
            c = e.createElement("div"),
            l = e.createElement("div");
        a(l, "cs_gestures"), l.appendChild(c), o.appendChild(l), c.appendChild(a(i[i.length - 1].getElementsByTagName("img")[0].cloneNode(), "cs_first_img"));
        for (var p in i) c.appendChild(i[p].getElementsByTagName("img")[0].cloneNode());
        c.appendChild(a(i[0].getElementsByTagName("img")[0].cloneNode(), "cs_last_img"));
        var m = t(o, "cs_anchor slide"),
            g = 0,
            d = 0,
            f = 300,
            u = 15,
            h = 0,
            v = o.clientWidth;
        s(o, "mousedown touchstart", function (e) {
            if (!/cs_play_pause|cs_arrowprev|cs_arrownext|cs_bullets|cs_thumb/g.test(e.target.parentNode.className) && !/cs_bullets/g.test(e.target.parentNode.parentNode.className)) {
                g = (e.touches ? e.touches[0] : e).pageX, d = 0, e.preventDefault(), e.stopPropagation(), v = o.clientWidth;
                for (var t in m)
                    if (m[t].checked) {
                        h = t;
                        break
                    } a(o, "cs_grab"), m[h].checked = !0, r(c, {
                        WebkitTransition: "",
                        transition: "",
                        WebkitTransform: "translate3d(" + -v * h + "px,0px,0px)",
                        transform: "translate3d(" + -v * h + "px,0px,0px)"
                    })
            }
        }), s(o, "mousemove touchmove", function (e) {
            if (g) {
                var t = (e.touches ? e.touches[0] : e).pageX;
                e.preventDefault(), e.stopPropagation(), d = t - g >= v ? v + g : -v >= t - g ? -v + g : t, a(l, "cs_show"), r(c, {
                    WebkitTransform: "translate3d(" + (-v * h + d - g) + "px,0px,0px)",
                    transform: "translate3d(" + (-v * h + d - g) + "px,0px,0px)"
                })
            }
        }), s(o, "mouseup touchend", function (e) {
            if (g) {
                d && (e.preventDefault(), e.stopPropagation()), n(o, "cs_grab");
                var t = g - d,
                    a = 0;
                if (d && Math.max(t, -1 * t) > u) {
                    for (var s in m)
                        if (m[s].checked) {
                            t > 0 && s < m.length - 1 ? h = 1 * s + 1 : 0 > t && s > 0 ? h = 1 * s - 1 : 0 > t ? (a = -1, h = m.length - 1) : (a = m.length, h = 0);
                            break
                        } m[h].checked = !0
                }
                var i = Math.max((v + (t > 0 ? -1 : 1) * t) / v, .3);
                r(c, {
                    WebkitTransition: "-webkit-transform " + f * i + "ms linear",
                    transition: "transform " + f * i + "ms linear",
                    WebkitTransform: "translate3d(" + -v * (a || h) + "px,0px,0px)",
                    transform: "translate3d(" + -v * (a || h) + "px,0px,0px)"
                }), d = 0, g = 0
            }
        });
        var x = t(o, "cs_anchor");
        for (var p in x) (function (e) {
            s(x[e], "change", function () {
                e != h && n(l, "cs_show")
            })
        })(p)
    } (!e.all || window.atob) && s(window, "load", function () {
        for (var a = t(e.body, "csslider"), n = 0, r = a.length; r > n; n++) new o(a[n])
    })
}(document);


$('.last-project-content .project-item > #info1').hover(function(){     
    $('.last-project-content .project-item > .info > .button1')
        .transition('slide left')
        .transition('slide left')
     },function(){     
});
$('.last-project-content .project-item > #info2').hover(function(){     
    $('.last-project-content .project-item > .info > .button2')
        .transition('slide left')
        .transition('slide left')
     },function(){     
});
$('.last-project-content .project-item > #info3').hover(function(){     
    $('.last-project-content .project-item > .info > .button3')
        .transition('slide left')
        .transition('slide left')
     },function(){     
});
