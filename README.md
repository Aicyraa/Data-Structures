# Data Structures

A collection of fundamental data structures implemented in JavaScript, designed for learning and reference.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14-green.svg)

## Table of Contents

- [Overview](#overview)
- [Data Structures](#data-structures)
- [Installation](#installation)
- [Testing](#testing)
- [Usage](#usage)

## Overview

This repository contains implementations of classic computer science data structures. Each data structure is self-contained with its own documentation and test suite.

## Data Structures

| Data Structure | Description | Time Complexity | Space Complexity |
|----------------|-------------|-----------------|------------------|
| [Hash Table](hashTable/) | Maps keys to values using hash function | O(1) avg lookup | O(n) |
| [Linked List](linkedList/) | Linear structure with node references | O(n) lookup | O(n) |
| [Binary Search Tree](binary-search/) | Self-balancing BST with ordered storage | O(log n) avg | O(log n) |


## Installation

Clone the repository and install dependencies:

```bash
cd Data-Structures
npm install
```

## Testing

Run the test suite using Jest:

```bash
npm test
```

Run tests for a specific data structure:

```bash
npm test -- hashTable
npm test -- linkedList
npm test -- binary-search
```

## Usage

### Hash Table

```javascript
const HashMap = require('./hashTable/hashTable')

const map = new HashMap()
map.set('apple', 'red')
map.set('banana', 'yellow')

console.log(map.get('apple'))    // { key: 'apple', value: 'red' }
console.log(map.has('banana'))   // true
console.log(map.size())          // 2
```

### Linked List

```javascript
const LinkedList = require('./linkedList/linkedList')

const list = new LinkedList()
list.append('Bird')
list.append('Cat')
list.append('Dog')

console.log(list.size())      // 3
console.log(list.head)        // 'Bird'
console.log(list.contains('Cat'))  // true
```

### Binary Search Tree

```javascript
const Tree = require('./binary-search/tree')

const bst = new Tree()
bst.root = [8, 3, 10, 1, 6, 14, 4, 7, 13]

console.log(bst.includes(6))   // true
bst.insert(5)
bst.deleteItem(3)
bst.prettyPrint()              // Visual tree output
```

---

Built with ❤️ for learning and education
