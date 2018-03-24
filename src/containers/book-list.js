import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index.js';
import { bindActionCreators } from 'redux';


class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li 
					key={book.title} 
					className="list-group-item"
					onClick={() => {this.props.selectBook(book)}}>
					{book.title}
				</li>
				);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			)
	}
}

function mapStateToProps(state) {
	return {
		books: state.books
	};
}
//函数返回一个booklist container的props
function mapDispatchToProps(dispatch) {
	//绑定action creator, whenever selectBook is called,结果都是传到 reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//把booklist从一个component转换成了container，需要传入一个dispatch method-selectBook,结果返回一个prop



export default connect(mapStateToProps, mapDispatchToProps)(BookList);