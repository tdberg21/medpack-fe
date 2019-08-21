export const headerInfoWithoutAuth = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

export const userLogin = async formData => {
  try {
    const response = await fetch('apiURL', {
      method: 'POST',
      formData: JSON.stringify(formData),
      headers: headerInfoWithoutAuth,
    });
    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
};
