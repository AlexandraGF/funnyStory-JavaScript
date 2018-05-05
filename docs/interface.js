$(document).ready(function() {
  var story = new FunnyStory();

  $('#pasta').on('click', function() {
    $( "#pasta" ).css('background', '#2f8199');
    $( "#pie" ).css('background', 'none');
    $( "#pie" ).css('color', 'grey');
    story.checkItem(0, "PASTA");
  });

  $('#pie').on('click', function() {
    $( "#pie" ).css('background', '#2f8199');
    $( "#pasta" ).css('background', 'none');
    $( "#pasta" ).css('color', 'grey');
    story.checkItem(0, "PIE");
  });

  $('#spicy').on('click', function() {
    $( "#spicy" ).css('background', '#2f8199');
    $( "#sweet" ).css('background', 'none');
    $( "#sweet" ).css('color', 'grey');
    story.checkItem(1, "SPICY");
  });

  $('#sweet').on('click', function() {
    $( "#sweet" ).css('background', '#2f8199');
    $( "#spicy" ).css('background', 'none');
    $( "#spicy" ).css('color', 'grey');
    story.checkItem(1, "SWEET");
  });

  $('#toys_store').on('click', function() {
    $( "#toys_store" ).css('background', '#2f8199');
    $( "#restaurant" ).css('background', 'none');
    $( "#restaurant" ).css('color', 'grey');
    story.checkItem(2, "TOYS STORE");
  });

  $('#restaurant').on('click', function() {
    $( "#restaurant" ).css('background', '#2f8199');
    $( "#toys_store" ).css('background', 'none');
    $( "#toys_store" ).css('color', 'grey');
    story.checkItem(2, "RESTAURANT");
  });

  $('#huge').on('click', function() {
    $( "#huge" ).css('background', '#2f8199');
    $( "#tiny" ).css('background', 'none');
    $( "#tiny" ).css('color', 'grey');
    story.checkItem(3, "HUGE");
  });

  $('#tiny').on('click', function() {
    $( "#tiny" ).css('background', '#2f8199');
    $( "#huge" ).css('background', 'none');
    $( "#huge" ).css('color', 'grey');
    story.checkItem(3, "TINY");
  });

  $('#fish_and_chips').on('click', function() {
    $( "#fish_and_chips" ).css('background', '#2f8199');
    $( "#fluffy_toys" ).css('background', 'none');
    $( "#fluffy_toys" ).css('color', 'grey');
    story.checkItem(4, "FISH AND CHIPS");
  });

  $('#fluffy_toys').on('click', function() {
    $( "#fluffy_toys" ).css('background', '#2f8199');
    $( "#fish_and_chips" ).css('background', 'none');
    $( "#fish_and_chips" ).css('color', 'grey');
    story.checkItem(4, "FLUFFY TOYS");
  });

  $('#fish').on('click', function() {
    $( "#fish" ).css('background', '#2f8199');
    $( "#tomato" ).css('background', 'none');
    $( "#tomato" ).css('color', 'grey');
    story.checkItem(5, "FISH");
  });

  $('#tomato').on('click', function() {
    $( "#tomato" ).css('background', '#2f8199');
    $( "#fish" ).css('background', 'none');
    $( "#fish" ).css('color', 'grey');
    story.checkItem(5, "TOMATO");
  });

  $('#perfectly').on('click', function() {
    $( "#perfectly" ).css('background', '#2f8199');
    $( "#eventually" ).css('background', 'none');
    $( "#eventually" ).css('color', 'grey');
    story.checkItem(6, "PERFECTLY");
  });

  $('#eventually').on('click', function() {
    $( "#eventually" ).css('background', '#2f8199');
    $( "#perfectly" ).css('background', 'none');
    $( "#perfectly" ).css('color', 'grey');
    story.checkItem(6, "EVENTUALLY");
  });

  $('#orange_juice').on('click', function() {
    $( "#orange_juice" ).css('background', '#2f8199');
    $( "#cocktail" ).css('background', 'none');
    $( "#cocktail" ).css('color', 'grey');
    story.checkItem(7, "ORANGE JUICE");
  });

  $('#cocktail').on('click', function() {
    $( "#cocktail" ).css('background', '#2f8199');
    $( "#orange_juice" ).css('background', 'none');
    $( "#orange_juice" ).css('color', 'grey');
    story.checkItem(7, "COCKTAIL");
  });

  $('#boiling').on('click', function() {
    $( "#boiling" ).css('background', '#2f8199');
    $( "#frying" ).css('background', 'none');
    $( "#frying" ).css('color', 'grey');
    story.checkItem(8, "BOILING");
  });

  $('#frying').on('click', function() {
    $( "#frying" ).css('background', '#2f8199');
    $( "#boiling" ).css('background', 'none');
    $( "#boiling" ).css('color', 'grey');
    story.checkItem(8, "FRYING");
  });

  $('#eyes').on('click', function() {
    $( "#eyes" ).css('background', '#2f8199');
    $( "#hair" ).css('background', 'none');
    $( "#hair" ).css('color', 'grey');
    story.checkItem(9, "EYES");
  });

  $('#hair').on('click', function() {
    $( "#hair" ).css('background', '#2f8199');
    $( "#eyes" ).css('background', 'none');
    $( "#eyes" ).css('color', 'grey');
    story.checkItem(9, "HAIR");
  });

  $('#dance').on('click', function() {
    $( "#dance" ).css('background', '#2f8199');
    $( "#cry" ).css('background', 'none');
    $( "#cry" ).css('color', 'grey');
    story.checkItem(10, "DANCE");
  });

  $('#cry').on('click', function() {
    $( "#cry" ).css('background', '#2f8199');
    $( "#dance" ).css('background', 'none');
    $( "#dance" ).css('color', 'grey');
    story.checkItem(10, "CRY");
  });

  $('#berlin').on('click', function() {
    $( "#berlin" ).css('background', '#2f8199');
    $( "#work" ).css('background', 'none');
    $( "#work" ).css('color', 'grey');
    story.checkItem(11, "BERLIN");
  });

  $('#work').on('click', function() {
    $( "#work" ).css('background', '#2f8199');
    $( "#berlin" ).css('background', 'none');
    $( "#berlin" ).css('color', 'grey');
    story.checkItem(11, "WORK");
  });

  $('#laughing').on('click', function() {
    $( "#laughing" ).css('background', '#2f8199');
    $( "#eating" ).css('background', 'none');
    $( "#eating" ).css('color', 'grey');
    story.checkItem(12, "LAUGHING");
  });

  $('#eating').on('click', function() {
    $( "#eating" ).css('background', '#2f8199');
    $( "#laughing" ).css('background', 'none');
    $( "#laughing" ).css('color', 'grey');
    story.checkItem(12, "EATING");
  });

  $('#reveal').on('click', function() {
    $( "#revealStory" ).css('color', '#0C5B5B');
    $( "#reveal" ).css('background', '#2f8199');
    $( "#reveal" ).css('color', 'grey');
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
      $( "#reveal" ).css('color', 'black');
    }
  });
});
