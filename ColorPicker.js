import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import { Button } from 'semantic-ui-react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayColorPicker: false,
  

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  
  }

  handleClick() {
    const { displayColorPicker } = this.state;
    this.setState({ displayColorPicker: !displayColorPicker });
  }

  handleClose() {
    this.setState({ displayColorPicker: false });
  }


  render() {

    const { selectedUser } = this.props;
    const { displayColorPicker } = this.state;
    const { color } = this.props;
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',

        },
      },
    });
    console.log('color in color picker props:', color);
    console.log('selectedUser in ColorPicker:', selectedUser);

    return (
      <div>
        {selectedUser ? (
          <Button onClick={this.handleClick} style={{ backgroundColor: this.props.color }}>
          choose user color
          </Button>
        ) : (
          <Button onClick={this.handleClick} style={{ backgroundColor: this.props.color }}>
          choose user
          </Button>
        )}

        { displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            {selectedUser && (
              <SketchPicker
                color={this.props.color}
                onChange={this.props.handleChange}
              />
            )
          }
          </div>
        ) : null }
      </div>
    );
  }
}


export default ColorPicker;
