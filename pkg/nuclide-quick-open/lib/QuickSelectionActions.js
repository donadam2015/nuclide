/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 */

import QuickSelectionDispatcher, {ActionTypes} from './QuickSelectionDispatcher';

export default {

  query(query: string): void {
    QuickSelectionDispatcher.getInstance().dispatch({
      actionType: ActionTypes.QUERY,
      query,
    });
  },

  changeActiveProvider(providerName: string): void {
    setImmediate(() => {
      QuickSelectionDispatcher.getInstance().dispatch({
        actionType: ActionTypes.ACTIVE_PROVIDER_CHANGED,
        providerName,
      });
    });
  },

};
