class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((e) => e != observer);
  }

  notify(object) {
    this.observers.forEach((observer) => {
      observer.notify(object);
    });
  }
}

export default Subject;