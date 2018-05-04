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
    
  });
});
