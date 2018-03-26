//state参数不是app的state，而是reducer的参数
export default function(state=null, action) {
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return action;
}