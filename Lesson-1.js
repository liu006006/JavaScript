/**
 * Created by liu on 2015/9/9.
 */
var Init = {
    "save":function(entity){alert(document.getElementById("clock"))},
    "delete":function(){alert("delete");},
    "search":function(searchentity){alert("search");}
};
var han = Init.save({"id":"1","name":"jack"});
Window.onload = han;