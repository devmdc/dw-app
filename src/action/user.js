export const start = () => ({
  type: 'USER_START',
});

export const stop = () => ({
  type: 'USER_STOP',
});

export const setEmpty = () => ({
  type: 'USER_EMPTY_DATA',
});

export const setData = data => ({
  type: 'USER_SET_DATA',
  data: data,
});

export const setEditData = (photo, name) => ({
  type: 'USER_EDIT_DATA',
  photo: photo,
  name: name,
});

export const setDataProfile = (email, whatsapp) => ({
  type: 'USER_SET_PROFILE',
  email,
  whatsapp,
});
