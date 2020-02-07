import React, {PureComponent} from 'react';
import { connect } from 'react-redux';

class Register extends PureComponent{
    render() {
        return (
            <div>Register~</div>
        )
    }
}

const mapState = (state) => ({
});

const mapDispatch = (dispatch) => ({   
});

export default connect(mapState, mapDispatch)(Register);
