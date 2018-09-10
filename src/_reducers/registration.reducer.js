/**
 * Created by alond9990 on 10/09/2018.
 */

import { userConstants } from '../_constants';

export default function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}