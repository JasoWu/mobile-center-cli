/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AlertingErrorError class.
 * @constructor
 * @member {number} [code] The status code return by the API. It can be 400 or
 * 409 or 500.
 * 
 * @member {string} [requestId] Unique request identifier for tracking
 * 
 * @member {string} [message] The reason for the request failed
 * 
 */
function AlertingErrorError() {
}

/**
 * Defines the metadata of AlertingErrorError
 *
 * @returns {object} metadata of AlertingErrorError
 *
 */
AlertingErrorError.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertingError_error',
    type: {
      name: 'Composite',
      className: 'AlertingErrorError',
      modelProperties: {
        code: {
          required: false,
          serializedName: 'code',
          type: {
            name: 'Number'
          }
        },
        requestId: {
          required: false,
          serializedName: 'request_id',
          type: {
            name: 'String'
          }
        },
        message: {
          required: false,
          serializedName: 'message',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AlertingErrorError;
