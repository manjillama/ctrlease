---
title: Awesome Blog Post Title
slug: awesome-blog
author: Nikola
date: 2020-07-15
instrument: laser
---

## Introduction to my blog post

Great content of my first blog

```java
/**
* BAD EXAMPLE
*/
class Journal {
    private final List<String> entries = new ArrayList<>();
    private static int count = 0;

    public void addEntry(String text) {
        entries.add("" + (++count) + ": " + text);
    }

    public void removeEntry(int index) {
        entries.remove(index);
    }

    @Override
    public String toString() {
        return String.join(System.lineSeparator(), entries);
    }


    public void saveToFile(String text, String filename, boolean overwrite) throws FileNotFoundException {
        // Omitted
    }


    public void loadFromFile(String filename) {
        // Omitted
    }
}
```
