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
//        return this;
        var content = this.text();
        var self = this;
        var dataArray = content.split(" ");
        var test = "", i = 0, textLength = dataArray.length;
        customFunction = function () {
            //test += dataArray[i++] + " ";
            self.html("test " + i++);
            if (textLength > 0) {
                setTimeout(
                    customFunction()
//                self.innerHTML = "<span style='color: red'>"+test + dataArray[i] +"</span>" + dataArray.slice(i).join(" ");
                    , 3000);
            }
            textLength--;
        };
        //return this;
    };
})(jQuery);
