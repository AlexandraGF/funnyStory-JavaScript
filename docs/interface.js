$(document).ready(function() {
  var story = new FunnyStory();

  $('#pasta').on('click', function() {
    $( "#pasta" ).css('background', '#ff8080');
    $( "#pie" ).css('background', 'none');
    story.checkItem(0, "PASTA");
  });

  $('#pie').on('click', function() {
    $( "#pie" ).css('background', '#ff8080');
    $( "#pasta" ).css('background', 'none');
    story.checkItem(0, "PIE");
  });

  $('#spicy').on('click', function() {
    $( "#spicy" ).css('background', '#ff8080');
    $( "#sweet" ).css('background', 'none');
    story.checkItem(1, "SPICY");
  });

  $('#sweet').on('click', function() {
    $( "#sweet" ).css('background', '#ff8080');
    $( "#spicy" ).css('background', 'none');
    story.checkItem(1, "SWEET");
  });

  $('#toys_store').on('click', function() {
    $( "#toys_store" ).css('background', '#ff8080');
    $( "#restaurant" ).css('background', 'none');
    story.checkItem(2, "TOYS STORE");
  });

  $('#restaurant').on('click', function() {
    $( "#restaurant" ).css('background', '#ff8080');
    $( "#toys_store" ).css('background', 'none');
    story.checkItem(2, "RESTAURANT");
  });

  $('#huge').on('click', function() {
    $( "#huge" ).css('background', '#ff8080');
    $( "#tiny" ).css('background', 'none');
    story.checkItem(3, "HUGE");
  });

  $('#tiny').on('click', function() {
    $( "#tiny" ).css('background', '#ff8080');
    $( "#huge" ).css('background', 'none');
    story.checkItem(3, "TINY");
  });

  $('#fish_and_chips').on('click', function() {
    $( "#fish_and_chips" ).css('background', '#ff8080');
    $( "#fluffy_toys" ).css('background', 'none');
    story.checkItem(4, "FISH AND CHIPS");
  });

  $('#fluffy_toys').on('click', function() {
    $( "#fluffy_toys" ).css('background', '#ff8080');
    $( "#fish_and_chips" ).css('background', 'none');
    story.checkItem(4, "FLUFFY TOYS");
  });

  $('#fish').on('click', function() {
    $( "#fish" ).css('background', '#ff8080');
    $( "#tomato" ).css('background', 'none');
    story.checkItem(5, "FISH");
  });

  $('#tomato').on('click', function() {
    $( "#tomato" ).css('background', '#ff8080');
    $( "#fish" ).css('background', 'none');
    story.checkItem(5, "TOMATO");
  });

  $('#perfectly').on('click', function() {
    $( "#perfectly" ).css('background', '#ff8080');
    $( "#eventually" ).css('background', 'none');
    story.checkItem(6, "PERFECTLY");
  });

  $('#eventually').on('click', function() {
    $( "#eventually" ).css('background', '#ff8080');
    $( "#perfectly" ).css('background', 'none');
    story.checkItem(6, "EVENTUALLY");
  });

  $('#orange_juice').on('click', function() {
    $( "#orange_juice" ).css('background', '#ff8080');
    $( "#cocktail" ).css('background', 'none');
    story.checkItem(7, "ORANGE JUICE");
  });

  $('#cocktail').on('click', function() {
    $( "#cocktail" ).css('background', '#ff8080');
    $( "#orange_juice" ).css('background', 'none');
    story.checkItem(7, "COCKTAIL");
  });

  $('#boiling').on('click', function() {
    $( "#boiling" ).css('background', '#ff8080');
    $( "#frying" ).css('background', 'none');
    story.checkItem(8, "BOILING");
  });

  $('#frying').on('click', function() {
    $( "#frying" ).css('background', '#ff8080');
    $( "#boiling" ).css('background', 'none');
    story.checkItem(8, "FRYING");
  });

  $('#eyes').on('click', function() {
    $( "#eyes" ).css('background', '#ff8080');
    $( "#hair" ).css('background', 'none');
    story.checkItem(9, "EYES");
  });

  $('#hair').on('click', function() {
    $( "#hair" ).css('background', '#ff8080');
    $( "#eyes" ).css('background', 'none');
    story.checkItem(9, "HAIR");
  });

  $('#dance').on('click', function() {
    $( "#dance" ).css('background', '#ff8080');
    $( "#cry" ).css('background', 'none');
    story.checkItem(10, "DANCE");
  });

  $('#cry').on('click', function() {
    $( "#cry" ).css('background', '#ff8080');
    $( "#dance" ).css('background', 'none');
    story.checkItem(10, "CRY");
  });

  $('#berlin').on('click', function() {
    $( "#berlin" ).css('background', '#ff8080');
    $( "#work" ).css('background', 'none');
    story.checkItem(11, "BERLIN");
  });

  $('#work').on('click', function() {
    $( "#work" ).css('background', '#ff8080');
    $( "#berlin" ).css('background', 'none');
    story.checkItem(11, "WORK");
  });

  $('#laughing').on('click', function() {
    $( "#laughing" ).css('background', '#ff8080');
    $( "#eating" ).css('background', 'none');
    story.checkItem(12, "LAUGHING");
  });

  $('#eating').on('click', function() {
    $( "#eating" ).css('background', '#ff8080');
    $( "#laughing" ).css('background', 'none');
    story.checkItem(12, "EATING");
  });

  $('#reveal').on('click', function() {
    $( "#reveal" ).css('background', '#ff8080');
    $( "#revealStory" ).css('color', '#0C5B5B');
    remain = story.checkRemainingOptions();
    console.log(remain);
    name1 = $("#name1").val();
    name2 = $("#name2").val();
    revealOrNot = story.checkMissingInfo(name1, name2);
    console.log(revealOrNot);
    if (revealOrNot == "yes") {
      $("#revealStory").text(story.revealStory());
    } else {
      $( "#reveal" ).css('background', 'none');
    }
  });
});
