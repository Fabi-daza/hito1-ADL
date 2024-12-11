import request from "supertest"
import app from "./index";

describe("GET /products/all", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/products/all");
    expect(response.status).toBe(200);
  });
});

describe("GET /products/1", () => {
  it("should return 200 OK", async () => {
    const response = await request(app).get("/products/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("titulo", "Teclado");
  });
});