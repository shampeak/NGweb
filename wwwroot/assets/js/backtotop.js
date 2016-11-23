

/*
 * 在滑轮滚动的时候监听
 * @returns {boolean}
 */
function doScroll() {
    var pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (!document.getElementById("backtop")) {
        return false
    }
    if (pageScroll < 500) {
        document.getElementById("backtop").style.display = "none"
    } else {
        document.getElementById("backtop").style.display = "block"
    }
}

$(function () {



    /*
     * back to top
     *

<link rel="stylesheet" type="text/css" href="/assets/css/backtotop.css" media="all" />
<script src="/assets/js/backtotop.js"></script>
<div id="btttop" class="btttop">
<ul>
<li class="side-top w4"><a style="display: none" id="backtop" title="返回顶部" href="#top">返回顶部</a></li>
</ul>
</div>
     *
     */

    function addLoadEvent(func) {
        if (window.addEventListener) {
            window.addEventListener("load", func, false)
        } else {
            if (window.attachEvent) {
                window.attachEvent("onload", func)
            } else {
                var old = window.onload;
                window.onload = function() {
                    if (old) {
                        old()
                    }
                    func()
                }
            }
        }
    }

    function addEvent(obj, type, fn) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + type,
                function() {
                    fn.call(obj)
                })
        } else {
            obj.addEventListener(type, fn, false)
        }
    }

    var scrollTimer = null;


    addEvent(window, "scroll",
        function() {
            if (scrollTimer) {
                clearTimeout(scrollTimer)
            }
            scrollTimer = setTimeout("doScroll()", 200)
        });

    function judgeyicheSide() {
        var yichePageWidth = document.body.offsetWidth;
        var yicheSide = document.getElementById("btttop");
        console.log(yichePageWidth);
        //if (yichePageWidth < 1024) {
            yicheSide.style.right = "25px";
            yicheSide.style.marginRight = "auto"
//         } else {
// //            yicheSide.style.right = "50%";
// //            yicheSide.style.marginRight = "auto"
//             yicheSide.style.right = "25px";
//             yicheSide.style.marginRight = "auto"
//         }
        if (yichePageWidth < 768) {
            yicheSide.style.display = "none"
        } else {
            yicheSide.style.display = "block"
        }
    }
    addEvent(window, "resize",
        function() {
            judgeyicheSide
        });
    addLoadEvent(judgeyicheSide);

    /*
     * bacc to top 结束
     */
















});



