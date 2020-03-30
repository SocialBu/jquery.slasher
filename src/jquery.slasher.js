//adding modularity
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module
      define(["jquery"], function (a0) {
        return (factory(a0));
      });
    } else if (typeof exports === 'object') {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory(require("jquery"));
    } else {
      factory(jQuery);
    }
  }(this, function ($) {
    $.fn.slasher = function(options){
      let settings = $.extend({
        apple: 'ape',
        banana: 'ban',
        items: []
      }, options);
      //checking if the user provided custom classes
      let dropdownList = settings.cssClasses && settings.cssClasses.dropdownMenuClasses ? settings.cssClasses.dropdownMenuClasses : 'dropdown-menu'
      let itemClasses = settings.cssClasses && settings.cssClasses.dropdownMenuItemClasses ? settings.cssClasses.dropdownMenuItemClasses : 'dropdown-item d-flex flex-column'
      let commandClasses = settings.cssClasses && settings.cssClasses.commandTitleClasses ? settings.cssClasses.commandTitleClasses : ' text-capitalize'
      let descriptionClasses = settings.cssClasses && settings.cssClasses.commandDescriptionClasses ? settings.cssClasses.commandDescriptionClasses : 'text-muted'
      let ActiveItemClass = settings.cssClasses.dropdownActiveItemClasses ? settings.cssClasses.dropdownActiveItemClasses : 'bg-light'
      let zIndex = settings.zIndex ? settings.zIndex: '10000'
      
      //creating dropdown menu
      let $dropdownMenu = $('<ul id="slashDropdown"></ul>')
      $dropdownMenu.addClass('d-block ' + dropdownList)
      
      let dropdownItemIndex = 0;
      let element = $(this);
      let preCommandText, postCommandText, listItems;
  
       //func for handling event on list items
       function handleEvent(ele){
        let match = ele[0].dataset.name
        let item = settings.items.filter( item => item.command === match )[0]
        if ( item ) {
          if ( typeof item.callback === 'function' ) {
            item.callback(element[0], item )
          }
        }
        $dropdownMenu.remove()
        let insertCaret = preCommandText.length
        element.val(preCommandText + postCommandText)
        element.focus()
        element.caret('pos', insertCaret)
      }
      
      return this.each(function () {
        //keydown event on textarea/input
        element.keydown( (e) => {
          if(e.keyCode === 40){     // down arrow
            $(listItems[dropdownItemIndex]).removeClass(ActiveItemClass)
            dropdownItemIndex++;
            if(!listItems[dropdownItemIndex]){
              dropdownItemIndex = 0
              $(listItems[dropdownItemIndex]).addClass(ActiveItemClass)
            }
            $(listItems[dropdownItemIndex]).addClass(ActiveItemClass)
            return false;
          }else if(e.keyCode === 38){     // up arrow 
            $(listItems[dropdownItemIndex]).removeClass(ActiveItemClass)
            dropdownItemIndex--;
  
            if(!listItems[dropdownItemIndex]){
              dropdownItemIndex = 0
            }
            $(listItems[dropdownItemIndex]).addClass(ActiveItemClass)
            return false;
          }else if(e.keyCode === 27 && $('#slashDropdown')){
            $dropdownMenu.remove()
          }else if(e.keyCode === 13 ){  //enter key
            console.log('checking the enter key event')
          handleEvent($(listItems[dropdownItemIndex]))
          return false;
          }
        })
  
  
        element.on('input', function(){
          let value = element.val()
          let offset = element.caret('offset')
          $dropdownMenu.css({'z-index' : zIndex, 'top' : offset.top + offset.height+ 2, 'left': offset.left })
  
          let command;
          let caretPosition = element.caret('pos')
          let preText = value.substring(0, caretPosition);
  
          preCommandText = preText.substring(0, preText.lastIndexOf(" "))
          postCommandText = value.substring(caretPosition)
          
          //checking if there is any command
          if (preText.indexOf(" ") > 0) {
              var words = preText.split(" ");
              wordBeforeCaret = words[words.length - 1];
              if(wordBeforeCaret.indexOf('/') === 0 && wordBeforeCaret.length > 1){
                command = wordBeforeCaret.split('/')[1]
              }
          }else {
            wordBeforeCaret = preText;
              if(wordBeforeCaret.indexOf('/') === 0 && wordBeforeCaret.length > 1){
                command = wordBeforeCaret.split('/')[1]
              }
          }
          $dropdownMenu.html('')
  
          //if there is command, insert the dropdown
          if(command){
            let items = settings.items
            let results = items.filter(item => {
              let regex = new RegExp(command , "i")
              return item.command.match(regex) || item.description.match(regex)
            })
            if(results.length > 0){
              results.forEach( result => {
                let $list_item = $( '<li class="list-item" data-name="' + result.command +'">' + '<span class="'+ commandClasses +'" >' + result.command + '</span>' + '<span class="' + descriptionClasses + '">' + result.description + '</span>' + '</li>' )
                $list_item.addClass(itemClasses)
                $list_item.attr( 'id', result.command )
                $dropdownMenu.append( $list_item )
                $list_item.on('click', function(){
                  handleEvent($list_item)
                })           
              })
              $('body').append($dropdownMenu)
              listItems = $dropdownMenu[0].childNodes
            }else {
              $dropdownMenu.remove()
            }
          }
            
          if(!command){
            $dropdownMenu.remove()
          }
        })
      })
    }        
  })) 
  