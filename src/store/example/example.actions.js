export const TYPES = {
  EXAMPLE: 'EXAMPLE',
  EXAMPLE_2: 'EXAMPLE_2',
  EXAMPLE_2_SUCCESS: 'EXAMPLE_2_SUCCESS'
};

export const example = () => ({ type: TYPES.EXAMPLE });
export const example2 = amount => ({ type: TYPES.EXAMPLE_2, amount });
export const example2Success = amount => ({ type: TYPES.EXAMPLE_2_SUCCESS, amount });
