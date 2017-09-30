class EventExecutor extends Object {
  constructor({table}) {
    super();
    this.table = table;
  }

  execute(item) {
    let def = this.table.get(item.identifier);
    let exe = def.execution;
    let next = function() {};
    exe(item.params, next);
  }
}

module.exports = EventExecutor;
