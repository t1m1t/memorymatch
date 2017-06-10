$(document).ready(function() {
    $('.back').click(card_clicked);
    $('.reset').click(reset_stats);
    console.log('click is ready');
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
        display_stats();
    } else {
        second_card_clicked = $(this).parent().children().children().attr('src');
        resetSecondCard = this;
        $(this).css('display', 'none');
        console.log('second card chosen');
        attempts++;
        display_stats();
        if (first_card_clicked == second_card_clicked) {
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
            console.log('match made');
            matches++;
            display_stats();
            if (match_counter == total_possible_matches) {
                display_stats();
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

var matches = 0;                       //when application finds a match, var increments by 1
var attempts = 0;                      //when user attempts a match (2nd card click) attempts increments by 1
var accuracy = 0;                      //accuracy = % of matches/attempts
var games_played = 0;                  //when page loads, new global var defined (games_played). when game is reset, games_played increments by 1

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
}

function reset_stats() {
    accuracy = 0;
    matches = 0;
    attempts = 0;
    games_played++;
    display_stats();
    resetCards();
}







// var frontCards = newArray();
// frontCards[0] = $('<div>').hasClass('front').find('img[src="images/kylo-lightsaber.jpg"]');
// frontCards[1] = $('<div>').hasClass('front').find('img[src="images/kyloVrey_cardBack.jpg"]');
// frontCards[2] = $('<div>').hasClass('front').find('img[src="images/rey.jpg"]');
// frontCards[3] = $('<div>').hasClass('front').find('img[src="images/bb8thumbsup.jpg"]');
// frontCards[4] = $('<div>').hasClass('front').find('img[src="images/kyloren_saber.jpg"]');
// frontCards[5] = $('<div>').hasClass('front').find('img[src="images/kyloren_force.jpg"]');
// frontCards[6] = $('<div>').hasClass('front').find('img[src="images/rey_lightsaber.jpg"]');
// frontCards[7] = $('<div>').hasClass('front').find('img[src="images/kylo_ren_matt_saber.jpg"]');
// frontCards[8] = $('<div>').hasClass('front').find('img[src="images/luke.jpg"]');
//
// var i = 0;
// var random;
//
// while (i<frontCards.length) {
//     random = Math.floor(Math.random()*frontCards.length);
//     if (frontCards[random] != "string") {
//         document.write(frontCards[random]);
//         frontCards[random] = "string";
//         i++
//     }
// }