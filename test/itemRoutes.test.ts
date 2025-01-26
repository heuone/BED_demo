import request from "supertest";
import app from "../src/app";
import * as itemController from "../src/api/v1/controllers/itemController";

jest.mock("../src/api/v1/controllers/itemController", () => ({
    getAllItems: jest.fn((req, res) => res.status(200).send()),
    createItem: jest.fn((req, res) => res.status(200).send()),
    updateItem: jest.fn((req, res) => res.status(200).send()),
    deleteItem: jest.fn((req, res) => res.status(200).send()),
}));

describe("Item Routes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("GET /api/v1/items", () => {
        it("should call getAllitems controller", async () => {
            await request(app).get("/api/v1/items");
            expect(itemController.getAllItems).toHaveBeenCalled();
        });
    });
});

    describe("POST /api/v1/items", () => {
        it("should call createItem controller", async () => {
            const mockItem = {
                name: "Test Item",
                description: "Test description",
            };
            await request(app).post("/api/v1/items").send(mockItem);

            expect(itemController.createItem).toHaveBeenCalled();
        });
    });
    
    describe("PUT /api/v1/items/:id", () => {
        it("should call updateItem controller", async () => {
            const mockItem = {
                name: "Test Item",
                description: "Test description",
            };
            const mockId: number = 1;
            await request(app).put("/api/v1/items/${mockId").send(mockItem);

            expect(itemController.updateItem).toHaveBeenCalled();
        });
    });

    describe("DELETE /api/v1/items/:id", () => {
        it("should call deleteItem controller", async () => {
            const mockId: number = 111;

            await request(app).delete("/api/v1/items/${mockId}");

            expect(itemController.deleteItem).toHaveBeenCalled();
        });
    });