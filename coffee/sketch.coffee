VER = 1
cv = null
obj = null

g = (title,bg) ->
	cv.background bg
	cv.textSize 40
	cv.text VER,100,50
	fill "white"
	rect 200,200,100,100
	cv.textAlign CENTER
	noFill()
	ellipse 200,400,30,30
	fill "black"
	cv.text title,250,250
	cv.text displayDensity(),250,350

f = (obj,title,bg) ->
	obj.background bg
	obj.textSize 40
	obj.text VER,100,50
	obj.fill "white"
	obj.rect 200,200,100,100
	obj.textAlign CENTER
	obj.noFill()
	obj.ellipse 200,400,30,30
	obj.fill "black"
	obj.text title,250,250
	obj.text displayDensity(),250,350

draw = ->
	g "canvas",'green'
	f obj,"image",'red'
	image obj,width/2,0

setup = ->
	#pixelDensity 1
	cv = createCanvas innerWidth,innerHeight
	obj = createGraphics width/2,height
