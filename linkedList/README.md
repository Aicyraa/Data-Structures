# Linked List

A singly linked list implementation with full CRUD operations and traversal methods.

![Data Structure](https://img.shields.io/badge/type-linear%20list-blue.svg)
![Time](https://img.shields.io/badge/time-O(n)%20lookup-green.svg)
![Space](https://img.shields.io/badge/space-O(n)-orange.svg)
![Dynamic](https://img.shields.io/badge/dynamic-yes-purple.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Complexity Analysis](#complexity-analysis)

## Overview

A **Linked List** is a linear data structure where each element (node) holds a value and a reference to the next node in the sequence. Unlike arrays, nodes are not stored in contiguous memory — they are linked together via pointers.

```
( Bird ) -> ( Cat ) -> ( Dog ) -> null
```

Each node is an instance of `Node`, which stores:
- `data` — the value held by the node
- `neighbor` — a reference to the next node (`null` if last)

### Key Characteristics

- **Dynamic Size**: Grows and shrinks at runtime
- **Sequential Access**: Elements accessed in order
- **No Random Access**: Must traverse from head
- **Efficient Insertions**: O(1) at head/tail with proper pointers

## Features

- Prepend and append nodes
- Insert at specific indices
- Remove nodes at specific indices
- Pop from head
- Check if value exists
- Get node at index
- Full traversal support

## Installation

```bash
cd linkedList
```

## Usage

### Basic Example

```javascript
const LinkedList = require('./linkedList')

const list = new LinkedList()

// Add elements
list.append('Bird')    // ( Bird ) -> null
list.append('Cat')     // ( Bird ) -> ( Cat ) -> null
list.prepend('Ant')    // ( Ant ) -> ( Bird ) -> ( Cat ) -> null

// Access elements
console.log(list.head)     // 'Ant'
console.log(list.tail)     // 'Cat'
console.log(list.size())   // 3

// Search
console.log(list.contains('Cat'))  // true
console.log(list.indexof('Cat'))   // 1
```

### Output Visualization

```
( Ant ) -> ( Bird ) -> ( Cat ) -> null
   ↑                      ↑
  head                  tail
```

## API Reference

### Class: LinkedList

#### Constructor

```javascript
const list = new LinkedList()
```

Creates a new empty Linked List.

---

#### prepend(value)

Inserts a new node at the **head** of the list.

**Parameters:**
- `value` (*): The value to insert

**Example:**
```javascript
list.prepend('Dog')   // ( Dog ) -> null
list.prepend('Cat')   // ( Cat ) -> ( Dog ) -> null
```

---

#### append(value)

Inserts a new node at the **tail** of the list.

**Parameters:**
- `value` (*): The value to insert

**Example:**
```javascript
list.append('Lion')   // ( Cat ) -> ( Dog ) -> ( Lion ) -> null
```

---

#### size()

Returns the total number of nodes.

**Returns:** `number` - Current length of the list

**Example:**
```javascript
list.size()   // 3
```

---

#### head

Returns the data of the **first** node.

**Returns:** `*` - Data of head node, or `null` if empty

**Example:**
```javascript
list.head   // 'Cat'
```

---

#### tail

Returns the data of the **last** node.

**Returns:** `*` - Data of tail node, or `null` if empty

**Example:**
```javascript
list.tail   // 'Lion'
```

---

#### at(index)

Returns the value at the given index. Returns `undefined` if out of bounds.

**Parameters:**
- `index` (number): The index to access

**Returns:** `*` - Value at index, or `undefined` if out of bounds

**Example:**
```javascript
list.at(0)   // 'Cat'
list.at(99)  // undefined
```

---

#### pop()

Removes and returns the **head** node's data.

**Returns:** `*` - Data of removed head node, or `null` if empty

**Example:**
```javascript
list.pop()   // 'Cat'
```

---

#### contains(value)

Returns `true` if the value exists in the list, `false` otherwise.

**Parameters:**
- `value` (*): The value to search for

**Returns:** `boolean` - True if found, false otherwise

**Example:**
```javascript
list.contains('Dog')    // true
list.contains('Tiger')  // false
```

---

#### indexof(value)

Returns the index of the first node with the given value, or `-1` if not found.

**Parameters:**
- `value` (*): The value to find

**Returns:** `number` - Index of value, or `-1` if not found

**Example:**
```javascript
list.indexof('Dog')    // 1
list.indexof('Tiger')  // -1
```

---

#### insertAt(index, ...values)

Inserts one or more values starting at the given index.

**Parameters:**
- `index` (number): The position to insert at
- `...values` (*): One or more values to insert

**Example:**
```javascript
list.insertAt(1, 'Parrot')
// ( Cat ) -> ( Parrot ) -> ( Dog ) -> ( Lion ) -> null
```

---

#### removeAt(index)

Removes the node at the given index.

**Parameters:**
- `index` (number): The index to remove

**Returns:** `*` - Data of removed node, or `null` if not found

**Example:**
```javascript
list.removeAt(1)
// ( Cat ) -> ( Dog ) -> ( Lion ) -> null
```

---

### Class: Node

Represents a node in the linked list.

```javascript
const Node = require('./node')
const node = new Node('value')
```

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `data` | * | The value stored in the node |
| `neighbor` | Node\|null | Reference to next node |

## Examples

### Building a Playlist

```javascript
const LinkedList = require('./linkedList')

const playlist = new LinkedList()

playlist.append('Song A')
playlist.append('Song B')
playlist.append('Song C')
playlist.prepend('Intro')

console.log playlist.size())        // 4
console.log(playlist.contains('Song B'))  // true
console.log(playlist.indexof('Song C'))   // 3
```

### Stack Operations (LIFO)

```javascript
const LinkedList = require('./linkedList')

const stack = new LinkedList()

stack.push('Task 1')
stack.push('Task 2')
stack.push('Task 3')

console.log(stack.pop())  // 'Task 3'
console.log(stack.pop())  // 'Task 2'
console.log(stack.size()) // 1
```

### Insert and Remove at Index

```javascript
const LinkedList = require('./linkedList')

const list = new LinkedList()
list.append('A')
list.append('B')
list.append('D')

// Insert 'C' at index 2
list.insertAt(2, 'C')
// A -> B -> C -> D

// Remove 'B' at index 1
list.removeAt(1)
// A -> C -> D

console.log(list.at(1))  // 'C'
```

### Queue Operations (FIFO)

```javascript
const LinkedList = require('./linkedList')

const queue = new LinkedList()

queue.append('Customer 1')
queue.append('Customer 2')
queue.append('Customer 3')

// Serve customers in order
console.log(queue.pop())  // 'Customer 1'
console.log(queue.pop())  // 'Customer 2'
```

## Complexity Analysis

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Access | O(n) | O(n) |
| Search | O(n) | O(n) |
| Insert at Head | O(1) | O(1) |
| Insert at Tail | O(1) | O(1) |
| Insert at Index | O(n) | O(n) |
| Delete at Head | O(1) | O(1) |
| Delete at Index | O(n) | O(n) |

### Space Complexity

- **Space:** O(n) for storing n nodes
- **Each Node:** O(1) - stores data + one pointer

### Why O(n) Access?

```
To access index 5:
head -> node[0] -> node[1] -> node[2] -> node[3] -> node[4] -> node[5]
         ↑          ↑          ↑          ↑          ↑          ↑
      1 step     2 steps    3 steps    4 steps    5 steps    6 steps

Must traverse from head - no random access like arrays
```

## Testing

Run tests from the root directory:

```bash
npm test -- linkedList
```

Or run directly:

```bash
node linkedlist.test.js
```

## Files

| File | Description |
|------|-------------|
| `node.js` | Node class definition |
| `linkedList.js` | Main LinkedList class implementation |
| `main.js` | Example usage script |
| `linkedlist.test.js` | Test suite |

---

[Back to main README](../README.md)
