//strike off todos which we have done by clicking on them

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//now we remove a li if we click on the letter X for now

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
event.stopPropagation();
});



$("input[type='text']").keypress(function(event){
	if(event.which===13){
		//grabbing new todo from input
		var todoText=$(this).val();
		$(this).val("");
		//add a new li and it to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
	}
});


$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});