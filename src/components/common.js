module.exports = {
  appendToList: appendToList,
  createActiveElementsList: createActiveElementsList
};

/**
 * Returns an array with a group of elements added if the group is active
 * @param {boolean} groupState
 * @param {Array} group   - element numbers within the group
 * @param {Array} list    - active element numbers or empty
 * @returns {Array} All active elements
 */
function appendToList(groupState, group, list) {
  if (groupState) {
    group.forEach(i => {
      list.push(i);
    });
  }
  return list;
}

/**
 * Returns all active elements
 * @returns {Array} All active elements
 */
function createActiveElementsList(activeGroups, groups) {
  let active = [];
  active = appendToList(activeGroups[0], groups.s, active);
  active = appendToList(activeGroups[1], groups.p, active);
  active = appendToList(activeGroups[2], groups.d, active);
  active = appendToList(activeGroups[3], groups.f, active);
  return active;
}
