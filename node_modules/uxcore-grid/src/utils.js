import styleMaps from './StyleMaps';

function isGridProp(propName) {
  const field = ['Pull', 'Offset', 'Push'];
  const styleKeys = Object.keys(styleMaps.SIZES);
  const styleValues = [];
  for (let i = 0; i < styleKeys.length; i++) {
    styleValues.push(styleMaps.SIZES[styleKeys[i]]);
  }
  const len = styleValues.length;
  const gridProps = [...styleValues];
  let state = false;
  field.forEach((value) => {
    for (let i = 0; i < len; i++) {
      gridProps.push(styleValues[i] + value);
    }
  });

  gridProps.forEach((value) => {
    if (value === propName) {
      state = true;
    }
  });
  return state;
}

function splitGridProps(props) {
  const elementProps = [];
  const getGridProps = {};
  const propName = Object.keys(props);
  for (let i = 0; i < propName.length; i++) {
    if (!isGridProp(propName[i])) {
      elementProps[propName[i]] = props[propName[i]];
    } else {
      getGridProps[propName[i]] = props[propName[i]];
    }
  }
  return [elementProps, getGridProps];
}

export default { splitGridProps };
