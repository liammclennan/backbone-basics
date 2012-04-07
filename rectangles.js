(function () {

	var Rectangle = Backbone.Model.extend({});

	var RectangleView = Backbone.View.extend({

		tagName: 'div',

		className: 'rectangle',

		events: {
			'click': 'move'
		},

		render: function () {
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this;
		},

		setDimensions: function () {
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		setPosition: function () {
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		setColor: function () {
			this.$el.css('background-color', this.model.get('color'));
		},

		move: function () {
			this.$el.css('left', this.$el.position().left + 10);
		}

	});

	var models = [
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 300,
				y: 150
			},
			color: '#ff0000'
		}),
		new Rectangle({
			width: 26,
			height: 300,
			position: {
				x: 500,
				y: 75
			},
			color: '#00ff00'
		}),
		new Rectangle({
			width: 300,
			height: 70,
			position: {
				x: 310,
				y: 200
			},
			color: '#0000ff'
		})
	];

	_(models).each(function (model) {
		$('div#canvas').append(new RectangleView({model: model}).render().el);	
	});

})();