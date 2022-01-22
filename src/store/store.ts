import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default function configureStore(): any {
    const store = createStore(reducers, applyMiddleware(thunk));

    return store as any;
}
