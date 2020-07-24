<!-- BEGIN TITLE -->
# Document and Pass
<!-- END TITLE -->

<!-- BEGIN TOC -->
> 7/13/2020, 1:47:15 PM

- [0-hello-world](#0-hello-world)
- [1-remove-from-array](#1-remove-from-array)
- [1-repeat-string](#1-repeat-string)
- [1-reverse-string](#1-reverse-string)
- [1-sum-all](#1-sum-all)
- [2-fibonacci](#2-fibonacci)
- [2-get-the-titles](#2-get-the-titles)
- [2-leap-years](#2-leap-years)
- [2-palindromes](#2-palindromes)
- [3-caesar](#3-caesar)
- [3-find-the-oldest](#3-find-the-oldest)
- [3-pig-latin](#3-pig-latin)
- [3-snake-case](#3-snake-case)
<!-- END TOC -->

<!-- BEGIN DOCS -->
---

## [./0-hello-world](./0-hello-world)

<a name="hello"></a>

## hello(thing) ⇒ <code>string</code>
A very simple function, it greets whatever you tell it to


**Returns**: <code>string</code> - a friendly greeting  

| Param | Type | Description |
| --- | --- | --- |
| thing | <code>string</code> | the thing to greet |

**Example**  
```js
const greeting = hello('World');
console.log(greeting); // 'Hello, World!'
```
**Test Report**
```
Started
......


2 specs, 0 failures
Finished in 0.007 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-remove-from-array](./1-remove-from-array)

<a name="removeFromArray"></a>

## removeFromArray(item, ...value) ⇒ <code>Array.&lt;number&gt;</code>
* filters out all values that are strictly equal to value
returns a new array, does not modify removeFromArray


**Returns**: <code>Array.&lt;number&gt;</code> - the filtered numbers  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Array.&lt;number&gt;</code> | the given numbers |
| ...value | <code>number</code> | the number to remove |

**Example**  
```js
const removeFromArray=([1, 2, 3, 4], 3);
console.log(removeFromArray); // [1,2,4]
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-repeat-string](./1-repeat-string)

<a name="repeatString"></a>

## repeatString(word, num) ⇒ <code>string</code>
repeats a string


**Returns**: <code>string</code> - repeated string  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | text to repeat |
| num | <code>number</code> | number of times to repeat |

**Example**  
```js
const repeatString=('hey', 3); 
console.log(repeatString); //  'heyheyhey'
```
**Test Report**
```
Started
.....................


7 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-reverse-string](./1-reverse-string)

<a name="reverseString"></a>

## reverseString(toReverse) ⇒ <code>string</code>
reverts a given string


**Returns**: <code>string</code> - a reversed text  

| Param | Type | Description |
| --- | --- | --- |
| toReverse | <code>string</code> | text to revert |

**Example**  
```js
const reverseString ='hello there';
console.log (reverseString ()); // 'ereth olleh'
```
**Test Report**
```
ereht olleh
Started
............


4 specs, 0 failures
Finished in 0.003 seconds

```

[TOP](#Document-and-Pass)


---

## [./1-sum-all](./1-sum-all)

<a name="sumAll"></a>

## sumAll(x, y) ⇒
adds  every number between(and including) them


**Returns**: the sum of x and y  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | the first number |
| y | <code>number</code> | the second number |

**Example**  
```js
const sumAll =(1, 4);
console.log(sumAll);//returns the sum of 1 + 2 + 3 + 4 which is 10
```
**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-fibonacci](./2-fibonacci)

<a name="fibonacci"></a>

## fibonacci(num) ⇒ <code>number</code>
Fibonacci Series are list of numbers where everyone’s number is the sum of the previous consecutive numbers.


**Returns**: <code>number</code> - value of the fibonacci sequence.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | initial fibonacci number |

**Example**  
```js
fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
   fibonacci(6) // returns 8
```
**Test Report**
```
Started
...........................


9 specs, 0 failures
Finished in 0.006 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-get-the-titles](./2-get-the-titles)

<a name="getTheTitles"></a>

## getTheTitles(arrays) ⇒
filters the title of the book


**Returns**: arrays of titles  

| Param | Description |
| --- | --- |
| arrays | of indexes for title and author |

**Example**  
```js
getTheTitles(books) // ['Book','Book2']
```
**Test Report**
```
Started
...


1 spec, 0 failures
Finished in 0 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-leap-years](./2-leap-years)

<a name="leapYears"></a>

## leapYears(year)
leap years are divisible by 4 and 400 and not divisible by 100


**Returns{**: boolean} returns true if the year is leap year.Else returns false  

| Param | Type | Description |
| --- | --- | --- |
| year | <code>number</code> | the initial given year |

**Test Report**
```
Started
..................


6 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./2-palindromes](./2-palindromes)

<a name="palindromes"></a>

## palindromes(a) ⇒ <code>boolean</code>
determines whether or not a given string is a palindrome


**Returns**: <code>boolean</code> - returns true if the text is palindrome.  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>string</code> | given string |

**Example**  
```js
palindromes('racecar') // true
palindromes('tacos') // false
```
**Test Report**
```
Started
...............


5 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-caesar](./3-caesar)

<a name="caesar"></a>

## caesar()

**Test Report**
```
Started
....F..F..F.....F..F.

Failures:
1) caesar works with words
.    Expected 'BBB' to equal 'Bbb'..

2) caesar works with phrases
.    Expected 'MJQQT, BTWQI!' to equal 'Mjqqt, Btwqi!'..

3) caesar works with negative shift
.    Expected 'HELLO, =ORLD!' to equal 'Hello, World!'..

4) caesar works with large shift factors
.    Expected 'EBIIL, TLOIA!' to equal 'Ebiil, Tloia!'..

5) caesar works with large negative shift factors
.    Expected '+(//2, :25/A!' to equal 'Ebiil, Tloia!'..

7 specs, 5 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-find-the-oldest](./3-find-the-oldest)

<a name="findTheOldest"></a>

## findTheOldest()

**Test Report**
```
Started
.........


3 specs, 0 failures
Finished in 0.004 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-pig-latin](./3-pig-latin)

<a name="translate"></a>

## translate()

**Test Report**
```
Started
.F..F..F..F..F..F..F..F..F.

Failures:
1) #translate translates a word beginning with a vowel
.    Expected undefined to equal 'appleay'..

2) #translate translates a word beginning with a consonant
.    Expected undefined to equal 'ananabay'..

3) #translate translates a word beginning with two consonants
.    Expected undefined to equal 'errychay'..

4) #translate translates two words
.    Expected undefined to equal 'eatay iepay'..

