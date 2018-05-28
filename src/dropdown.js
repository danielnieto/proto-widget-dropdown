/* eslint-disable */

if (typeof UI === "undefined") {
    window.UI = {};
}

Class(UI, "Dropdown")
    .inherits(Widget)
    .includes(BubblingSupport)({
    HTML:
        '<div><label></label><select class="select form-control"></select><div>',
    ELEMENT_CLASS: "ui-select",
    prototype: {
        init: function init(config) {
            Widget.prototype.init.call(this, config);

            var dropdown = this;

            this.$label = this.element.find("label");
            this.$select = this.element.find("select");

            this.$label.text(this.labelText);

            dropdown.$select.append("<option></option>");

            this.options.forEach(function(item) {
                if (typeof item === "string") {
                    item = {
                        value: item,
                        text: item
                    };
                }

                dropdown.$select.append(
                    '<option value="' +
                        item.value +
                        '">' +
                        item.text +
                        "</option>"
                );
            });

            this.$select.val(this.record[config.attributeName]);

            this.$select.bind(
                "change",
                dropdown._changeEventHandler.bind(dropdown)
            );

            return this;
        },
        _changeEventHandler: function _changeEventHandler(event) {
            var dropdown = this;

            var value = dropdown.$select.val();

            dropdown.record[dropdown.attributeName] =
                value !== "" ? value : null;
            console.log(JSON.stringify(dropdown.record));
        }
    }
});
