!function(e,s){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return s(e)})):"object"==typeof exports?module.exports=s(require("jquery")):s(jQuery)}(0,(function(e){e.fn.slasher=function(s){let t=e.extend({apple:"ape",banana:"ban",items:[]},s),a=t.cssClasses&&t.cssClasses.dropdownListItemClasses?t.cssClasses.dropdownListItemClasses:"dropdown-item d-flex flex-column",o=t.cssClasses&&t.cssClasses.commandClasses?t.cssClasses.commandClasses:" text-capitalize",n=t.cssClasses&&t.cssClasses.descriptionClasses?t.cssClasses.descriptionClasses:"text-muted",l=t.cssClasses&&t.cssClasses.dropdownListClasses?t.cssClasses.dropdownListClasses:"dropdown-menu",d=t.cssClasses.dropdownActiveItemClasses?t.cssClasses.dropdownActiveItemClasses:"bg-light",r=t.zIndex?t.zIndex:"10000",i=e('<ul id="slashDropdown"></ul>');i.addClass("d-block "+l);let c,f,C,p=0,m=e(this);function u(e){let s=e[0].dataset.name,a=t.items.filter(e=>e.command===s)[0];a&&"function"==typeof a.callback&&a.callback(m[0],a),i.remove();let o=c.length;m.val(c+f),m.focus(),m.caret("pos",o)}return this.each((function(){m.keydown(s=>{if(40===s.keyCode)return e(C[p]).removeClass(d),p++,C[p]||(p=0,e(C[p]).addClass(d)),e(C[p]).addClass(d),!1;if(38===s.keyCode)return e(C[p]).removeClass(d),p--,C[p]||(p=0),e(C[p]).addClass(d),!1;if(27===s.keyCode&&e("#slashDropdown"))i.remove();else if(13===s.keyCode)return console.log("checking the enter key event"),u(e(C[p])),!1}),m.on("input",(function(){let s,l=m.val(),d=m.caret("offset");i.css({"z-index":r,top:d.top+d.height+2,left:d.left});let p=m.caret("pos"),h=l.substring(0,p);if(c=h.substring(0,h.lastIndexOf(" ")),f=l.substring(p),h.indexOf(" ")>0){var w=h.split(" ");wordBeforeCaret=w[w.length-1],0===wordBeforeCaret.indexOf("/")&&wordBeforeCaret.length>1&&(s=wordBeforeCaret.split("/")[1])}else wordBeforeCaret=h,0===wordBeforeCaret.indexOf("/")&&wordBeforeCaret.length>1&&(s=wordBeforeCaret.split("/")[1]);if(i.html(""),s){let l=t.items.filter(e=>{let t=new RegExp(s,"i");return e.command.match(t)||e.description.match(t)});l.length>0?(l.forEach(s=>{let t=e('<li class="list-item" data-name="'+s.command+'"><span class="'+o+'" >'+s.command+'</span><span class="'+n+'">'+s.description+"</span></li>");t.addClass(a),t.attr("id",s.command),i.append(t),t.on("click",(function(){u(t)}))}),e("body").append(i),C=i[0].childNodes):i.remove()}s||i.remove()}))}))}}));