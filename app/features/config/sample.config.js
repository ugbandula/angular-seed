/**
 * Created by Bandula Gamage on 1/12/2015.
 */
'use strict';

angular
    .module('sample.features.config', [])

    .constant('SERVICE_URLS', {
        dataServiceURL  : '/app/data/sample.json'   // Data Service URL
    })

    .constant('PROCESS_STATUS', {
        INACTIVE :  1,
        NORMAL :    2,
        WARNING :   3,
        DANGER :    4
    })
;

