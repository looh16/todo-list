export default class Todo {
    static count = 0;

    constructor(completed, description) {
      // eslint-disable-next-line
      this.index = this.constructor.count++;
      this.completed = completed;
      this.description = description;
    }
}