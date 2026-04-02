# Binary Search Tree

A balanced Binary Search Tree (BST) implementation with insert, delete, search, and visualization capabilities.

![BST](https://img.shields.io/badge/structure-BST-blue.svg)
![Time](https://img.shields.io/badge/time-O(log%20n)-green.svg)
![Space](https://img.shields.io/badge/space-O(log%20n)-orange.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Complexity Analysis](#complexity-analysis)

## Overview

This Binary Search Tree implementation automatically balances itself when constructed from an array. It uses in-order successor replacement for deletion, ensuring the BST property is maintained.

### Key Characteristics

- **Binary Search Property**: Left children < Parent < Right children
- **Balanced Construction**: Building from array creates a height-balanced tree
- **In-order Successor**: Two-child deletion uses minimum of right subtree

## Features

- Insert values into the tree
- Delete values with proper rebalancing
- Search for values (includes method)
- Visual tree printing
- Automatic balancing when setting root from array

## Installation

```bash
cd binary-search
```

## Usage

### Basic Example

```javascript
const Tree = require('./tree')

const bst = new Tree()

// Build a balanced tree from an array
bst.root = [8, 3, 10, 1, 6, 14, 4, 7, 13]

// Search for a value
bst.includes(6)  // true
bst.includes(5)  // undefined (not found)

// Insert a new value
bst.insert(5)

// Delete a value
bst.deleteItem(3)

// Visualize the tree
bst.prettyPrint()
```

### Output Visualization

```
│   ┌── 14
│── 13
│   └── 10
┌── 8
│   │   ┌── 7
│   │── 6
│   │   └── 4
└── 3
    └── 1
```

## API Reference

### Class: Tree

#### Constructor

```javascript
const bst = new Tree()
```

Creates a new empty Binary Search Tree.

---

#### set root(arr)

Sets the root by building a balanced BST from a sorted array.

**Parameters:**
- `arr` (number[]): Array of values to build the tree from

**Example:**
```javascript
bst.root = [5, 2, 8, 1, 3]
```

---

#### insert(value, node)

Inserts a value into the BST.

**Parameters:**
- `value` (*): The value to insert
- `node` (Node|null): Current node in recursion (default: root)

**Example:**
```javascript
bst.insert(42)
```

---

#### deleteItem(value, parentNode, node, isLeft)

Deletes a value from the BST.

**Parameters:**
- `value` (*): The value to delete
- `parentNode` (Node|null): Parent of current node
- `node` (Node|null): Current node in recursion
- `isLeft` (boolean): Whether current node is a left child

**Example:**
```javascript
bst.deleteItem(5)
```

---

#### includes(value, node)

Checks if a value exists in the tree.

**Parameters:**
- `value` (*): The value to search for
- `node` (Node|null): Current node in recursion (default: root)

**Returns:** `boolean|undefined` - True if found, undefined if not

**Example:**
```javascript
bst.includes(42)  // true or undefined
```

---

#### prettyPrint(node, prefix, isLeft)

Prints the BST in a visual tree format.

**Parameters:**
- `node` (Node|null): Current node to print
- `prefix` (string): Prefix string for indentation
- `isLeft` (boolean): Whether the node is a left child

**Example:**
```javascript
bst.prettyPrint()  // Prints entire tree
```

---

### Class: Node

Represents a node in the binary search tree.

```javascript
const Node = require('./node')
const node = new Node(5)
```

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `data` | * | The value stored in the node |
| `left` | Node\|null | Left child node |
| `right` | Node\|null | Right child node |

## Examples

### Building and Traversing a Tree

```javascript
const Tree = require('./tree')

const bst = new Tree()
bst.root = [10, 5, 15, 3, 7, 12, 18]

console.log('Tree structure:')
bst.prettyPrint()

console.log('Searching for 7:', bst.includes(7))   // true
console.log('Searching for 9:', bst.includes(9))   // undefined
```

### Deletion Cases

```javascript
const Tree = require('./tree')

const bst = new Tree()
bst.root = [20, 10, 30, 5, 15, 25, 35]

// Case 1: Delete leaf node
bst.deleteItem(5)

// Case 2: Delete node with one child
bst.deleteItem(10)

// Case 3: Delete node with two children
bst.deleteItem(30)

bst.prettyPrint()
```

## Complexity Analysis

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

**Note:** Worst case occurs when the tree becomes unbalanced (skewed).

### Space Complexity

- **Search/Insert/Delete:** O(log n) average (recursion stack)
- **Space:** O(n) for storing n nodes

## Testing

Run tests from the root directory:

```bash
npm test -- binary-search
```

Or run directly:

```bash
node code.test.js
```

## Files

| File | Description |
|------|-------------|
| `tree.js` | Main Tree class implementation |
| `node.js` | Node class definition |
| `main.js` | Example usage script |
| `code.test.js` | Test suite |

---

[Back to main README](../README.md)
