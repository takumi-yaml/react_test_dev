import Remarkable from 'remarkable';
import React from 'react';

export default class CommentBox extends React.Component {
  rawMarkUp() {
    const md = new Remarkable();

    return { __html: md.render(this.props.children.toString())};
  }

  render() {
    return (
      <div className="comment">
        <h2 className="comentAuthor">{ this.props.author }</h2>
         <span dangerouslySetInnerHTML={{__html: this.props.children}} />
      </div>
    )
  }
}
