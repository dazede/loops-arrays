/*
to place/spawn a piece using JavaScript:

var piece = document.createElement('div');            // create an empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
*/




for (var i = 0; i <=23; i++ ) {
    var piece = document.createElement('div');            
    piece.setAttribute('class', 'piece');                 
    document.getElementById('board').appendChild(piece);
    piece.style.left = 100*i+'px';
    
    if (i >= 6) {
        piece.style.top = '100px';
        piece.style.left = 100*(i-6)+'px';
    }
    
    if (i >= 12) {
        piece.style.top = '400px';
        piece.style.left = 100*(i-12)+'px';
    }
    
    if (i >= 18) {
        piece.style.top = '500px';
        piece.style.left = 100*(i-18)+'px';
    }
    
    
   }
   
   
  
  /*
    var row1 = 0
    var row2 = 0
    var row3 = 0
  
    for (var i = 0; i <=10; i++ ) {
    var piece = document.createElement('div');            
    piece.setAttribute('class', 'piece');                 
    document.getElementById('board').appendChild(piece);
    
    if (i < 6) {
        piece.style.top = '0px';
        piece.style.left = 100*row1+'px';
        col++;
    }
    
    else if (i < 12){
        piece.style.top = '0px';
        piece.style.left = 100*row2+'px';
        row2++;
    }
    
    else if (i < 18) {
        piece.style.top = '0px';
        piece.style.left = 100*row2+'px';
    }
    
    }
    

    */
    
    
    
    
    
