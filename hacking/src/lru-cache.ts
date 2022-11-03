type Doc = {
  title: string
  body: string
  artifact: string
}

class LRUCache {
  public capacity: number;
  private cache: Map<string, Doc>;

  constructor(capacity: number){
    this.capacity = capacity
    this.cache = new Map()
  }

  set(key: string, value: Doc): void {

  }

  get(key: string): Doc {

    return {
      title: 'asd',
      body: 'asd',
      artifact: 'asd'
    }
  }

  log(): void {
    console.log(this.cache)
  }
}