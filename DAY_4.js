console.log("Hello this is Day 4 assignment : ");

//Q1. fizz...............buzz...............fizbuzz

for(var i=0;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log(i + " fizzbuzz");
    }
    else if(i%3==0 && i%5!=0){
        console.log(i + " fizz");

    }
    else{
        console.log(i + " buzz");
    }
}



//Q.2  Destructuring the given program.


const student = {
    nam: "Helsink",
    age:24,
    projects:{
        diceGame:"Two player dice game using JavaScript"
    }
}


//Destructure

const {nam, age, projects:{diceGame}} = student;
console.log(nam, age, diceGame);




//Q.3 shoppingBasket

var shoppingBasket =["soap","shampoo","conitioner","Scrubber","Gel"];

console.log(shoppingBasket.values());

var arr = prompt("Enter the new grocery name :");
shoppingList = shoppingBasket.push(arr);
for(var i=0;i<shoppingBasket;i++){
console.log(shoppingList[i]);
}



//Q.4 Calculator in JS

var num1 = Number(prompt("Enter the first number : "));
var num2 = Number(prompt("Enter the second number : "));

var m=Number(prompt("Enter the operation for + : 1, - :2, * : 3, / : 4, % : 5"));
switch(m){
    case 1:
        var sum = num1 + num2; 
        console.log("Addition : "+ sum);
        break;
        case 2:
            var sub = num1 = num2;
            console.log("Subtraction : "+ sub);
            break;
            case 3 :
                var mul = num1 * num2;
                console.log("Multiplication : "+mul);
                break;
                case 4 : 
                var div = num1 / num2;
                console.log("Division : "+div);
                break;
                case 5 :
                    var mod = num1 % num2;
                    console.log("Remainder : "+mod);
                    default :
                    console.log("Operation Not available ");
                    break;
}




//Q5. Managing a sales department

var sales = Number((prompt("Enter the sales from 0 to 20000")));

if(sales>=0 && sales<=5000){
    commision = (sales * 0.02);
    earning = sales + commision;
    console.log(`The Commision is ${commision} & the total earning is ${earning}`);
}
else if(sales>=5001 && sales<=10000){
    commision = (sales * 0.05);
    earning = sales + commision;
    console.log(`The Commision is ${commision} & the total earning is ${earning}`);
}
else if(sales>=10001&& sales<=20000){
    commision = (sales * 0.07);
    earning = sales + commision;
    console.log(`The Commision is ${commision} & the total earning is ${earning}`);
}
else{
    commision = (sales * 0.1);
    earning = sales + commision;
    console.log(`The Commision is ${commision} & the total earning is ${earning}`);
}



//Q.6 Prompt number and empty line

var i = 0;
for(i=1;i>=0;i++){
    var x = Number(prompt("Number greater than hundred ","786"));
    if(x=='' || x>100){
        break;
    }
}



//Q.7 prime numbers till n

var n = Number(prompt("Enter a number till you want prime numbers : "));

function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

console.log(primeFactorsTo(n));


//Q.8 Replace the function with arrow operator

/*let ask = (question, yes, no) => {if(confirm(question)) yes()
else no();
ask("Do You agree?",{alert("You agreed.");},{ alert("You canceled the execution.")})
}*/






