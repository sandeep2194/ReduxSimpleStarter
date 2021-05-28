import { FETCH, CREATE, DELETE } from './types';

export function fetchItems() {
    return {
        type: FETCH
    }
}

export function createItem(Item) {
    let itemToAdd = {
        [Math.floor(Math.floor() * 20)]: item
    }

    return {
        type: CREATE,
        payload: itemToAdd,
    }
}

export function deleteItem(key) {
    return {
        type: DELETE,
        payload: key
    }
}