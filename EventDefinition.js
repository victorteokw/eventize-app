class EventDefinition extends Object {
  // identifier: string
  // params: hash
  // execution: function(params, next, failure) third param thinking...
  // options: hash
  constructor(obj) {
    super();
    Object.assign(this, obj);
  }
}

module.exports = EventDefinition;
