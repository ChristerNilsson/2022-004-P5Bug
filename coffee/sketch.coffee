scrollers = []

draw = ->
	for scroller in scrollers
		scroller.draw()

setup = ->
	createCanvas innerWidth,innerHeight
	scrollers.push new TextScroller 0,0,width/2,40,30,"Adam, Bertil"
	scrollers.push new TextScroller 0,50,width/2,40,30,"Adam, Bertil, Cesar"
	scrollers.push new TextScroller 0,100,width/2,40,30,"Adam, Bertil, Cesar, David"
	scrollers.push new TextScroller 0,150,width/2,40,30,"Adam, Bertil, Cesar, David, Erik"
	scrollers.push new TextScroller 0,200,width/2,40,30,"Adam, Bertil, Cesar, David, Erik, Filip"
	scrollers.push new TextScroller 0,250,width/2,40,30,"Adam, Bertil, Cesar, David, Erik, Filip, Gustav"
	scrollers.push new TextScroller 0,300,width/2,40,30,"Adam, Bertil, Cesar, David, Erik, Filip, Gustav, Helge"
