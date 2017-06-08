$(document).ready(function() {
    $('.back').click(card_clicked);
    console.log('click is ready');
});


var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;

var resetFirstCard = null;
var resetSecondCard = null;

function resetChosenCards(){
    $(resetFirstCard).css('display', 'block');
    $(resetSecondCard).css('display', 'block');
    console.log('back to the function, click back on');
    first_card_clicked = null;
    second_card_clicked = null;
    $('.back').click(card_clicked);
}

function card_clicked() {
    if (first_card_clicked == null) {
        first_card_clicked = $(this).parent().children().children().attr('src');
        resetFirstCard = this;
        $(this).css('display', 'none');
        console.log('first card chosen');
    } else {
        second_card_clicked = $(this).parent().children().children().attr('src');
        resetSecondCard = this;
        $(this).css('display', 'none');
        console.log('second card chosen');
        if (first_card_clicked == second_card_clicked) {
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
            console.log('match made');
            if (match_counter == total_possible_matches) {
                console.log("You won!");
            } else {
                console.log("Click handler complete, Return");
            }
        } else {
            console.log('test, click off');
            $('.back').off('click');
            setTimeout(resetChosenCards, 1000);

        }
    }
}


var matches = 0; //when application finds a match, var increments by 1
var attempts = 0; //when user attempts a match (2nd card click) attempts increments by 1
var accuracy = 0; //accuracy = % of matches/attempts
var games_played = 0; //when page loads, new global var defined (games_played). when game is reset, games_played increments by 1

function display_stats(){
    games_played = 0;
}

function reset_stats(){

}