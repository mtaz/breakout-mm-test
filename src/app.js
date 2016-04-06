$(document).ready(function(){



   var gameX = 100;
   var gameY = 100;





    $('#openings').bind('mouseenter', function () {
        this.bg = setInterval(function () {
              animBG();
          }, 25);

        }).bind('mouseleave', function () {
            this.bg && clearInterval(this.bg);


        });


      function animBG() {
        gameX -= 8;
        var position = gameX + 'px ' + gameY + '%';
        $('#openings').css('background-position', position);
       }


});
