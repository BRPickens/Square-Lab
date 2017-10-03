
var squareCounter = 0;
    squareCounter++;

document.addEventListener('DOMContentLoaded', function(){
    // Button //
    var btn = document.createElement('button');
    btn.innerText = 'Add Square';
    document.body.appendChild(btn);
    // Button Function //
    btn.addEventListener('click', function(){
        var squareContainer = document.createElement('div'); 
        document.body.appendChild(squareContainer);
        squareContainer.className='square';
        squareContainer.id = squareCounter++;
    // Numbered Square Function //
        squareContainer.style.color = 'transparent';
        squareContainer.innerText = squareContainer.id;

    // Square Changes Numbers //
            squareContainer.addEventListener('mouseout', function(){
                squareContainer.style.color ='transparent';
            })
    
    // Number goes away with mouse //
            squareContainer.addEventListener('mouseover', function(){
                squareContainer.style.color='white';
            })

            squareContainer.addEventListener('click', function(){
                squareContainer.style.backgroundColor = getrandomColor();
            })
        // Double click remove square //
                squareContainer.addEventListener('dblclick', function(){
                    if (squareContainer.previousSibling === btn) {
                        alert ('Do not pass go, do not collect another square.');
                    } else if (squareContainer.id % 2 != 0) {
                        squareContainer.previousSibling.remove();
                    } else if (squareContainer.nextSibling === null){
                        alert ('Nothing to remove');
                    } else if (squareContainer.id % 2 === 0) {
                        squareContainer.nextSibling.remove();
                    }
            })
    })
        
})
function getrandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters [Math.floor(Math.random()*16)];
    }
    return color;
}