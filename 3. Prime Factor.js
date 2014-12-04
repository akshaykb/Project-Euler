var divisor = 2;
var input = 600851475143;

while (input != divisor)
{
    if (input % divisor === 0)
	input = input/divisor;
else
	divisor++;
}

console.log(divisor);