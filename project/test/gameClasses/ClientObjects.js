var ClientObjects = {
	table: ClientItem.extend({
		classId: 'table',

		init: function (parent, tileX, tileY) {
			ClientItem.prototype.init.call(this, tileX, tileY, 2, 2);
			var self = this;

			// Setup the 3d bounds container (this)
			this.isometric(true)
				.mount(parent)
				.translateToTile(tileX, tileY, 0)
				.mouseOver(function () { this.drawBounds(false); this.drawBoundsData(false); })
				.mouseOut(function () { this.drawBounds(false); this.drawBoundsData(false); })
				.occupyTile(tileX, tileY, 2, 2);

			// Create the "image" entity
			this.imageEntity = new IgeEntity()
                .dimensionsFromCell()
				.texture(ige.client.gameTexture.table)
				.scaleTo(1.5,1.5,1)
				.mount(this);
		},
		
		translateToTile: function (tileX, tileY) {
			return ClientItem.prototype.translateToTile.call(this, (tileX) + 0.5, (tileY) + 0.5, 0);
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
	})
};