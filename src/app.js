var StartLayer = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Snake", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);


        //开始按钮 
        var start = new cc.MenuItemImage(res.HelloWorld_png, res.HelloWorld_png, function() {
            cc.log("Menu is clicked!");
            cc.director.runScene(new GameScene());
        }, this);
        start.attr({
            x: size.width / 2,
            y: size.height / 2 - 120,
            anchorX: 0.5,
            anchorY: 0.5
        });
        var menu = new cc.Menu(start);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);
        return true;
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});