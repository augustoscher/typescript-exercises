type Doc = {
  id: number
  artifact: string
  title?: string
  body?: string
}

class LRUCache {
  public capacity: number;
  private cache: Map<string, Doc>;

  constructor(capacity: number){
    this.capacity = capacity
    this.cache = new Map()
  }

  set(key: string, value: Doc): void {
    //if we're at capacity, we need to remove the least-recently-used item:
    if (this.cache.size >= this.capacity) {
      const leastRecentlyUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastRecentlyUsedKey);
    }
    // even so, we need to reinsert the value in the cache to make it more recently used.
    this.cache.delete(key);
    this.cache.set(key, value)
  }

  get(key: string): Doc {
    if (this.cache.has(key)) {
      // we need to make it more recently used
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
  }

  log(): void {
    console.log(this.cache)
  }
}

const cache = new LRUCache(5);
cache.set('a', { id: 1, artifact: 'JURISPRUDENCIA' });
cache.set('b', { id: 2, artifact: 'JURISPRUDENCIA' });
cache.set('c', { id: 3, artifact: 'JURISPRUDENCIA' });
cache.log(); // a is the least-recently used

console.log(cache.get("b"));
cache.log(); // /b is the more recently used

cache.set("a", { id: 111, artifact: 'JURISPRUDENCIA' }); // a is the more recent used
cache.log();

cache.set('d', { id: 4, artifact: 'JURISPRUDENCIA' });
cache.set('e', { id: 5, artifact: 'JURISPRUDENCIA' });
cache.log();

// c is the least-recently used, so if we add a new value, it should be removed:
cache.set('f', { id: 6, artifact: 'JURISPRUDENCIA' });
cache.log();