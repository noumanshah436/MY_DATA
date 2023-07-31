//  $( function(){} )    //     one way to run js code when our document is ready

$(document).ready(function () {
	// we should run our javascript when our document is ready
	console.log("I am in a new file now");

	//Your jquery code here
	console.log("We are using jQuery");
	console.log($);
	console.log(jQuery);
	// jQuery Syntax looks like this
	// $('selector').action()

	//clicks on all the p elements.
	// $('p').click();                                  // click on p ( either we click on p or run this code , both are same)

	// $('p').click(function () {
	//     console.log('you clicked on p', this);       // only get particular p that is clicked
	//     //  $(this).hide();
	//     //  $('#id').hide();
	//     //  $('.class').hide();
	// });                                             // do this when we click on p

	
	// $('p').dblclick(function () {
	//     console.log('you double clicked on p', this);
	//     //  $('#id').hide();
	//     //  $('.class').hide();
	// });

	// $('p').hover(function () {                      // hover( functionOnMouseEnter, functionOnMouseLeave )
	//     console.log('you hoverd on: ', this);
	//     //  $('#id').hide();
	//     //  $('.class').hide();
	// },
	// function (){
	//     console.log('Thanks for coming')
	// });

	//  ****************************************

	// there are three main types of selectors in jQuery
	// 1. element selector
	// 2. id selector
	// 3. class selector

	// 1. Element selector -  This is an example of element selector which clicks on all p
	// $('p').click();

	// 2. Id selector - this is an example of id selector
	// $('#second').click();

	// 3. Class selector - this is an example of id selector
	// $('.odd').click();

	// other selectors
	// $('*').click() // clicks on all the elements
	// $('p.odd').click() // clicks on all the elements
	// $('p:first').click() // clicks on all the elements

	//  ****************************************

	// Events in jQuery

	// Mouse events = click, dblclick, mouseenter, mouseleave
	// KeyboardEvent = keypress, keydown, MediaKeyStatusMap
	// form events = submit, change, focus, blur
	// document/window events = load, resize, scroll, unload

	// demoing the on method
	$("p").on("click", function () {
		console.log("Thanks for clicking", this);
	});

	//  on method for multiple event handlers
	$("p").on({
		click: function () {
			// when someone click on p run this function
			console.log("Thanks for clicking", this);
		},
		mouseleave: function () {
			// when someone laves from p run this function
			console.log("mouseleave");
		},
	});

	// ****************************************

	// $('#wiki').hide();
	//$('#wiki').show();

	// $('#wiki').hide(1000, function () {     // take 1 second to hide selected element and run this function when action is completed ( i.e after 1 second)
	//     console.log("hidden");
	// })
	// $('#wiki').show(1000, function () {
	//     console.log("show");
	// })

	$("#but").click(function () {
		// $("#wiki").toggle(5000); //  toggle between hide and show
		$("#wiki").fadeOut(5000);
	});

	// toggle( ); //  toggle between hide and show
	// fadeOut(): hide the content in given time with fading(decrement in opacity),
	// fadeIn(): unhide the content in given time with fading(increment in opacity),
	// fadetoggle(): switch between hide / unhide in given time with fading(increment / decrement in opacity),
	// fadeTo(): change in opacity - value of the content with given specific value opacity in given time(syntax => $('p').fadeTo(1000(time), 0.5(opacity), function).

	// ****************************************

	// Slide methods - speed and callback parameters are optional
	// $('#wiki').slideUp(1000, function(){
	//     console.log('done');
	// })
	// $('#wiki').slideDown(1000)
	// $('#wiki').slideToggle(1000)  //  toggle between  slideUp and slideDown

	// ****************************************

	// Animate function in jQuery
	// $('#wiki').animate( { attributes to change } , timeDuration);    ----  syntax

	//  apply all these properties in fast mode:

	// $('#wiki').animate({
	//     opacity:0.3,
	//     height: '150px',
	//     width:'350px'

	// }, "fast")

	// *****************

	//  these animations will be applied in queue ( one after another ):

	// $('#wiki').animate({ opacity: 0.3 }, 4000);  //  change opacity to 0.3 in 4 seconds
	// $('#wiki').animate({ opacity: 0.9 }, 1000);  // then increase opacity to 0.9 in 1 second
	// $('#wiki').animate({ width: '350px' }, 12000);

	//$('#wiki').stop()  // Stop the currently-running animation on the matched elements ( try in inspect i.e dom )

	// ****************************************

	//  JQuery with html ( dom manipulation ) --------------------------https://www.w3schools.com/jquERy/jquery_dom_add.asp

	// html() -> when we want to get or change html of any tag
	// text() -> when we want to get or change text of any tag
	// val() -> when we wnat to get or change form fields value
	// remove() - Removes/delete the selected element(and its child elements)
	// empty() - Removes the child elements from the selected element

	// https://www.w3schools.com/jquERy/jquery_dom_add.asp

	// append() method inserts content AT THE END of the selected HTML elements ( within that element).
	// prepend() method inserts content AT THE BEGINNING of the selected HTML elements.
	// after() - Inserts content after the selected elements  ( outside that element)
	// before() - Inserts content before the selected elements

	// text() vs html() = https://www.w3schools.com/jquERy/tryit.asp?filename=tryjquery_dom_html_get

	//  **************

	// $('#ta').val('setting it to harry');
	// $('#ta').html('setting it to harry');
	// $('#ta').html('setting it to harry3');
	// $('#inp').html('setting it to harry3');
	// $('#inp').val('setting it to harry3');
	// $('#inp').empty()                          // will not work
	// $('#wiki').empty()
	// $('#wiki').text('you are good')
	// $('#wiki').remove()

	// $('#wiki').addClass('myclass')
	// $('#wiki').addClass('myclass2')
	// $("h1, h2, p").addClass("blue");
	// $('#wiki').removeClass('myclass2')
	// $("h1, h2, p").toggleClass("blue");            // if blue class is added remove it or if it is not added then add it

	// $('p.odd').append('<b>Appended text</b>.');
	// $("ol").append("<li>Appended item</li>");

	// $('p.odd').prepend('<b>Appended text</b>.');
	// $("ol").prepend("<li>Prepended item</li>");

	// $("ol").before("<div>Before</div>");
	// $("ol").after("<div>After</div>");

	//  practice append                                                 https://www.w3schools.com/jquERy/tryit.asp?filename=tryjquery_html_append2
	// var txt1 = "<p>Text.</p>";        // Create text with HTML
	// var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
	// var txt3 = document.createElement("p");
	// txt3.innerHTML = "Text.";         // Create text with DOM
	// $("body").append(txt1, txt2, txt3);   // Append new elements

	// $('#wiki').css('background-color', 'red')                                  // set the css property for ALL matched elements
	// $("#wiki").css({ "background-color": "yellow", "font-size": "200%" });    // set multiple css property for ALL matched elements
	// $('#wiki').css('background-color')                                        //  return the property value of the FIRST matched element

	// ****************************************

	// ajax: Art of exchanging data with a server without reloading the page.

	// AJAX Using jQuery
	// $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

	// $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })

	// $.post('https://code.jquery.com/jquery-3.3.1.js',
	//     { name: 'harry', channel: 'code with harry' },        //  data
	//     function (data, status) { alert(status) });
});
