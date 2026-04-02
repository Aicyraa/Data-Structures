# Hash Table

A hash table implementation with O(1) average-time lookups using chaining for collision resolution.

![Data Structure](https://img.shields.io/badge/type-hash%20table-blue.svg)
![Time](https://img.shields.io/badge/time-O(1)%20avg-green.svg)
![Space](https://img.shields.io/badge/space-O(n)-orange.svg)
![Load Factor](https://img.shields.io/badge/load%20factor-0.75-purple.svg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Complexity Analysis](#complexity-analysis)

## Overview

A **Hash Table** maps keys to values using a hash function. It provides average O(1) time complexity for insert, delete, and lookup operations.

```
key: 'apple'  →  hash()  →  index 4  →  { key: 'apple', value: 'red' }
```

### Key Characteristics

- **Default Capacity**: 16 buckets
- **Load Factor**: 0.75 — capacity doubles when exceeded
- **Collision Resolution**: Chaining (linked list at each bucket)
- **Dynamic Resizing**: Automatically grows when load factor is exceeded

## Features

- Set and get key-value pairs
- Check if a key exists
- Remove entries
- Get all keys, values, or entries
- Automatic capacity management

## Installation

```bash
cd hashTable
```

## Usage

### Basic Example

```javascript
const HashMap = require('./hashTable')

const map = new HashMap()

// Set key-value pairs
map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('grape', 'purple')

// Get a value
const entry = map.get('apple')
console.log(entry.value)  // 'red'

// Check if key exists
map.has('banana')  // true
map.has('tiger')   // false

// Remove an entry
map.remove('grape')  // true

// Get size
console.log(map.size())  // 2
```

### Output Example

```javascript
const map = new HashMap()
map.set('apple', 'red')
map.set('banana', 'yellow')

console.log(map.keys())    // ['apple', 'banana']
console.log(map.values())  // ['red', 'yellow']
console.log(map.entries()) // [['apple', 'red'], ['banana', 'yellow']]
```

## API Reference

### Class: HashMap

#### Constructor

```javascript
const map = new HashMap()
```

Creates a new empty Hash Table with default capacity of 16.

---

#### set(key, value)

Inserts or updates a key-value pair. Doubles capacity if load factor is exceeded.

**Parameters:**
- `key` (*): The key to store
- `value` (*): The value to associate with the key

**Example:**
```javascript
map.set('apple', 'red')
map.set('banana', 'yellow')
```

---

#### get(key)

Returns the bucket entry for the given key.

**Parameters:**
- `key` (*): The key to look up

**Returns:** `{ key, value }` object or `undefined` if not found

**Example:**
```javascript
map.get('apple')   // { key: 'apple', value: 'red' }
map.get('tiger')   // undefined
```

---

#### has(key)

Checks if a key exists in the hash table.

**Parameters:**
- `key` (*): The key to check

**Returns:** `boolean` - True if found, false otherwise

**Example:**
```javascript
map.has('apple')   // true
map.has('tiger')   // false
```

---

#### remove(key)

Removes the entry at the given key.

**Parameters:**
- `key` (*): The key to remove

**Returns:** `boolean` - True on success, false if not found

**Example:**
```javascript
map.remove('apple')   // true
map.remove('tiger')   // false
```

---

#### size()

Returns the number of stored entries.

**Returns:** `number` - Current number of key-value pairs

**Example:**
```javascript
map.size()   // 2
```

---

#### clear()

Removes all entries from the map.

**Example:**
```javascript
map.clear()
console.log(map.size())  // 0
```

---

#### keys()

Returns an array of all keys.

**Returns:** `Array` - Array containing all keys

**Example:**
```javascript
map.keys()   // ['apple', 'banana']
```

---

#### values()

Returns an array of all values.

**Returns:** `Array` - Array containing all values

**Example:**
```javascript
map.values()   // ['red', 'yellow']
```

---

#### entries()

Returns an array of `[key, value]` pairs.

**Returns:** `Array` - Array of `[key, value]` arrays

**Example:**
```javascript
map.entries()   // [['apple', 'red'], ['banana', 'yellow']]
```

---

#### capacity()

Returns the current capacity (number of buckets).

**Returns:** `number` - Current bucket capacity

**Example:**
```javascript
map.capacity()   // 16 (default)
```

## Examples

### Building a Phone Book

```javascript
const HashMap = require('./hashTable')

const phoneBook = new HashMap()

phoneBook.set('Alice', '555-1234')
phoneBook.set('Bob', '555-5678')
phoneBook.set('Charlie', '555-9012')

console.log(phoneBook.has('Bob'))        // true
console.log(phoneBook.get('Alice').value) // '555-1234'
console.log(phoneBook.size())            // 3
```

### Word Frequency Counter

```javascript
const HashMap = require('./hashTable')

const wordCount = new HashMap()
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

words.forEach(word => {
  const entry = wordCount.get(word)
  const count = entry ? entry.value : 0
  wordCount.set(word, count + 1)
})

console.log(wordCount.entries())
// [['apple', 3], ['banana', 2], ['orange', 1]]
```

### Dynamic Resizing

```javascript
const HashMap = require('./hashTable')

const map = new HashMap()
console.log(map.capacity())  // 16

// Add more than 12 entries (16 * 0.75 load factor)
for (let i = 0; i < 20; i++) {
  map.set(`key${i}`, `value${i}`)
}

console.log(map.capacity())  // 32 (doubled)
console.log(map.size())      // 20
```

## Complexity Analysis

| Operation | Average Case | Worst Case |
|-----------|--------------|------------|
| Search | O(1) | O(n) |
| Insert | O(1) | O(n) |
| Delete | O(1) | O(n) |

**Note:** Worst case occurs when all keys hash to the same bucket (hash collision).

### Space Complexity

- **Space:** O(n) for storing n key-value pairs
- **Buckets:** O(capacity) for the underlying array

### Load Factor Impact

```
Load Factor = n / capacity

When loadFactor > 0.75:
  → Double capacity
  → Rehash all entries
  → Maintain O(1) average performance
```

## Testing

Run tests from the root directory:

```bash
npm test -- hashTable
```

Or run directly:

```bash
node hashTable.test.js
```

## Files

| File | Description |
|------|-------------|
| `hashTable.js` | Main HashMap class implementation |
| `main.js` | Example usage script |
| `hashTable.test.js` | Test suite |

---

[Back to main README](../README.md)
