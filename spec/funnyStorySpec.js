describe('FunnyStory', function (){

  describe('User can ', function(){
    it('select an option', function() {
      story = new FunnyStory();
      story.checkItem(0, "PASTA")
      expect(story.array[0]).toEqual("PASTA");
    });
  });
});
