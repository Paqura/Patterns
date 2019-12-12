console.clear();

const future = executor => ({
  chain(fn) {
    return future(resolve => this.fork(
      value => fn(value).fork(resolve)
    ))
  },
  map(fn) {
    return this.chain(value => future.of(fn(value)))
  },
  fork(successed) {
    executor(successed);
    return this;
  },
});

future.of = value => future(resolve => resolve(value));

// применение
future(d => d(5))
  .map(el => el + 2)  
  .fork(console.log)
