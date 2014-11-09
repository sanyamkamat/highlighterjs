/**
 * Created by Sam on 11/9/2014.
 */
;
String.prototype.highlighter = function () {
//    this.style.color = "red";
    return this.length;

};
(function ($) {
    $.fn.highlighter = function () {
        return this;
    };
})(jQuery);
