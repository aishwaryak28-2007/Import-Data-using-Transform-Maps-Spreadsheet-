(function runTransformScript(source, map, log, target) {

    // Check Employee ID
    if (!source.Employeeid) {
        ignore = true;
        log.info("Record skipped because Employee ID is empty");
        return;
    }

    // Check Email
    if (!source.email) {
        ignore = true;
        log.info("Record skipped because Email is empty");
        return;
    }

    log.info("Employee " + source.Employeeid + " imported successfully");

})(source, map, log, target);
