import PageTitle from '@Components/Header/PageTitle';
import { Suspense } from 'react';

import * as S from './style';
import CartAmount from '../CartAmount';
import CartListController from '../CartListController';
import LoadingCartListController from '../CartListController/LoadingCartListController';

function LoadingCartListSubHeader() {
  return (
    <>
      <PageTitle title="장바구니" />
      <S.CartListSubHeader>
        <Suspense fallback={<CartAmount isLoading />}>
          <CartAmount />
        </Suspense>
        <Suspense fallback={<LoadingCartListController />}>
          <CartListController />
        </Suspense>
      </S.CartListSubHeader>
    </>
  );
}

export default LoadingCartListSubHeader;
