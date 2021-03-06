/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the AlertUserAppEmailSettingsResult class.
 * @constructor
 * Alerting Email Settings of the user for a particular app
 *
 * @member {string} appId Application ID
 * 
 * @member {boolean} [userEnabled] A flag indicating if settings are enabled
 * at user/global level
 * 
 */
function AlertUserAppEmailSettingsResult() {
  AlertUserAppEmailSettingsResult['super_'].call(this);
}

util.inherits(AlertUserAppEmailSettingsResult, models['AlertUserEmailSettingsResult']);

/**
 * Defines the metadata of AlertUserAppEmailSettingsResult
 *
 * @returns {object} metadata of AlertUserAppEmailSettingsResult
 *
 */
AlertUserAppEmailSettingsResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertUserAppEmailSettingsResult',
    type: {
      name: 'Composite',
      className: 'AlertUserAppEmailSettingsResult',
      modelProperties: {
        eTag: {
          required: true,
          serializedName: 'eTag',
          type: {
            name: 'String'
          }
        },
        enabled: {
          required: false,
          serializedName: 'enabled',
          type: {
            name: 'Boolean'
          }
        },
        userId: {
          required: true,
          serializedName: 'userId',
          type: {
            name: 'String'
          }
        },
        settings: {
          required: true,
          serializedName: 'settings',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'EventSettingElementType',
                type: {
                  name: 'Composite',
                  className: 'EventSetting'
                }
            }
          }
        },
        appId: {
          required: true,
          serializedName: 'appId',
          type: {
            name: 'String'
          }
        },
        userEnabled: {
          required: false,
          serializedName: 'user_enabled',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = AlertUserAppEmailSettingsResult;
