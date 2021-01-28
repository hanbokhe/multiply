function multiply(num1, num2) {
  // your code here
  if (num1 === 0 || num2 === 0){
      return 0;
  }
  if ((num1 < 0 && num2 < 0)||(num1 > 0 && num2 > 0))
  {
      var isPositive = true;
  }
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  var result = 0;
  for (var i = 0; i < num2 ; i++)
  {
      result +=num1;
  }
  if (isPositive)
  {
      return result;
  }else{
      return -result;
  }
}
