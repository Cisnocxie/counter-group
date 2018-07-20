import todosAPI from '../api/TodoResourseAPI';
export default (state = [], action) => {
    switch(action.type) {
        case 'ADDTODO':
        {
            return todosAPI.filerByStatus('all')
        }
    }
}