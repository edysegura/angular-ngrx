import { UserActionsList } from '../actions/user.actions';
import { UserActions } from '../actions/user.actions';
import { initialUserState, UserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case UserActionsList.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      };
    }

    case UserActionsList.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }

    default:
      return state;
  }
};
