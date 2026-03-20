# Data Structures — Linked List

<!-- IMAGE: Replace the line below with your diagram, e.g.: ![Linked List Diagram](./assets/linkedlist-diagram.png) -->
![Linked List Diagram](./assets/YOUR_IMAGE_HERE.png)

## Overview

A **Linked List** is a linear data structure where each element (node) holds a value and a reference (`neighbor`) to the next node in the sequence. Unlike arrays, nodes are not stored in contiguous memory — they are linked together via pointers.

```
( Bird ) -> ( Cat ) -> ( Dog ) -> null
```

Each node is an instance of `Node`, which stores:
- `data` — the value held by the node
- `neighbor` — a reference to the next node (`null` if last)

---

## Project Structure

```
linkedlist/
├── node.js              # Node class
├── linkedlist.js        # LinkedList class
├── linkedlist.test.js   # Jest tests
└── main.js              # Usage examples
```

---

## API Reference

### `prepend(value)`
Inserts a new node at the **head** of the list.

```js
list.prepend('Dog')   // ( Dog ) -> null
list.prepend('Cat')   // ( Cat ) -> ( Dog ) -> null
```

---

### `append(value)`
Inserts a new node at the **tail** of the list.

```js
list.append('Lion')   // ( Cat ) -> ( Dog ) -> ( Lion ) -> null
```

---

### `size()`
Returns the total number of nodes.

```js
list.size()   // 3
```

---

### `head`
Returns the data of the **first** node.

```js
list.head   // 'Cat'
```

---

### `tail`
Returns the data of the **last** node.

```js
list.tail   // 'Lion'
```

---

### `at(index)`
Returns the value at the given index. Returns `undefined` if out of bounds.

```js
list.at(0)   // 'Cat'
list.at(99)  // undefined
```

---

### `pop()`
Removes and returns the **head** node's data.

```js
list.pop()   // 'Cat'
```

---

### `contains(value)`
Returns `true` if the value exists in the list, `false` otherwise.

```js
list.contains('Dog')    // true
list.contains('Tiger')  // false
```

---

### `indexof(value)`
Returns the index of the first node with the given value, or `-1` if not found.

```js
list.indexof('Dog')    // 1
list.indexof('Tiger')  // -1
```

---

### `insertAt(index, ...values)`
Inserts one or more values starting at the given index.

```js
list.insertAt(1, 'Parrot')
// ( Cat ) -> ( Parrot ) -> ( Dog ) -> ( Lion ) -> null
```

---

### `removeAt(index)`
Removes the node at the given index.

```js
list.removeAt(1)
// ( Cat ) -> ( Dog ) -> ( Lion ) -> null
```

---

## Running Tests

```bash
npm test
```

Tests are written with [Jest](https://jestjs.io/) and cover all methods including edge cases.

---

## License

MIT
