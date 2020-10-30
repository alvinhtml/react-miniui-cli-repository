/* @flow */

import React, {Component, useState, useEffect, useCallback} from 'react';
import Loading from '~/services/Loading';


function LoadingComps() {
  return (
    <div>loading...</div>
  )
}

export function useLoading(datas: Array<Object>) {
  let isLoading = false;
  
  return [datas.every(item => item instanceof Loading), LoadingComps];
}
