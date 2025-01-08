sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("project1.controller.dashboard", {
        onInit: function () {
            const oViewModel = new JSONModel({
                inspections: {
                    pending: 12,
                    passRate: 85.5,
                    failed: 8,
                    inProgress: 15
                },
                inspectionList: [
                    {
                        deliveryId: "DEL001",
                        batchNumber: "B2024001",
                        status: "In Progress",
                        inspector: "John Smith",
                        date: "2024-01-09"
                    },
                    {
                        deliveryId: "DEL002",
                        batchNumber: "B2024002",
                        status: "Pass",
                        inspector: "Emma Davis",
                        date: "2024-01-09"
                    },
                    {
                        deliveryId: "DEL003",
                        batchNumber: "B2024003",
                        status: "Fail",
                        inspector: "Mike Johnson",
                        date: "2024-01-09"
                    }
                ],
                failedItems: [
                    {
                        itemId: "ITEM001",
                        failureReason: "Dimensions out of spec",
                        action: "Rework",
                        priority: "High",
                        status: "Pending"
                    },
                    {
                        itemId: "ITEM002",
                        failureReason: "Surface defects",
                        action: "Quality review",
                        priority: "Medium",
                        status: "In Progress"
                    }
                ]
            });
            this.getView().setModel(oViewModel, "dashboard");
        },

        onNewInspection: function() {
            // Handle new inspection
        },

        onFilterPress: function() {
            // Handle filter
        },

        onInspectionSelect: function(oEvent) {
            // Handle inspection selection
        },

        onViewDetails: function(oEvent) {
            // Show inspection details
        },

        onEdit: function(oEvent) {
            // Edit inspection
        },

        onGenerateReport: function(oEvent) {
            // Generate inspection report
        }
    });
});