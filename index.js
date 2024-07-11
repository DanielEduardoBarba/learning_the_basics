//Welcome to learning the basics!
//This file will become a template 
//for you to experiment with and learn
//the basics of JavaScript

//So lets begin :D

//1st concept
//-----------------Comments--------------
//You have been looking at comments this whole time!
//In JavaScript comments are declared with ANYTHING
//after the "//" symbol, in other languages it can be 
//the "#" symbol or sometimes the "<-- -->" characters
//You can also write it like..... 

/*this! this is a way to wrap 
multiple lines of code 
into a large comment*/

//simply put anything in between the "/*" and "*/" characters

//Comments are NOT run as code, they are ignored by JavaScript 
//interpretters, so feel free to use them as you like!

//They are used also to quickly show and ignore parts of code
//Here is a little piece of code, declaring a simple variable
//Put your cursor on the line of code, and hit
// Ctrl + "/" for Ubuntu 
// CMD + "/" for Macbook

// const myVariable="I am a string!"


//2nd concept
//-------------Data Types-----------
//Data types are like the blood cells of a program
//they are how you as a developer share, change, interpret
//information and data in your program 
//in JavaScript

//JavaScript is dynamically typed, which simply means, when
//a variable is declared (created) it's type can be changed 
//and altered later in the program. Many programming languages
//do NOT allow this, BUT this is part of what makes JavaScript 
//so powerful!

//Here is an example, lets declare a simple variable
//Like we learned before, uncomment this below

// var myFirstVariable="I love coding"

//Do you see how in Visual Code, the different parts are colored
//differently? This is because each part is equally important
//Let's break it down:
// "var" is the data type we declared, in other langauges you would 
//have to describe it specifically as either a double, float, string
//char, integer, array, object, structure, etc...depending on the coding
//language, but in Javascript this is literally the only one LOL xD
//It automatically will know what "data type" it is when you "assign"
//a data type to it! So the next part:

//myFirstVariable is the name of the variable, this can be anything you want
//some naming conventions are not allow, as an example you cant use the "-"
//character. Here is an example, uncomment this below

// var my-First-Variable = "I love coding, just not errors"

//notice the red marks? Visual code is telling you this is "no no"
//with good reason, if you ran this Node would throw an error, you can write it 
//like this alternatively, uncomment below, dont forget to return the 
//comment when done:

// var my_First_Variable = "that variable name is called snake_case, but I am just a string :)"

//in school you probably are super familiar with the "=" sign, 
//which kind of comes off as a question, ie 'is what is on the 
//right equal to the left as the right? if not make it equal by
//solving the equation', in JavaScript the same principle somewhat
//applies except the "=" literally forces the variable name to 
//be the SAME as whats on the other side

//the last part is the "I love coding" this was just one of MANY
//examples, because the that could be ANYTHING! in the case of
//"I love coding" this is called a string, which is a 'string' of 
//characters, you know the I then the space, the l the o the v the e, etc...
//You get the idea! 
//With strings you can use "", '', or `` marks to open and close a string
//BUT there are many more data types, uncomment and check these out:

// var num1=777.77
// var num2=200

// var str1="Hi there"
// var str2='we are strings'
// var str3=`but im special you can add stuff like this ${num2}`

// var arr1=[1,2,3,4,5]
// var arr2=["a","b","c"]

// var obj1={
//     thisIsANumber:123456,
//     thisIsAnArray:[1,2,3,"abc", "efg"],
//     thisIsAString:"I am a string wow!",
//     imAnotherObject:{
//         key1:"wow!",
//         key2:"this worked"
//     }
// }

//Now let's wrap up this lesson! Each of these are different data types
//They all play a unique role in carrying and manipulating data
//throughout a program! A program's purpose can be boiled down to 
//gathering, changing, sending data and information. This is the
//foundation to all our applications, 

//ex: you log into your app by 
//SENDING data (username and passsword), the app/server/system GATHERS
//your data, it then looks for your account, if valid it SENDS back
//your account information and unique keys to play with the app.
//If you want to make a comment or interact usually you will SEND
//something to be CHANGED and the server/system/app acts accordingly

//3rd concept
//-------------ALTERING DATA--------
//Now that you got the big part out of the way, data types, let's show 
//what can be done with it!

//firstly with the declaration 'var' this is the most basic and now
//old way of declaring, the new way is using 'let' and 'const'. We
//will learn more about those in class Saturday. For now just know 
//that essentially 'var' and 'let' behave almost exaclty the same,
//while 'const' will NOT allow its data type to be changed. For now
//we will only use 'var'

//You can at anytime later in a program change the data type of 
//a variable. Uncomment this below (make sure anything above is also
//commented ie dont leave other things we went through uncommented)
//and run node in your terminal by entering 'node .' or 'node index.js'


