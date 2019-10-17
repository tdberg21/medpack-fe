export const headerInfoWithoutAuth = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*"
};

export const headerInfoWithAuth = token => ({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  AUTHORIZATION: token
});

export const userLoginPost = async formData => {
  console.log(formData);
  try {
    const response = await fetch("http://localhost:3001/api/v1/authenticate", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: headerInfoWithoutAuth
    });
    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
};

export const createUser = async formData => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user_create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: headerInfoWithoutAuth
    });
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const confirmUser = async code => {
  console.log(code);
  try {
    const response = await fetch(
      `http://localhost:3001/user_confirmations/${code}/confirm_email`,
      {
        method: "GET",
        // body: JSON.stringify(code),
        headers: headerInfoWithoutAuth
      }
    );
    const confirmationResponse = await response.json();
    return confirmationResponse;
  } catch (error) {
    throw error;
  }
};

export const getAppointments = async (officeID, token) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/appointments?office_id=${officeID}`,
      {
        method: "GET",
        headers: headerInfoWithAuth(token)
      }
    );
    const events = await response.json();
    return events;
  } catch (error) {
    throw error;
  }
};

export const createAppointment = async (formData, token) => {
  try {
    const response = await fetch(
      "http://localhost:3001/api/v1/appointment_create",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: headerInfoWithAuth(token)
      }
    );
    const message = await response.json();
    return message;
  } catch (error) {
    throw error;
  }
};

export const getPatients = async (token, officeID) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/patients?office_id=${officeID}`,
      {
        method: "GET",
        headers: headerInfoWithAuth(token)
      }
    );
    const patients = await response.json();
    return patients;
    console.log(officeID, patients);
  } catch (error) {
    throw error;
  }
};

export const updateAppointment = async (token, formData) => {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/appointment_update`,
      {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: headerInfoWithAuth(token)
      }
    );
    const message = await response.json();
    console.log(message);
    return message;
  } catch (error) {
    throw error;
  }
};
