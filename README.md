<div align="center">
  <h1>$.slasher</h1>
</div>
<br>

> A plugin that allows you to build slash commands in your own project.

## 🤔 What is a slash command? 
 You might have seen in certain websites that if you enter `/` it gives you a list a suggestions that most of the time are commands that you can execute and depending upon your choice, some callback function might be fired. It helps users do some tasks quickly while staying in the textarea/input. 

 ## 🙄 What's the purpose of this plugin? 
 Have you ever visited a site that has slash commands and noticed how helpful they are? Most probably the answer is yes and you also might have wondered how to implement those in your own next project but you don't know how to. If that is the case then this plugin is definitely for you.

It's totally customizeable. You can intergrate any number of slash commands in your project and trigger the action you want to against those commands. 

 Let's explore how can you take advantage of this plugin

 ### 👀 Requirements

* jQuery >= 1.7.0.
* [Caret.js](https://github.com/ichord/Caret.js)

### ⚓️  Integration with your Application

For integrating slash commands in your project all you need to do is add these files in your `.html`

```html

<script type="text/javascript" src="https://ichord.github.io/Caret.js/src/jquery.caret.js"></script>
<script src="jquery.slash-command.js"></script>
<script src="script.js"></script>
```
After you have made the above mentioned changes in your html file, below is how you can set commands.

```javascript
$('#inputor').slashCommand({items: [{command: 'message', description: 'message certain user ', callback: handleMessage},
                                    {command: 'remove', description: 'remove banana from the list', callback: handleRemoveEvent},
                                    {command: 'collapse', description: 'collapse an inline image/video', callback: handleCollapseEvent},
                                    {command: 'expand', description: 'expand all inline images/videos', callback: handleExpandEvent},
                                ],
                            cssClasses: {
                                dropdownListClasses: 'dropdown-menu', 
                                dropdownListItemClasses: 'dropdown-item d-flex flex-column ',
                                dropdownActiveItemClasses: '',
                                commandClasses: 'font-weight-bold text-primary',
                                descriptionClasses: 'text-muted '
                            },
                            zIndex: ''
                        })

function handleMessage(element, commandInfo) {
    console.log('in handleMessage ')
}
function handleRemoveEvent(element, commandInfo) {
    console.log('in handleRemoveEvent')
}
function handleCollapseEvent(element, commandInfo) {
    console.log('in handleCollapseEvent')
}
function handleExpandEvent(element, commandInfo) {
    console.log('in handleExpandEvent')
}
```
### 🔎 `slashCommand` 
accepts an object that has three properties, explored below:

1. #### → items: 
  Items is an array of objects and each object contains a command, description for the command and a callback function to be called when that command is inserted.

2. #### → cssClasses:
  cssClasses is the object that contains style classes for the dropdown menu that opens for suggestions when certain command is initiated. By default, Bootstrap 4 classes are being used but ofcourse you can provide your own css classes.
  * **dropdownListClasses:** classes for dropdown menu like `dropdown-menu` in bootstrap.
  * **dropdownListItemClasses:** classes for dropdown item e.g how do you want to show Command and its description
  * **dropdownActiveItemClasses:** classes for active items e.g colors, font styles.
  * **commandClasses:** classes for command e.g font-weight, font style.
  * **descriptionClasses:** classes for command e.g font-weight, font style.

3. #### → zIndex: 
The default value of zIndex set for dropdown menu is `1000` but you can provide your any value.

### 🖥 Demo: 
![slash Command Demo](/assets/demo.gif)

### 👨‍💻 Contributions:
 Thank you for your interest, we are open to any kind of contributions. Feel free to send pull request.