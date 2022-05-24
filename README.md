# Arrays
Problems for exercise and homework from my training in Softuni

## **1. Sum First and Last Array Elements**

Write a function that receives an **array of numbers** and prints the
sum of the **first** and **last** element in that array.

### Examples

| **Input**              | **Output** |
| ---------------------- | ---------- |
| \[20, 30, 40\]         | 60         |
| **\[10, 17, 22, 33\]** | **43**     |
| **\[11, 58, 69\]**     | **80**     |


## **2. Day of Week**

Write a program, which receives a **number** and prints the
corresponding **name** of the **day** of the week (in English).

If the number is **NOT** a valid day, print: **"Invalid day\!"**.

### Examples

| **Input** | **Output**        |
| --------- | ----------------- |
| 3         | Wednesday         |
| 6         | Saturday          |
| **11**    | **Invalid day\!** |


## **3. Reverse an Array of Numbers**

Write a program, which receives a number **n** and an **array** of
elements. Your task is to **create** a **new** array with **n** numbers
from the original array, **reverse** it and print its elements on a
single line, space-separated.

### Examples

| **Input**                     | **Output**     |
| ----------------------------- | -------------- |
| 3, \[10, 20, 30, 40, 50\]     | 30 20 10       |
| **4, \[-1, 20, 99, 5\]**      | **5 99 20 -1** |
| **2, \[66, 43, 75, 89, 47\]** | **43 66**      |


## **4. Reverse In Place**

Write a program, which receives an **array of strings**. Your task is to
**reverse** the array **without** creating a new array. **Print** the
resulting elements on a single line, space-separated.

### Examples

| **Input**                             | **Output**          | **Comments**                                                                    |
| ------------------------------------- | ------------------- | ------------------------------------------------------------------------------- |
| \['a', 'b', 'c', 'd', 'e'\]           | e d c b a           | The first element should be **last**, and the last element should be **first**. |
| \['abc', 'def', 'hig', 'klm', 'nop'\] | nop klm hig def abc |                                                                                 |
| \['33', '123', '0', 'dd'\]            | dd 0 123 33         |                                                                                 |


## **5. Sum Even Numbers**

Write a program, which receives an **array** of strings**,** **parse**
them into numbers, and **sum** only the **even** numbers.

### Examples

| **Input**                   | **Output** |
| --------------------------- | ---------- |
| \['1','2','3','4','5','6'\] | 12         |
| \['3','5','7','9'\]         | **0**      |
| \['2','4','6','8','10'\]    | **30**     |


## **6. Even and Odd Subtraction**

Write a program that calculates the **difference** between the sum of
the **even** and the sum of the **odd** numbers in an array.

### Examples

| **Input**       | **Output** | **Comments**                              |
| --------------- | ---------- | ----------------------------------------- |
| \[1,2,3,4,5,6\] | 3          | 2 + 4 + 6 = 12, 1 + 3 + 5 = 9, 12 - 9 = 3 |
| \[3,5,7,9\]     | \-24       |                                           |
| \[2,4,6,8,10\]  | **30**     |                                           |


## **7. Equal Arrays**

Write a program, which receives two **string** arrays containing number
representations, and prints on the console whether they are
**identical**.

Arrays **are identical** if their elements at same indexes are
**equal**. If they are identical, find the **sum** of the first array
and print the following message:

