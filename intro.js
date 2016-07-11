for (i=0; i<=10; i++) {
  var num1 = 0;
  num1 = num1 + (i*100);
  console.log(num1);
}

for (i=1; i<=128; i+=i) {
  console.log(i);
}

for (i=0; i<=10; i+=2) {
  console.log(i);
}

for (i=3; i<=15; i+=3) {
  console.log(i);
}

for (i=9; i>=0; i-=1) {
  console.log(i);
}

for (i=1; i<=4; i++) {
  console.log(o);
  console.log(o);
  console.log(o);
}

for (i=0; i<=2; i++) {
  for (o=0; o<=4; o++) {
    console.log(o);
  }
}

for (var i=1; i<=25; i++) {
    if (i%2 === 0) {
      console.log(i + " Even");
    } else {
      console.log(i + " Odd");
    }
}

for (var i=1; i<=50; i++) {
  if (i%3===0 && i%5===0) {
    console.log("FizzBuzz");
  } else if (i%3===0) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

var sum = 0;
for (i=1; i<=1000; i++) {
  if (i%3===0 || i%5===0) {
    sum = sum + i;
  }
}
console.log(sum);

var mark = "";
for (i=0; i<7; i++) {
  mark += "#"
  console.log(mark);
}
