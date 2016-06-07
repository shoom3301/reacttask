/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';

/**
 * Class of todo create form
 */
let TodoCreate = React.createClass({
    getInitialState: function () {
        return {text: this.props.text || ''};
    },
    /**
     * When form submitted
     * @param e {Event}
     */
    formSubmit: function(e){
        e.preventDefault();
        let text = this.state.text.trim();
        text && typeof this.props.add == 'function' && this.props.add(text);
        this.setState({text: ''});
    },
    /**
     * On input change
     * @param e {Event}
     */
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    render: function(){
        return (
            <form onSubmit={this.formSubmit}>
                <input onChange={this.onChange} value={this.state.text} name="text" type="text" placeholder="New record ..."/>
            </form>
        );
    }
});

module.exports = TodoCreate;