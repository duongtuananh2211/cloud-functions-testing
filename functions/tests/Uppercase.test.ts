var assert = require("assert");
require("mocha");
import { removeAllDocsWithPath } from "../utilities/index";
import { Admin } from "../src/index";

const adminTest = require("firebase-functions-test")(
  {
    databaseURL: "https://cloud-functions-testing-2fcf3.firebaseio.com",
    storageBucket: "cloud-functions-testing-2fcf3.appspot.com",
    projectId: "cloud-functions-testing-2fcf3",
  },
  "/home/anhduong/projects/personal/cloud-functions-testing/functions/tests/service-account.json"
);

describe("Array", function () {
  let myFunctions: any;

  this.beforeAll(() => {
    myFunctions = require("../src/index.ts");
  });

  this.afterAll(async () => {
    await removeAllDocsWithPath("uppercase");
    adminTest.cleanup();
  });

  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", async function () {
      const snap = adminTest.firestore.makeDocumentSnapshot(
        { text: "bar" },
        "uppercase/1"
      );

      const wrap = adminTest.wrap(myFunctions.uppercase);
      await wrap(snap);

      const result = await Admin.firestore()
        .collection("uppercase")
        .doc("1")
        .get();
      assert.equal("BAR", result.data().text);
    });
  });
});
