class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
		push()
		textSize @ts
		@sz = Math.round textWidth @text
		if @sz <= @dw # scroll behövs ej
			@doit @dw, @text
		else # scrolla
			@sz = Math.round textWidth @text + ' • '
			@doit @sz+@dw+100, @text + ' • ' + @text
			@p = 0 
		pop()

	doit : (w,txt) ->
		@pg = createGraphics w, @dh
		@pg.background "green"
		@pg.textSize @ts
		@pg.fill "black"
		@pg.textAlign LEFT,CENTER
		@pg.text txt,0,@dh/2

	draw : () ->
		if @p == null # scroll behövs ej
			image @pg,@dx,@dy
		else # scrolla
			image @pg,@dx,@dy,@dw,@dh,@p,0,@dw,@dh
			@p = (@p+1) % @sz
