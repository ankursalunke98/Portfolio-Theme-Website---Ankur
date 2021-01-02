let themeDots = document.getElementByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventLitsner('click', function(){
        console.log('option clicked')
    }) 
}