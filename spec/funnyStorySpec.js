describe('FunnyStory', function (){

  describe('User can ', function(){
    it('select an option', function() {
      story = new FunnyStory();
      story.checkItem(0, "PASTA")
      expect(story.array[0]).toEqual("PASTA");
    });

    it('select more than one option', function() {
      story = new FunnyStory();
      story.checkItem(0, "PASTA")
      story.checkItem(1, "SPICY")
      story.checkItem(2, "RESTAURANT")
      expect(story.array.length).toEqual(3);
    });

    it('not select more than one option on the same line', function() {
      story = new FunnyStory();
      story.checkItem(0, "PASTA");
      story.checkItem(0, "PIE");
      expect(story.array.length).toEqual(1);
    });
  });

  describe('Another option ', function(){
    it('should replace the old option on the same line', function() {
      story = new FunnyStory();
      story.checkItem(0, "PIE");
      story.checkItem(0, "PASTA");
      expect(story.array[0]).toEqual("PASTA");
    });
  });

  describe('Story ', function(){
    it('must have all options chosen before being revealed', function() {
      story = new FunnyStory();
      story.array = [ "SPICY", "RESTAURANT", "HUGE", "FLUFFY TOYS", "FISH", "EVENTUALLY", "ORANGE JUICE", "FRYING", "EYES", "CRY", "WORK", "LAUGHING"];
      expect(story.checkMissingInfo("Alex", "Dalam")).toEqual("not Revealed");
    });

    it('must have all options chosen and the two names before being revealed', function() {
    story = new FunnyStory();
    story.array = [ "PIE", "SPICY", "RESTAURANT", "HUGE", "FLUFFY TOYS", "FISH", "EVENTUALLY", "ORANGE JUICE", "FRYING", "EYES", "CRY", "WORK", "LAUGHING"];
    expect(story.checkMissingInfo("Alex", "")).toEqual("not Revealed");
    });

    it('name should be capitalise when the story is revealed', function() {
    story = new FunnyStory();
    story.array = [ "PIE", "SPICY", "RESTAURANT", "HUGE", "FLUFFY TOYS", "FISH", "EVENTUALLY", "ORANGE JUICE", "FRYING", "EYES", "CRY", "WORK", "LAUGHING"];
    story.checkMissingInfo("alex", "helem");
    expect(story.name1).toEqual("ALEX");
    });

    it('revealed should show the text after user clicks the button', function() {
    story = new FunnyStory();
    story.array = [ "PIE", "SPICY", "RESTAURANT", "HUGE", "FLUFFY TOYS", "FISH", "EVENTUALLY", "ORANGE JUICE", "FRYING", "EYES", "CRY", "WORK", "LAUGHING"];
    story.checkMissingInfo("alex", "Maria");
    expect(story.revealStory()).toContain("One day, ALEX");
    });

  });

});
