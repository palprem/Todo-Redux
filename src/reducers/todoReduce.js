const initalData = {
    list: []
}
const todoReducers = (state = initalData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            if (data.length > 2) {
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]
                }
            }
        case "DELETE_TODO":
            const newList = state.list.filter((ele, index) => ele.id != action.id);
            return {
                ...state,
                list: newList
            }

        case "REMOVE_TODO":
            return {
                // ...state,
                list: []
            }
        default: return state;
    }
}
export default todoReducers;