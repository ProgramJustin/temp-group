//------------------Business Logic------------------//
//healing option to add health to a weak character
var formaldehyde = {
  healthUp: 100,
};
//Player Constructor
function Player(name) {
  this.name = name;
  this.life = 100;
  this.physical = 5;
  this.magic = 8;
  this.item = [formaldehyde];
}
//Attack Prototype
Player.prototype.attack = function(life, attack) {

  this.life -= this.life - this.power;
}
Player.prototype.cast = function(life, magic) {

  this.life -= this.life - this.magic;
}
  //heal prototype that heals character
Player.prototype.heal = function(life, item) {

  this.life = this.life + formaldehyde.healthUp;

  if (this.life > 100) {
    return this.life = 100;
  }

}

Player.prototype.roll = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + 1);
}

var villianOne = {
  name: "Trifler",
  life: 100,
  physical: 2,
  magic: 5,
  item: [formaldehyde],
  attack: function(life, power) {
    //dice roll simulation
    //when the method is called the paremeters take in the villians life and player's attack
    this.life -= this.life - this.physical;
  }
};
// alert("fire4");
var villianTwo = {
  name: "Trife",
  life: 100,
  physical: 4,
  magic: 8,
  item: [formaldehyde],
  attack: function(life, power) {
    //dice roll simulation
    //when the method is called the paremeters take in the villians life and player's attack
    this.life -= this.life - this.physical;
  }
};
// alert("fire5");
var Boss = {
  name: "Steve-O",
  life: 100,
  physical: 8,
  magic: 10,
  attack: function(life, power) {
    //dice roll simulation
    //when the method is called the paremeters take in the villians life and player's attack
    this.life -= this.life - this.physical;
  }
};

 //------------------User Interface Logic------------------//
$(function(){
    $("#raiseCol").fadeIn(6000);
    $("#bardTale").fadeIn(6000);

  $("#gameStart").click(function(event) {
    event.preventDefault();
    $("#titleScreenContainer").hide();
    $("#startContainer").show();
  });

  $("#startButton").click(function(event){
    event.preventDefault();
    $("#startContainer").hide();
    $("#characterContainer").show();
  });

  $("#formCharacter").submit(function(event){
    event.preventDefault();
    $("#characterContainer").hide();
    $("#mapContainer").show();

    var characterChoice = $("input:radio:checked").val();

    var userPlayer = new Player(characterChoice);

    $("#ghostHouse").click(function(event) {
      event.preventDefault();
      $("#mapContainer").hide();
      $("#locationContainer").show();
      $("#hauntedContainer").show();
      $("#back").show();

      $(".Turkerus").show();

      if(userPlayer.name === "Tinks") {
        $(".Tinks").show();
      }
      else if(userPlayer.name === "Tex") {
        $(".Tex").show();
      }
      else if(userPlayer.name === "Ned") {
        $(".Ned").show();
      }
      else if(userPlayer.name === "Stunner") {
        $(".Stunner").show();
      }
    });

  $("#village").click(function(event) {
    event.preventDefault();
    $("#mapContainer").hide();
    $("#locationContainer").show();
    $("#villageContainer").show();
    $("#back").show();

    $(".Turkerus").show();

    if(userPlayer.name === "Tinks") {
      $(".Tinks").show();
    }
    else if(userPlayer.name === "Tex") {
      $(".Tex").show();
    }
    else if(userPlayer.name === "Ned") {
      $(".Ned").show();
    }
    else if(userPlayer.name === "Stunner") {
      $(".Stunner").show();
    }
  });
  $("#houseOverWater").click(function() {
      $("#mapContainer").hide();
      $("#locationContainer").show();
      $("#swampContainer").show();
      $("#back").show();

      $(".Turkerus").show();

      if(userPlayer.name === "Tinks") {
        $(".Tinks").show();
      }
      else if(userPlayer.name === "Tex") {
        $(".Tex").show();
      }
      else if(userPlayer.name === "Ned") {
        $(".Ned").show();
      }
      else if(userPlayer.name === "Stunner") {
        $(".Stunner").show();
      }

  });

  $("#boat").click(function(event) {
      $("#mapContainer").hide();
      $("#locationContainer").show();
      $("#boatContainer").show();
      $("#back").show();

      if(userPlayer.name === "Tinks") {
        $(".Tinks").show();
      }
      else if(userPlayer.name === "Tex") {
        $(".Tex").show();
      }
      else if(userPlayer.name === "Ned") {
        $(".Ned").show();
      }
      else if(userPlayer.name === "Stunner") {
        $(".Stunner").show();
      }

  });
  $("#tower").click(function(event) {
    event.preventDefault();
    $("#towerButton").hide();
    $("#mapContainer").hide();
    $("#locationContainer").show();
    $("#towerContainer").show();
    $("#back").show();

    $(".Turkerus").show();

    if(userPlayer.name === "Tinks") {
      $(".Tinks").show();
    }
    if(userPlayer.name === "Tex") {
      $(".Tex").show();
    }
    if(userPlayer.name === "Ned") {
      $(".Ned").show();
    }
    if(userPlayer.name === "Stunner") {
      $(".Stunner").show();
    }
  });

  $("#ufo").click(function(event) {
    event.preventDefault();
    $("#mapContainer").hide();
    $("#locationContainer").show();
    $("#trailerContainer").show();
    $("#back").show();

    $(".Turkerus").show();

    if(userPlayer.name === "Tinks") {
      $(".Tinks").show();
    }
    if(userPlayer.name === "Tex") {
      $(".Tex").show();
    }
    if(userPlayer.name === "Ned") {
      $(".Ned").show();
    }
    if(userPlayer.name === "Stunner") {
      $(".Stunner").show();
    }
  });

  $("#oceanCastle").click(function() {
    event.preventDefault();
    $("#mapContainer").hide();
    $("#locationContainer").show();
    $("#castleContainer").show();
    $("#back").show();

    $(".Turkerus").show();

    if(userPlayer.name === "Tinks") {
      $(".Tinks").show();
    }
    if(userPlayer.name === "Tex") {
      $(".Tex").show();
    }
    if(userPlayer.name === "Ned") {
      $(".Ned").show();
    }
    if(userPlayer.name === "Stunner") {
      $(".Stunner").show();
    }
  });

  $("#back").click(function(event) {
    event.preventDefault();
    $(".locationHide").hide();
    $("#locationContainer").hide();
    $("#mapContainer").show();
  });
  });
});
// alert("fire10");
