/**
 * Created by Bandula Gamage on 1/12/2015.
 */
'use strict';

angular
    .module('sample.features.config', [])

    .constant('SERVICE_URLS', {
<<<<<<< HEAD
        dataServiceURL  : '/sample-service/',  // Data Service URL
        authServiceURL  : '/user-login/'   // Authentication Service URL
=======
        dataServiceURL  : '/app/data/sample.json'   // Data Service URL
>>>>>>> fea5f8844d2b0bac9d9eb58cd7856d6a40853501
    })

    .constant('PROCESS_STATUS', {
        INACTIVE :  1,
        NORMAL :    2,
        WARNING :   3,
        DANGER :    4
    })
;

