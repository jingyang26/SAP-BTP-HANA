sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "./model/models"
], function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("project1.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            // Set device model
            this.setModel(models.createDeviceModel(), "device");

            // Initialize router
            this.getRouter().initialize();
        }
    });
});