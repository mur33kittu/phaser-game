import Phaser from 'phaser';

class PreGame extends Phaser.Scene {
    preLoadGame = null;
    constructor(config) {
        super(config);
        this.preLoadGame = new Phaser.Game(config);

    }
}

export default PreGame;
