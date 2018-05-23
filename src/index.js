import UI from "./dropdown.js";
import record from "./ui.json";

var dropdownParams = {
  labelText: "category",
  options: [
    { value: "opcion-1", text: "Text of the first option" },
    "option 2"
  ],
  record: record,
  attributeName: "category"
};

var dropdown = new UI.Dropdown(dropdownParams);

dropdown.render(document.body.querySelector("#app"));