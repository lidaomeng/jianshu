import React, {PureComponent} from 'react';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends PureComponent{
    render() {
        const { page, list, getMoreList } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Link key={index} to='/detail'>
                            <ListItem>
                                <img className='list-pic' src={item.get('imgUrl')} alt='' />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='desc'>{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>  
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div> 
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
