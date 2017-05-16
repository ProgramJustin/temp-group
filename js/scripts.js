//------------------Business Logic------------------//
//Player Constructor
function Player(name) {
  this.name = name;
  this.life = 1;
  this.physical = .10;
  this.magic = .20;
  this.item = [];
}
//Attack Prototype
Player.prototype.attacks = function(life, physical) {

  //dice roll simulation
  //when the method is called the paremeters take in the villians life and player's attack
  this.life -= this.life - this.power;
}
player.prototype.cast = function(life, magic) {

  //dice roll simulation
  //when the method is called the paremeters take in the villians life and player's attack
  this.life -= this.life - this.magic;
}
var villianOne = {
  name: name,
  life: 1,
  physical: .10,
  magic: .15,
  item: [],
  attack: function(life, power) {
    //dice roll simulation
    //when the method is called the paremeters take in the villians life and player's attack
    this.life -= this.life - this.physical;
  }
};
var villianTwo = {
  name: name,
  life: 1,
  physical: .15,
  magic: .20,
  item: [],
  attack: function(life, power) {
    //dice roll simulation
    //when the method is called the paremeters take in the villians life and player's attack
    this.life -= this.life - this.physical;
  }
};
var Boss = {
  name: name,
  life: 1,
  physical: .20,
  magic: .35,
  item: [],
  attack: function(life, power) {
    //dice roll simulation
    //when the method is called the paremeters take in the villians life and player's attack
    this.life -= this.life - this.physical;
  }
};
//i need a picture
var potion = {
  healthUp: 10
}
//------------------User Interface Logic------------------//
$(function(){
    $("#bardImage").fadeIn(6000);
    $("#raiseCol").fadeIn(6000);
    $("#bardTale").show(7000);

  $("#startButton").click(function(event){
    event.preventDefault();
    $("#startContainer").hide();
    $("#characterContainer").show();
  });

  $("#formCharacter").submit(function(event){
    event.preventDefault();
    $("#characterContainer").hide();
    $("#mapContainer").show();
  });

  $("#oceanCastle").click(function() {
      console.log("test");
  });
  $("#village").click(function() {
      console.log("test");
  });
  $("#houseOverWater").click(function() {
      console.log("test");
  });
  $("#ghostHouse").click(function() {
      console.log("test");
  });
  $("#boat").click(function() {
      console.log("test");
  });
  $("#tower").click(function() {
      console.log("test");
  });
  $("#ufo").click(function() {
      console.log("test");
  });

});
