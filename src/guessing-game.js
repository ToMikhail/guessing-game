class GuessingGame {

        constructor() {
            this.min = 0;
            this.max = 0;
            this.number=0;
        }

        setRange(min, max) {
            this.min = min;
            this.max = max;
        }

        guess() {
            this.number = Math.round((this.max - this.min) / 2) + this.min
            return this.number
        }

        lower() {
            this.max = this.number 
        }

        greater() {
            this.min = this.number
        }

}

module.exports = GuessingGame;

        // const number = 409;
        // const game = new GuessingGame();
        // game.setRange(0, 4048)

        // let result = game.guess();
        // game.lower();
        // result = game.guess();
        // game.lower();
        // result = game.guess();
        // game.lower();
        // result = game.guess();
        // game.greater();
        // result = game.guess();
        // game.greater();
        // result = game.guess();
        // game.lower();
        // result = game.guess();
        // game.lower();
        // result = game.guess();
        // game.greater();
        // result = game.guess();
        // game.greater();
        // result = game.guess();
        // game.greater();
        // result = game.guess();
        // game.lower();
        // result = game.guess()
