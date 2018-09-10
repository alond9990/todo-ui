/**
 * Created by alond9990 on 10/09/2018.
 */

import { alertConstants } from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};
export default alertActions;

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    return { type: alertConstants.ERROR, message };
}

function clear() {
    return { type: alertConstants.CLEAR };
}