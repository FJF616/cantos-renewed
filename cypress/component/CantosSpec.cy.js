import CantosText from "../../src/CantosText";
describe("CantosSpec.cy.js", () => {
  it("generates a randomized list of canto entries", () => {
    cy.mount(<CantosText />);
  });
});
