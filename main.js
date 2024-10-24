let zakah =document.getElementById('zkh');
let value= document.getElementById('value');

zakah.onkeyup= function()
{
 value.value = zakah.value * 0.025
}

value.onkeyup= function()
{
  zakah.value = value.value / 0.025
}
