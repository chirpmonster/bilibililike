var t;
var Vue1 = new Vue({
    el: '#changeImg',
    mounted: function () {
        this.vue1start();
    },
    methods: {
        vue1start: function () {
            setInterval(function () {
                $("#changeImg1").fadeOut(1000);
                setTimeout(function () {
                    $("#changeImg1").fadeIn(1000);
                }, 3000);
            }, 6000);
        }
    }
});
var Vue2 = new Vue({
    el: '.top',
    methods: {
        enter3: function () {
            $("#topDiv3").fadeIn(200);
        },
        leave3: function () {
            $("#topDiv3").fadeOut(200);
        },
        enter4: function () {
            $("#topDiv4").fadeIn(200);
        },
        leave4: function () {
            $("#topDiv4").fadeOut(200);
        }
    }
});
var Vue3 = new Vue({
    el: '.mainContent',
    methods: {
        showTitle: function (a) {
            $(".menu-img-words").eq(a).parent().css("background", "black");
            $(".menu-imgDiv img").eq(a).css("opacity", 0.6);
            var i=1;
            t = setInterval(function () {
                $(".menu-img-words").eq(a).css("margin-top", i * (-10));
                i++;
                if (i>8)
                    clearTimeout(t);
            }, 20);
        },
        hideTitle: function (a) {
            clearTimeout(t);
            $(".menu-imgDiv img").eq(a).css("opacity", 1);
            setTimeout(function () {
                $(".menu-img-words").eq(a).css("margin-top", -64);
            }, 20);
            setTimeout(function () {
                $(".menu-img-words").eq(a).css("margin-top", -48);
            }, 40);
            setTimeout(function () {
                $(".menu-img-words").eq(a).css("margin-top", -32);
            }, 60);
            setTimeout(function () {
                $(".menu-img-words").eq(a).css("margin-top", -16);
            }, 80);
            setTimeout(function () {
                $(".menu-img-words").eq(a).css("margin-top", 0);
            }, 100);
        }
    }
});