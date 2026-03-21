# Data Structures — Hash Table

### Overview

A **Hash Table** maps keys to values using a hash function for O(1) average-time lookups. Internally, keys are hashed to bucket indices where `{ key, value }` pairs are stored.

```
key: 'apple'  →  hash()  →  index 4  →  { key: 'apple', value: 'red' }
```

- Default capacity: `16` buckets
- Load factor: `0.75` — capacity doubles when exceeded

### Project Structure

```
hashTable/
├── hashTable.js   # HashMap class
└── main.js        # Usage examples
```

### Reference

#### `set(key, value)`
Inserts or updates a key-value pair. Doubles capacity if load factor is exceeded.

```js
map.set('apple', 'red')
map.set('banana', 'yellow')
```

#### `get(key)`
Returns the bucket entry `{ key, value }` for the given key.

```js
map.get('apple')   // { key: 'apple', value: 'red' }
```

#### `has(key)`
Returns `true` if the key exists, `false` otherwise.

```js
map.has('apple')   // true
map.has('tiger')   // false
```

#### `remove(key)`
Removes the entry at the given key. Returns `true` on success, `false` if not found.

```js
map.remove('apple')   // true
```

#### `size()`
Returns the number of stored entries.

```js
map.size()   // 1
```

#### `clear()`
Removes all entries from the map.

```js
map.clear()
```

#### `keys()`
Returns an array of all keys.

```js
map.keys()   // ['banana']
```

#### `values()`
Returns an array of all values.

```js
map.values()   // ['yellow']
```

#### `entries()`
Returns an array of `[key, value]` pairs.

```js
map.entries()   // [['banana', 'yellow']]
```
