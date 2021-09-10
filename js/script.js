$('.ninth-answer').hide();
$('.line-answer').hide();
$('.eighth-price-container').hide();


$(document).ready(
            function (){
              $('.first-button-menu').click(function (){
                        $('.navbar').toggleClass('hidden');
                        $('.first-button-menu-line').toggleClass('orange');
                      }

                )
            }
    );

    

        $(document).ready(
            function (){
              $('div.plus').click(function (){
                        $(this).next().next().toggle(500);
                        $(this).next().toggle(500);
                        $(this).toggleClass('plus-rotate');
                        $(this).children('div').toggleClass('plus-blue').animate();
                      }
                )
            }
    );


    $(document).ready(
            function (){
              
              $('.eighth-action-show').click(function (){
                        $(this).next().toggle(500);
                      }
                )
            }
    );