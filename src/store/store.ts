import { createStore } from 'redux';
import reducers from './reducers';

export default function configureStore(initialState = {}): any {
    const store = createStore(reducers, initialState);

    return store as any;
}
