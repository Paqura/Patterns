class CustomPromise {
  constructor(logger) {
    this.logger = logger;
  }

  log(data) {
    this.logger(data);
  }
}

const customPromise = new CustomPromise((data) => {
  console.log(data);
});

customPromise.log('print to console');