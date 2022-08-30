$(function() {
    var bgNumber, bgClass;
    $(".js-next").on("click", function() {
        $(".step.active").removeClass("active").next().addClass("active");
        if (!bgNumber) {
            bgNumber = $(".content").data("bg");
        }
        bgClass = "bg-" + bgNumber;
        $(".content").removeClass(bgClass);
        $(".content").addClass("bg-" + ++bgNumber);
        $(".content").attr("data-bg", bgNumber);
        if ($(".step.active").hasClass("step-last")) {
            $(".layout").addClass("layout-step-last");
            increaseNumber();
        } else if ($('.step.active').hasClass('step-age')) {
            $('.wrap-btns').removeClass('visible').addClass('hidden');
            $('.wrap-btns-age').addClass('visible').removeClass('hidden');
        } else {
            $('.wrap-btns').removeClass('visible').addClass('hidden');
            $('.wrap-btns-regular').addClass('visible').removeClass('hidden');
        }
    });

    function increaseNumber() {
        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }

        function number_to(id, from, to, duration) {
            var element = document.getElementById(id);
            var start = new Date().getTime();
            setTimeout(function() {
                var now = new Date().getTime() - start;
                var progress = now / duration;
                var result = Math.floor((to - from) * progress + from);
                element.innerHTML = progress < 1 ? result : to;
                if (progress < 1) setTimeout(arguments.callee, 10);
            }, 10);
        }
        var randomNumber = randomInteger(80, 90);
        $(".new-number").html(randomNumber);
        number_to("num1", 0, randomNumber, 2000);
        setTimeout(function() {
            $(".text-last").css("opacity", "1");
            $(".btn-noactive").removeClass("btn-noactive");
        }, 2000);
    };

    $(".go-to-age").on("click", function (e) {
        e.preventDefault();
        $(".step.active").removeClass("active");
        $('.step-age').addClass("active");
        $('.wrap-btns').removeClass('visible').addClass('hidden');
        $('.wrap-btns-age').addClass('visible').removeClass('hidden');
    });
});