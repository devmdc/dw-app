export const setEmpty = () => ({
  type: 'JP_EMPTY_DATA',
});

export const setInitPos = data => ({
  type: 'JP_INIT_POS',
  data: data,
});

export const setInitLoc = data => ({
  type: 'JP_INIT_LOC',
  data: data,
});

export const setDataPos = data => ({
  type: 'JP_SET_DATA_POS',
  data: data,
});

export const setDataLoc = data => ({
  type: 'JP_SET_DATA_LOC',
  data: data,
});
