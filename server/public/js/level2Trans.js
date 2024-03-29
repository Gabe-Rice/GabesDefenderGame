class level2Trans extends Phaser.Scene {
    constructor() {
        super({ key: 'level2Trans' });
    }

    preload() {
        // images
        this.load.image('sprBg0', 'assets/otherAssets/sprBg0.png');
        this.load.image('sprBtnPlay', 'assets/otherAssets/sprBtnPlay.png');
        this.load.image('sprBtnPlayHover', 'assets/otherAssets/sprBtnPlayHover.png');
        this.load.image('sprBtnPlayDown', 'assets/otherAssets/sprBtnPlayDown.png');
        this.load.image('sprBtnRestart', 'assets/otherAssets/sprBtnRestart.png');
        this.load.image('sprBtnRestartHover', 'assets/otherAssets/sprBtnRestartHover.png');
        this.load.image('sprBtnRestartDown', 'assets/otherAssets/sprBtnRestartDown.png');
        this.load.image('bgL2', '/assets/otherAssets/Level2bg.png');
        this.load.image('bgL3', 'assets/ourStuff/ourBackgrounds/Level3BG.png');        
        // sfx
        //this.load.audio('sndBtnOver', 'assets/otherAssets/sndBtnOver.wav');
        //this.load.audio('sndBtnDown', 'assets/ourStuff/ourSounds/boom7_msdn.wav');
        
    }

    create() {
        // sfx
        /*this.sfx = {
            btnOver: this.sound.add('sndBtnOver'),
            btnDown: this.sound.add('sndBtnDown')
        };*/

        // play button
        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            'sprBtnPlay'
        );

        this.btnPlay.setInteractive();  // set play button

        // button texture on hover
        /*this.btnPlay.on('pointerover', function() {
            this.btnPlay.setTexture('sprBtnPlayHover');
            this.sfx.btnOver.play();
        }, this);*/

        // button texture not on hover
        this.btnPlay.on('pointerout', function() {
            this.setTexture('sprBtnPlay');
        });

/*
        // button texture when pressed
        this.btnPlay.on('pointerdown', function() {
            this.btnPlay.setTexture('sprBtnPlayDown');
            this.sfx.btnDown.play();
        }, this);*/

        // button texture when released
        this.btnPlay.on('pointerup', function() {
            this.btnPlay.setTexture('sprBtnPlay');
            this.scene.start('SceneLevel3');
        }, this);

        // title text
        this.title = this.add.text(this.game.config.width * 0.5, 128, 'You made it to level 3!', {
            fontFamily: 'monospace',
            fontSize: 48,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0.5);
    }
}