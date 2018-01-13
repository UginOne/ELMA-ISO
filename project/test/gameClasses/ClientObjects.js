var ClientObjects = {
	table: ClientItem.extend({
		classId: 'table',

		init: function (parent, tileX, tileY) {
			ClientItem.prototype.init.call(this, tileX, tileY, 2, 2);
			var self = this;

			// Setup the 3d bounds container (this)
			this.isometric(true)
                .drawBounds(false)
                .drawBoundsData(false)
				.mount(parent)
				.translateToTile(tileX, tileY, 0)
				.mouseOver(function () { this.drawBounds(false); this.drawBoundsData(false); })
				.mouseOut(function () { this.drawBounds(false); this.drawBoundsData(false); })
				.occupyTile(tileX, tileY, 2, 2);

			// Create the "image" entity
			this.imageEntity = new IgeEntity()
				.drawBounds(false)
				.drawBoundsData(false)
                .dimensionsFromCell()
				.texture(ige.client.gameTexture.table)
				.scaleTo(1.5,1.5,1)
				.mount(this);
		},
		
		translateToTile: function (tileX, tileY) {
			return ClientItem.prototype.translateToTile.call(this, tileX + 0.5, (tileY) + 0.2, 0);
		}
	}),

    groundOccupy: ClientItem.extend({
        classId: 'groundOccupy',

        init: function (parent, tileX, tileY) {
            ClientItem.prototype.init.call(this, tileX, tileY, 1, 1);
            var self = this;

            // Setup the 3d bounds container (this)
            this.isometric(true)
                .drawBounds(false)
                .drawBoundsData(false)
                .mount(parent)
                .translateToTile(tileX, tileY, 0)
                .mouseOver(function () { this.drawBounds(false); this.drawBoundsData(false); })
                .mouseOut(function () { this.drawBounds(false); this.drawBoundsData(false); })
                .occupyTile(tileX, tileY, 1, 1);

            // Create the "image" entity
            this.imageEntity = new IgeEntity()
                .drawBounds(false)
                .drawBoundsData(false)
                .dimensionsFromCell()
				.rotate(50)
                .texture(ige.client.gameTexture.groundOccupy)
				.scaleTo(2,2,2)
                .mount(this);
        },

        translateToTile: function (tileX, tileY) {
            return ClientItem.prototype.translateToTile.call(this, tileX , tileY, 0);
        }
    }),

	table2: ClientItem.extend({
		classId: 'table2',

		init: function (parent, tileX, tileY) {
			ClientItem.prototype.init.call(this, tileX, tileY, 3, 4);
			var self = this;

			// Setup the 3d bounds container (this)
			this.isometric(true)
				.mount(parent)
				.bounds3d(3 * parent._tileWidth, 4 * parent._tileHeight, parent._tileHeight * 0.8)
				.translateToTile(tileX, tileY, 0)
				.mouseOver(function () { this.drawBounds(true); this.drawBoundsData(true); })
				.mouseOut(function () { this.drawBounds(false); this.drawBoundsData(false); })
				.occupyTile(tileX, tileY, 3, 4);

			// Create the "image" entity
			this.imageEntity = new IgeEntity()
				.texture(ige.client.gameTexture.electricals)
				.dimensionsFromCell()
				.scaleTo(0.45, 0.45, 1)
				.mount(this);
		},
		
		translateToTile: function (tileX, tileY) {
			return ClientItem.prototype.translateToTile.call(this, (tileX) + 1, (tileY) + 1.5, 0);
		}
	}),

    block: ClientItem.extend({
        classId: 'block',

        init: function (parent, tileX, tileY) {
            ClientItem.prototype.init.call(this, tileX, tileY, 1, 1);
            var self = this;

            // Setup the 3d bounds container (this)
            this.isometric(true)
                .mount(parent)
				.drawBounds(false)
				.drawBoundsData(false)
                .translateToTile(tileX, tileY, 0)
                .occupyTile(tileX, tileY, 1, 1);

            // Create the "image" entity
            this.imageEntity = new IgeEntity()
                .drawBounds(false)
                .drawBoundsData(false)
                .texture(ige.client.gameTexture.block)
                .dimensionsFromCell()
                .scaleTo(1, 1, 1)
				//.opacity(0.75)
                .mount(this);
        },

        translateToTile: function (tileX, tileY) {
            return ClientItem.prototype.translateToTile.call(this, tileX - 0.5, tileY - 0.5, 0);
        }
    })

};