import React, { Component, PropTypes } from 'react';
import Swipe from 'swipe-js-iso';

class ReactSwipe extends Component {
    static propTypes = {
        swipeOptions: PropTypes.shape({
            startSlide: PropTypes.number,
            speed: PropTypes.number,
            auto: PropTypes.number,
            continuous: PropTypes.bool,
            disableScroll: PropTypes.bool,
            stopPropagation: PropTypes.bool,
            swiping: PropTypes.func,
            callback: PropTypes.func,
            transitionEnd: PropTypes.func
        }),
        style: PropTypes.shape({
            container: PropTypes.object,
            wrapper: PropTypes.object,
            child: PropTypes.object
        }),
        className: PropTypes.string
    };

    static defaultProps = {
        swipeOptions: {},
        style: {
            container: {
                overflow: 'hidden',
                visibility: 'hidden',
                position: 'relative'
            },

            wrapper: {
                overflow: 'hidden',
                position: 'relative'
            },

            child: {
                float: 'left',
                width: '100%',
                position: 'relative',
                transitionProperty: 'transform'
            }
        }
    };

    componentDidMount() {
        const { swipeOptions } = this.props;
        this.swipe = Swipe(this.refs.container, swipeOptions);
    }

    componentWillUnmount() {
        this.swipe.kill();
        this.swipe = void 0;
    }

    next() {
        this.swipe.next();
    }

    prev() {
        this.swipe.prev();
    }

    render() {
        const { className, style } = this.props;
        return (
            <div ref="container" className={`react-swipe-container ${className}`} style={style.container}>
                <div style={style.wrapper}>
                    {React.Children.map(child => {
                        return React.cloneElement(child, {style: style.child});
                    })}
                </div>
            </div>
        );
    }
}

export default ReactSwipe;
