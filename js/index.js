var a = 0;
var turn = true;
var Vue1 = new Vue({
    el: '#changeImg',
    mounted: function () {
        this.prepareOK();
    },
    methods: {
        prepareOK: function () {
            setInterval(this.changeImg, 100);
        },
        changeImg: function () {
            $("#changeImg2").css("opacity", 1 - a);
            $("#changeImg1").css("opacity", a);
            if (turn)
                a = a + 0.1;
            else
                a = a - 0.1;
            if (a >= 2.5)
                turn = false;
            if (a <= -1.5)
                turn = true;
        }
    }
});
var Vue2 = new Vue({
    el: '.top',
    methods: {
        enter3: function () {
            $("#topDiv3").css("display", "inline");
        },
        leave3: function () {
            $("#topDiv3").css("display", "none");
        },
        enter4: function () {
            $("#topDiv4").css("display", "inline");
        },
        leave4: function () {
            $("#topDiv4").css("display", "none");
        }
    }
});