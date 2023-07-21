import "regenerator-runtime/runtime";
import request from "supertest";
import app from "mock-user-auth/app";

let token = "";

describe("CREATE NEW USER /api/v1/users", () => {
  test("should return 200 and message of successful registeration", async () => {
    const response = await request(app).post("/api/v1/users").send({
      name: "david",
      email: "david@gmail.com",
      password: "password"
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "User registered with success" });
  });
});

describe("AUTHENTICATE USER /api/v1/auth", () => {
  test("should return 200 and message of successful authentication", async () => {
    const response = await request(app).post("/api/v1/auth").send({
      email: "david@gmail.com",
      password: "password"
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
    token = response.body.token;
  });
});

describe("GET USER BY TOKEN /api/v1/users", () => {
  test("should return 200 and message of successful authentication", async () => {
    const response = await request(app)
      .get("/api/v1/users")
      .set("Authorization", token);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });
});

describe("PATCH USER BY TOKEN /api/v1/users", () => {
  test("should return 200 and message of successful update", async () => {
    const response = await request(app)
      .patch("/api/v1/users")
      .set("Authorization", token)
      .send({
        name: "new_name",
        email: "new_email@gmail.com",
        password: "new_password"
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
  });
});

// todo : need to fix this one, it doesn't work for some reason :)

describe("DELETE USER BY TOKEN /api/v1/users", () => {
  test("should return 200 and message of successful delete", async () => {
    const response = await request(app)
      .delete("/api/v1/users")
      .set("Authorization", token);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "User deleted with success" });
  });
});

describe("DELETE ALL USERS /api/v1/all-users", () => {
  test("should return 200 and message of successful delete", async () => {
    const response = await request(app).delete("/api/v1/all-users").send({
      key_admin: "keyadmin123"
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Users deleted with success" });
  });
});
