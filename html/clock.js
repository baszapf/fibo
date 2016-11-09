// Implementation of https://github.com/pchretien/fibo in Javascript/jQuery 
function getRandomInt(max) {
	// Source: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random
	var min = 0;
	max = max-1;
	min = Math.ceil(min);
	max = Math.floor(max);
	var returnVal = Math.floor(Math.random() * (max - min +1)) + min;
	// console.log(returnVal);
	return returnVal;
}

$(function(){

$.jCanvas.extend({
	name: 'displayTime',
	props: {
	 	F1a: 0,
		F1b: 0,
		F2: 0, 
		F3: 0,
		F5: 0,
		hours: 0,
		minutes: 0
	},
	fn: function(ctx, params) {
		var p = params;
		// console.log("Time: " + p.hours + ":" + p.minutes);
		switch(p.hours) {
   			case 1:
        		switch(getRandomInt(2)) {
        			case 0:
        				p.F1a+=1;
        				break;
        			case 1:
        				p.F1b+=1;
        				break;
        		}
        		break;
        	case 2:
        		switch(getRandomInt(2)) {
        			case 0:
        				p.F1a+=1;
        				p.F1b+=1;
        				break;
        			case 1:
        				p.F2+=1;
        				break;
        		}
        		break;
        	case 3:
	        	switch(getRandomInt(3)) {
        			case 0:
        				p.F1a+=1;
        				p.F2+=1;
        				break;
        			case 1:
        				p.F1b+=1;
        				p.F2+=1;
        				break;
        			case 2:
        				p.F3+=1;
        				break;
        		}
        		break;
        	case 4:
      			switch(getRandomInt(3)) {
        			case 0:
          				p.F1a+=1;
          				p.F3+=1;
          				break;
        			case 1:
				        p.F1b+=1;
				        p.F3+=1;
				        break;
			        case 2:
			        	p.F1a+=1;
			        	p.F1b+=1;
			        	p.F2+=1;
			        	break;
			    }
      			break;
		    case 5:
		      	switch(getRandomInt(3)) {
		        	case 0:
		        		p.F5+=1;
		        		break;
		        	case 1:
		        		p.F2+=1;
		        		p.F3+=1;
		        		break;
		        	case 2:
		        		p.F1a+=1;
		        		p.F1b+=1;
		        		p.F3+=1;
		        		break;
				}
		    	break;
		    case 6:
		    	switch(getRandomInt(4)) {
		        	case 0:
		        		p.F1a+=1;
		        		p.F5+=1;
		        		break;
		        	case 1:
		        		p.F1b+=1;
		        		p.F5+=1;
		        		break;
		        	case 2:
		        		p.F1a+=1;
		        		p.F2+=1;
		        		p.F3+=1;
		        		break;
		        	case 3:
		        		p.F1b+=1;
		        		p.F2+=1;
		        		p.F3+=1;
		        		break;
		    	}
		    	break;
		    case 7:
		    	switch(getRandomInt(3)) {
		      		case 0:
		    			p.F2+=1;
		    			p.F5+=1;
		    			break;
		    		case 1:
		    			p.F1a+=1;
		    			p.F1b+=1;
		    			p.F5+=1;
		    			break;
		    		case 2:
		    			p.F1a+=1;
		    			p.F1b+=1;
		    			p.F2+=1;
		    			p.F3+=1;
		    			break;
		    	}
		    	break;
		    case 8:
		    	switch(getRandomInt(3)) {
		    		case 0:
		    			p.F3+=1;
		    			p.F5+=1;
		    			break;
		    		case 1:
		    			p.F1a+=1;
		    			p.F2+=1;
		    			p.F5+=1;
		    			break;
		    		case 2:
		    			p.F1b+=1;
		    			p.F2+=1;
		    			p.F5+=1;
		    			break;
		    	}      
		    	break;
		    case 9:
		    	switch(getRandomInt(2)) {
		    		case 0:
		    			p.F1a+=1;
		    			p.F3+=1;
		    			p.F5+=1;
		    			break;
		    		case 1:
		    			p.F1b+=1;
		    			p.F3+=1;
		    			p.F5+=1;
		    			break;
		    	}      
		    	break;
		    case 10:
		    	switch(getRandomInt(2)) {
		        	case 0:
		        		p.F2+=1;
		        		p.F3+=1;
		        		p.F5+=1;
		        		break;
		        	case 1:
		        		p.F1a+=1;
		        		p.F1b+=1;
		        		p.F3+=1;
		        		p.F5+=1;
		        		break;
		    	}            
		    	break;
		    case 11:
		    	switch(getRandomInt(2)) {
		    		case 0:
		    			p.F1a+=1;
		    			p.F2+=1;
		    			p.F3+=1;
		    			p.F5+=1;     
		    			break;
		    		case 1:
		    			p.F1b+=1;
		    			p.F2+=1;
		    			p.F3+=1;
		    			p.F5+=1;
		    			break;
		    	}          
		    	break;
		    case 12:
		    	p.F1a+=1;
		    	p.F1b+=1;
		    	p.F2+=1;
		    	p.F3+=1;
		    	p.F5+=1;
		    	break;		
        } // END switch hours
        switch(p.minutes) {
        	case 1:
        		switch(getRandomInt(2)) {
        			case 0:
        				p.F1a+=2;
        				break;
        			case 1:
        				p.F1b+=2;
        				break;
        		}
        		break;
        	case 2:
        		switch(getRandomInt(2)) {
        			case 0:
        				p.F1a+=2;
        				p.F1b+=2;
        				break;
        			case 1:
        				p.F2+=2;
        				break;
        		}
        		break;
        	case 3:
	        	switch(getRandomInt(3)) {
        			case 0:
        				p.F1a+=2;
        				p.F2+=2;
        				break;
        			case 1:
        				p.F1b+=2;
        				p.F2+=2;
        				break;
        			case 2:
        				p.F3+=2;
        				break;
        		}
        		break; 
        	case 4:
      			switch(getRandomInt(3)) {
        			case 0:
          				p.F1a+=2;
          				p.F3+=2;
          				break;
        			case 1:
				        p.F1b+=2;
				        p.F3+=2;
				        break;
			        case 2:
			        	p.F1a+=2;
			        	p.F1b+=2;
			        	p.F2+=2;
			        	break;
			    }
      			break;
		    case 5:
		      	switch(getRandomInt(3)) {
		        	case 0:
		        		p.F5+=2;
		        		break;
		        	case 1:
		        		p.F2+=2;
		        		p.F3+=2;
		        		break;
		        	case 2:
		        		p.F1a+=2;
		        		p.F1b+=2;
		        		p.F3+=2;
		        		break;
				}
		    	break;
		    case 6:
		    	switch(getRandomInt(4)) {
		        	case 0:
		        		p.F1a+=2;
		        		p.F5+=2;
		        		break;
		        	case 1:
		        		p.F1b+=2;
		        		p.F5+=2;
		        		break;
		        	case 2:
		        		p.F1a+=2;
		        		p.F2+=2;
		        		p.F3+=2;
		        		break;
		        	case 3:
		        		p.F1b+=2;
		        		p.F2+=2;
		        		p.F3+=2;
		        		break;
		    	}
		    	break;
		    case 7:
		    	switch(getRandomInt(3)) {
		      		case 0:
		    			p.F2+=2;
		    			p.F5+=2;
		    			break;
		    		case 1:
		    			p.F1a+=2;
		    			p.F1b+=2;
		    			p.F5+=2;
		    			break;
		    		case 2:
		    			p.F1a+=2;
		    			p.F1b+=2;
		    			p.F2+=2;
		    			p.F3+=2;
		    			break;
		    	}
		    	break;
		    case 8:
		    	switch(getRandomInt(3)) {
		    		case 0:
		    			p.F3+=2;
		    			p.F5+=2;
		    			break;
		    		case 1:
		    			p.F1a+=2;
		    			p.F2+=2;
		    			p.F5+=2;
		    			break;
		    		case 2:
		    			p.F1b+=2;
		    			p.F2+=2;
		    			p.F5+=2;
		    			break;
		    	}      
		    	break;
		    case 9:
		    	switch(getRandomInt(2)) {
		    		case 0:
		    			p.F1a+=2;
		    			p.F3+=2;
		    			p.F5+=2;
		    			break;
		    		case 1:
		    			p.F1b+=2;
		    			p.F3+=2;
		    			p.F5+=2;
		    			break;
		    	}      
		    	break;
		    case 10:
		    	switch(getRandomInt(2)) {
		        	case 0:
		        		p.F2+=2;
		        		p.F3+=2;
		        		p.F5+=2;
		        		break;
		        	case 1:
		        		p.F1a+=2;
		        		p.F1b+=2;
		        		p.F3+=2;
		        		p.F5+=2;
		        		break;
		    	}            
		    	break;
		    case 11:
		    	switch(getRandomInt(2)) {
		    		case 0:
		    			p.F1a+=2;
		    			p.F2+=2;
		    			p.F3+=2;
		    			p.F5+=2;     
		    			break;
		    		case 1:
		    			p.F1b+=2;
		    			p.F2+=2;
		    			p.F3+=2;
		    			p.F5+=2;
		    			break;
		    	}          
		    	break;
		    case 12:
		    	p.F1a+=2;
		    	p.F1b+=2;
		    	p.F2+=2;
		    	p.F3+=2;
		    	p.F5+=2;
		    	break;
        } // END switch minutes  
		$('canvas').drawClock({ // 0=off, 1=hours, 2=minutes, 3=both
			F1a: p.F1a,
			F1b: p.F1b,
			F2: p.F2, 
			F3: p.F3,
			F5: p.F5
		});

	}
});

var d = new Date();
var timeDisplay = $('canvas').displayTime({
	hours: d.getHours()%12, // 12-hour-format,
	minutes: Math.floor(d.getMinutes()/5)
});

// Scale it to the max http://cssdeck.com/labs/emcxdwuz
var height = window.innerHeight;	
var ratio = $('canvas').innerWidth()/$('canvas').innerHeight();
var width = height * ratio;
$('canvas').innerWidth(width-30);
$('canvas').innerHeight(height-30);
console.log("done");


timeDisplay.autoRefresh = function () {
		setInterval(function() {
			// var d = new Date();
		  	$('canvas').displayTime({
		  		hours: d.getHours()%12, // 12-hour-format,
		  		minutes: Math.floor(d.getMinutes()/5)
		  	});
		}, 60000);
	}; // END autoRefresh()
timeDisplay.autoRefresh();

$('canvas').click(function(e){
	console.log("TODO: Change the color setup on click.");
});

}); // END Document Ready