import { NightwatchTests } from "nightwatch";

const home: NightwatchTests = {
  "My Store Title Test": () => {
    return browser
      .url("http://automationpractice.multiformis.com/index.php")
      .waitForElementVisible("body")
      .assert.titleContains("My Store");
  },

  "Search for a dress": () => {
    return browser
      .setValue("#search_query_top", "dress")
      .click("#searchbox > button")
      .waitForElementVisible("#product_list .ajax_block_product")
      .elements(
        "css selector",
        "#product_list .ajax_block_product",
        (result: any) => {
          browser.assert.equal(result.value.length, 7);
          result.value.forEach((element: any) => {
            browser.elementIdElement(
              element["element-6066-11e4-a52e-4f735466cecf"],
              "css selector",
              ".ajax_block_product .product-container .right-block",
              (rightBlock: any) => {
                browser.elementIdElement(
                  rightBlock["elementId"],
                  "css selector",
                  "h5 a",
                  (anchor: any) => {
                    browser.elementIdText(
                      anchor["elementId"],
                      (anchorText: any) => {
                        const productName = anchorText.value.toLowerCase();
                        browser.verify.ok(
                          productName.includes("dress"),
                          `Product name "${productName}" contains the word "dress"`
                        );
                      }
                    );
                  }
                );
              }
            );
          });
        }
      );
  }
};

export default home;
