import React from 'react';
import { connect } from 'react-redux';
import StickyNote from './sticky-note';

function mapStateToProps(state) {
    return {
        ideas: state.reducer.ideas,
    };
}

export class Browse extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const ideas = this.props.ideas.map((idea, index) => {
            return <StickyNote key={index} title={idea.title} content={idea.content} />
        })
        return (
            <div>
                <h2>Browse</h2>
                <ul className='sticky-board'>
                    {ideas}
                </ul>
            </div>
        );
    }  
};

export default connect(mapStateToProps)(Browse);