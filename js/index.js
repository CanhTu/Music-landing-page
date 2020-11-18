$(".song-chart").hover(function() {
    $(this).toggleClass("active");
    $(this).children(".song-flex .song-info h3").css("color", "white");
});
$(".navbar-nav .nav-item .nav-link").hover(function() {
    $(this).toggleClass("active");
});
$('#clock').countdown('2019/09/16', function(event) {
    $(this).html(event.strftime('%D DAYS %H:%M:%S'));
});
$(".brand-icon>a>i").hover(function() {
    $(this).toggleClass("active");
})
$(".list-trend .list-group-item").hover(function() {
    $(this).toggleClass("active");
});

/*--------------------------------------------------------*/


/*-----------------AUDIO MUSIC PLAYER--------------------*/
playlist = {
    'song_1': 'music/01.mp3',
    'song_2': 'music/02.mp3',
    'song_3': 'music/03.mp3',
    'song_4': 'music/04.mp3',
}
$(".my_audio").trigger('load');
keys = Object.keys(playlist);
$('.my_audio').append("<source id='sound_src' src=" + playlist[keys[0]] + " type='audio/mpeg'>");
count = 0;
$('.fwd-btn').click(function() {
    if ($('.btn-play').hasClass('fa-pause')) {
        $(".my_audio").trigger('pause');
        $(".my_audio").prop("currentTime", 0);
        if (count == 3) {
            count = 0;
        } else {
            count++;
        }
        $("#sound_src").attr("src", playlist[keys[count]])[0];
        $(".my_audio").trigger('load');
        $(".my_audio").trigger('play');
    }
});
$('.rew-btn').click(function() {
    if ($('.btn-play').hasClass('fa-pause')) {
        $(".my_audio").trigger('pause');
        $(".my_audio").prop("currentTime", 0);
        if (count == 0) {
            count = 3;
        } else {
            count--;
        }
        $("#sound_src").attr("src", playlist[keys[count]])[0];
        $(".my_audio").trigger('load');
        $(".my_audio").trigger('play');
    }
});
$('.my_audio').on('ended', function() {
    count++;
    $("#sound_src").attr("src", playlist[keys[count]])[0];
    $(".my_audio").trigger('load');
    $(".btn-play").removeClass('fa-pause').addClass('fa-play');
    $(".my_audio").trigger('play');
    $(".btn-play").removeClass('fa-play').addClass('fa-pause');
});
$('.play').click(function() {
    var $this = $(this);
    $this.toggleClass('active');
    if ($this.hasClass('active')) {
        $(".btn-play").removeClass('fa-play').addClass('fa-pause');
        $(".my_audio").trigger('play');
    } else {
        $(".btn-play").removeClass('fa-pause').addClass('fa-play');
        $(".my_audio").trigger('pause');
        $(".my_audio").prop("currentTime", 0);
    }
});
$(".hover-bg").hover(function() {
    $(this).toggleClass("active");
    $(this).parent(".list-group-item").toggleClass("active");
})

$(".play-demo").click(function() {

    if ($(this).children("i").hasClass("fa-play")) {
        $(".click-play").trigger("pause");
        $(".play-demo").children("i").removeClass('fa-pause').addClass('fa-play');
        $(this).children("i").removeClass('fa-play').addClass('fa-pause');
        $(this).children(".click-play").trigger('play');
    } else {
        $(this).children("i").removeClass('fa-pause').addClass('fa-play');
        $(this).children(".click-play").trigger('pause');
    }

})

/*--------------------------------------------------------*/



/*--------------------CARD ROTATE-------------------------*/

$('.buy-btn').click(function() {
    $(".card-rotate").toggleClass('is-flipped');
})

$(document).ready(function() {
    $(".submit-card").click(
        function() {
            $('#form_register').submit(function(event) {
                event.preventDefault();
                var username = $.trim($('#username').val());
                var email = $.trim($('#email').val());
                if (username == "" || username.length < 4) {
                    alertify.alert('Notification', 'Username must be at least 4 characters !');
                } else if (email == "") {

                    alertify.alert('Notification', 'Tell me your email, please !');
                } else {
                    alertify.alert('Notification', 'Booked Successfully');
                    $(this).trigger('reset');
                    $(".card-rotate").toggleClass('is-flipped');
                }
                username.update();
                email.update();
            });

        });
});

/*---------------------------------------------------------*/

/*---------------------SMOOTH SCROLLING------------------------*/
$(document).ready(function() {
    $("a[href*='#sec']:not([href='#'])").click(function() {
        console.log(hash);
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html,body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }

    });
});
/*------------------------------------------------------------*/


