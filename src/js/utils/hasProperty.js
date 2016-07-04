/**
 * Check if 'prop' is a property within object
 * 'object.prototype' won't be checked
 * @param  {Object}  obj  The object reference
 * @param  {String}  prop The property name
 * @return {Boolean}      true will be return if prop is a 'obj' property
 *                             otherwise false will be returned/
 */
function hasProperty (obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}

module.exports = hasProperty
