export const parseApiErrors = error => {
    return error.response.body.violations.reduce(
        (parsedErrors, violation) => {
            parsedErrors[violation['propertyPath']] = violation['message'];
            return parsedErrors;
        }, {}
    );
};

export const hydraPageCount = (collection) => {
    if (!collection['hydra:view']) {
        return 1;
    }

    /**
     * Get numbers expected
     * with length of one or more longer
     */
    return Number(
        collection['hydra:view']['hydra:last'].match(/page=(\d+)/)[1]
    );
};