> **\`Arrays are identical. Sum: {sum}\`**

If the arrays are **NOT identical,** find the **first index** where the
arrays **differ** and print the following message:

> **\`Arrays are not identical. Found difference at {index} index\`**

### Examples

| **Input**                                        | **Output**                                                |
| ------------------------------------------------ | --------------------------------------------------------- |
| \['10','20','30'\], \['10','20','30'\]           | Arrays are identical. Sum: 60                             |
| \['1','2','3','4','5'\], \['1','2','4','4','5'\] | **Arrays are not identical. Found difference at 2 index** |
| **\['1'\], \['10'\]**                            | **Arrays are not identical. Found difference at 0 index** |


## **8. Condense Array to Number**

Write a program, which receives an array of numbers, and **condenses**
them by **summing** adjacent couples of elements until a **single
number** is obtained.

### Examples

For example, if we have 3 elements **\[2,** **10,** **3\]**, we sum the
first two and the second two elements and obtain **{2+10, 10+3} = {12,
13}**, then we sum again all adjacent elements and obtain **{12+13} =
{25}.**

| **Input**         | **Output** | **Comments**                                                                   |
| ----------------- | ---------- | ------------------------------------------------------------------------------ |
| \[2,10,3\]        | 25         | 2 10 3 2+10 10+3 12 13 12 + 13 25                                              |
| **\[5,0,4,1,2\]** | 35         | **5 0 4 1 2 5+0 0+4 4+1 1+2 5 4 5 3 5+4 4+5 5+3 9 9 8 9+9 9+8 18 17 18+17 35** |
| **\[1\]**         | 1          | **1 is already condensed to number**                                           |


## **9. Add and Subtract**

Write a function, which changes the **value** of **odd** and **even**
numbers in an array of numbers.

  - If the number is **even** - **add** to its value its **index**
    position

  - If the number is **odd** - **subtract** to its value its index
    position

### Output

On the first line print the **newly modified array**, on the second line
print the **sum** of numbers from the **original array**, on the third
line print the sum of numbers from the **modified array**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[5, 15, 23, 56, 35]</td>
<td><p>[ 5, 14, 21, 59, 31 ]</p>
<p>134</p>
<p>130</p></td>
</tr>
<tr class="even">
<td>[-5, 11, 3, 0, 2]</td>
<td><p>[ -5, 10, 1, 3, 6 ]</p>
<p>11</p>
<p>15</p></td>
</tr>
</tbody>
</table>

## **10. Common Elements**

Write a function, which prints common elements in **two string arrays**.
Print all matches on **separate** lines. Compare the **first array**
with the **second array**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['Hey', 'hello', 2, 4, 'Peter', 'e'],</p>
<p>['Petar', 10, 'hey', 4, 'hello', '2']</p></td>
<td><p>hello</p>
<p>4</p></td>
</tr>
<tr class="even">
<td><p>['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],</p>
<p>['s', 'o', 'c', 'i', 'a', 'l']</p></td>
<td><p>o</p>
<p>i</p></td>
</tr>
</tbody>
</table>

## **11. Merge Arrays**

Write a function, which receives **two string arrays** and **merges**
them into a **third** array.

  - If the **index** of the element is **even**, add into the third
    array the **sum** of **both elements** at that index

  - If the **index** of the element is **odd**, add the
    **concatenation** of both elements at that index

### Input

As **input,** you will receive **two string arrays (**with equal
length**).**

### Output

As **output,** you should print the resulting **third array**, each
element separated by **" - "**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>['5', '15', '23', '56', '35'],</p>
<p>['17', '22', '87', '36', '11']</p></td>
<td>22 - 1522 - 110 - 5636 - 46</td>
</tr>
<tr class="even">
<td><p>['13', '12312', '5', '77', '4'],</p>
<p>['22', '333', '5', '122', '44']</p></td>
<td>35 - 12312333 - 10 - 77122 - 48</td>
</tr>
</tbody>
</table>

## **12. Array Rotation**

Write a function that receives an **array** and the **number of
rotations** you have to perform.

**Note:** Depending on the number of rotations, the first element goes
to the end.

### Output

Print the resulting array elements separated by a single space.

### Examples

| **Input**                 | **Output**     |
| ------------------------- | -------------- |
| \[51, 47, 32, 61, 21\], 2 | 32 61 21 51 47 |
| \[32, 21, 61, 1\], 4      | 32 21 61 1     |
| \[2, 4, 15, 31\], 5       | 4 15 31 2      |

## **13. Max Number**

Write a function to find all the **top** integers in an array. A top
integer is an integer, which is **bigger** than all the elements to its
**right**.

### Output

Print **all** top integers on the console, **separated** by a single
space.

### Examples

| **Input**                     | **Output** |
| ----------------------------- | ---------- |
| \[1, 4, 3, 2\]                | 4 3 2      |
| \[14, 24, 3, 19, 15, 17\]     | 24 19 17   |
| \[41, 41, 34, 20\]            | 41 34 20   |
| \[27, 19, 42, 2, 13, 45, 48\] | 48         |

## **14. Equal Sums**

Write a function that determines if there exists an element in the array
of numbers such that the sum of the elements on its **left** is
**equal** to the sum of the elements on its **right**.

If there are **NO elements to the left/right**, their **sum is 0**.

Print the **index** that satisfies the required condition or **"no"** if
there is no such index.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>[1, 2, 3, 3]</td>
<td>2</td>
<td><p>At a[2] -&gt; left sum = 3, right sum = 3</p>
<p>a[0] + a[1] = a[3]</p></td>
</tr>
<tr class="even">
<td>[1, 2]</td>
<td>no</td>
<td><p>At a[0] -&gt; left sum = 0, right sum = 2</p>
<p>At a[1] -&gt; left sum = 1, right sum = 0</p>
<p>No such index exists</p></td>
</tr>
<tr class="odd">
<td>[1]</td>
<td>0</td>
<td>At a[0] -&gt; left sum = 0, right sum = 0</td>
</tr>
<tr class="even">
<td>[1, 2, 3]</td>
<td>no</td>
<td>No such index exists</td>
</tr>
<tr class="odd">
<td>[10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]</td>
<td>3</td>
<td><p>At a[3] -&gt; left sum = 20, right sum = 20</p>
<p>a[0] + a[1] + a[2] = a[4] + a[5] + a[6] + a[7] + a[8] + a[9] + a[10]</p></td>
</tr>
</tbody>
</table>

## **15. Max Sequence of Equal Elements**

Write a function that finds the **longest sequence of equal elements**
in an **array** of numbers.

If several longest sequences exist, print the **leftmost** one.

### Examples

| **Input**                        | **Output** |
| -------------------------------- | ---------- |
| \[2, 1, 1, 2, 3, 3, 2, 2, 2, 1\] | 2 2 2      |
| \[1, 1, 1, 2, 3, 1, 3, 3\]       | 1 1 1      |
| \[4, 4, 4, 4\]                   | 4 4 4 4    |
| \[0, 1, 1, 5, 2, 2, 6, 3, 3\]    | 1 1        |

## **16. Magic Sum**

Write a function, which prints all **unique** pairs in an **array of
integers** whose **sum** is **equal** to a given number.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>[1, 7, 6, 2, 19, 23],</p>
<p>8</p></td>
<td><p>1 7</p>
<p>6 2</p></td>
</tr>
<tr class="even">
<td><p>[14, 20, 60, 13, 7, 19, 8],</p>
<p>27</p></td>
<td><p>14 13</p>
<p>20 7</p>
<p>19 8</p></td>
</tr>
<tr class="odd">
<td><p>[1, 2, 3, 4, 5, 6],</p>
<p>6</p></td>
<td><p>1 5</p>
<p>2 4</p></td>
</tr>
</tbody>
</table>

## **17. \*Dungeonest Dark**

*As a young adventurer, you seek gold and glory in the darkest dungeons
there are.*

You have **initial health 100** and **initial coins 0**. You will be
given **a string,** representing the **dungeon's rooms**. Each room is
separated with **'|'** (vertical bar): **"room1|room2|room3…"**

Each room contains - an **item** or a **monster**; and a number. They
are separated by a single space.

(**"item/monster** **number"**).

  - If the first part is **"potion":**
    
      - You are healed with the number in the second part. However, your
        health **cannot exceed** your **initial health (100)**.
    
      - Print: **\`You** **healed** **for** **{healing-number}**
        **hp.\`**

<!-- end list -->

  - After that, print your current health: **\`Current** **health:**
    **{number}** **hp.\`**

<!-- end list -->

  - If the first part is **"chest"**:
    
      - You have found some coins, the number in the second part.
    
      - Print: **\`You** **found** **{coins}** **coins.\`**

  - In any other case, you are facing a monster, you are going to fight.

The second part of the room contains the attack of the monster, and the
first the monster's name. You should remove the monster's attack from
your health.

  - If you are not dead (**health \> 0**) you have slain the monster,
    and you should print:

**\`You slayed** **{monster-name}.\`**

  - If you have died, print: **\`You died\! Killed by
    {monster-name}.\`** and your quest is over.

> Print the best room you\`ve to manage to reach: **\`Best room:
> {room}\`**.

  - If you managed to go through all the rooms in the dungeon, print on
    the next three lines:

> **"You've** **made** **it\!"**
> 
> **"Coins:** **{coins}"**
> 
> **"Health:** **{health}"**

### Input

You receive an array with one element- string, representing the
dungeon's rooms, separated with **'|'** (vertical bar):
\["**room1|room2|room3…**"\].

### Output

Print the corresponding messages, described above.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]</td>
<td><p>You slayed rat.</p>
<p>You slayed bat.</p>
<p>You healed for 10 hp.</p>
<p>Current health: 80 hp.</p>
<p>You slayed rat.</p>
<p>You found 100 coins.</p>
<p>You died! Killed by boss.</p>
<p>Best room: 6</p></td>
</tr>
<tr class="even">
<td>["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]</td>
<td><p>You slayed cat.</p>
<p>You healed for 10 hp.</p>
<p>Current health: 100 hp.</p>
<p>You slayed orc.</p>
<p>You found 10 coins.</p>
<p>You slayed snake.</p>
<p>You found 110 coins.</p>
<p>You've made it!</p>
<p>Coins: 120</p>
<p>Health: 65</p></td>
</tr>
</tbody>
</table>

*...\!* *a game where every hero wins the day with shiny armor and a
smile...*

## **18. \* Ladybugs**

You are **given a field size** and the **indexes of ladybugs** inside
the field. A **ladybug changes its position** either to its **left or to
its right** **by a given fly length**. A **command to a ladybug** looks
like this: "**0 right 1**". This means that the little insect placed on
index 0 should fly one index to its right. If the ladybug **lands on a
fellow ladybug**, it **continues to fly** in the same direction **by the
same fly length**. If the ladybug **flies out of the field, it is
gone**.

For example, imagine you are given a field with size 3 and ladybugs on
indexes 0 and 1. If the ladybug on index 0 needs to fly to its right by
the length of 1 (0 right 1) it will attempt to land on index 1 but as
there is another ladybug there it will continue further to the right by
an additional length of 1, landing on index 2. After that, if the same
ladybug needs to fly to its right by the length of 1 (2 right 1), it
will land somewhere outside of the field, so it flies away:

![](media/image1.png)

If you are given a ladybug index that does not have a ladybug there,
nothing happens. If you are given a ladybug index that is outside the
field, nothing happens.

Your job is to create the program, simulating the ladybugs flying around
doing nothing. In the end, **print all cells in the field separated by
blank spaces**. For each cell that has a ladybug on it print '**1**' and
for each empty cell print '**0**'. For the example above, the output
should be **'0 1 0'**.

### Input

  - You will receive an **array of strings** and the first element is an
    **integer** – the **size** of the field

<!-- end list -->

  - The second element is a **string** containing the initial
    **indexes** of all ladybugs separated by a blank space. **The given
    indexes** may or may not be inside the field range

  - The next elements in the **array** are commands in the format:
    "**{ladybug index} {direction} {fly length}**"

### Output

  - Print the **all cells within the field in format: \`{cell} {cell} …
    {cell}\`**
    
      - If a cell has a ladybug in it, print **'1'**
    
      - If a cell is empty, print **'0'**

### Constrains

  - The size of the field will be in the range \[0 … 1000\]

  - The ladybug indexes will be in the range \[-2,147,483,647 …
    2,147,483,647\]

  - The number of commands will be in the range \[0 … 100\]

  - The fly length will be in the range \[-2,147,483,647 …
    2,147,483,647\]

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th><strong>Comments</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[ 3, '0 1',</strong></p>
<p><strong>'0 right 1',</strong></p>
<p><strong>'2 right 1' ]</strong></p></td>
<td><strong>0 1 0</strong></td>
<td><p><strong>1 1 0 - Initial field</strong></p>
<p><strong>0 1 1 - field after "0 right 1"</strong></p>
<p><strong>0 1 0 - field after "2 right 1"</strong></p></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>[ 3, '0 1 2',</strong></p>
<p><strong>'0 right 1',</strong></p>
<p><strong>'1 right 1',</strong></p>
<p><strong>'2 right 1']</strong></p></td>
<td><strong>0 0 0</strong></td>
<td></td>
<td><p><strong>[ 5, '3',</strong></p>
<p><strong>'3 left 2',</strong></p>
<p><strong>'1 left -2']</strong></p></td>
<td><strong>0 0 0 1 0</strong></td>
</tr>
</tbody>
</table>

#
