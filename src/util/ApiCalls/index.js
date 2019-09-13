export const headerInfoWithoutAuth = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

export const userLoginPost = async formData => {
  console.log(formData);
  try {
    const response = await fetch('https://provider-minder.herokuapp.com/api/v1/authenticate', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: headerInfoWithoutAuth,
    });
    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
};

export const createUser = async formData => {
  try {
    const response = await fetch(
      'https://provider-minder.herokuapp.com/api/v1/user_create',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: headerInfoWithoutAuth,
      }
    );
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const confirmUser = async code => {
  console.log(code)
  try {
    const response = await fetch(
      `https://provider-minder.herokuapp.com/user_confirmations/${code}/confirm_email`,
      {
        method: 'GET',
        // body: JSON.stringify(code),
        headers: headerInfoWithoutAuth,
      }
    );
    const confirmationResponse = await response.json();
    return confirmationResponse;
  } catch (error) {
    throw error;
  }
};