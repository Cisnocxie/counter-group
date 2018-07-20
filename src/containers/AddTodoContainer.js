import {connect} from 'react-redux'
import AddTodo from "../components/AddTodo";
import todosAPI from '../api/TodoResourseAPI';
import Todo from '../model/Todo';

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        add:(ref) => {
            if (ref.value !== ''){
                todosAPI.add(new Todo(ref.value));
                const todos = this.deepCopy(
                  todosAPI.filerByStatus('all')
                );
                ref.value = '';
            }
            dispatch({type: 'ADDTODO'});
        },
    }
}


export default connect(mapDispatchToProps)(AddTodo);