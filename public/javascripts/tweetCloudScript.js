// script.js
$(document).ready(function() {

	// Array that will hold the tags used to generate the cloud
	var twitterCloudTags = [];

	var domModule = (function() {
		
		// Private f(x)'s

		var getVal = function(selector) {

			return $(selector).val();
		};

		var clearField = function(selectors) {
					
			selectors.forEach(function(fieldID) {
				
				$(fieldID).val("");
			});
		};

		var revealOptionsCollapse = function() {
				
				$('.collapse:not(#panel_collapse_search_options)').collapse('hide');
				$('#panel_collapse_search_options').collapse('show');
		};

		var hideAllButOne = function(theClass, theID) {
				
			$(theClass).not(theID).fadeOut();
		};

		var makeEnterKeyDoSomething = function(selector, func) {
			
			$(selector).keydown(function(e) {
				
				if (e.keyCode === 13) {

					func();
				}
			});
		};

		// Public Methods

		// Check to make sure jQuery loaded properly
		var jqueryCheckLoad = function(selector, milliseconds) {

			$(selector).fadeOut(milliseconds).fadeIn(milliseconds);
		};

		var activateTooltip = function(selector) {
			
			$(selector).tooltip(); 
		};

		// Activates button and input field so that their respective events 
		// trigger the given f(x)
		var activateSearchField = function(buttonID, inputID, func) {
			
			$(buttonID).on('click', function() {
				func();
			});

			makeEnterKeyDoSomething(inputID, function() {
				func();
			});
		};

		var scrollDownTo = function(selector, milliseconds) {
			
			$('html, body').animate({

				scrollTop: $(selector).offset().top
			}, milliseconds);
		};

		var scrollUpToTop = function(milliseconds) {
			
			$('html, body').animate({scrollTop: 0}, milliseconds);
		};

		var eraseAllFieldsButOne = function(theClass, theID) {
			
			$(theClass).not(theID).val('');
		};

		var eraseAllFields = function(theClass) {
			
			$(theClass).val('');
		};

		var deactivateToggleForAccordion = function(selector) {
			
			$(selector).collapse({toggle: false});
		};

		var customToggleForAccordion = function(selector) {
			
			$(selector).on('click', function() {
				
				$('div').removeClass('do_not_close');

				$(this).closest('.panel-heading').next().addClass('do_not_close');

				$('.collapse:not(.do_not_close)').collapse('hide');

			});
		};

		var openAccordionSegment = function(segmentID) {
			
			$(segmentID).collapse('show');
		};

		var displayOptions = function(optionsID) {
			
			revealOptionsCollapse();
			hideAllButOne('.options', optionsID);
			$(optionsID).fadeIn(3000);
		};

		var attachLinks = function(selectorsAndURLs) {
			
			selectorsAndURLs.forEach(function(obj) {
				
				$(obj.selector).on('click', function() {
					
					window.open(obj.url);
				});
			});
		};

		// Email modal: After submission
		var activatePopover = function(popoverID) {

			$(popoverID).popover({content: 'Thanks for reaching out!'}, 'click');
		};

		var emailModalAJAX = function() {
			
			$('#send_email_btn').on('click', function(event) {

				var firstName = getVal('#first_name');
				var lastName = getVal('#last_name');
				var email = getVal('#email');
				var comments = getVal('#comments');
				var url = './src/sendEmail.js';

				var request = $.ajax({

					type: "POST",
					url: url,
					data: {
						first_name: firstName,
						last_name: lastName,
						email: email,
						comments: comments
					}
				});

				request.done(function() {
					
					$('#emailModal').modal('hide');
					clearField(['#first_name', '#last_name', '#email', '#comments']);
					$('#send_email_btn').popover('hide');
				});

				request.fail(function() {
					
					alert('Sorry, AJAX was unable to process that request!');
				});

				event.preventDefault();
			});
		};

		return {

			jqueryCheckLoad: jqueryCheckLoad,
			
			activateTooltip: activateTooltip,
			activateSearchField: activateSearchField,
			
			scrollDownTo: scrollDownTo, 
			scrollUpToTop: scrollUpToTop,
			
			eraseAllFieldsButOne: eraseAllFieldsButOne,
			eraseAllFields: eraseAllFields, 
			
			deactivateToggleForAccordion: deactivateToggleForAccordion, 
			customToggleForAccordion: customToggleForAccordion, 
			openAccordionSegment: openAccordionSegment, 
			displayOptions: displayOptions, 
			
			attachLinks: attachLinks, 
			activatePopover: activatePopover, 
			emailModalAJAX: emailModalAJAX
		
		};
	
	})();

	var tagModule = (function() {
	
		// Takes military time and formats it into clock time
		var formatAMPM = function(date) {
			
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var AMorPM = hours >= 12 ? 'pm' : 'am';

			hours = hours % 12;
			hours = hours ? hours : 12;

			minutes = minutes < 10 ? '0' + minutes : minutes;

			var strTime = hours + ':' + minutes + ' ' + AMorPM;

			return strTime;
		};

		// Takes 'created_at' values from tweet objects and turns them 
		// into a date format that the tags can use
		// If 'withTime' is true, it adds the time to the result as well
		var createDate = function(theGivenDate, withTime) {
			
			var tempDate, date;
			var ms = Date.parse(theGivenDate);

			tempDate = new Date(ms);
			date = tempDate.toString().slice(0, 10);

			if (withTime) {

				var time = formatAMPM(tempDate);
				date += " " + time;
			}

			return date;
		};

		// Generates an ID for the new object based upon the number of tags already 
		// in the tag array.  
		var createID = function(arr) {
			
			var tagLength = arr.length;

			var id = tagLength.toString();
			return id; 	
		};

		// For input, instantiations of the Clouder class accept an array 
		// of "little objects" of the form: {text: theText, id: theID, weight: theWeight}.
		// This f(x) creates a single "little object" for the cloud
		var createObjectForCloud = function(theText, theURL, cloudTags, imageInTweet) {
			
			var theID = createID(cloudTags);

			return {text: theText, id: theID, weight: 0.1, url: theURL, isImage: imageInTweet};
		};

		// Adds tweet tag objects to the array of tweet tags
		// Formatting of the text depends upon which search URL is invoked
		var addTweetTags = function(arrayOfTweetObjects, variableToSaveTo, whichResults) {
			
			var tweetText, tweetDate, url, displayText;

			for (var i = 0; i < arrayOfTweetObjects.length; i++) {
				
				var tweet = arrayOfTweetObjects[i];

				tweetText = tweet.text;
				url = tweet.url;
				imageInTweet = tweet.isImage;

				if (whichResults === "api/twitterTimelineSearch") {

					tweetDate = createDate(tweet.date, false);

					displayText = tweetText + " \n" + tweetDate;
				}

				if (whichResults === "api/twitterKeywordSearch") {

					var userName = "- @" + tweet.screen_name;
					tweetDate = createDate(tweet.date, true);

					displayText = "\n" + tweetText + "\n" + userName + "\n" + tweetDate;
				}

				var newTweetTagObject = createObjectForCloud(displayText, url, variableToSaveTo, imageInTweet);

				variableToSaveTo.push(newTweetTagObject);
			}
		};

		var clearTweetTags = function() {
			
			twitterCloudTags = [];
		};		

		return {

			addTweetTags: addTweetTags,
			clearTweetTags: clearTweetTags
		
		};
	
	})();

	var cloudModule = (function() {
		
		// Displays dialog box that shows tweet text and asks the user if they would 
		// like to navigate to the link contained within the tweet 
		var urlConfirmAssignment = function(theText, theURL) {
			
			var question = confirm(theText + 
				"\n\n Are you sure you want to navigate to the link contained in the highlighted tweet?");

			if (question) {
				window.open(theURL);

			} else return;
		};

		var displayImageModal = function(imageModalID, options) {

			$(imageModalID).modal(options);
		};

		var setImageSource = function(imgID, url) {
			
			$(imgID).attr('src', url);
		};

		var setImageModalTitle = function(titlePlacementID, theText) {
			
			$(titlePlacementID).text(theText);
		};

		var clearImageModal = function(labelID, imageID) {
			
			$(labelID).text("");

			$(imageID).attr('src', "#");
		};

		var setCloudAutoRefreshInterval = function(theSearchURL) {
						
			function cloudAutoRefreshClosure(array) {

				return function refreshCloud() {

					cloudModule.init(array);
				};
			}

			function activateCloudAutoRefresh(url) {

				var refreshSearchCloud = cloudAutoRefreshClosure(setOfTenTweets.returnTenTweets());

				return refreshSearchCloud();
			}	

			var searchCloudInterval = setInterval(function() {
				
				activateCloudAutoRefresh(theSearchURL);
				setOfTenTweets.getCurrentTweets();
				progressButtonHandler.init('#progress_button');

			}, 20000);

			var progressButtonInterval = setInterval(function() {
				
				progressButtonHandler.fireAction();
			}, 1000);

			function clearCloudIntervals() {

				clearInterval(searchCloudInterval);
				clearInterval(progressButtonInterval);				
			}

			$('.clearAll').on('click', function() {

				clearCloudIntervals();
				progressButtonHandler.clear();

				if ($('#progress_button, #stopCloudAutoRefresh').hasClass('disabled')) {

					$('#progress_button, #stopCloudAutoRefresh').removeClass('disabled');
				}
			});

			$('#stopCloudAutoRefresh').on('click', function() {

				clearCloudIntervals();	
				$('#progress_button, #stopCloudAutoRefresh').addClass('disabled');			
			});

		};

		// Callback f(x) for when tweet tags are clicked upon
		// Checks to see whether tags exist, and if so, loops through the tag array 
		// until it finds the "little object" with the matching id, and then invokes 
		// 'urlConfirmAssignment', passing it the tweet text and url
		var urlCallback = function(id) {
			
			if (twitterCloudTags.length !== 0) {
				for (var i = 0; i < twitterCloudTags.length; i++) {
					
					var theTweet = twitterCloudTags[i];

					if (theTweet.id === id) {
						if (theTweet.url && theTweet.isImage) {
							
							setImageModalTitle('#imageModalLabel', theTweet.text);

							setImageSource('#tweet_image', theTweet.url);

							displayImageModal('#imageModal', {
								keyboard: true
							});
						
						} else if (theTweet.url && !theTweet.isImage) {

							urlConfirmAssignment(theTweet.text, theTweet.url);
						
						} else {
							alert(theTweet.text);
						}
					}
				}
			}
		};

		return {

			activateModalCloseButtons: 	function(modalCloseButtonClass) {
				
				$(modalCloseButtonClass).on('click', function() {
					
					clearImageModal('#imageModalLabel', '#tweet_image');
				});
			},

			killCloud: function() {

				window.clouder.kill();
			},

			// Check to see if tags are already displayed from a previous search.
			// If so, kill that cloud.
			checkIfCloudExists: function() {
				
				if ($('#clouder').children().length > 0) {

					this.killCloud();
				}
			},

			asPixels: function(number) {
				
				return number.toString().concat("px");
			},

			// Initialize tag cloud
			init: function(variableContainingTags) {
				
				this.checkIfCloudExists();

				var w = document.body.clientWidth, h = document.body.clientHeight;
				var clouder = document.getElementById('clouder');
				var parent = document.getElementById('cloudParent');
				var parentRect = parent.getBoundingClientRect();

				clouder.style.width = this.asPixels(w * 3 / 4);
				clouder.style.height = this.asPixels(h * 0.8);
				clouder.style.position = "relative";
				clouder.style.left = this.asPixels(w / 6);
				clouder.style.top = "0px";

				window.clouder = new Clouder({
					container: clouder,
					tags: variableContainingTags,
					nonSense: 0.3,
					interval: 10,
					yScale: 0.9,
					callback: urlCallback.bind(cloudModule)
				});
			},

			getTenMoreTweets: function() {
				
				this.init.call(cloudModule, setOfTenTweets.returnTenTweets.call(setOfTenTweets));
			},

			activateTenMoreTweetsButton: function() {
				$('#getTenPreviousTweets').click(this.getTenMoreTweets.bind(cloudModule));
			},

			setCloudAutoRefreshInterval: setCloudAutoRefreshInterval
		};
	
	})();

	var searchModule = (function() {
	
		return {

			getTwitterSearchTerm: function(searchFieldID) {
				
				return $(searchFieldID).val();
			},

			// AJAX request to Twitter for tweet data
			search: function(searchTerms, searchURL) {

				// If cloud tags already exist, kill cloud before
				// running the AJAX request
				cloudModule.checkIfCloudExists();

				$.ajax({

					// Create URL for tweet searching
					url: searchURL + "/" + searchTerms,

					success: function(data) {
						// DEVELOPMENT ONLY 
						// console.log("Data from search: ", data);

						// Take the returned string and parse into queryable JSON
						// The server will have already cut the data down to 
						// only what is needed for the cloud
						var parsedData = JSON.parse(data);

						tagModule.addTweetTags(parsedData, twitterCloudTags, searchURL);
						setOfTenTweets.init(twitterCloudTags);

						cloudModule.init(setOfTenTweets.returnTenTweets());

						setOfTenTweets.getCurrentTweets();

						if (searchURL === 'api/twitterKeywordSearch') {

							cloudModule.setCloudAutoRefreshInterval(searchURL);
							progressButtonHandler.init('#progress_button');
							progressButtonHandler.fireAction();
						}
						
						domModule.scrollDownTo('#clouder', 500);
					},

					error: function() {
						
						$('#clouder').html('Search for Tweets failed!');
					}
				});
			},

			// Abstraction of general search process
			executeSearch: function(searchTermField, url, optionsDiv) {
				
				var twitterSearchTerm;
				var input = $.trim($(searchTermField).val());

				// Execute the search only if there is something in the input field
				if (input.length > 0) {

					tagModule.clearTweetTags();
					twitterSearchTerm = this.getTwitterSearchTerm(searchTermField);
					domModule.eraseAllFieldsButOne('.inputField', searchTermField);
					domModule.displayOptions(optionsDiv);
					this.search(twitterSearchTerm, url);
				}
			},

			executeTwitterAccountSearch: function() {
				
				this.executeSearch.call(searchModule, '#feed_cloud_input', 'api/twitterTimelineSearch', '#feedCloudOptions');
			},

			executeTwitterTermSearch: function() {
				
				this.executeSearch.call(searchModule, '#search_cloud_input', 'api/twitterKeywordSearch', '#searchCloudOptions');
			}

		};
	
	})();

	// When 'Clear Tags' button clicked, kill the cloud, reset the tag array, 
	// then autoscroll back up to the top
	function activateClearTagsButton() {

		$('.clearAll').click(function() {
			
			$('.options').fadeOut(1000);
			domModule.eraseAllFields('.inputField');

			cloudModule.killCloud();
			tagModule.clearTweetTags();

			domModule.scrollUpToTop(500);
		});
	}

	// Module that is initialized with the array of "little tweet objects".
	// The module takes that array and breaks the objects up into arrays
	// of length 10, and pushes them to an array which holds them all.
	// The module then returns 10 tweet objects at a time, and when it has 
	// returned all of them, the counter resets to 0.
	var setOfTenTweets = (function() {

		var counter;
		var arrayOfSetsOfTen;
		var currentTweets;

		function incrementCounter() {
			return counter++;
		}

		function resetCounter() {
			counter = 0;
		}

		// Takes an array of elements, and breaks it up into sets of a 
		// given size, and then groups all these sets into a new array
		function createArrayOfArrays(source, setSize) {
			var i, j;
			var arrayOfArrays = [];

			for (i = 0, j = source.length; i < j; i += setSize) {
				
				tempArray = source.slice(i, i + setSize);
				arrayOfArrays.push(tempArray);
			}

			return arrayOfArrays;
		}

		// Initializes the module with the array of tweet objects
		function init(arrayOfTweetObjects) {

			arrayOfSetsOfTen = createArrayOfArrays(arrayOfTweetObjects, 10);
	    	counter = 0;
		}

		function getCurrentTweets() {

			if (!currentTweets) {

				console.log("There are no current tweets!");
			} else {

				console.log(currentTweets);
			}

			return currentTweets;
		}

		// Returns 10 of the tweet objects at a time
		// If the counter has reached the length of the array of arrays, 
		// the counter resets to 0 and indicates this in the console
		function returnTenTweets() {

			var setOfTen;

			setOfTen = arrayOfSetsOfTen[counter];
			incrementCounter();
	  
		    if (counter >= arrayOfSetsOfTen.length) {
		      
		      resetCounter();
		    }

		    currentTweets = setOfTen;
	    
			return setOfTen;
		}

		return {

			init: init,
			returnTenTweets: returnTenTweets,
			resetCounter: resetCounter,
			getCurrentTweets: getCurrentTweets
		};

	})();

	// Constructor used to get information about the currently displayed tweets
	var CurrentTweets = function(prop) {
	
		var theTweets = setOfTenTweets.getCurrentTweets();
		var result = [];
		var argLength = arguments.length;

		if (argLength === 0) {
			return theTweets;
		
		} else if (argLength === 1) {
			theTweets.forEach(function(tweet) {
				
				result.push(tweet[prop]);
			});
		
		} else {
			console.log("Too many arguments passed to CurrentTweets!");
		}

		return result; 
	};

	// Constructor used to create a counter
	function Counter(highestValueForCounter) {

		var counterModule = (function() {
		
			var counter = 0;

			function incrementCounter() {

				if (counter < highestValueForCounter) {
					counter++;

				} else {
					counter = 0;
				}
			}

			function getCounter() {

				return counter;
			}

			function clearCounter() {
				
				counter = 0;

				return;
			}

			return {
				incrementCounter: incrementCounter,
				getCounter: getCounter,
				clearCounter: clearCounter
			};
		
		})();

		return counterModule;
	}

	var progressButtonHandler = (function() {

		// Private Stuff
		var buttonID;
		var progressButtonCounter;
		var progressButton;

		function displayTime(timeInSeconds) {
			
			$(buttonID).text(timeInSeconds); 
		}

		function changeColor(classToRemove, classToAdd) {

			$(buttonID).removeClass(classToRemove).addClass(classToAdd);
		}

		function fireAction() {
			var progressCounterState = progressButtonCounter.getCounter();

		 	var timeToDisplay = (20 - progressCounterState).toString();
		 	displayTime(timeToDisplay);

			if (progressCounterState === 0) {
				if (!(progressButton.hasClass('btn-success'))) {

					changeColor('btn-danger', 'btn-success');
				}
			}

			if (progressCounterState === 10) {
				changeColor('btn-success', 'btn-warning');	
			}

			if (progressCounterState === 17) {
				changeColor('btn-warning', 'btn-danger');
			}

			progressButtonCounter.incrementCounter();
		}

		// Public methods
		var init = function(progressButtonID) {
			buttonID = progressButtonID;
			progressButton = $(buttonID);
			progressButtonCounter = new Counter(19);
		};

		var clear = function() {

			if (progressButton.hasClass('btn-danger')) {
				changeColor('btn-danger', 'btn-success');
			
			} else if (progressButton.hasClass('btn-warning')) {
				changeColor('btn-warning', 'btn-success');
			}

			$(buttonID).text('Seconds Left');
			progressButtonCounter.clearCounter(); 
		};

		return {
			init: init,
			fireAction: fireAction,
			clear: clear
		};

	})();

	// IMPLEMENTATION
	function createArrayOfSameElement(param, length) {

		var result = [];

		for (var i = 0; i < length; i++) {
			
			result[i] = param;
		}

		return result;
	}

	function callModuleMethod(module, method, param) {

		return module[method](param);
	}

	function invokeThisCriticalMethod(module, method, params) {

		return module[method].apply(module, params);
	}

	function invokeMultipleModuleMethods(objectOfParams, functionToApply) {

		var modules = objectOfParams.modules,
			methods = objectOfParams.methods,
			params = objectOfParams.params;

		var guageOfLength = modules.length;
		
		if (guageOfLength === methods.length && guageOfLength === params.length) {

			for (var i = 0; i < guageOfLength; i++) {
				
				functionToApply(modules[i], methods[i], params[i]);
			}
		}

	}

	var methodInvocationObj = {
		modules: createArrayOfSameElement(domModule, 6),
		methods: ['activateTooltip', 'activatePopover', 'deactivateToggleForAccordion', 'customToggleForAccordion', 'openAccordionSegment', 'attachLinks'],
		params: ['.bar-icon-right', '#send_email_btn', '.collapse', '.panel_heading_anchor', '#panel_collapse_what_it_is', [
			{selector: '#twitter_icon', url: 'http://www.twitter.com/VRSanchez8717'}, 
			{selector: '#github_icon', url: 'http://www.github.com/tdbts'}
			]]
	};

	invokeMultipleModuleMethods(methodInvocationObj, callModuleMethod);

	var thisCriticalMethodInvocationObj = {
		modules: [domModule, domModule, cloudModule, cloudModule, domModule], 
		methods: ['activateSearchField', 'activateSearchField', 'activateTenMoreTweetsButton', 'activateModalCloseButtons', 'emailModalAJAX'], 
		params: [
			['#feed_cloud_input_button', '#feed_cloud_input', searchModule.executeTwitterAccountSearch.bind(searchModule)],
			['#search_cloud_input_button', '#search_cloud_input', searchModule.executeTwitterTermSearch.bind(searchModule)],
			[],
			['.modal_close'],
			[]
			]
	};	

	invokeMultipleModuleMethods(thisCriticalMethodInvocationObj, invokeThisCriticalMethod);

	// Check that jQuery is working properly
	domModule.jqueryCheckLoad('#tweet_cloud_header', 1000);
	
	activateClearTagsButton();


});
