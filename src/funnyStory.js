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

FunnyStory.prototype.checkMissingInfo = function (name1, name2) {
  if (this.array.length == 13 && name1.length > 0 && name2.length > 0) {
  this._getNames(name1, name2);
  this.revealStory();
  return "yes";
  console.log(this.revealStory());
  }
  else if (this.array.length != 13 ) {
    alert("Please finish choosing all your options before revealing your funny story!");
    return "not Revealed";
  }
  else if (name1.length == 0 || name2.length == 0) {
    alert("Please write two names!");
    return "not Revealed";
  }
};

// private methods

FunnyStory.prototype._getWord = function (word) {
  this.array.push(word);
};

FunnyStory.prototype._getNames = function (name1, name2) {
  this.name1 = name1.toUpperCase();
  this.name2 = name2.toUpperCase();
};
