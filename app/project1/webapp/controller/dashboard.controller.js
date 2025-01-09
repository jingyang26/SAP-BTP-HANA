// dashboard.controller.js
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, JSONModel, Filter, FilterOperator, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("project1.controller.dashboard", {
        formatter: {
            formatDate: function(date) {
                if (!date) return "";
                return new Date(date).toLocaleDateString();
            }
        },

        onInit: function() {
            // Initialize view model with mock data
            const oInitialData = {
                "inspections": [
                    {
                        "deliveryId": "DEL-2024-001",
                        "batchNumber": "PAPER-A4-001",
                        "material": "Premium A4 Paper 80gsm",
                        "status": "Pending",
                        "inspector": "Ahmad Razak",
                        "date": "2024/1/9",
                        "type": "Inbound",
                        "supplier": "PaperTech Solutions",
                        "quantity": 50000,
                        "unit": "sheets"
                    },
                    {
                        "deliveryId": "DEL-2024-002",
                        "batchNumber": "INK-CMYK-002",
                        "material": "HP DesignJet Ink Cartridge",
                        "status": "In Progress",
                        "inspector": "Sarah Lim",
                        "date": "2024/1/9",
                        "type": "Inbound",
                        "supplier": "HP Malaysia",
                        "quantity": 100,
                        "unit": "cartridges"
                    },
                    {
                        "deliveryId": "DEL-2024-003",
                        "batchNumber": "PAPER-A3-001",
                        "material": "Photo Paper Glossy A3",
                        "status": "Pass",
                        "inspector": "Raj Kumar",
                        "date": "2024/1/8",
                        "type": "Inbound",
                        "supplier": "Kodak Materials",
                        "quantity": 2500,
                        "unit": "sheets"
                    },
                    {
                        "deliveryId": "DEL-2024-004",
                        "batchNumber": "TONER-BK-001",
                        "material": "Canon Black Toner",
                        "status": "Fail",
                        "inspector": "Lee Wei Ling",
                        "date": "2024/1/8",
                        "type": "Inbound",
                        "supplier": "Canon Asia",
                        "quantity": 50,
                        "unit": "cartridges"
                    },
                    {
                        "deliveryId": "DEL-2024-005",
                        "batchNumber": "BIND-SPR-001",
                        "material": "Spiral Binding Coils",
                        "status": "Pass",
                        "inspector": "Nurul Huda",
                        "date": "2024/1/8",
                        "type": "Inbound",
                        "supplier": "BindPro Solutions",
                        "quantity": 1000,
                        "unit": "pieces"
                    },
                    {
                        "deliveryId": "DEL-2024-006",
                        "batchNumber": "PAPER-B5-001",
                        "material": "B5 Paper 70gsm",
                        "status": "In Progress",
                        "inspector": "Tan Mei Ling",
                        "date": "2024/1/9",
                        "type": "Inbound",
                        "supplier": "PaperTech Solutions",
                        "quantity": 30000,
                        "unit": "sheets"
                    },
                    {
                        "deliveryId": "DEL-2024-007",
                        "batchNumber": "LAM-A4-001",
                        "material": "Lamination Sheets A4",
                        "status": "Pending",
                        "inspector": "Mohammad Hafiz",
                        "date": "2024/1/9",
                        "type": "Inbound",
                        "supplier": "LamTech Asia",
                        "quantity": 5000,
                        "unit": "sheets"
                    },
                    {
                        "deliveryId": "DEL-2024-008",
                        "batchNumber": "INK-RGB-001",
                        "material": "Epson Color Ink Set",
                        "status": "Pass",
                        "inspector": "Wong Li Wei",
                        "date": "2024-01-07",
                        "type": "Inbound",
                        "supplier": "Epson Malaysia",
                        "quantity": 75,
                        "unit": "sets"
                    },
                    {
                        "deliveryId": "DEL-2024-009",
                        "batchNumber": "CARD-A4-001",
                        "material": "Art Card 300gsm",
                        "status": "In Progress",
                        "inspector": "Siti Aminah",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "ArtPaper Co",
                        "quantity": 10000,
                        "unit": "sheets"
                    },
                    {
                        "deliveryId": "DEL-2024-010",
                        "batchNumber": "ENV-A4-001",
                        "material": "A4 Envelopes",
                        "status": "Pending",
                        "inspector": "David Chua",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "Envelope Master",
                        "quantity": 2000,
                        "unit": "pieces"
                    },
                    {
                        "deliveryId": "DEL-2024-011",
                        "batchNumber": "PLOT-INK-001",
                        "material": "Plotter Ink Cartridge",
                        "status": "Pass",
                        "inspector": "Amir Hassan",
                        "date": "2024-01-07",
                        "type": "Inbound",
                        "supplier": "HP Malaysia",
                        "quantity": 25,
                        "unit": "cartridges"
                    },
                    {
                        "deliveryId": "DEL-2024-012",
                        "batchNumber": "PAPER-ROLL-001",
                        "material": "Plotter Paper Roll 42\"",
                        "status": "In Progress",
                        "inspector": "Jenny Tan",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "RollPaper Tech",
                        "quantity": 15,
                        "unit": "rolls"
                    },
                    {
                        "deliveryId": "DEL-2024-013",
                        "batchNumber": "BIND-GLS-001",
                        "material": "Glue Binding Strip",
                        "status": "Pending",
                        "inspector": "Kamal Ibrahim",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "BindPro Solutions",
                        "quantity": 500,
                        "unit": "strips"
                    },
                    {
                        "deliveryId": "DEL-2024-014",
                        "batchNumber": "CARD-B4-001",
                        "material": "Business Card Paper",
                        "status": "Fail",
                        "inspector": "Linda Yap",
                        "date": "2024-01-08",
                        "type": "Inbound",
                        "supplier": "CardStock Pro",
                        "quantity": 5000,
                        "unit": "sheets"
                    },
                    {
                        "deliveryId": "DEL-2024-015",
                        "batchNumber": "TONER-CLR-001",
                        "material": "Color Toner Set",
                        "status": "In Progress",
                        "inspector": "Zulkifli Rahman",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "Canon Asia",
                        "quantity": 30,
                        "unit": "sets"
                    },
                    {
                        "deliveryId": "DEL-2024-016",
                        "batchNumber": "PAPER-SRA3-001",
                        "material": "SRA3 Paper 100gsm",
                        "status": "Pending",
                        "inspector": "Grace Lee",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "PaperTech Solutions",
                        "quantity": 20000,
                        "unit": "sheets"
                    },
                    {
                        "deliveryId": "DEL-2024-017",
                        "batchNumber": "LAM-A3-001",
                        "material": "Lamination Rolls A3",
                        "status": "Pass",
                        "inspector": "Azman Yusof",
                        "date": "2024-01-07",
                        "type": "Inbound",
                        "supplier": "LamTech Asia",
                        "quantity": 20,
                        "unit": "rolls"
                    },
                    {
                        "deliveryId": "DEL-2024-018",
                        "batchNumber": "INK-SUB-001",
                        "material": "Sublimation Ink",
                        "status": "In Progress",
                        "inspector": "Priya Raj",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "SubTech Inks",
                        "quantity": 40,
                        "unit": "liters"
                    },
                    {
                        "deliveryId": "DEL-2024-019",
                        "batchNumber": "PAPER-NCR-001",
                        "material": "NCR Paper Sets",
                        "status": "Pending",
                        "inspector": "Alex Loh",
                        "date": "2024-01-09",
                        "type": "Inbound",
                        "supplier": "NCR Solutions",
                        "quantity": 1000,
                        "unit": "sets"
                    },
                    {
                        "deliveryId": "DEL-2024-020",
                        "batchNumber": "FILM-A4-001",
                        "material": "Transparency Film",
                        "status": "Fail",
                        "inspector": "Fatimah Zahra",
                        "date": "2024-01-08",
                        "type": "Inbound",
                        "supplier": "FilmTech Co",
                        "quantity": 3000,
                        "unit": "sheets"
                    }
                    // ... Add all inspection items from the mock data
                ],
                "failedItems": [
                    {
                        "itemId": "FAIL-001",
                        "batchNumber": "TONER-BK-001",
                        "failureReason": "Packaging damage, potential toner leakage",
                        "action": "Return to supplier",
                        "priority": "High",
                        "status": "Pending Return",
                        "affectedQuantity": 10,
                        "inspector": "Lee Wei Ling"
                    },
                    {
                        "itemId": "FAIL-002",
                        "batchNumber": "CARD-B4-001",
                        "failureReason": "Paper weight below specification (280gsm instead of 300gsm)",
                        "action": "Quality review required",
                        "priority": "Medium",
                        "status": "Under Review",
                        "affectedQuantity": 5000,
                        "inspector": "Linda Yap"
                    },
                    {
                        "itemId": "FAIL-003",
                        "batchNumber": "FILM-A4-001",
                        "failureReason": "Surface scratches on film sheets",
                        "action": "Return to supplier",
                        "priority": "High",
                        "status": "Return Approved",
                        "affectedQuantity": 1500,
                        "inspector": "Fatimah Zahra"
                    }
                    // ... Add all failed items from the mock data
                ]
            };

            const oViewModel = new JSONModel(oInitialData);
            this.getView().setModel(oViewModel, "dashboard");
            
            // Calculate initial statistics
            this.calculateStatistics();
        },

        calculateStatistics: function() {
            const oModel = this.getView().getModel("dashboard");
            const aInspections = oModel.getProperty("/inspections") || [];
            
            // Calculate counts for each status
            const oStats = {
                pending: aInspections.filter(item => item.status === "Pending").length,
                inProgress: aInspections.filter(item => item.status === "In Progress").length,
                failed: aInspections.filter(item => item.status === "Fail").length,
                passed: aInspections.filter(item => item.status === "Pass").length
            };
            
            // Calculate pass rate
            const completedInspections = oStats.failed + oStats.passed;
            oStats.passRate = completedInspections > 0 
                ? Math.round((oStats.passed / completedInspections) * 100)
                : 0;

            // Update model with new statistics
            oModel.setProperty("/stats", oStats);
        },

        onSearch: function(oEvent) {
            const sQuery = oEvent.getParameter("query");
            const oTable = this.byId("inspectionTable");
            const oBinding = oTable.getBinding("items");
            
            if (!oBinding) return;

            const aFilters = [];
            if (sQuery) {
                aFilters.push(new Filter({
                    filters: [
                        new Filter("deliveryId", FilterOperator.Contains, sQuery),
                        new Filter("batchNumber", FilterOperator.Contains, sQuery),
                        new Filter("material", FilterOperator.Contains, sQuery)
                    ],
                    and: false
                }));
            }
            
            oBinding.filter(aFilters);
        },

        onNewInspection: function() {
            MessageToast.show("New inspection functionality will be implemented");
        },

        onStartInspection: function(oEvent) {
            const oSource = oEvent.getSource();
            const oContext = oSource.getBindingContext("dashboard");
            const oInspection = oContext.getObject();
            
            // Update status to In Progress
            const sPath = oContext.getPath();
            const oModel = this.getView().getModel("dashboard");
            oModel.setProperty(sPath + "/status", "In Progress");
            
            // Recalculate statistics
            this.calculateStatistics();
            
            MessageBox.success("Inspection started for: " + oInspection.deliveryId);
        },

        onRecordResults: function(oEvent) {
            const oSource = oEvent.getSource();
            const oContext = oSource.getBindingContext("dashboard");
            const oInspection = oContext.getObject();

            MessageBox.information("Recording results for: " + oInspection.deliveryId);
        },

        // Update these methods in your controller

        onViewReport: function(oEvent) {
            const oSource = oEvent.getSource();
            const oContext = oSource.getBindingContext("dashboard");
            const oInspection = oContext.getObject();
            
            // Create inspection info model if it doesn't exist
            if (!this._oInspectionInfoModel) {
                this._oInspectionInfoModel = new JSONModel();
                this.getView().setModel(this._oInspectionInfoModel, "inspection");
            }
            
            // Set the data for the dialog
            this._oInspectionInfoModel.setData(oInspection);
            
            // Create dialog if it doesn't exist
            if (!this._oInspectionInfoDialog) {
                this._oInspectionInfoDialog = sap.ui.xmlfragment(
                    "project1.view.fragments.inspectionInfoDialog",
                    this
                );
                this.getView().addDependent(this._oInspectionInfoDialog);
            }
            
            this._oInspectionInfoDialog.open();
        },

        onCloseInspectionInfo: function() {
            if (this._oInspectionInfoDialog) {
                this._oInspectionInfoDialog.close();
            }
        },

        onNewInspection: function() {
            // Initialize the model for new inspection
            const oNewInspectionModel = new JSONModel({
                deliveryId: "DEL-" + new Date().getFullYear() + "-" + String(this._getNextDeliveryNumber()).padStart(3, '0'),
                batchNumber: "",
                material: "",
                status: "Pending",
                inspector: "",
                date: new Date().toISOString().split('T')[0],
                type: "Inbound",
                quantity: 1,
                unit: "sheets"
            });
            
            this.getView().setModel(oNewInspectionModel, "newInspection");
            
            // Create dialog if it doesn't exist
            if (!this._oNewInspectionDialog) {
                this._oNewInspectionDialog = sap.ui.xmlfragment(
                    "project1.view.fragments.newInspectionDialog",
                    this
                );
                this.getView().addDependent(this._oNewInspectionDialog);
            }
            
            this._oNewInspectionDialog.open();
        },

        onSaveNewInspection: function() {
            const oNewInspectionModel = this.getView().getModel("newInspection");
            const oNewInspection = oNewInspectionModel.getData();
            
            // Validate required fields
            if (!oNewInspection.deliveryId || !oNewInspection.batchNumber || !oNewInspection.material) {
                MessageBox.error("Please fill in all required fields");
                return;
            }
            
            // Get the dashboard model and current inspections
            const oDashboardModel = this.getView().getModel("dashboard");
            const aInspections = oDashboardModel.getProperty("/inspections");
            
            // Add new inspection to the array
            aInspections.unshift(oNewInspection);
            
            // Update the model
            oDashboardModel.setProperty("/inspections", aInspections);
            
            // Recalculate statistics
            this.calculateStatistics();
            
            // Close dialog and show success message
            this._oNewInspectionDialog.close();
            MessageToast.show("New inspection added successfully");
        },

        onCancelNewInspection: function() {
            this._oNewInspectionDialog.close();
        },

        _getNextDeliveryNumber: function() {
            const aInspections = this.getView().getModel("dashboard").getProperty("/inspections") || [];
            let maxNumber = 0;
            
            aInspections.forEach(inspection => {
                const match = inspection.deliveryId.match(/DEL-\d{4}-(\d{3})/);
                if (match) {
                    const number = parseInt(match[1]);
                    maxNumber = Math.max(maxNumber, number);
                }
            });
            
            return maxNumber + 1;
        },

        // Update your existing calculateStatistics method:
        calculateStatistics: function() {
            const oModel = this.getView().getModel("dashboard");
            const aInspections = oModel.getProperty("/inspections") || [];
            
            // Calculate statistics
            const oStats = {
                pending: aInspections.filter(item => item.status === "Pending").length,
                inProgress: aInspections.filter(item => item.status === "In Progress").length,
                failed: aInspections.filter(item => item.status === "Fail").length,
                passed: aInspections.filter(item => item.status === "Pass").length
            };
            
            // Calculate pass rate
            const completedInspections = oStats.failed + oStats.passed;
            oStats.passRate = completedInspections > 0 
                ? Math.round((oStats.passed / completedInspections) * 100)
                : 0;

            // Update model
            oModel.setProperty("/stats", oStats);
        },
        onRecordResults: function(oEvent) {
            const oSource = oEvent.getSource();
            const oContext = oSource.getBindingContext("dashboard");
            const oInspection = oContext.getObject();
            
            // Create record model if it doesn't exist
            if (!this.recordModel) {
                this.recordModel = new JSONModel({
                    deliveryId: "",
                    material: "",
                    batchNumber: "",
                    resultIndex: -1,
                    comments: "",
                    path: ""
                });
                this.getView().setModel(this.recordModel, "record");
            }
            
            // Set the data for the dialog
            this.recordModel.setData({
                deliveryId: oInspection.deliveryId,
                material: oInspection.material,
                batchNumber: oInspection.batchNumber,
                resultIndex: -1,
                comments: "",
                path: oContext.getPath()  // Store the path for updating
            });
            
            // Create dialog if it doesn't exist
            if (!this._oRecordDialog) {
                this._oRecordDialog = sap.ui.xmlfragment(
                    "project1.view.fragments.recordResultsDialog",
                    this
                );
                this.getView().addDependent(this._oRecordDialog);
            }
            
            this._oRecordDialog.open();
        },
        
        onSubmitResults: function() {
            const oRecordData = this.recordModel.getData();
            
            // Validate selection
            if (oRecordData.resultIndex === -1) {
                MessageBox.error("Please select Pass or Fail");
                return;
            }
            
            // Get the dashboard model
            const oDashboardModel = this.getView().getModel("dashboard");
            
            // Update the inspection status
            const sNewStatus = oRecordData.resultIndex === 0 ? "Pass" : "Fail";
            oDashboardModel.setProperty(oRecordData.path + "/status", sNewStatus);
            
            // If failed, add to failed items
            if (sNewStatus === "Fail") {
                const oInspection = oDashboardModel.getProperty(oRecordData.path);
                const aFailedItems = oDashboardModel.getProperty("/failedItems") || [];
                
                aFailedItems.push({
                    itemId: "FAIL-" + new Date().getTime(),
                    batchNumber: oInspection.batchNumber,
                    failureReason: oRecordData.comments || "No comments provided",
                    action: "Quality review required",
                    priority: "High",
                    status: "Pending Review",
                    affectedQuantity: oInspection.quantity,
                    inspector: oInspection.inspector
                });
                
                oDashboardModel.setProperty("/failedItems", aFailedItems);
            }
            
            // Recalculate statistics
            this.calculateStatistics();
            
            // Close dialog and show success message
            this._oRecordDialog.close();
            MessageToast.show(`Inspection ${sNewStatus === "Pass" ? "passed" : "failed"}`);
        },
        
        onCancelRecord: function() {
            this._oRecordDialog.close();
        }
    });
});