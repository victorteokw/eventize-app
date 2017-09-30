class EventDefinitionTable extends Object {
  constructor() {
    super();
    this.map = new Map();
  }

  set(ed) {
    if (ed.identifier && this.map.has(ed.identifier)) {
      throw `Definition ${ed.identifier} got redefined.`;
    }
    this.map.set(ed.identifier, ed);
  }

  get(identifier) {
    let ed = this.map.get(identifier);
    if (!ed) {
      throw `Definition ${identifier} not found.`;
    }
    return ed;
  }

  has(identifier) {
    return this.map.has(identifier);
  }
}

module.exports = EventDefinitionTable;
