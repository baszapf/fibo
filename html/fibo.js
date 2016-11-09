// Extending the canvas plugin to be able to draw the fibonacci clock

$.jCanvas.defaults.fromCenter = false;

$.jCanvas.extend({
	name: 'drawClock',
	type: 'clock',
	props: {
		colorSet: 'rgb',
		// Color Arrays [off, hours, minutes, both]
		rgb: ['#fff', '#ff0a0a', '#0aff0a', '#0a0aff'],
    	mondrian: ['#fff', '#ff0a0a', '#f8de00', '#0a0aff'],
      	basbrun: ['#fff', '#502800', '#14c814', '#ff640a'],
      	colors80s: ['#fff', '#f564c9', '#72f736', '#71ebdb'],
		pastel: ['#fff', '#ff7b7b', '#8fff70', '#7878ff'],
		modern: ['#fff', '#d4312d', '#91d231', '#8d5fe0'],
		cold: ['#fff', '#d13ec8', '#45e8e0', '#5046ca'],
      	warm: ['#fff', '#ed1414', '#f6f336', '#ff7e15'],
      	earth: ['#FFF', '#462300', '#467a0a', '#c8b600'],
      	dark: ['#FFF', '#d32222', '#50974e', '#101895']
  	},
  	fn: function(ctx, params) {
  		var p = params;
		// 1a
		$('canvas').drawBox({
		  color: p[p.colorSet][p.F1a],
		  x: 105, y: 5,
		  width: 50,
		  height: 50
		});
		// 1b
		$('canvas').drawBox({
		  color: p[p.colorSet][p.F1b],
		  x: 105, y: 55,
		  width: 50,
		  height: 50
		});
		// 2
		$('canvas').drawBox({
		  color: p[p.colorSet][p.F2],
		  x: 5, y: 5,
		  width: 100,
		  height: 100
		});
		// 3
		$('canvas').drawBox({
		  color: p[p.colorSet][p.F3],
		  x: 5, y: 105,
		  width: 150,
		  height: 150
		});
		// 5
		$('canvas').drawBox({
		  color: p[p.colorSet][p.F5],
		  x: 155, y: 5,
		  width: 250,
		  height: 250
		});  		
  	}
}); // END drawClock

$.jCanvas.extend({
	name: 'drawBox',
	type: 'box',
	props: {
		strokeWidth: 3,
	 	strokeStyle: '#000'
	},
	fn: function(ctx, params) {
		var p = params;
		$('canvas').drawRect({
			fillStyle: p.color,
			x: p.x, y: p.y,
			width: p.width,
			height: p.height
		});
		$('canvas').drawLine({
			strokeStyle: p.strokeStyle,
			strokeWidth: p.strokeWidth,
			x1: p.x, y1: p.y,
			x2: p.x+p.width, y2: p.y,
			x3: p.x+p.width, y3: p.y+p.height,
			x4: p.x, y4: p.y+p.height,
			closed: true
		});
	}
}); // END drawBox
