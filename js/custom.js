/*--------------------
    Scroll on Click
----------------------*/

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(function () {
    $('#pointer').hover(function () {
        $(this).addClass('animated pulse infinite');
    }).mouseout(function () {
        $(this).removeClass('animated pulse infinite');
    });
        
    $("#pointer").fadeIn(7000);

});

window.onload = function () {
    Particles.init({
        selector: '#myCanvas',
        color: '#f1f1f1',
        speed: 1.5,
    });
     let timer = setTimeout(function(){
        document.getElementById('preloader').className = 'animated fadeOut';
    },3000);
    let remove = setTimeout(function(){
        document.getElementById('preloader').style.display = 'none';
    },4000);
    
};

/*----------------
    Preloader
------------------ */


$("#departure").dateDropper();

$(document).ready(function () {
    $('#scroll').hide();
    var scroll_start = 0;
    var startchange = $('#about');
    var offset = startchange.offset();

    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top) {
            $('#scroll').show();
        } else {
            $('#scroll').hide();
        }
    });
});

function check() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var messsage = document.getElementById('message').value;
    if (name != '' && email != '' && phone != '' && messsage != '') {
        var button = document.getElementById('dis').className = 'btn btn-block btn-info custom_btn hvr-glow disabled';
        $(document).ready(function () {
            var res = document.getElementById('response');
            $.ajax({
                url: "https://theparkingspace.000webhostapp.com/contact.php?name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + messsage,
                success: function (result) {
                    res.innerHTML = "Your request has been sent.";
                    res.className = "text-center label label-success";
                },
                error: function (textStatus, errorThrown) {
                    res.innerHTML = "Your request was not sent. Try Again";
                    res.className = "text-center label label-danger";
                }
            });
            setTimeout(() => {
                res.style.display = 'none';
            }, 8000);
        });
    } else {
        alert("Please fill out the form.");
    }
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        dots: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })
  });
