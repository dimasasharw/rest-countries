// src/declarations.d.ts

// Declaration for redux-persist/es/persistReducer
declare module "redux-persist/es/persistReducer" {
    import { Reducer } from "redux";
    export default function persistReducer<S, A>(config: any, baseReducer: Reducer<S, A>): Reducer<S, A>;
}

// Declaration for redux-persist/es/persistStore
declare module "redux-persist/es/persistStore" {
    import { Store } from "redux";
    import { Persistor } from "redux-persist";
    export default function persistStore(store: Store<any, any>): Persistor;
}

// Declaration for redux-persist/lib/storage
declare module "redux-persist/lib/storage" {
    const storage: any;
    export default storage;
}

//typeof dispatch
export type AppDispatch = typeof store.dispatch;
