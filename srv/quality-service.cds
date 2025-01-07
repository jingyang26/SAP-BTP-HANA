namespace app.qualityinspection;

using { app.qualityinspection.QualityInspection as qm } from '../db/quality_inspection';

service QualityInspectionService @(path: '/quality-api') {
    // Main inspection entities
    @readonly
    entity Parameters as projection on qm.InspectionParameters;

    @insertonly
    entity Inspections as projection on qm.QualityInspection {
        *,
        results: redirected to InspectionResults
    };

    @insertonly
    entity InspectionResults as projection on qm.InspectionResults {
        *,
        inspection: redirected to Inspections,
        parameter: redirected to Parameters
    };

    @insertonly
    entity FollowUpActions as projection on qm.FollowUpActions {
        *,
        inspection: redirected to Inspections
    };

    // Custom actions
    action submitInspection(inspectionID: String) returns Boolean;
    action generateReport(inspectionID: String) returns String;

    // Custom queries
    function getPendingInspections() returns array of Inspections;
    function getFailedInspections() returns array of Inspections;
    
    // Analytical queries
    function getInspectionStatistics(
        startDate: Date,
        endDate: Date
    ) returns {
        totalInspections: Integer;
        passedCount: Integer;
        failedCount: Integer;
        pendingCount: Integer;
        averageProcessingTime: Decimal;
    };
}

annotate QualityInspectionService.Inspections with @(
    UI: {
        SelectionFields: [ deliveryID, batchNumber, inspectionDate, status ],
        LineItem: [
            {Value: inspectionID},
            {Value: deliveryID},
            {Value: batchNumber},
            {Value: inspectionDate},
            {Value: status},
            {Value: inspectorID}
        ]
    }
);

annotate QualityInspectionService.InspectionResults with @(
    UI: {
        LineItem: [
            {Value: parameterID},
            {Value: actualValue},
            {Value: isCompliant},
            {Value: remarks}
        ]
    }
);