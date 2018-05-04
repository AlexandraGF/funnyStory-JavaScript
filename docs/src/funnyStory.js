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

FunnyStory.prototype.revealStory = function () {
  return "One day, " + this.name1 + " and I wanted to cook " + this.array[0]
  + " for " + this.name2 + ". We wanted to make the meal very " + this.array[1]
  + ", so we went to the " + this.array[2] + ". When we got there, we saw a shelf full of "
  + this.array[3] + " " + this.array[4] + ". I thought a " + this.array[5] + " would go " + this.array[6]
  + " with the " + this.array[7] + ". Once back in the kitchen, " + this.name1
  +  " took the peppers, chicken and ice cream out of the shopping bag and began " + this.array[8] + " them."
  + " Preparing " + this.array[0] + " always makes my " + this.array[9] + " " + this.array[10]
  + ". Finally, the " + this.array[0] + " was done in the oven and " + this.name2 + " came home from "
  + this.array[11] + ". Everyone started " + this.array[12] + " after we got the " + this.array[0]
  + " out of the oven!!!"
};

// private methods

FunnyStory.prototype._getWord = function (word) {
  this.array.push(word);
};

FunnyStory.prototype._getNames = function (name1, name2) {
  this.name1 = name1.toUpperCase();
  this.name2 = name2.toUpperCase();
};
