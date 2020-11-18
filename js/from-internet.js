/*--------------------MUSIC PLAYER-----------------------*/
$(document).ready(function(e) {

    $('.icon-right').on('click', function() {
        $('.music__info__wrapper').toggleClass('display');
    });

    $('.icon-right').on('click', function() {
        $('.right__panel').toggleClass('right__panel__menuOpen');
        $('.left__panel').toggleClass('left__panel__menuOpen');
    });

    $('.music__menu').on('click', function() {
        $('.music__info__wrapper').removeClass('display');
    });

    $('.icon-right').on('click', function() {
        $('.music__menu').addClass('menu_list_open');
    });

    $('.music__menu').on('click', function() {
        $('.right__panel').removeClass('right__panel__menuOpen');
        $('.left__panel').removeClass('left__panel__menuOpen');
        $('.music__menu').removeClass('menu_list_open');
    });

    var $sync1 = $(".cover"),
        $sync2 = $(".title, .hero__background"),
        flag = false,
        duration = 300;

    $sync1
        .owlCarousel({
            loop: true,
            center: true,
            items: 1,
            nav: false,
            dots: false
        })
        .on('changed.owl.carousel', function(e) {
            if (!flag) {
                flag = true;
                $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                flag = false;
            }
        });

    $sync2
        .owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: false,
            animateOut: 'slideOutDown',
            animateIn: 'slideInDown',
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false
        })
        .on('click', '.owl-item', function() {
            $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
        });

    owl = $('.owl-carousel').owlCarousel();
    $(".button__prev").click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $(".button__next").click(function() {
        owl.trigger('next.owl.carousel');
    });

});
/*-------------------------------------------*/




/*---------------   CANVAS BACKGROUND HEADER   ---------------*/
// based on
// https://github.com/mnutt/canvas-waves/blob/master/index.html#L5
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var waves = ["rgba(7, 62, 149, 1)",
    "rgba(7, 62, 149, 0.7)"
]
var i = 0;

function draw() {
    canvas.width = canvas.width;
    for (var j = waves.length - 1; j >= 0; j--) {
        var offset = i + j * Math.PI * 12;
        ctx.fillStyle = (waves[j]);
        var randomLeft = (Math.sin(offset / 100) + 1) / 2 * 200;
        var randomRight = (Math.sin((offset / 100) + 10) + 1) / 2 * 200;
        var randomLeftConstraint = (Math.sin((offset / 60) + 2) + 1) / 2 * 200;
        var randomRightConstraint = (Math.sin((offset / 60) + 1) + 1) / 2 * 200;
        ctx.beginPath();
        ctx.moveTo(0, randomLeft + 100);
        ctx.bezierCurveTo(canvas.width / 3, randomLeftConstraint, canvas.width / 3 * 2, randomRightConstraint, canvas.width, randomRight + 100);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(0, randomLeft + 100);
        ctx.closePath();
        ctx.fill();
    }
    i = i + 3;
}
setInterval("draw()", 20);
/*-------------------------------------------*/




/*---------------CHART MUSIC-----------------*/
var canva = document.getElementById("myChart");
var dtx = canva.getContext('2d');
var firstPlace = 'Old Toad Road';
var secondPlace = 'Talk';
var thirdPlace = 'Truth Hurts';
var dataFirst = [75, 30, 52, 64, 77, 60, 45, 32];
var dataSecond = [44, 20, 28, 47, 30, 57, 70, 25];
var dataThird = [30, 18, 22, 27, 35, 42, 63, 30];
// Global Options:
Chart.defaults.global.defaultFontStyle = "bold";
Chart.defaults.global.defaultFontFamily = "Anton";
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 18;

var data = {
    labels: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00"],
    datasets: [{
            label: firstPlace,
            fill: false,
            lineTension: 0.5,
            backgroundColor: "red",
            borderColor: "red", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: dataFirst,
            spanGaps: false,
        }, {
            label: secondPlace,
            fill: false,
            lineTension: 0.5,
            backgroundColor: "#2059FD",
            borderColor: "#3366CC",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "white",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "brown",
            pointHoverBorderColor: "yellow",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: false
            data: dataSecond,
            spanGaps: false,
        },
        {
            label: thirdPlace,
            fill: false,
            lineTension: 0.5,
            backgroundColor: "#109618",
            borderColor: "#109618", // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 3,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: dataThird,
            spanGaps: true,
        }

    ]
};
// Notice the scaleLabel at the same level as Ticks
var options = {
    scales: {
        xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            ticks: {
                beginAtZero: true
            }
        }],
        yAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            display: false
        }]
    }
};
// Chart declaration:
var myBarChart = new Chart(dtx, {
    type: 'line',
    data: data,
    options: options
});