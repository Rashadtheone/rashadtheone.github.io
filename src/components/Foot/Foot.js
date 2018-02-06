import React, { Component } from 'react';
import {Footer} from 'react-materialize'

class Foot extends Component {
  render() {
    return (
      <div>
<Footer copyrights="RDH"
	moreLinks={
		<a className="grey-text text-lighten-4 right" href="#!">More Links</a>
	}
	links={
		<ul>
			<li><a className="grey-text text-lighten-3" href="#!">GitHub</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">LinkedIn</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">Hacker Rank</a></li>
			<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
		</ul>
	}
	className='example'
>
		<h5 className="white-text">Footer Content</h5>
		<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>
      </div>
    )
  }
}

export default Foot;
