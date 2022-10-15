Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            isRoundStarted: false,
            matchLogs: [],
            winner: ''
        }
    },
    methods: {
        startOrEndGame() {
            this.isRoundStarted = !this.isRoundStarted;
        },
        attack() {
            const playerHitMonster = this.randomNum();
            const monsterHitPlayer = this.randomNum();

            this.playerHealth-=monsterHitPlayer;
            this.monsterHealth-=playerHitMonster;

            this.checkWinningStatus();

            this.storeMatchLogs(playerHitMonster, 'player');
            this.storeMatchLogs(monsterHitPlayer, 'monster');
            
        },
        specialAttack() {
            const playerHitMonster = this.randomNum() + 5;
            const monsterHitPlayer = this.randomNum();

            this.playerHealth-=monsterHitPlayer;
            this.monsterHealth-=playerHitMonster;

            this.checkWinningStatus();

            this.storeMatchLogs(playerHitMonster, 'player');
            this.storeMatchLogs(monsterHitPlayer, 'monster');
        },
        heal() {
            const monsterHitPlayer = this.randomNum();
            this.playerHealth-=monsterHitPlayer;

            let healValue;
            if(monsterHitPlayer > 15) {
                healValue = 20;
            } else {
                healValue = 10;
            }

            this.playerHealth+=healValue;

            this.checkWinningStatus();

            this.storeMatchLogs(healValue, 'heal');
            this.storeMatchLogs(monsterHitPlayer, 'monster');
        },
        randomNum() {
            return Math.floor(Math.random() * 10) + 10;
        },
        storeMatchLogs(dmg, turn) {
            this.matchLogs.unshift(
                {
                    dmg: dmg,
                    turn: turn
                });
        },
        checkWinningStatus() {
            if(this.playerHealth <= 0) {
                this.playerHealth = 0;
                this.winner = 'monster';
            } else if(this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                this.winner = 'player';
            }
        }
    },
    watch: {
        winner(value) {
            if(value === '') {
                return;
            } 
            
            if(value === 'player') {
                alert('Player wins!');
            } else {
                alert('Monster wins!');
            }
            this.startOrEndGame();
        }
    }
}).mount('#app');