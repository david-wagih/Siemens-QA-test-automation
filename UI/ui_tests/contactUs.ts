import { NightwatchTests } from "nightwatch";

const home: NightwatchTests = {
  "My Store Title Test": () => {
    browser
      .url("http://automationpractice.multiformis.com/index.php")
      .waitForElementVisible("body")
      .assert.titleContains("My Store");
  },
  "Open Contact Us Page": () => {
    browser
      .url("http://automationpractice.multiformis.com/index.php")
      .waitForElementVisible("body")
      .click({
        selector: "#contact-link a",
        timeout: 2000
      })
      .verify.titleContains("Contact us - My Store");
  },
  // We want to test all possible combinations of the form
  "Fill in the form with blank subject": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "Please select a subject from the list provided."
      );
  },

  "Fill in the form (customer service) with Valid Data": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "Your message has been successfully sent to our team."
      );
  },

  "Fill in the form (webmaster) with Valid Data": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "Your message has been successfully sent to our team."
      );
  },

  "Fill in the form (customer service) with Invalid email address": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .verify.textContains("#center_column .alert", "Invalid email address.");
  },

  "Fill in the form (customer service) with blank message": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "")
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "The message cannot be blank."
      );
  },

  "Fill in the form (customer service) with blank email": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "The email cannot be blank."
      );
  },

  "Fill in the form (Webmaster) with Invalid email address": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "test@gmail")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .verify.textContains("#center_column .alert", "Invalid email address.");
  },

  "Fill in the form (Webmaster) with blank message": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "")
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "The message cannot be blank."
      );
  },

  "Fill in the form (Webmaster) with blank email": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "The email cannot be blank."
      );
  },

  "Fill in the form (customer service) with uploading a file": () => {
    browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      // .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .setValue("#fileUpload", require("path").resolve(__dirname + "/test.txt"))
      .click("#submitMessage")
      .verify.textContains(
        "#center_column .alert",
        "Your message has been successfully sent to our team."
      );
  }
};

export default home;