/*----------------------TAB RANKING--------------------------*/
var vietnam = [{
        song: 'Sóng Gió',
        data: [56, 34, 45, 63, 70, 81, 63, 30]
    },
    {
        song: 'Có Tất Cả Nhưng Thiếu Anh',
        data: [43, 24, 38, 52, 57, 75, 69, 45]
    },
    {
        song: 'Nếu Ngày Ấy',
        data: [12, 22, 34, 47, 56, 62, 42, 32]
    }
]
var usuk = [{
        song: 'Old Town Road',
        data: [75, 30, 52, 64, 77, 60, 45, 32]
    },
    {
        song: 'Talk',
        data: [44, 20, 28, 47, 30, 57, 70, 25]
    },
    {
        song: 'Truth Hurts',
        data: [30, 18, 22, 27, 35, 42, 63, 30]
    }
]
var kpop = [{
        song: 'A Poem Titled You',
        data: [54, 46, 58, 40, 64, 78, 36, 13]
    },
    {
        song: 'Drunk On Love',
        data: [37, 27, 37, 55, 62, 25, 12, 36]
    },
    {
        song: 'Thank You For Goodbye',
        data: [25, 10, 18, 34, 25, 56, 63, 11]
    }
]
$('.music-tab').click(function() {
    country = $(this).attr('country');
    if (country == 'vietnam') {
        firstPlace = vietnam[0].song;
        secondPlace = vietnam[1].song;
        thirdPlace = vietnam[2].song;
        dataFirst = vietnam[0].data;
        dataSecond = vietnam[1].data;
        dataThird = vietnam[2].data;
    }
    if (country == 'usuk') {
        firstPlace = usuk[0].song;
        secondPlace = usuk[1].song;
        thirdPlace = usuk[2].song;
        dataFirst = usuk[0].data;
        dataSecond = usuk[1].data;
        dataThird = usuk[2].data;
    }
    if (country == 'kpop') {
        firstPlace = kpop[0].song;
        secondPlace = kpop[1].song;
        thirdPlace = kpop[2].song;
        dataFirst = kpop[0].data;
        dataSecond = kpop[1].data;
        dataThird = kpop[2].data;
    }
    myBarChart.data.datasets[0].label = firstPlace;
    myBarChart.data.datasets[1].label = secondPlace;
    myBarChart.data.datasets[2].label = thirdPlace;
    myBarChart.data.datasets[0].data = dataFirst;
    myBarChart.data.datasets[1].data = dataSecond;
    myBarChart.data.datasets[2].data = dataThird;

    myBarChart.update();
})

/*--------------------------------------------------------*/


/*-------------------SCROLL ANIMATION------------------------*/

AOS.init({
    duration: 1300,
})

/*--------------------------------------------------------*/




/*---------------------------LOGO ANIMATION-----------------------------*/
anime({
    targets: '.animation .wave1',
    height: '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
});
anime({
    targets: '.animation .wave2',
    height: '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    delay: 30
});
anime({
    targets: '.animation .wave3',
    height: '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    delay: 60
});
anime({
    targets: '.animation .wave4',
    height: '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    delay: 90
});
anime({
    targets: '.animation .wave5',
    height: '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true,
    delay: 120
});
/*--------------------------------------------------------*/



/*--------------------HOVER ITEM POSTER-----------------------*/
var imgDisplay = [
    "img/InMyBlood.jpg",
    "img/LetMeLoveYou-L.jpg",
    "img/NineTrackMind-L.jpg",
    "img/OnMyWay-L.jpg",
    "img/HayTraoChoAnh.jpg",
    "img/TheMiddle.jpg",
    "img/NewRules.jpg",
    "img/LegendsNeverDie.jpg",
    "img/StayWithMe-L.jpg",
    "img/Baby.jpeg",
    "img/CityLights.jpg",
    "img/MauNuocMat.jpg"
];

$(document).ready(function() {
    $(".poster-img").hover(function() {
            for (i = 0; i < imgDisplay.length; i++) {
                if ($(this).children(".icon-music").attr('src') == imgDisplay[i]) {
                    $(".img-display").remove();
                    $(".detail-intro").append("<img class='img-display' src=" + imgDisplay[i] + ">");
                    $(this).children(".check-poster").toggleClass("active");
                    $(this).children(".icon-music").toggleClass("animation-rotate");
                    $(this).children(".hover-play").trigger("play");
                }
            }
        },
        function() {
            $(".hover-play").trigger("pause");
            $(".hover-play").trigger("load");
            $(".check-poster").removeClass("active");
            $(".icon-music").removeClass("animation-rotate");
        });
})

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('#on-top').fadeIn();
        } else {
            $('#on-top').fadeOut();
        }
    });
    $('#on-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

$(".card-back").click(function(event) {
    event.stopPropagation();
})

/*--------------------------------------------------------*/


$('.owl-2').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    loop: true,
    items: 1,
    touchDrag: true,
    autoWidth: true,
    autoHeight: false,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});