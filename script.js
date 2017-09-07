$(document).ready(function() {
    $('.back').click(card_clicked);
    $('.reset').click(reset_stats);
});

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var resetFirstCard = null;
var resetSecondCard = null;

function resetChosenCards(){
    $(resetFirstCard).css('display', 'block');
    $(resetSecondCard).css('display', 'block');
    first_card_clicked = null;
    second_card_clicked = null;
    $('.back').click(card_clicked);
}

function card_clicked() {
    if (first_card_clicked == null) {
        first_card_clicked = $(this).parent().children().children().attr('src');
        resetFirstCard = this;
        $(this).css('display', 'none');
        display_stats();
    } else {
        second_card_clicked = $(this).parent().children().children().attr('src');
        resetSecondCard = this;
        $(this).css('display', 'none');
        attempts++;
        display_stats();
        if (first_card_clicked == second_card_clicked) {
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
            matches++;
            display_stats();
            if (match_counter === total_possible_matches) {
                display_stats();
                window.alert("You won! Play again to better your accuracy!!");
            }
        } else {
            $('.back').off('click');
            setTimeout(resetChosenCards, 1000);
        }
    }
}

var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

function display_stats(){
    if (accuracy == 0 && attempts == 0){
        $('.games-played .value').text('').append(games_played);
        $('.attempts .value').text('').append(attempts);
        $('.accuracy .value').text('').append(accuracy);
    } else {
        $('.games-played .value').text('').append(games_played);
        accuracy = Math.floor((matches / attempts) * 100);
        $('.attempts .value').text('').append(attempts);
        $('.accuracy .value').text('').append(accuracy);
    }
}

function resetCards(){
    $('.back').css('display','block');

    var cards = $('.card');
    for(var i = 0; i < cards.length; i++){
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) +1;
        cards.eq(target).before(cards.eq(target2));
    }
}

function reset_stats() {
    accuracy = 0;
    matches = 0;
    attempts = 0;
    games_played++;
    display_stats();
    resetCards();
}