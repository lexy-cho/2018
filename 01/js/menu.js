(function(window) {

  'use strict';

  /**
   * Extend Object helper function.
   */
  function extend(a, b) {
    for(var key in b) { 
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  /**
   * Each helper function.
   */
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  /**
   * Menu Constructor.
   */
  function Menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  /**
   * Menu Options.
   */
  Menu.prototype.options = {
    wrapper: '#o-wrapper',          // The content wrapper
    type: 'slide-left',             // The menu type
    menuOpenerClass: '.c-button',   // The menu opener class names (i.e. the buttons)
    maskId: '#c-mask'               // The ID of the mask
  };

  /**
   * Initialise Menu.
   */
  Menu.prototype._init = function() {
    /*this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.mask = document.querySelector(this.options.maskId);
    this.menu = document.querySelector('#c-menu--' + this.options.type);
    this.closeBtn = this.menu.querySelector('.c-menu__close');
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);*/

	this.body = $('body');
	this.wrapper = $(this.options.wrapper);
	this.mask = $(this.options.maskId);
	this.menu = $('.c-menu--' + this.options.type);
	this.closeBtn = $('.c-menu__close');
	this.menuOpeners = $(this.options.menuOpenerClass);

    this._initEvents();
  };

  /**
   * Initialise Menu Events.
   */
  Menu.prototype._initEvents = function() {
    // Event for clicks on the close button inside the menu.
    this.closeBtn.on('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event for clicks on the mask.
    this.mask.on('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  /**
   * Open Menu.
   */
  Menu.prototype.open = function() {
    this.body.addClass('has-active-menu');
    this.wrapper.addClass('has-' + this.options.type);
    this.menu.addClass('is-active');
    this.mask.addClass('is-active');
	this.menuOpeners.addClass('on');
    this.disableMenuOpeners();
	//$('.panelClose').show();
  };

  /**
   * Close Menu.
   */
  Menu.prototype.close = function() {
    this.body.removeClass('has-active-menu');
    this.wrapper.removeClass('has-' + this.options.type);
    this.menu.removeClass('is-active');
    this.mask.removeClass('is-active');
	this.menuOpeners.removeClass('on');
    this.enableMenuOpeners();
	$('.panelClose').hide();
  };

  /**
   * Disable Menu Openers.
   */
  Menu.prototype.disableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = true;
    });
  };

  /**
   * Enable Menu Openers.
   */
  Menu.prototype.enableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = false;
    });
  };

  /**
   * Add to global namespace.
   */
  window.Menu = Menu;

})(window);