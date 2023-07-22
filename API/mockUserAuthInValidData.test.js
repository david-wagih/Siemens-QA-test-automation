import "regenerator-runtime/runtime";
import request from "supertest";
import app from "mock-user-auth/app";

describe("CREATE NEW USER with invalid name /api/v1/users", () => {
  test("should return 400 and message of unsuccessful registeration", async () => {
    const response = await request(app).post("/api/v1/users").send({
      name: 3,
      email: "test1@gmail.com",
      password: "password"
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "the name should only be composed of letters"
    });
  });
});

describe("CREATE NEW USER with invalid email /api/v1/users", () => {
  test("should return 400 and message of unsuccessful registeration", async () => {
    const response = await request(app).post("/api/v1/users").send({
      email: "test2@gmail.com",
      password: "password"
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message:
        "the email is in a wrong form, it should be like this: example@example.com"
    });
  });
});

describe("CREATE NEW USER with missing name /api/v1/users", () => {
  test("should return 400 and message of unsuccessful registeration", async () => {
    const response = await request(app).post("/api/v1/users").send({
      email: "test3@gmail.com",
      password: "password"
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "the name is missing, please provide it"
    });
  });
});

describe("CREATE NEW USER with missing email /api/v1/users", () => {
  test("should return 400 and message of unsuccessful registeration", async () => {
    const response = await request(app).post("/api/v1/users").send({
      name: "test",
      password: "password"
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "the email is missing, please provide it and in a correct form"
    });
  });
});

describe("CREATE NEW USER with missing password /api/v1/users", () => {
  test("should return 400 and message of unsuccessful registeration", async () => {
    const response = await request(app).post("/api/v1/users").send({
      name: "test2",
      email: "test4@gmail.com"
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message:
        "the password is missing, please provide it and according to the mentioned rules"
    });
  });
});

describe("CREATE NEW USER with all three fields missing /api/v1/users", () => {
  test("should return 400 and message of unsuccessful registeration", async () => {
    const response = await request(app).post("/api/v1/users");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message:
        "the name, email and password fields are missing, please provide them"
    });
  });
});

describe("AUTHENTICATE USER using invalid email /api/v1/auth", () => {
  test("should return 401 and message of unsuccessful authentication", async () => {
    const response = await request(app).post("/api/v1/auth").send({
      email: "test@gmail",
      password: "password"
    });
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message:
        "the email is in a wrong form, please provide it in a correct form"
    });
    token = response.body.token;
  });
});

describe("AUTHENTICATE USER using missing email /api/v1/auth", () => {
  test("should return 401 and message of unsuccessful authentication", async () => {
    const response = await request(app).post("/api/v1/auth").send({
      password: "password"
    });
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "the email is missing , please provide it in a correct form"
    });
    token = response.body.token;
  });
});

describe("AUTHENTICATE USER using missing password /api/v1/auth", () => {
  test("should return 401 and message of unsuccessful authentication", async () => {
    const response = await request(app).post("/api/v1/auth").send({
      email: "test@gmail.com"
    });
    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      message: "the password is missing, please provide it."
    });
    token = response.body.token;
  });
});

describe("GET USER BY TOKEN with invalid Authorization Header /api/v1/users", () => {
  test("should return 403 and message of unauthorization", async () => {
    const response = await request(app).get("/api/v1/users");
    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      message: "Unauthorized to get user"
    });
  });
});

describe("PATCH USER BY TOKEN with invalid Authorization Header /api/v1/users", () => {
  test("should return 403 and message of unauthorization", async () => {
    const response = await request(app).patch("/api/v1/users").send({
      name: "new_name",
      email: "new_email@gmail.com",
      password: "new_password"
    });
    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      message: "Unauthorized to update user"
    });
  });
});

describe("DELETE USER BY TOKEN with invalid Authorization Header /api/v1/users", () => {
  test("should return 403 and message of unauthorization", async () => {
    const response = await request(app).delete("/api/v1/users");
    expect(response.status).toBe(403);
    expect(response.body).toEqual({ message: "Unauthorized to delete user" });
  });
});

describe("DELETE ALL USERS without the key admin /api/v1/all-users", () => {
  test("should return 403 and message of successful delete", async () => {
    const response = await request(app).delete("/api/v1/all-users");
    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      message: "Unauthorized to delete all users"
    });
  });
});
