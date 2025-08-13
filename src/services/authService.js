export const signup = (username, email, password) => {
  return fetch("http://localhost:9090/auth/signup", {  // ✅ correct endpoint
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Signup failed");
    }
    return response.text();
  });
};

export const login = (username, password) => {
  return fetch("http://localhost:9090/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Login failed");
    }
    return response.text();
  });
};
