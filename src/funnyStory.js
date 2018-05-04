var FunnyStory = function () {
  this.array = [];
  this.name1 = '';
  this.name2 = '';
};

FunnyStory.prototype.checkItem = function (arrayIndex, itemName) {
  if (this.array.length == arrayIndex) {
  this._getWord(itemName);
  console.log(this.array);
  }
  else {
  this.array[arrayIndex] = itemName;
  console.log(this.array);
  }
};

// private methods

FunnyStory.prototype._getWord = function (word) {
  this.array.push(word);
};
