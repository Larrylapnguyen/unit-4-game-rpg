$(document).ready(function () {
      var characterSelected = false;
      var defenderSelected = false;
      var char = {};
      var def = {};
      var gameOver = false;
      var availEnemies = 3;

      var spongebob = {
            name: 'Spongebob',
            health: 120,
            attack: 10,
            attackBoost: 4
      }
      var patrick = {
            name: 'Patrick',
            health: 270,
            attack: 14,
            attackBoost: 6
      }
      var sandy = {
            name: 'Sandy',
            health: 100,
            attack: 20,
            attackBoost: 9
      }
      var squidward = {
            name: 'Squidward',
            health: 100,
            attack: 11,
            attackBoost: 5
      }
      $("#restart").hide();
      $("#attack").hide();
      $("#infoLog").hide();
      $("#defeat").hide();

      $(".SBhealth").text("Health : " + spongebob.health + " Attack : " + spongebob.attack);
      $(".PShealth").text("Health : " + patrick.health + " Attack : " + patrick.attack);
      $(".SChealth").text("Health : " + sandy.health + " Attack : " + sandy.attack);
      $(".SThealth").text("Health : " + squidward.health + " Attack : " + squidward.attack);

      function restart() {
            characterSelected = false;
            defenderSelected = false;
            character = {};
            defender = {};
            enemiesDefeated = 0;
            gameOver = false;

 
            $("#restart").hide();
            $("#attack").hide();
            $("#infoLog").hide();
            $("#defeat").hide();

            spongebob = {
                  name: 'Spongebob',
                  health: 120,
                  attack: 10,
                  attackBoost: 4
            }
            patrick = {
                  name: 'Patrick',
                  health: 270,
                  attack: 14,
                  attackBoost: 6
            }
            sandy = {
                  name: 'Sandy',
                  health: 100,
                  attack: 20,
                  attackBoost: 9
            }
            squidward = {
                  name: 'Squidward',
                  health: 100,
                  attack: 11,
                  attackBoost: 5
            }

            $("#slot1").prepend($("#spongebob"));
            $("#slot2").prepend($("#patrick"));
            $("#slot3").prepend($("#sandy"));
            $("#slot4").prepend($("#squidward"));
            $("#chars-available").show();

            $(".SBhealth").text("Health : " + spongebob.health + " Attack : " + spongebob.attack);
            $(".PShealth").text("Health : " + patrick.health + " Attack : " + patrick.attack);
            $(".SChealth").text("Health : " + sandy.health + " Attack : " + sandy.attack);
            $(".SThealth").text("Health : " + squidward.health + " Attack : " + squidward.attack);

            $("#spongebob").removeClass("currDef").addClass("availChar");
            $("#patrick").removeClass("currDef").addClass("availChar");
            $("#sandy").removeClass("currDef").addClass("availChar");
            $("#squidward").removeClass("currDef").addClass("availChar");

      }

      $("#spongebobPic").click(function () {
            if (!characterSelected) {
                  characterSelected = true;
                  char = Object.assign(spongebob);
                  $(".char-picked").prepend($("#spongebob"));

                  //log info
                  console.log("You chose " + char.name);
                  console.log("Your Health is " + char.health);
                  console.log("Your attack is " + char.attack);
            } else
            if (!defenderSelected && char != spongebob) {
                  defenderSelected = true;
                  def = Object.assign(spongebob);
                  $(".def-picked").prepend($("#spongebob"));
                  $("#spongebob").removeClass("availChar").addClass("currDef");
                  $("#chars-available").hide();
                  $("#attack").show();
                  $("#infoLog").show();

                  //log info
                  console.log("Defender is " + def.name);
                  console.log("Defender health is " + def.health);
                  console.log("Defender attack is " + def.attack);
            }
      });
      $("#patrickPic").click(function () {
            if (!characterSelected) {
                  characterSelected = true;
                  char = Object.assign(patrick);
                  $(".char-picked").prepend($("#patrick"));

                  //log info
                  console.log("You chose " + char.name);
                  console.log("Your Health is " + char.health);
                  console.log("Your attack is " + char.attack);
            } else
            if (!defenderSelected && char != patrick) {
                  defenderSelected = true;
                  def = Object.assign(patrick);
                  $(".def-picked").prepend($("#patrick"));
                  $("#patrick").removeClass("availChar").addClass("currDef");
                  $("#chars-available").hide();
                  $("#attack").show();
                  $("#infoLog").show();

                  //log info
                  console.log("Defender is " + def.name);
                  console.log("Defender health is " + def.health);
                  console.log("Defender attack is " + def.attack);
            }
      });
      $("#sandyPic").click(function () {
            if (!characterSelected) {
                  characterSelected = true;
                  char = Object.assign(sandy);
                  $(".char-picked").prepend($("#sandy"));

                  //log info
                  console.log("You chose " + char.name);
                  console.log("Your Health is " + char.health);
                  console.log("Your attack is " + char.attack);
            } else
            if (!defenderSelected && char != sandy) {
                  defenderSelected = true;
                  def = Object.assign(sandy);
                  $(".def-picked").prepend($("#sandy"));
                  $("#chars-available").hide();
                  $("#sandy").removeClass("availChar").addClass("currDef");
                  $("#attack").show();
                  $("#infoLog").show();
                  
                  //log info
                  console.log("Defender is " + def.name);
                  console.log("Defender health is " + def.health);
                  console.log("Defender attack is " + def.attack);
            }
      });

      $("#squidwardPic").click(function () {
            if (!characterSelected) {
                  characterSelected = true;
                  char = Object.assign(squidward);
                  $(".char-picked").prepend($("#squidward"));

                  //log info
                  console.log("You chose " + char.name);
                  console.log("Your Health is " + char.health);
                  console.log("Your attack is " + char.attack);
            } else
            if (!defenderSelected && char != squidward) {
                  defenderSelected = true;
                  def = Object.assign(squidward);
                  $(".def-picked").prepend($("#squidward"));
                  $("#squidward").removeClass("availChar").addClass("currDef");
                  $("#chars-available").hide();
                  $("#attack").show();
                  $("#infoLog").show();

                  //log info
                  console.log("Defender is " + def.name);
                  console.log("Defender health is " + def.health);
                  console.log("Defender attack is " + def.attack);
            }
      });

      $("#attack").click(function () {
            if (characterSelected == true && defenderSelected == true && char.health > 0 && !gameOver) {
                  def.health = def.health - char.attack;
                  char.health = char.health - def.attack;
                  char.attack = char.attack + char.attackBoost;;
                  $("#infoLog").show();
                  $("#defAttackLog").text(def.name + " did " + def.attack + " to you!");

                  $("#attackLog").text("You did " + char.attack + " to " + def.name);



                  console.log("Char health : " + char.health);
                  console.log("Defender health : " + def.health);
                  console.log("Char attack : " + char.attack);

                  $(".SBhealth").text("Health : " + spongebob.health + " Attack : " + spongebob.attack);
                  $(".PShealth").text("Health : " + patrick.health + " Attack : " + patrick.attack);
                  $(".SChealth").text("Health : " + sandy.health + " Attack : " + sandy.attack);
                  $(".SThealth").text("Health : " + squidward.health + " Attack : " + squidward.attack);

                  if (characterSelected == true && defenderSelected == true && char.health <= 0 && !gameOver) {
                        alert("You lose!");
                        $("#restart").show();
                  }
                  if (characterSelected == true && defenderSelected == true && def.health <= 0 && !gameOver) {
                        $("#defeat").prepend($(".currDef"));
                        $("#chars-available").show();
                        availEnemies--;
                        defenderSelected = false;
                        if(availEnemies == 0){
                              alert("You win!");
                              restart();
                        }
                  }
            }

            $("#restart").click(function () {
                  restart();
                  $("#restart").hide();
            });
            $("#show").click(function(){
                  $("attack").show();
            });
      });




});