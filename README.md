# Deprintify

Modern Debug Printing

Too lazy to learn PDB? Tired of manually doing print statement debugging? Let Deprintify do the work for you.

## Usage
Install as VSCode Extension

Ex.
```Python
a = 5
b = 2
c = a + b
b = 'hello world'
```

Highlight => `Alt+D` =>

```Python
a = 5
print('a is now:', a)
b = 2
print('b is now:', b)
c = a + b
print('c is now:', c)
b = 'hello world'
print('b is now:', b)
```
