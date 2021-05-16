<template>
  <div id="app">
    <div class="container">
      <div class="result" :class="{'result-attached': resultActive}">
        <h2 v-if="winner == 'you'" :style="{color: 'blue'}">YOU WON!!!</h2>
        <h2 v-else :style="{color: 'red'}">MONSTER WON!!!</h2>
      </div>
      <div class="scoreboard-box">
        <div class="scoreboard">
          <h1>YOU</h1>
          <div class="health-bar">
            <div class="vitality" :style="{ width: playerHealth + '%' }">
              <span>{{ playerHealth }}</span>
            </div>
          </div>
        </div>
        <div class="scoreboard">
          <h1>MONSTER</h1>
          <div class="health-bar">
            <div class="vitality" :style="{ width: monsterHealth + '%' }">
              <span>{{ monsterHealth }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="control-box">
        <div class="template">
          <div v-if="gameOn">
            <button class="action-button attack" @click="attackMethod">
              ATTACK
            </button>
            <button class="action-button special-attack" @click="specialAttack">
              SPECIAL ATTACK
            </button>
            <button class="action-button heal" @click="heal">HEAL</button>
            <button class="action-button give-up" @click="giveUp">GIVE UP</button>
          </div>
          <div v-else>
            <button class="new-game" @click="startGame">
              Start New Game
            </button>
          </div>
        </div>
      </div>
      <div class="attack-logs" v-if="logsActive">
        <ul>
          <li
            v-for="(entry, index) in battleLogs"
            :key="index"
            :class="{ 'light-pink': entry.action == 'monster-attack' }"
          >
            <span v-if="entry.action == 'monster-attack'"
              >MONSTER HITS PLAYER FOR {{ entry.value }}</span
            >
            <span v-else-if="entry.action == 'player-attack'"
              >PLAYER HITS MONSTER FOR {{ entry.value }}</span
            >
            <span v-if="entry.action == 'heal'"
              >PLAYER HEALS FOR {{ entry.value }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      gameOn: false,
      playerHealth: 100,
      monsterHealth: 100,
      battleLogs: [],
      logsActive: false,
      winner: 'you',
      resultActive: false
    };
  },
  methods: {
    startGame: function() {
      this.resultActive = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameOn = true;
      this.battleLogs = [];
      this.logsActive = false;
    },
    getRandomNumber: function() {
      return Math.floor(Math.random() * 10) + 1;
    },
    attackMethod: function() {
      let playerHitPoints = this.getRandomNumber();
      let monsterHitPoints = this.getRandomNumber();

      this.callAttack(playerHitPoints, monsterHitPoints);
      this.turnOnLogs();
    },
    specialAttack: function() {
      let playerHitPoints = 15;
      let monsterHitPoints = this.getRandomNumber();

      this.callAttack(playerHitPoints, monsterHitPoints);
      this.turnOnLogs();
    },
    heal: function() {
      let healed = this.playerHealth + 10;
      let healedAmount = 10;

      if (healed > 100) {
        healedAmount = 100 - this.playerHealth;
        this.playerHealth = 100;
      } else {
        this.playerHealth = healed;
      }

      this.battleLogs.unshift({ action: "heal", value: healedAmount });

      let monsterTurn = this.getRandomNumber();
      this.playerHealth = this.playerHealth - monsterTurn;
      this.battleLogs.unshift({ action: "monster-attack", value: monsterTurn });

      this.turnOnLogs();
    },
    callAttack: function(playerHitPoints, monsterHitPoints) {
      this.playerHealth = this.playerHealth - monsterHitPoints;
      this.monsterHealth = this.monsterHealth - playerHitPoints;

      if(this.playerHealth < 1 || this.monsterHealth < 1) {
        if(this.playerHealth < 1) {
          this.playerHealth = 0;
          this.winner = 'monster';
        } else {
          this.monsterHealth = 0;
          this.winner = 'you';
        }
          this.gameOn = false;
          this.resultActive = true;
      }

      this.battleLogs.unshift({
        action: "player-attack",
        value: playerHitPoints,
      });

      this.battleLogs.unshift({
        action: "monster-attack",
        value: monsterHitPoints,
      });
    },
    giveUp: function() {
      this.gameOn = false;
      this.winner = 'monster';
      this.resultActive = true;
    },
    turnOnLogs: function() {
      this.logsActive = true;
    }

  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.container {
  margin: 2rem 10rem;
}

.result {
  position: fixed;
  left: 43%;
  transform: translateY(-75px);
  opacity: 0;
  transition: opacity 500ms 300ms ease-out, transform 500ms 300ms ease-out;
}

.result-attached {
  transform: translateY(0);
  opacity: 1;
}

.scoreboard-box {
  margin: 2rem 0;
}

.scoreboard {
  display: inline-block;
  text-align: center;
  width: 50%;
}

.health-bar {
  background: darkgray;
  height: 50px;
  width: 80%;
  margin: auto;
  text-align: left;
  position: relative;
}

.vitality {
  text-align: center;
  background: green;
  display: inline-block;
  height: 100%;
}

.vitality span {
  position: absolute;
  line-height: 2;
  right: 5px;
  font-size: 1.5rem;
  color: black;
}

.control-box {
  /* margin: 2rem; */
  /* border: 1px solid black; */
  box-shadow: 1px 1px 1px 1px gray;
  text-align: center;
}

.control-box .template {
  display: inline-block;
  /* background: red; */
}

.action-button {
  margin: 1.5rem;
  padding: 1rem;
  display: inline-block;
  /* box-shadow: 1px 1px 1px 1px gray; */
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
}

.action-button:nth-of-type(1) {
  background: indianred;
}

.action-button:nth-of-type(2) {
  background: #e77247;
}

.action-button:nth-of-type(3) {
  background: #51e651;
}

.action-button:nth-of-type(4) {
  background: white;
}

.new-game {
  display: inline-block;
  width: 300px;
  border-radius: 5px;
  background: chocolate;
  margin: 1rem;
  padding: 1rem;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}

.attack-logs {
  margin: 2rem 0;
  box-shadow: 1px 1px 1px 3px gray;
  padding: 1rem;
  overflow: scroll;
  height: 300px;
  overflow-x: hidden;
}

.attack-logs ul {
  padding: 1rem;
  margin: 0;
  list-style: none;
  text-align: center;
}

.attack-logs li {
  background: lightblue;
  font-size: 1.2rem;
  color: blue;
  font-weight: bold;
  margin: 0.5rem;
}

.light-pink {
  background: #e9a2a2 !important;
  color: #af0404 !important;
}
</style>
