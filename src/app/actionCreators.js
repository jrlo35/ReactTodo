
//async function that dispatches action when resolved 
export const getTodos = () => (
	dispatch => (
		
		fetch('http://localhost:3000/todos',{
			headers:{
				'Content-Type': 'application/json'
			}
		})
		.then(res => res.json())
		.then(todos => dispatch({
			type: 'GET_TODOS', payload: todos
		}))
	)  
)

export const createTodo = (todo) => (
	dispatch => (
		fetch('http://localhost:3000/todos', {
    	method: 'Post',
    	headers:{
  			'Content-Type': 'application/json'
  		},
  		body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(todo => dispatch({
    	type: 'CREATE_TODO',
    	payload: todo
    }))
  )
)