import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Panel from './subComponents/panel';
import Arrow from './subComponents/arrow';
import { dummyImages } from './images';

const PANEL_SIZE = 3;

class InfiniteCarousel extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      images: dummyImages,
      panels: dummyImages.slice(0, PANEL_SIZE),
      isRightClicked: false
    }

    this.activePanel = Math.floor(PANEL_SIZE/2);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  handleLeftClick() {

  }

  handleRightClick() {
    this.setState({ isRightClicked: true });
    console.log('hit')
  }

  render() {
    return (
      <React.Fragment>
        <div className="infinite-carousel">
          {this.state.panels.map((image, index) => (
            <CSSTransition key={image.id} in={this.state.isRightClicked} timeout={200} classNames="panel-transition">
              <Panel
                image={image}
                position={index}
                active={index === this.activePanel}
              />
            </CSSTransition>))
          }
        </div>
        <div>
          <Arrow position="left" handleClick={this.handleLeftClick} />
          <Arrow position="right" handleClick={this.handleRightClick} />
        </div>
      </React.Fragment>
    );
  }
}

/*
notes for if i had more time:
resize images, impelment webp
*/

export default InfiniteCarousel;
