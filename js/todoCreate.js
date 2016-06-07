/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';

/**
 * Class of todo create form
 */
let TodoCreate = React.createClass({
    /**
     * When form submitted
     * @param e {Event}
     */
    formSubmit: function(e){
        e.preventDefault();
        let text = this.state.text.trim();
        text && typeof this.props.add == 'function' && this.props.add(text);
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
                <input onChange={this.onChange} name="text" type="text" placeholder="New record ..."/>
            </form>
        );
    }
});

module.exports = TodoCreate;