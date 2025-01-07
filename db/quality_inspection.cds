namespace app.qualityinspection;

context QualityInspection {
    // Enumeration for inspection status
    type StatusType : String(20) enum {
        PENDING = 'PENDING';
        PASS = 'PASS';
        FAIL = 'FAIL';
    };

    // Master data for inspection parameters
    entity InspectionParameters {
        key parameterID : String(36);
        parameterName  : String(100) not null;
        description   : String(500);
        minValue      : Decimal(15,2);
        maxValue      : Decimal(15,2);
        unit          : String(10);
        createdAt     : Timestamp;
        createdBy     : String(50);
        modifiedAt    : Timestamp;
        modifiedBy    : String(50);
    };

    // Main inspection entity
    entity QualityInspection {
        key inspectionID : String(36);
        deliveryID      : String(20) not null;
        batchNumber     : String(20);
        inspectionDate  : Date not null;
        inspectorID     : String(50) not null;
        status          : StatusType default 'PENDING';
        comments        : String(1000);
        createdAt       : Timestamp;
        createdBy       : String(50);
        modifiedAt      : Timestamp;
        modifiedBy      : String(50);
        // Associations
        results         : Association to many InspectionResults on results.inspectionID = inspectionID;
    };

    // Inspection results detail
    entity InspectionResults {
        key resultID     : String(36);
        key inspectionID : String(36);
        parameterID     : String(36) not null;
        actualValue     : Decimal(15,2);
        isCompliant     : Boolean;
        remarks        : String(500);
        createdAt      : Timestamp;
        createdBy      : String(50);
        // Associations
        inspection     : Association to one QualityInspection on inspection.inspectionID = inspectionID;
        parameter     : Association to one InspectionParameters on parameter.parameterID = parameterID;
    };

    // Follow-up actions for failed inspections
    entity FollowUpActions {
        key actionID     : String(36);
        inspectionID    : String(36) not null;
        actionType      : String(50) not null; // e.g., 'REWORK', 'RETURN', 'DISPOSE'
        description     : String(1000);
        status          : String(20);
        assignedTo      : String(50);
        dueDate         : Date;
        completedDate   : Date;
        createdAt       : Timestamp;
        createdBy       : String(50);
        // Association
        inspection     : Association to one QualityInspection on inspection.inspectionID = inspectionID;
    };
};