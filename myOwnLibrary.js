function isTouching(pen, pencil){
    if(pen.x - pencil.x < pencil.width/2 + pen.width/2
    && pencil.x - pen.x < pencil.width/2 + pen.width/2
    && pen.y - pencil.y < pencil.height/2 + pen.height/2
    && pencil.y - pen.y < pencil.height/2 + pen.height/2){
   return true;
  }
  
  else {
   return false;
  }
}
