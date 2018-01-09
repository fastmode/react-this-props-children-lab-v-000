import React from 'react';

class ThemeDecorations extends React.Component {
  render() {
    const extraProp = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className: this.props.theme,
    }));
    return (
      <div>
        {extraProp}
      </div>
    )
  }
}

export default ThemeDecorations;