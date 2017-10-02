function calc() {
    var a = 0;
    a = .21 * $('input[name="gd"]').val() 
    + .21 * $('input[name="gh"]').val() 
    + .21 * $('input[name="gp"]').val() 
    + .21 * $('input[name="gr"]').val() 
    + .11 * $('input[name="re"]').val() 
    + .05 * $('input[name="gk"]').val(), 
      a = c(a), 
      $("#gk").addClass("p" + a).html(a),
      a = .04 * $('input[name="ac"]').val() 
    + .06 * $('input[name="sp"]').val() 
    + .1 * $('input[name="st"]').val() 
    + .08 * $('input[name="re"]').val() 
    + .12 * $('input[name="in"]').val() 
    + .08 * $('input[name="bl"]').val() 
    + .12 * $('input[name="cr"]').val() 
    + .04 * $('input[name="dr"]').val() 
    + .1 * $('input[name="sh"]').val() 
    + .07 * $('input[name="ma"]').val() 
    + .08 * $('input[name="sa"]').val() 
    + .11 * $('input[name="sl"]').val(), 
      a = c(a), 
      $("#rwb").addClass("p" + a).html(a), 
      a = .05 * $('input[name="ac"]').val() 
    + .07 * $('input[name="sp"]').val() 
    + .08 * $('input[name="st"]').val() 
    + .08 * $('input[name="re"]').val() 
    + .12 * $('input[name="in"]').val() 
    + .07 * $('input[name="bl"]').val() 
    + .09 * $('input[name="cr"]').val() 
    + .04 * $('input[name="he"]').val() 
    + .07 * $('input[name="sh"]').val() 
    + .08 * $('input[name="ma"]').val() 
    + .11 * $('input[name="sa"]').val() 
    + .14 * $('input[name="sl"]').val(), 
      a = c(a), 
      $("#rb").addClass("p" + a).html(a), 
      a = .02 * $('input[name="sp"]').val() 
    + .03 * $('input[name="ju"]').val() 
    + .1 * $('input[name="sr"]').val() 
    + .05 * $('input[name="re"]').val() 
    + .07 * $('input[name="ar"]').val() 
    + .13 * $('input[name="in"]').val() 
    + .04 * $('input[name="bl"]').val() 
    + .1 * $('input[name="he"]').val() 
    + .05 * $('input[name="sh"]').val() 
    + .14 * $('input[name="ma"]').val() 
    + .17 * $('input[name="sa"]').val() 
    + .1 * $('input[name="sl"]').val(), 
      a = c(a), 
      $("#rcb").addClass("p" + a).html(a), 
      a = .06 * $('input[name="st"]').val() 
    + .04 * $('input[name="sr"]').val() 
    + .07 * $('input[name="re"]').val() 
    + .05 * $('input[name="ar"]').val() 
    + .14 * $('input[name="in"]').val() 
    + .04 * $('input[name="vi"]').val() 
    + .1 * $('input[name="bl"]').val() 
    + .1 * $('input[name="lo"]').val() 
    + .14 * $('input[name="sh"]').val()
    + .09 * $('input[name="ma"]').val() 
    + .12 * $('input[name="sa"]').val() 
    + .05 * $('input[name="sl"]').val(), 
      a = c(a), 
      $("#rdm").addClass("p" + a).html(a), 
      a = .07 * $('input[name="ac"]').val() 
    + .06 * $('input[name="sp"]').val() 
    + .05 * $('input[name="st"]').val() 
    + .07 * $('input[name="re"]').val() 
    + .08 * $('input[name="po"]').val() 
    + .07 * $('input[name="vi"]').val() 
    + .13 * $('input[name="bl"]').val() 
    + .1 * $('input[name="cr"]').val() 
    + .15 * $('input[name="dr"]').val() 
    + .06 * $('input[name="fi"]').val() 
    + .05 * $('input[name="lo"]').val() 
    + .11 * $('input[name="sh"]').val(), 
      a = c(a), 
      $("#rm").addClass("p" + a).html(a), 
      a = .06 * $('input[name="st"]').val() 
    + .08 * $('input[name="re"]').val() 
    + .05 * $('input[name="in"]').val() 
    + .06 * $('input[name="po"]').val() 
    + .13 * $('input[name="vi"]').val() 
    + .14 * $('input[name="bl"]').val() 
    + .07 * $('input[name="dr"]').val() 
    + .02 * $('input[name="fi"]').val() 
    + .13 * $('input[name="lo"]').val() 
    + .17 * $('input[name="sh"]').val() 
    + .04 * $('input[name="ln"]').val() 
    + .05 * $('input[name="sa"]').val(), 
      a = c(a), 
      $("#rcm").addClass("p" + a).html(a), 
      a = .04 * $('input[name="ac"]').val() 
    + .03 * $('input[name="sp"]').val() 
    + .03 * $('input[name="ag"]').val() 
    + .07 * $('input[name="re"]').val() 
    + .09 * $('input[name="po"]').val() 
    + .14 * $('input[name="vi"]').val() 
    + .15 * $('input[name="bl"]').val() 
    + .13 * $('input[name="dr"]').val() 
    + .07 * $('input[name="fi"]').val() 
    + .04 * $('input[name="lo"]').val() 
    + .16 * $('input[name="sh"]').val() 
    + .05 * $('input[name="ln"]').val(), 
      a = c(a), 
      $("#ram").addClass("p" + a).html(a), 
      a = .05 * $('input[name="ac"]').val() 
    + .05 * $('input[name="sp"]').val() 
    + .09 * $('input[name="re"]').val() 
    + .13 * $('input[name="po"]').val() 
    + .08 * $('input[name="vi"]').val() 
    + .15 * $('input[name="bl"]').val() 
    + .14 * $('input[name="dr"]').val() 
    + .11 * $('input[name="fi"]').val() 
    + .02 * $('input[name="he"]').val() 
    + .09 * $('input[name="sh"]').val() 
    + .05 * $('input[name="so"]').val() 
    + .04 * $('input[name="ln"]').val(), 
      a = d(a), 
      $("#rf").addClass("p" + a).html(a), 
      a = .07 * $('input[name="ac"]').val() 
    + .06 * $('input[name="sp"]').val() 
    + .03 * $('input[name="ag"]').val() 
    + .07 * $('input[name="re"]').val() 
    + .09 * $('input[name="po"]').val() 
    + .06 * $('input[name="vi"]').val() 
    + .14 * $('input[name="bl"]').val() 
    + .09 * $('input[name="cr"]').val() 
    + .16 * $('input[name="dr"]').val() 
    + .1 * $('input[name="fi"]').val() 
    + .09 * $('input[name="sh"]').val() 
    + .04 * $('input[name="ln"]').val(), 
      a = d(a), 
      $("#rw").addClass("p" + a).html(a), 
      a = .04 * $('input[name="ac"]').val() 
    + .05 * $('input[name="sp"]').val() 
    + .05 * $('input[name="sr"]').val() 
    + .08 * $('input[name="re"]').val() 
    + .13 * $('input[name="po"]').val() 
    + .1 * $('input[name="bl"]').val() 
    + .07 * $('input[name="dr"]').val() 
    + .18 * $('input[name="fi"]').val() 
    + .1 * $('input[name="he"]').val() 
    + .05 * $('input[name="sh"]').val() 
    + .1 * $('input[name="so"]').val() 
    + .03 * $('input[name="ln"]').val() 
    + .02 * $('input[name="vo"]').val(), 
      a = c(a), 
      $("#rs").addClass("p" + a).html(a)
}
function b(a) {
    var a = Math.round(a) * 1;
    var d = $('input[name="pt"]').val();
    var c = $('select[name="ir"]').val() * 1;
    if ((c - 2) > 0) {
        a = a + c - 2;
    }
    a = d < a ? d : a;
    return Math.round(a)
}

function c(a) {
    var a = Math.round(a) * 1;
    var d = $('input[name="pt"]').val();
    var i = $('select[name="ir"]').val() * 1 - 1;
    i = i > 1 ? i : 1;
    i = d < (a + i) ? d - a : i;
    a = a + i;
    return Math.round(a)
}

function d(a) {
    var a = Math.round(a) * 1;
    var d = $('input[name="pt"]').val();
    var i = $('select[name="ir"]').val() * 1 - 2;
    i = i > 1 ? i : 1;
    i = d < (a + i) ? d - a : i;
    a = a + i;
    return Math.round(a)