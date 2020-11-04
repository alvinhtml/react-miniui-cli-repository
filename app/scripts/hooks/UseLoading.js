/* @flow */

import * as React from 'react';
import Loading from '~/services/Loading';


function LoadingComps(): React.Node {
  return (
    <div>loading...</div>
  )
}

export function useLoading(datas: Array<Object>): Array<any> {
  let isLoading = false;

  return [datas.every(item => item instanceof Loading), LoadingComps];
}
