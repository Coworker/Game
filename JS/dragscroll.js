//move map by mouse
//class="free dragscroll"  to html

! function(e, n) {
    "function" == typeof define && define.amd ? define(["exports"], n) : n("undefined" != typeof exports ? exports : e.dragscroll = {})
}(this, function(e) {
    var n = window,
        o = document,
        t = "mousemove",
        l = "mouseup",
        i = "mousedown",
        r = "EventListener",
        c = "add" + r,
        f = "remove" + r,
        m = [],
        s = function(e, r) {
            for (e = 0; e < m.length;)
                r = m[e++],
                r[f](i, r.md, 0),
                n[f](l, r.mu, 0),
                n[f](t, r.mm, 0);
            for (m = o.getElementsByClassName("dragscroll"),
                e = 0; e < m.length;)
                ! function(e, o, r, f) {
                    e[c](i, e.md = function(e) {
                            f = 1,
                                o = e.clientX,
                                r = e.clientY,
                                e.preventDefault(),
                                e.stopPropagation()
                        }, 0),
                        n[c](l, e.mu = function() {
                            f = 0
                        }, 0),
                        n[c](t, e.mm = function(n, t) {
                            t = e.scroller || e,
                                f && (t.scrollLeft -= -o + (o = n.clientX),
                                    t.scrollTop -= -r + (r = n.clientY))
                        }, 0)
                }(m[e++])
        };
    "complete" == o.readyState ? s() : n[c]("load", s, 0),
        e.reset = s
});