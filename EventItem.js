let uuid = require('uuid/v1');

class EventItem extends Object {
  // id definitionId status
  // persist if error, otherwise
  // options for persist in memory or not
  constructor(obj) {
    super();
    Object.assign(this, obj);
    if (!this.id) this.id = uuid();
    this.childrenMap = new Map();
    this.childrenSet = new Set();
  }

  addChild(child) {
    this.childrenMap.set(child.id, child);
    this.childrenSet.add(child);
    child.parent = this;
  }

  removeChild(child) {
    this.childrenMap.delete(child.id);
    this.childrenSet.delete(child);
  }
}

module.exports = EventItem;
