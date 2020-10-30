/* @flow */

import React, {Component, useState, useEffect, useCallback} from 'react';
import Store from '~/stores/Store';

export function useStores(stores: Array<Store>, callback) {
  const [data, setData] = useState(callback());

  useEffect(() => {
    let isCancelled = false;

    Store.observe(stores, () => {
      if (!isCancelled) {
        setData(callback());
      }
    });

    return () => {
      isCancelled = true;
    }
  }, []);

  return data;
}
