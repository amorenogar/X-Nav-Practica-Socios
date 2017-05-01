$( document ).ready(function() {
	var mensajes = "#Mensajes";
	var mis_mensajes= "#Mis-mensajes";

   	$( "#tabs" ).tabs();
   	$( "#newmsgs").click(function() {
   		$.getJSON("JSON/nuevos_mensajes.json").done(function( data ){
   			showmsgs(data.Mensajes,mensajes);
   		})
   		.fail(function() {
    		console.log( "error reading nuevos_mensajes.json" );
  		});
  		$( this ).empty();
	});

   	$.getJSON("JSON/mensajes.json").done(function( data ){
   		showmsgs(data.Mensajes,mensajes);
   	})
   	.fail(function() {
    	console.log( "error reading mensajes.json" );
  	});

  	$.getJSON("JSON/mis_mensajes.json").done(function( data ){
   		showmsgs(data.Mensajes,mis_mensajes);
   	})
   	.fail(function() {
    	console.log( "error reading mis_mensajes.json" );
  	});

  	function showmsgs(data,post){
  		$(jQuery.parseJSON(JSON.stringify(data))).each(function() {  
        	$(post).prepend("<p>" + this.mensaje + "</p>");
        	$(post).prepend('<h3> <img class="foto" src=' + this.foto + '> <span>' + this.usuario + '</span> </h3>');
		});
		$(post).accordion({collapsible:true,heightStyle: "content"});
		$(post).accordion("refresh");
  	};
});