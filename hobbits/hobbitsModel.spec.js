const Hobbits = require("./hobbitsModel");

const db = require("../data/dbConfig");

describe("hobbits model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });

  it("should set environment to testing", () => {
    expect(process.env.NODE_ENV).toBe("test");
  });

  describe("insert()", () => {
    it("should insert hobbits into the db", async () => {
      const [id] = await Hobbits.insert({ name: "Gaffer" });

      let hobbit = await db("hobbits")
        .where({ id })
        .first();

      expect(hobbit.name).toBe("Gaffer");
    });
  });
});
