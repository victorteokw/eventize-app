let EventDefinitionTable = require('./EventDefinitionTable');
let EventDefinition = require('./EventDefinition');
let EventExecutor = require('./EventExecutor');
let EventItem = require('./EventItem');

class EventManager extends Object {
  constructor() {
    super();
    this.table = new EventDefinitionTable();
    this.executor = new EventExecutor({table: this.table});
  }

  defineEvent(desc) {
    let ed = new EventDefinition(desc);
    this.table.set(ed);
  }

  executeEvent(identifier, params) {
    let item = new EventItem({identifier, params});
    this.executor.execute(item);
  }
}

EventManager.defaultManager = new EventManager();

module.exports = EventManager;
