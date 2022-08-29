// Generated by CoffeeScript 2.5.1
var TextScroller;

TextScroller = class TextScroller {
  constructor(dx, dy, dw, dh, ts, text) {
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.ts = ts;
    this.text = text;
    push();
    textSize(this.ts);
    this.sz = Math.round(textWidth(this.text));
    if (this.sz <= this.dw) { // scroll behövs ej
      this.doit(this.dw, this.text); // scrolla
    } else {
      this.sz = Math.round(textWidth(this.text + ' • '));
      this.doit(this.sz + this.dw + 100, this.text + ' • ' + this.text);
      this.p = 0;
    }
    pop();
  }

  doit(w, txt) {
    this.pg = createGraphics(w, this.dh);
    this.pg.background("green");
    this.pg.textSize(this.ts);
    this.pg.fill("black");
    this.pg.textAlign(LEFT, CENTER);
    return this.pg.text(txt, 0, this.dh / 2);
  }

  draw() {
    if (this.p === null) { // scroll behövs ej
      return image(this.pg, this.dx, this.dy); // scrolla
    } else {
      image(this.pg, this.dx, this.dy, this.dw, this.dh, this.p, 0, this.dw, this.dh);
      return this.p = (this.p + 1) % this.sz;
    }
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXFRleHRTY3JvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU0sZUFBTixNQUFBLGFBQUE7RUFDQyxXQUFjLEdBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxNQUFBLENBQUE7SUFBQyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFDbkMsSUFBQSxDQUFBO0lBQ0EsUUFBQSxDQUFTLElBQUMsQ0FBQSxFQUFWO0lBQ0EsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFJLENBQUMsS0FBTCxDQUFXLFNBQUEsQ0FBVSxJQUFDLENBQUEsSUFBWCxDQUFYO0lBQ04sSUFBRyxJQUFDLENBQUEsRUFBRCxJQUFPLElBQUMsQ0FBQSxFQUFYO01BQ0MsSUFBQyxDQUFBLElBQUQsQ0FBTSxJQUFDLENBQUEsRUFBUCxFQUFXLElBQUMsQ0FBQSxJQUFaLEVBREQ7S0FBQSxNQUFBO01BR0MsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFJLENBQUMsS0FBTCxDQUFXLFNBQUEsQ0FBVSxJQUFDLENBQUEsSUFBRCxHQUFRLEtBQWxCLENBQVg7TUFDTixJQUFDLENBQUEsSUFBRCxDQUFNLElBQUMsQ0FBQSxFQUFELEdBQUksSUFBQyxDQUFBLEVBQUwsR0FBUSxHQUFkLEVBQW1CLElBQUMsQ0FBQSxJQUFELEdBQVEsS0FBUixHQUFnQixJQUFDLENBQUEsSUFBcEM7TUFDQSxJQUFDLENBQUEsQ0FBRCxHQUFLLEVBTE47O0lBTUEsR0FBQSxDQUFBO0VBVmE7O0VBWWQsSUFBTyxDQUFDLENBQUQsRUFBRyxHQUFILENBQUE7SUFDTixJQUFDLENBQUEsRUFBRCxHQUFNLGNBQUEsQ0FBZSxDQUFmLEVBQWtCLElBQUMsQ0FBQSxFQUFuQjtJQUNOLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBSixDQUFlLE9BQWY7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFFBQUosQ0FBYSxJQUFDLENBQUEsRUFBZDtJQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFTLE9BQVQ7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFNBQUosQ0FBYyxJQUFkLEVBQW1CLE1BQW5CO1dBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsR0FBVCxFQUFhLENBQWIsRUFBZSxJQUFDLENBQUEsRUFBRCxHQUFJLENBQW5CO0VBTk07O0VBUVAsSUFBTyxDQUFBLENBQUE7SUFDTixJQUFHLElBQUMsQ0FBQSxDQUFELEtBQU0sSUFBVDthQUNDLEtBQUEsQ0FBTSxJQUFDLENBQUEsRUFBUCxFQUFVLElBQUMsQ0FBQSxFQUFYLEVBQWMsSUFBQyxDQUFBLEVBQWYsRUFERDtLQUFBLE1BQUE7TUFHQyxLQUFBLENBQU0sSUFBQyxDQUFBLEVBQVAsRUFBVSxJQUFDLENBQUEsRUFBWCxFQUFjLElBQUMsQ0FBQSxFQUFmLEVBQWtCLElBQUMsQ0FBQSxFQUFuQixFQUFzQixJQUFDLENBQUEsRUFBdkIsRUFBMEIsSUFBQyxDQUFBLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLElBQUMsQ0FBQSxFQUFoQyxFQUFtQyxJQUFDLENBQUEsRUFBcEM7YUFDQSxJQUFDLENBQUEsQ0FBRCxHQUFLLENBQUMsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFKLENBQUEsR0FBUyxJQUFDLENBQUEsR0FKaEI7O0VBRE07O0FBckJSIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGV4dFNjcm9sbGVyXHJcblx0Y29uc3RydWN0b3IgOiAoQGR4LEBkeSxAZHcsQGRoLEB0cyxAdGV4dCkgLT5cclxuXHRcdHB1c2goKVxyXG5cdFx0dGV4dFNpemUgQHRzXHJcblx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dFxyXG5cdFx0aWYgQHN6IDw9IEBkdyAjIHNjcm9sbCBiZWjDtnZzIGVqXHJcblx0XHRcdEBkb2l0IEBkdywgQHRleHRcclxuXHRcdGVsc2UgIyBzY3JvbGxhXHJcblx0XHRcdEBzeiA9IE1hdGgucm91bmQgdGV4dFdpZHRoIEB0ZXh0ICsgJyDigKIgJ1xyXG5cdFx0XHRAZG9pdCBAc3orQGR3KzEwMCwgQHRleHQgKyAnIOKAoiAnICsgQHRleHRcclxuXHRcdFx0QHAgPSAwIFxyXG5cdFx0cG9wKClcclxuXHJcblx0ZG9pdCA6ICh3LHR4dCkgLT5cclxuXHRcdEBwZyA9IGNyZWF0ZUdyYXBoaWNzIHcsIEBkaFxyXG5cdFx0QHBnLmJhY2tncm91bmQgXCJncmVlblwiXHJcblx0XHRAcGcudGV4dFNpemUgQHRzXHJcblx0XHRAcGcuZmlsbCBcImJsYWNrXCJcclxuXHRcdEBwZy50ZXh0QWxpZ24gTEVGVCxDRU5URVJcclxuXHRcdEBwZy50ZXh0IHR4dCwwLEBkaC8yXHJcblxyXG5cdGRyYXcgOiAoKSAtPlxyXG5cdFx0aWYgQHAgPT0gbnVsbCAjIHNjcm9sbCBiZWjDtnZzIGVqXHJcblx0XHRcdGltYWdlIEBwZyxAZHgsQGR5XHJcblx0XHRlbHNlICMgc2Nyb2xsYVxyXG5cdFx0XHRpbWFnZSBAcGcsQGR4LEBkeSxAZHcsQGRoLEBwLDAsQGR3LEBkaFxyXG5cdFx0XHRAcCA9IChAcCsxKSAlIEBzelxyXG4iXX0=
//# sourceURL=c:\github\2022-004-P5Bug\coffee\TextScroller.coffee