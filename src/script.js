$("#text").slasher({items: [{command: 'message', description: 'message certain user ', callback: handleMessage},
                                    {command: 'remove', description: 'remove banana from the list', callback: handleRemoveEvent},
                                    {command: 'collapse', description: 'collapse an inline image/video', callback: handleCollapseEvent},
                                    {command: 'expand', description: 'expand all inline images/videos', callback: handleExpandEvent},
                                ],
                            cssClasses: {
                                dropdownMenuClasses: 'dropdown-menu', 
                                dropdownMenuItemClasses: 'dropdown-item d-flex flex-column ',
                                dropdownActiveItemClasses: '',
                                commandTitleClasses: 'font-weight-bold text-primary',
                                commandDescriptionClasses: 'text-muted '
                            },
                            zIndex: ''
                        },
)

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


