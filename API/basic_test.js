import request from "supertest";
import app from "../node_modules/mock-user-auth/app.js";

describe("GET /api", () => {
  it("responds with json", (done) => {
    request(app)
      .get("/api")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