5) #translate translates a word beginning with three consonants
.    Expected undefined to equal 'eethray'..

6) #translate counts "sch" as a single phoneme
.    Expected undefined to equal 'oolschay'..

7) #translate counts "qu" as a single phoneme
.    Expected undefined to equal 'ietquay'..

8) #translate counts "qu" as a consonant even when its preceded by a consonant
.    Expected undefined to equal 'aresquay'..

9) #translate translates many words
.    Expected undefined to equal 'ethay ickquay ownbray oxfay'..

9 specs, 9 failures
Finished in 0.009 seconds

```

[TOP](#Document-and-Pass)


---

## [./3-snake-case](./3-snake-case)

<a name="snakeCase"></a>

## snakeCase()

**Test Report**
```
Started
.F..F..F..F..F..F.

Failures:
1) snakeCase works with simple lowercased phrases
.    Expected undefined to equal 'hello_world'..

2) snakeCase works with Caps and punctuation
.    Expected undefined to equal 'hello_world'..

3) snakeCase works with longer phrases
.    Expected undefined to equal 'this_is_the_song_that_never_ends'..

4) snakeCase works with camel case
.    Expected undefined to equal 'snake_case'..

5) snakeCase works with kebab case
.    Expected undefined to equal 'snake_case'..

6) snakeCase works with WTF case
.    Expected undefined to equal 'snake_case_is_awesome'..

6 specs, 6 failures
Finished in 0.005 seconds

```

[TOP](#Document-and-Pass)

<!-- END DOCS -->
