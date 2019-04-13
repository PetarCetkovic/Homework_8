// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1
function sumFunc(arr) {
    // YOUR CODE HERE
    let sum =0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}

// Uncomment the lines below to test your work
 const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
    let i = 0;
    function inner() {
        const el = arr[i];
        i++;
        return el;
    }     
    return inner;
}

function print(){
  console.log("HelloWorld!");
}

// CHALLENGE 2

function nextIterator(arr) {
    let i = 0;
    const inner = {next: 
    function() {
        const el = arr[i];
        i++;
        return el;
        }
    }
    return inner;
}

// Uncomment the lines below to test your work
// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(array) {
    let sum = 0;
    let iterator = nextIterator(array);
    
    array.forEach(element => {
        sum+=iterator.next()
    });
    return sum;
}

// Uncomment the lines below to test your work
// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
    let i = 0;
    let array = Array.from(set);
      const inner = {next:
        function() {
            const el = arraySet[i];
            i++;
            return el;
        }
    }
    return inner;

}
// Uncomment the lines below to test your work
// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
  let i = 0;
  const inner = {next: 
  function() {
      const el = arr[i];
      i++;
      return [i-1,el];
      }
  }
  return inner;

}

// Uncomment the lines below to test your work
// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
    this.str = string;
    var re = /\s/;
       return this.str.split(re);
  }

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
    let i = 0;
    const inner = {next: 
    function() {
        const el = this[i];
        i++;
        return el;
        }
    }
    return inner;

}

// Uncomment the lines below to test your work
const helloWorld = new Words('Hello World');
// for (word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'
for (let i =0 ;i<helloWorld.length;i++){
    console.log(helloWorld[i])
}
// CHALLENGE 7

function valueAndPrevIndex(array){
	let i = 0;
  let str="";
    const inner = {sentence:
        function() {
        if(i === 0) {
           str = array[i]+" is the first element!";
        } else {
       str = array[i]+" was found after index "+(i-1);
      }
      i++;
      return str;
    }
  }
  return inner;
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
    let str="";
      if(string==="english"){
      str="hello there";
    }else{
      str="gibberish";
    }
    yield setInterval(function(){
          console.log(str);
    }, 3000);
  
  }

console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {
    let interval= setInterval(function() {
        console.log("Sad " + noun);
    }, 3000);
    return interval;
}

async function f(noun) {
	return await waitForVerb(noun);
}

f("dog");

