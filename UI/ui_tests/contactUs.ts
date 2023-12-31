import { NightwatchTests } from "nightwatch";

const home: NightwatchTests = {
  "My Store Title Test": () => {
    return browser
      .url("http://automationpractice.multiformis.com/index.php")
      .waitForElementVisible("body")
      .assert.titleContains("My Store");
  },
  "Open Contact Us Page": () => {
    return browser
      .url("http://automationpractice.multiformis.com/index.php")
      .waitForElementVisible("body")
      .click({
        selector: "#contact-link a",
        timeout: 2000
      })
      .assert.titleContains("Contact us - My Store");
  },
  "Fill in the form with blank subject": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "Please select a subject from the list provided."
      );
  },

  "Fill in the form (customer service) with Valid Data": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "Your message has been successfully sent to our team."
      );
  },

  "Fill in the form (webmaster) with Valid Data": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "Your message has been successfully sent to our team."
      );
  },

  "Fill in the form (customer service) with Invalid email address": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .assert.textContains("#center_column .alert", "Invalid email address.");
  },

  "Fill in the form (customer service) with blank message": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "")
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "The message cannot be blank."
      );
  },

  "Fill in the form (customer service) with blank email": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "The email cannot be blank."
      );
  },

  "Fill in the form (Webmaster) with Invalid email address": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "test@gmail")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .assert.textContains("#center_column .alert", "Invalid email address.");
  },

  "Fill in the form (Webmaster) with blank message": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "")
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "The message cannot be blank."
      );
  },

  "Fill in the form (Webmaster) with blank email": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Webmaster")
      .setValue("#email", "")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "The email cannot be blank."
      );
  },

  "Fill in the form (customer service) with uploading a file": () => {
    return browser
      .url(
        "http://automationpractice.multiformis.com/index.php?controller=contact"
      )
      .waitForElementVisible("body")
      .setValue("#id_contact", "Customer service")
      .setValue("#email", "test@gmail.com")
      .setValue("#id_order", "12345")
      .setValue("#message", "This is a test message")
      .setValue("#fileUpload", require("path").resolve(__dirname + "/test.txt"))
      .click("#submitMessage")
      .assert.textContains(
        "#center_column .alert",
        "Your message has been successfully sent to our team."
      );
  }
};

export default home;
