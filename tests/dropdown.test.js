/* eslint-disable */

import "../src/dropdown.js";
import record from "../src/ui.json";

describe("Dropdown", () => {
    var options = [{ value: "option-1", text: "Text of the first option" }, "option 2"];

    var dropdownParams = {
        labelText: "test",
        options: [{ value: "option-1", text: "Text of the first option" }, "option 2"],
        record: record,
        attributeName: "category"
    };

    var dropdown;
    var $dropdown;

    it("class should exists on global scope", () => {
        expect(UI.Dropdown).toBeDefined();
    });

    it("record must exist", function() {
        expect(record).toBeDefined();
    });

    it("create a new dropdown instance", () => {
        dropdown = new UI.Dropdown(dropdownParams);

        expect(dropdown).toBeDefined();
    });

    it("should render dropdown", () => {
        dropdown.render($("#test"));

        $dropdown = $("#test").find(".ui-select select");

        expect($dropdown.length).toBe(1);
    });

    it("should have correct number of options plus a null option", () => {
        expect($dropdown.find("option").length - 1).toBe(options.length);
    });

    it("should start showing the saved value", () => {
        var recordCategoryValue = record.category;
        expect(recordCategoryValue).toBe($dropdown.val());
    });

    it("record property should be updated on option change", () => {
        var $lastOption = $dropdown.find("option").last();
        var lastOptionValue;

        var lastOptionValue = $lastOption.val();

        $lastOption.prop("selected", true).trigger("change");

        expect(record.category).toBe(lastOptionValue);
    });

    it("property should be set null if no option is selected", () => {
        var $firstOption = $dropdown.find("option").first();
        var firstOptionValue;

        var firstOptionValue = $firstOption.val();

        $firstOption.prop("selected", true).trigger("change");

        expect(record.category).toBe(null);
    });
});
