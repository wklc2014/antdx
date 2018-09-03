export function getAddValues({ values = {}, ext = {} }) {
  const { addValuesId = [] } = ext;
  const addValues = {};
  const newIds = [...addValuesId];

  newIds.forEach((id) => {
    addValues[id] = values[id];
  })

  return addValues;
}
