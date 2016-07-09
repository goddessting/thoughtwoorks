function getPrice(count){
  if(count <= 2)
  {
    return 6;
  }
  else{
    return (6+0.8*count);
  }
}
