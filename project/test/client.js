var Client = IgeClass.extend({
	classId: 'Client',
	init: function () {
        ige.addComponent(IgeEditorComponent);
        ige.globalSmoothing(true);

        // Load our textures
        var self = this,
            gameTexture = [];
        this.obj = [];
        this.gameTexture = {};
        self.wallObj = [];
        this.npc = {};


        // Create the HTML canvas
        ige.createFrontBuffer(true);
        this.implement(ClientObjects);

        this.backGroundObj = new IgeTexture('../assets/textures/backgrounds/grassTile.png');

        this.loadTextures();


        ige.on('texturesLoaded', function () {
            ige.start(function (success) {
                // Check if the engine started successfully
                if (success) {
                    self.isoMode = true;
                    self.setupMap();

                    // Setup the initial entities
                    self.setupEntities();

                    //self.setupWalls();




                }
            });
        });
    },

    setupWalls: function (){
        for(var i = 93; i >= 0; i--){
            this.placeItem('block', 0, i);
        }
        for(var i = 93; i >= 0; i--){
            this.placeItem('block', 44, i);
        }

        for(var i = 0; i <= 44; i++){
            this.placeItem('block', i, 0);
        }
        for(var i = 0; i <= 44; i++){
            this.placeItem('block', i, 93);
        }

        for(var i = 24; i >= 0; i--){
            this.placeItem('block', 12, i);
        }

        for(var i = 24; i >= 0; i--){
            this.placeItem('block', 24, i);
        }

        for(var i = 32; i >= 26; i--){
            this.placeItem('block', 8, i);
        }
        for(var i = 54; i >= 35; i--){
            this.placeItem('block', 8, i);
        }
        for(var i = 48; i >= 31; i--){
            this.placeItem('block', 12, i);
        }
        for(var i = 44; i >= 39; i--){
            this.placeItem('block', 15, i);
        }
        for(var i = 39; i >= 31; i--){
            this.placeItem('block', 25, i);
        }
        for(var i = 48; i >= 44; i--){
            this.placeItem('block', 25, i);
        }
        for(var i = 31; i >= 27; i--){
            this.placeItem('block', 29, i);
        }
        for(var i = 52; i >= 34; i--){
            this.placeItem('block', 29, i);
        }
        for(var i = 82; i >= 80; i--){
            this.placeItem('block', 12, i);
        }
        for(var i = 92; i >= 85; i--){
            this.placeItem('block', 12, i);
        }
        for(var i = 92; i >= 62; i--){
            this.placeItem('block', 29, i);
        }

        for(var i = 1; i <= 7; i++){
            this.placeItem('block', i, 28);
        }

        for(var i = 1; i <= 7; i++){
            this.placeItem('block', i, 50);
        }
        for(var i = 1; i <= 7; i++){
            this.placeItem('block', i, 54);
        }
        for(var i = 1; i <= 8; i++){
            this.placeItem('block', i, 58);
        }

        for(var i = 1; i <= 11; i++){
            this.placeItem('block', i, 80);
        }
        for(var i = 10; i <= 13; i++){
            this.placeItem('block', i, 24);
        }
        for(var i = 16; i <= 27; i++){
            this.placeItem('block', i, 24);
        }
        for(var i = 13; i <= 24; i++){
            this.placeItem('block', i, 31);
        }
        for(var i = 13; i <= 24; i++){
            this.placeItem('block', i, 39);
        }
        for(var i = 13; i <= 24; i++){
            this.placeItem('block', i, 44);
        }
        for(var i = 15; i <= 22; i++){
            this.placeItem('block', i, 51);
        }
        for(var i = 35; i <= 43; i++){
            this.placeItem('block', i, 22);
        }
        for(var i = 30; i <= 43; i++){
            this.placeItem('block', i, 40);
        }
        for(var i = 34; i <= 43; i++){
            this.placeItem('block', i, 57);
        }
        for(var i = 1; i <= 13; i++){
            this.placeItem('block', i, 62);
        }
        for(var i = 16; i <= 37; i++){
            this.placeItem('block', i, 62);
        }
        for(var i = 40; i <= 43; i++){
            this.placeItem('block', i, 62);
        }

        this.placeItem('block', 34, 23);
        this.placeItem('block', 33, 24);
        this.placeItem('block', 32, 25);
        this.placeItem('block', 31, 26);
        this.placeItem('block', 30, 27);


        this.placeItem('block', 30, 53);
        this.placeItem('block', 33, 56);

        this.placeItem('block', 8, 61);

        this.placeItem('block', 13, 49);
        this.placeItem('block', 14, 50);
    },

    setupNPC: function (y,x,type, id){

        this.npc[id] = new Character()
            .id('player' + id)
            .setType(type)
            .drawBounds(false)
            .drawBoundsData(false)
            .scaleTo(1.5,1.5,1)
            .mount(this.tileMap1)
            .translateToTile(x, y, 0)
            .isometric(true);

        if (id == 52)
        {
            var text = new IgeFontEntity()
                .id('font2')
                .depth(1)
                .width(100)
                .height(40)
                .texture(this.gameTexture.font)
                //.textAlignX(1)
                .textAlignY(1)
                .colorOverlay('#000000')
                .textLineSpacing(-34)
                .text('Iam Batman')
                .center(0)
                .drawBounds(false)
                .drawBoundsData(false)
                .translateTo(0, -30, 0)
                .mount(this.npc[id]);
        }

        /*self.npc[id].addComponent(IgePathComponent).path
            .finder(self.pathFinder)
            .tileMap(ige.$('tileMap1'))
            .tileChecker(function (tileData, tileX, tileY, node, prevNodeX, prevNodeY, dynamic) {
                return tileData !== 1;
            })
            .lookAheadSteps(3)
            .dynamic(true)
            .allowSquare(true)
            .allowDiagonal(false)
            .drawPath(true)
            .drawPathGlow(true)
            .drawPathText(false);

        // Register some event listeners for the path
        //self.player.path.on('started', function () { console.log('Pathing started...'); });
        //self.player.path.on('cleared', function () { console.log('Path data cleared.'); });
        self.npc[id].path.on('pointComplete', function () { self.player.directionAnimation(); });
        self.npc[id].path.on('pathComplete', function () { self.player.animation.stop(); });

        self.npc[id].path
            .set(0, 0, 0, 60, 43, 0)
            .speed(4);*/
    },


    setupMap: function(){
        var self = this;
        // Create the scene
        self.mainScene = new IgeScene2d()
            .id('mainScene')
            .drawBounds(false)
            .drawBoundsData(false);


			self.objectScene = new IgeScene2d()
				.id('objectScene')
				.depth(0)
				.drawBounds(false)
				.drawBoundsData(false)
				.mount(self.mainScene);

			//self.uiScene = new IgeScene2d()
			//	.id('uiScene')
			//	.depth(1)
			//	.drawBounds(false)
			//	.drawBoundsData(false)
			//	.ignoreCamera(true) // We don't want the UI scene to be affected by the viewport's camera
			//	.mount(self.mainScene);

			// Create the main viewport
			self.vp1 = new IgeViewport()
				.addComponent(IgeMousePanComponent)
				//.mousePan.limit(new IgeRect(-300, -100, 600, 200))
				.mousePan.enabled(true)
				.id('vp1')
				.autoSize(true)
				.scene(self.mainScene)
				.drawMouse(false)
				.drawBounds(true)
				.drawBoundsData(true)
				.mount(ige);


			//self.backgroundScene = new IgeScene2d()
            //        .id('backgroundScene')
            //        .backgroundPattern(gameTexture[0], 'repeat', true, true)
            //        .ignoreCamera(true) // We want the scene to remain static
            //        .mount(self.mainScene);

			// Create some listeners for when the viewport is being panned
			// so that we don't create a new path accidentally after a mouseUp
			// occurs if we were panning
			self.vp1.mousePan.on('panStart', function () {
				// Store the current cursor mode
				ige.client.data('tempCursorMode', ige.client.data('cursorMode'));

				// Switch the cursor mode
				ige.client.data('cursorMode', 'panning');
				ige.input.stopPropagation();
			});

			self.vp1.mousePan.on('panEnd', function () {
				ige.client.data('cursorMode', ige.client.data('tempCursorMode'));
				ige.input.stopPropagation();
			});

        // Create an isometric tile map
        self.tileMap1 = new IgeTileMap2d()
            .id('tileMap1')
            .isometricMounts(self.isoMode)
            .drawMouse(false)
            .drawBounds(false)
            .drawBoundsData(false)
            .backgroundPattern(self.backGroundObj, 'repeat', true, true)
            .gridSize(40,20)
            .highlightOccupied(true) // Draws a red tile wherever a tile is "occupied"
            .mount(self.objectScene)					 // Mark tile as occupied with a value of 1 (x, y, width, height, value)
            .loadMap({"data":{
                    "0":{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1},
                    "1":{"0":1,"28":1,"50":1,"54":1,"58":1,"62":1,"80":1,"93":1},
                    "2":{"0":1,"10":1,"11":1,"13":1,"14":1,"16":1,"17":1,"19":1,"20":1,"23":1,"24":1,"28":1,"43":1,"50":1,"54":1,"58":1,"62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"80":1,"93":1},
                    "3":{"0":1,"3":1,"4":1,"10":1,"11":1,"13":1,"14":1,"16":1,"17":1,"19":1,"20":1,"23":1,"24":1,"28":1,"43":1,"50":1,"54":1,"58":1,"62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"80":1,"93":1},
                    "4":{"0":1,"3":1,"4":1,"25":1,"26":1,"28":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"50":1,"54":1,"58":1,"62":1,"80":1,"93":1},
                    "5":{"0":1,"10":1,"11":1,"13":1,"14":1,"16":1,"17":1,"19":1,"20":1,"25":1,"26":1,"28":1,"43":1,"50":1,"54":1,"58":1,"62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"77":1,"78":1,"80":1,"93":1},
                    "6":{"0":1,"10":1,"11":1,"13":1,"14":1,"16":1,"17":1,"19":1,"20":1,"28":1,"43":1,"50":1,"54":1,"58":1,"62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"77":1,"78":1,"80":1,"93":1},
                    "7":{"0":1,"28":1,"50":1,"54":1,"58":1,"62":1,"77":1,"78":1,"80":1,"93":1},
                    "8":{"0":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"58":1,"61":1,"62":1,"68":1,"69":1,"72":1,"73":1,"77":1,"78":1,"80":1,"93":1},
                    "9":{"0":1,"5":1,"6":1,"8":1,"9":1,"11":1,"12":1,"14":1,"15":1,"17":1,"18":1,"20":1,"21":1,"62":1,"68":1,"69":1,"72":1,"73":1,"80":1,"93":1},
                    "10":{"0":1,"5":1,"6":1,"8":1,"9":1,"11":1,"12":1,"14":1,"15":1,"17":1,"18":1,"20":1,"21":1,"24":1,"62":1,"64":1,"65":1,"80":1,"93":1},
                    "11":{"0":1,"24":1,"62":1,"64":1,"65":1,"80":1,"93":1},
                    "12":{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"62":1,"80":1,"81":1,"82":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1},
                    "13":{"0":1,"24":1,"31":1,"39":1,"44":1,"49":1,"62":1,"93":1},
                    "14":{"0":1,"2":1,"3":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"31":1,"39":1,"44":1,"50":1,"93":1},
                    "15":{"0":1,"2":1,"3":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"31":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"51":1,"93":1},
                    "16":{"0":1,"24":1,"31":1,"39":1,"44":1,"47":1,"48":1,"51":1,"62":1,"93":1},
                    "17":{"0":1,"2":1,"3":1,"24":1,"31":1,"39":1,"44":1,"47":1,"48":1,"51":1,"62":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "18":{"0":1,"2":1,"3":1,"24":1,"31":1,"39":1,"44":1,"47":1,"48":1,"51":1,"62":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "19":{"0":1,"24":1,"31":1,"39":1,"44":1,"47":1,"48":1,"51":1,"62":1,"93":1},
                    "20":{"0":1,"24":1,"31":1,"39":1,"44":1,"47":1,"48":1,"51":1,"62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "21":{"0":1,"2":1,"3":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"24":1,"31":1,"39":1,"44":1,"47":1,"48":1,"51":1,"62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "22":{"0":1,"2":1,"3":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"24":1,"31":1,"39":1,"44":1,"51":1,"62":1,"93":1},
                    "23":{"0":1,"24":1,"31":1,"39":1,"44":1, "62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "24":{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"31":1,"39":1,"44":1,"62":1,"64":1,"65":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "25":{"0":1,"24":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"44":1,"45":1,"46":1,"47":1,"48":1,"62":1,"93":1},
                    "26":{"0":1,"24":1,"62":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "27":{"0":1,"2":1,"3":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"24":1,"62":1,"68":1,"69":1,"72":1,"73":1,"76":1,"77":1,"81":1,"82":1,"86":1,"87":1,"93":1},
                    "28":{"0":1,"2":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"62":1,"93":1},
                    "29":{"0":1,"27":1,"28":1,"29":1,"30":1,"31":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1},
                    "30":{"0":1,"27":1,"40":1,"53":1,"62":1,"93":1},
                    "31":{"0":1,"26":1,"40":1,"62":1,"93":1},
                    "32":{"0":1,"2":1,"3":1,"25":1,"40":1,"62":1,"66":1,"67":1,"70":1,"71":1,"74":1,"75":1,"78":1,"79":1,"83":1,"84":1,"88":1,"89":1,"93":1},
                    "33":{"0":1,"2":1,"3":1,"24":1,"40":1,"42":1,"43":1,"44":1,"56":1,"62":1,"66":1,"67":1,"70":1,"71":1,"74":1,"75":1,"78":1,"79":1,"83":1,"84":1,"88":1,"89":1,"93":1},
                    "34":{"0":1,"23":1,"40":1,"44":1,"57":1,"62":1,"93":1},"35":{"0":1,"22":1,"29":1,"30":1,"33":1,"34":1,"40":1,"44":1,"57":1,"62":1,"66":1,"67":1,"70":1,"71":1,"74":1,"75":1,"78":1,"79":1,"83":1,"84":1,"88":1,"89":1,"93":1},
                    "36":{"0":1,"22":1,"29":1,"30":1,"33":1,"34":1,"40":1,"44":1,"57":1,"62":1,"66":1,"67":1,"70":1,"71":1,"74":1,"75":1,"78":1,"79":1,"83":1,"84":1,"88":1,"89":1,"93":1},
                    "37":{"0":1,"2":1,"3":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"22":1,"40":1,"57":1,"62":1,"93":1},
                    "38":{"0":1,"2":1,"3":1,"6":1,"7":1,"10":1,"11":1,"14":1,"15":1,"18":1,"19":1,"22":1,"29":1,"30":1,"33":1,"34":1,"40":1,"57":1,"93":1},
                    "39":{"0":1,"22":1,"29":1,"30":1,"33":1,"34":1,"40":1,"50":1,"51":1,"52":1,"57":1,"93":1},
                    "40":{"0":1,"22":1,"40":1,"50":1,"57":1,"62":1,"65":1,"66":1,"69":1,"70":1,"73":1,"74":1,"77":1,"78":1,"81":1,"82":1,"85":1,"86":1,"89":1,"90":1,"93":1},
                    "41":{"0":1,"22":1,"40":1,"50":1,"57":1,"62":1,"65":1,"66":1,"69":1,"70":1,"73":1,"74":1,"77":1,"78":1,"81":1,"82":1,"85":1,"86":1,"89":1,"90":1,"93":1},
                    "42":{"0":1,"22":1,"40":1,"50":1,"57":1,"62":1,"93":1},
                    "43":{"0":1,"22":1,"40":1,"57":1,"62":1,"93":1},
                    "44":{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1}},
                "dataXY":[0,0]});

		self.player = new Character()
			.id('player')
			.addComponent(PlayerComponent)
			.setType(4)
			.drawBounds(false)
			.drawBoundsData(false)
			.mount(self.tileMap1)
            .scaleTo(1.5,1.5,1)
        	.translateToTile(60, 42, 0)
			.isometric(true);

		// Set the camera to track the character with some
		// tracking smoothing turned on (100)
		self.vp1.camera.lookAt(self.player);

		// Create a path finder
		self.pathFinder = new IgePathFinder()
			.neighbourLimit(1000);

			// Assign the pathfinder to the player
		self.player.addComponent(IgePathComponent).path
			.finder(self.pathFinder)
			.tileMap(ige.$('tileMap1'))
			.tileChecker(function (tileData, tileX, tileY, node, prevNodeX, prevNodeY, dynamic) {
                if(self.tileMap1.isTileOccupied(tileX, tileY, 1, 1)){
                    return false;
                }
                return tileData !== 1;
			})
			.lookAheadSteps(3)
			.dynamic(true)
			.allowSquare(true)
			.allowDiagonal(false)
			.drawPath(true)
			.drawPathGlow(true)
			.drawPathText(false);

		// Register some event listeners for the path
		//self.player.path.on('started', function () { console.log('Pathing started...'); });
		//self.player.path.on('cleared', function () { console.log('Path data cleared.'); });
		self.player.path.on('pointComplete', function () { self.player.directionAnimation(); });
		self.player.path.on('pathComplete', function () { self.player.animation.stop(); });

		self.pathFinder.on('noPathFound', function () { self.player.animation.stop(); });
		//self.pathFinder.on('exceededLimit', function () { console.log('Path finder exceeded allowed limit of nodes!'); });
		self.pathFinder.on('pathFound', function () { self.player.directionAnimation(); });

        self.player.path
			.set(0, 0, 0, 60, 42, 0)
			.speed(4);


        ige.cannon.createFloor(0, 0, 1);

    },

    loadTextures: function () {
        this.gameTexture.table = new IgeTexture('../assets/textures/objects/pcTable.png');
        this.gameTexture.table2 = new IgeTexture('../assets/textures/objects/table2.png');
        this.gameTexture.pcTable = new IgeTexture('../assets/textures/objects/PcTable.png');
        this.gameTexture.pcTable2 = new IgeTexture('../assets/textures/objects/PcTable2.png');
        this.gameTexture.tumbochka = new IgeTexture('../assets/textures/objects/tumbochka.png');

        this.gameTexture.groundOccupy = new IgeTexture('../assets/textures/backgrounds/stone4.png');
        this.gameTexture.block = new IgeTexture('../assets/textures/backgrounds/block.png');
        this.gameTexture.font = new IgeFontSheet('../assets/textures/fonts/verdana_10px.png');
    },

    setupEntities: function () {
        // Create an entity
        this.placeItem('table', 3, 3);this.setupNPC(4,3,1,0);
        this.placeItem('table', 2, 10);this.setupNPC(3, 10,2,1);
        this.placeItem('table', 2, 13);this.setupNPC(3,13,3,2);
        this.placeItem('table', 2, 16);this.setupNPC(3,16,4,3);
        this.placeItem('table', 2, 19);this.setupNPC(3,19,5,4);
        this.placeItem('table', 2, 23);this.setupNPC(3,23,1,5);
        this.placeItem('table', 4, 25);this.setupNPC(5,25,2,6);
        this.placeItem('table', 5, 10);this.setupNPC(6,10,3,7);
        this.placeItem('table', 5, 13);this.setupNPC(6,13,4,8);
        this.placeItem('table', 5, 16);this.setupNPC(6,16,3,9);
        this.placeItem('table', 5, 19);this.setupNPC(6,19,2,10);
        this.placeItem('table', 9, 5);this.setupNPC(10,5,1,11);
        this.placeItem('table', 9, 8);this.setupNPC(10,8,2,12);
        this.placeItem('table', 9, 11);this.setupNPC(10,11,3,13);
        this.placeItem('table', 9, 14);this.setupNPC(10,14,4,14);
        this.placeItem('table', 9, 17);this.setupNPC(10,17,1,15);
        this.placeItem('table', 9, 20);this.setupNPC(10,20,2,16);

        this.placeItem('table', 14, 2);this.setupNPC(15,2,1,17);
        this.placeItem('table', 14, 6);this.setupNPC(15,6,2,18);
        this.placeItem('table', 14, 10);this.setupNPC(15,10,3,19);
        this.placeItem('table', 14, 14);this.setupNPC(15,14,4,20);
        this.placeItem('table', 14, 18);this.setupNPC(15,18,5,21);
        this.placeItem('table', 17, 2);this.setupNPC(18,2,3,22);
        this.placeItem('table', 21, 2);this.setupNPC(22,2,1,23);
        this.placeItem('table', 21, 6);this.setupNPC(22,6,4,24);
        this.placeItem('table', 21, 10);this.setupNPC(22,10,2,25);
        this.placeItem('table', 21, 14);this.setupNPC(22,14,2,26);
        this.placeItem('table', 21, 18);this.setupNPC(22,18,3,27);

        this.placeItem('table', 27, 2); this.setupNPC(28,2,3,28);
        this.placeItem('table', 27, 6);this.setupNPC(28,6,3,29);
        this.placeItem('table', 27, 10);this.setupNPC(28,10,3,30);
        this.placeItem('table', 27, 18);this.setupNPC(28,18,3,31);
        this.placeItem('table', 27, 14);this.setupNPC(28,14,3,32);
        this.placeItem('table', 32, 2);this.setupNPC(33,2,3,33);
        this.placeItem('table', 37, 2);this.setupNPC(38,2,3,34);
        this.placeItem('table', 37, 6);this.setupNPC(38,6,3,35);
        this.placeItem('table', 37, 10);this.setupNPC(38,10,3,37);
        this.placeItem('table', 37, 18);this.setupNPC(38,14,3,38);
        this.placeItem('table', 37, 14);this.setupNPC(38,18,3,39);

        this.placeItem('table', 35, 29);this.setupNPC(36,29,2,40);
        this.placeItem('table', 35, 33);this.setupNPC(36,33,4,41);
        this.placeItem('table', 38, 29);this.setupNPC(39,29,1,42);
        this.placeItem('table', 38, 33);this.setupNPC(39,33,5,43);

        this.placeItem('table', 33, 43);this.setupNPC(34,43,1,44);
        this.placeItem('table', 39, 50);this.setupNPC(40,50,3,45);

        this.placeItem('table', 2, 64);this.setupNPC(2,64,1,46);
        this.placeItem('table', 2, 68);this.setupNPC(2,68,2,47);
        this.placeItem('table', 2, 72);this.setupNPC(2,72,3,48);
        this.placeItem('table', 5, 64);this.setupNPC(5,64,5,49);
        this.placeItem('table', 5, 68);this.setupNPC(5,68,4,50);
        this.placeItem('table', 5, 72);this.setupNPC(5,72,1,51);
        this.placeItem('table', 10, 64);this.setupNPC(10,64,2,52);
        this.placeItem('table', 8, 68);this.setupNPC(8,68,5,53);
        this.placeItem('table', 8, 72);this.setupNPC(8,72,4,54);

        this.placeItem('table', 17, 68);this.setupNPC(18,68,3,55);
        this.placeItem('table', 17, 72);this.setupNPC(18,72,2,56);
        this.placeItem('table', 17, 76);this.setupNPC(18,76,3,57);
        this.placeItem('table', 17, 81);this.setupNPC(18,81,4,58);
        this.placeItem('table', 17, 86);this.setupNPC(18,86,5,59);

        this.placeItem('table', 20, 64);this.setupNPC(21,64,3,60);
        this.placeItem('table', 20, 68);this.setupNPC(21,68,1,61);
        this.placeItem('table', 20, 72);this.setupNPC(21,72,2,62);
        this.placeItem('table', 20, 76);this.setupNPC(21,76,4,63);
        this.placeItem('table', 20, 81);this.setupNPC(21,81,5,64);
        this.placeItem('table', 20, 86);this.setupNPC(21,86,3,65);

        this.placeItem('table', 23, 64);this.setupNPC(24,64,3,66);
        this.placeItem('table', 23, 68);this.setupNPC(24,68,2,67);
        this.placeItem('table', 23, 72);this.setupNPC(24,72,4,68);
        this.placeItem('table', 23, 76);this.setupNPC(24,76,5,69);
        this.placeItem('table', 23, 81);this.setupNPC(24,81,1,70);
        this.placeItem('table', 23, 86);this.setupNPC(24,86,2,71);

        this.placeItem('table', 26, 68);this.setupNPC(27,68,3,72);
        this.placeItem('table', 26, 72);this.setupNPC(27,72,1,73);
        this.placeItem('table', 26, 76);this.setupNPC(27,76,2,74);
        this.placeItem('table', 26, 81);this.setupNPC(27,81,5,75);
        this.placeItem('table', 26, 86);this.setupNPC(27,86,3,76);

        this.placeItem('table', 32, 66);this.setupNPC(33,66,3,77);
        this.placeItem('table', 32, 70);this.setupNPC(33,70,2,78);
        this.placeItem('table', 32, 74);this.setupNPC(33,74,4,79);
        this.placeItem('table', 32, 78);this.setupNPC(33,78,1,80);
        this.placeItem('table', 32, 83);this.setupNPC(33,83,5,81);
        this.placeItem('table', 32, 88);this.setupNPC(33,88,1,82);

        this.placeItem('table', 35, 66);this.setupNPC(36,66,2,83);
        this.placeItem('table', 35, 70);this.setupNPC(36,70,3,84);
        this.placeItem('table', 35, 74);this.setupNPC(36,74,4,85);
        this.placeItem('table', 35, 78);this.setupNPC(36,78,5,86);
        this.placeItem('table', 35, 83);this.setupNPC(36,83,3,87);
        this.placeItem('table', 35, 88);this.setupNPC(36,88,2,88);

        this.placeItem('table', 40, 65);this.setupNPC(41,65,2,89);
        this.placeItem('table', 40, 69);this.setupNPC(41,69,1,90);
        this.placeItem('table', 40, 73);this.setupNPC(41,73,4,91);
        this.placeItem('table', 40, 77);this.setupNPC(41,77,5,92);
        this.placeItem('table', 40, 81);this.setupNPC(41,81,2,93);
        this.placeItem('table', 40, 85);this.setupNPC(41,85,3,94);
        this.placeItem('table', 40, 89);this.setupNPC(41,89,3,95);
    },

    placeItem: function (type, tileY, tileX) {
        var item = new this[type](this.tileMap1, tileX, tileY).place();
        this.obj.push(item);

        return item;
    }
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }