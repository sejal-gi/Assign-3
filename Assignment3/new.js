//Q1 convert minutes into seconds

function time_convert(number)
{
	var seconds=number*60;
	return(seconds);
}
console.log(time_convert(2));


//Q2 divides evenly

function dividesEvenly(num1,num2)
{
	if (num1 % num2 ==0) 
	{
		return(true);
	}
	else
	{
     return(false);
	}
}
console.log(dividesEvenly(98,7));



//Q2 add up the numbers from single numbers

function Add(num)
{
	var sum=0;
	for (var i =1; i <= num; i++)
	{
		sum+=i;
	}
	return sum;
}
console.log(Add(600));

//Q3 removes duplicates from an array


function removeDups(string) 
{
    var x,
      len=string.length,
      out=[],
      obj={};
 
    for (x=0; x<len; x++) 
    {
    obj[string[x]]=0;
    }  
    for (x in obj)  
    {
    out.push(x);
    }
   return out;
} 
var string = ['1','0','1','0'];
result = removeDups(string);
console.log(string);
console.log(result);



//Q1 count instances of a character in a string

function charCount(string1,string2) 
{
var string2_Count = 0;
for (var position = 0; position < string1.length; position++) 
{
    if (string1.charAt(position) == string2) 
    {
       string2_Count += 1;
    }
}
return string2_Count;
}
console.log(charCount('big fat Bubble','b'));
