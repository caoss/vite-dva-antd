import {mokeGet} from "@/services/payment" 
export default {
  namespace : 'products',
    state: {
      name:'ssss',
      products:[],
    },
    reducers: {
      paymentsReducer(state, action) {
        return {
          ...state,
          payments: action.payload,
        };
      },
    },
    effects: {
      *getPaymentsAction({ payload, callback }, { call, put }) {
        mokeGet();
        // yield put({
        //   type: 'paymentsReducer',
        //   payload: { loading: true },
        // });
        // const response = yield call(getQuickPayments, { pageNo: 1, pageSize: 10, ...payload });
        // yield put({
        //   type: 'paymentsReducer',
        //   payload: { ...response, loading: false, ...payload },
        // });
        // if (callback) callback()
      },
      *getPaymentDetailAction({ payload, callback }, { call, put }) {
  
      }
    },
  
  };