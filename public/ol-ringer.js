var x = 90;
var pad = 12;
var rStart = 0;
var rEnd = 40;

var snap = Snap(x * 3 + pad * 2, x * 1.5 + pad * 2);

snap.node.id = "ol-ringer";
snap.node.onclick = function () {
  location.href = 'index.html';
};

var r1 = snap.circle(pad + x / 2,   pad + x / 2, rStart);
var r2 = snap.circle(pad + x * 1.5, pad + x / 2, rStart);
var r3 = snap.circle(pad + x * 2.5, pad + x / 2, rStart);
var r4 = snap.circle(pad + x,       pad + x, rStart);
var r5 = snap.circle(pad + x * 2,   pad + x, rStart);

var ringer = snap.group(r1, r2, r3, r4, r5);
ringer.attr({
  strokeWidth: pad,
  stroke: "white",
  fill: "transparent"
});

setTimeout(function() {
	r1.animate({r: rEnd}, 1000, mina.easeinout);
	r2.animate({r: rEnd}, 1000, mina.easeinout);
	r3.animate({r: rEnd}, 1000, mina.easeinout);
	r4.animate({r: rEnd}, 1000, mina.easeinout);
	r5.animate({r: rEnd}, 1000, mina.easeinout);
}, 750);