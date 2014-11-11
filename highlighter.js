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
        var dataArray = content.split(" ");
        test = "";
        for(var i=0;i<dataArray.length;i++){
            setTimeout(function(){
                this.html = "<span style='color: red'>"+test + dataArray[i] +"</span>" + dataArray.slice(i).join(" ");
            },200);
            test+=dataArray[i];
        }
        return this;
//        element.name = element.name.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + that.params.searchString + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<span>$1</span>");
    };
})(jQuery);
