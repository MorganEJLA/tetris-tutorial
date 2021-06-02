arrow functions =>

old


hello = function (){
    return 'Hello World'
    }



new 

hello = () => 'Hello World' //Parameters are passed through the brackets

hello = (val) => 'Hello World' + val

itemArray.forEach(item => item + 2)  //// the forEach method calls a provided call back function once for element in an array in ascending order. 

the callback is invoked for three arguments .
the value, index, and array item being traversed. 

forEach(value,index,array);


let names = ["steve", "joe", "bob"]
names.forEach(name)   ///the names name is what we have chosen to call this, javascript will know that we mean the items.."names" is the names of the array.  
name is the items in the array could be puppy, car = steve, joe bob. 

names.forEach(name => {
    console.log(name + 'is the best');
})



moving with arrays

increment operators, help access the next items in teh arrays.
double ++ adding +1 to the value before it. 

y = 5
y--
y=4  

write a funciton to rotate the tetromino which is just switching to another positiion in the array. 