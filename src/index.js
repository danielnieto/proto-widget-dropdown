/* eslint-disable */

import "./dropdown.js";
import record from "./ui.json";

var dropdownParams = {
    labelText: "awrd",
    options: [{ value: "option-1", text: "Text of the first option" }, "option 2"],
    record: record,
    attributeName: "category"
};

var dropdown = new UI.Dropdown(dropdownParams);

dropdown.render(document.body.querySelector("#app"));
