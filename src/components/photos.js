import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { css, StyleSheet } from 'aphrodite/no-important'

const PHOTO_SET = [
  {
    src: '../../images/boatride_1.jpg',
    srcset: [
      '../../images/boatride_1_1024.jpg 1024w',
      '../../images/boatride_1_800.jpg 800w',
      '../../images/boatride_1_500.jpg 500w',
      '../../images/boatride_1_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_1_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 2448,
    height: 3264,
    alt: 'image 1',
  },
  {
    src: '../../images/boatride_5.jpg',
    srcset: [
      '../../images/boatride_5_1024.jpg 1024w',
      '../../images/boatride_5_800.jpg 800w',
      '../../images/boatride_5_500.jpg 500w',
      '../../images/boatride_5_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_5_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 2448,
    height: 3264,
    alt: 'image 5',
  },
  {
    src: '../../images/boatride_6.jpg',
    srcset: [
      '../../images/boatride_6_1024.jpg 1024w',
      '../../images/boatride_6_800.jpg 800w',
      '../../images/boatride_6_500.jpg 500w',
      '../../images/boatride_6_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_6_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 2346,
    height: 3128,
    alt: 'image 6',
  },
  {
    src: '../../images/capt_john.jpg',
    srcset: [
      '../../images/capt_john_1024.jpg 1024w',
      '../../images/capt_john_800.jpg 800w',
      '../../images/capt_john_500.jpg 500w',
      '../../images/capt_john_320.jpg 320w',
    ],
    thumbnail: '../../images/capt_john_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 960,
    height: 1280,
    alt: 'captain john',
  },
  {
    src: '../../images/boatride_2.jpg',
    srcset: [
      '../../images/boatride_2_1024.jpg 1024w',
      '../../images/boatride_2_800.jpg 800w',
      '../../images/boatride_2_500.jpg 500w',
      '../../images/boatride_2_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_2_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 3128,
    height: 2346,
    alt: 'image 2',
  },
  {
    src: '../../images/boatride_3.jpg',
    srcset: [
      '../../images/boatride_3_1024.jpg 1024w',
      '../../images/boatride_3_800.jpg 800w',
      '../../images/boatride_3_500.jpg 500w',
      '../../images/boatride_3_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_3_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 3128,
    height: 2346,
    alt: 'image 3',
  },
  {
    src: '../../images/boatride_7.jpg',
    srcset: [
      '../../images/boatride_7_1024.jpg 1024w',
      '../../images/boatride_7_800.jpg 800w',
      '../../images/boatride_7_500.jpg 500w',
      '../../images/boatride_7_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_7_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 7',
  },
  {
    src: '../../images/boatride_8.jpg',
    srcset: [
      '../../images/boatride_8_1024.jpg 1024w',
      '../../images/boatride_8_800.jpg 800w',
      '../../images/boatride_8_500.jpg 500w',
      '../../images/boatride_8_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_8_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 1200,
    height: 788,
    alt: 'image 8',
  }
];

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	heading: PropTypes.string,
	images: PropTypes.array,
	showThumbnails: PropTypes.bool,
	subheading: PropTypes.string,
};

const gutter = {
	small: 2,
	large: 4,
};

const classes = StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large,
		},
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large,
		},
	},

	// orientation
	landscape: {
		width: '30%',
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0,
		},
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto',
	},
});

class Photos extends Component {
  constructor() {
    super()
    this.state = { lightboxIsOpen: false, currentImage: 0 }

    this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

  closeLightbox() {
    this.setState({ currentImage: 0, lightboxIsOpen: false})
  }

  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;
		this.gotoNext()
  }

  gotoImage(index) {
    this.setState({ currentImage: index, })
  }

  gotoNext() {
    this.setState({ currentImage: this.state.currentImage + 1, })
  }

  gotoPrevious() {
    this.setState({ currentImage: this.state.currentImage - 1, })
  }

  renderGallery() {
    const images = PHOTO_SET
		if (!images) return
		const gallery = images.map((obj, i) => {
			return (
				<a
					href={obj.src}
					className={css(classes.thumbnail, classes[obj.orientation])}
					key={i}
					onClick={(e) => this.openLightbox(i, e)}
				>
					<img src={obj.thumbnail} className={css(classes.source)} alt="" />
				</a>
			)
    })

    return (
      <div className={css(classes.gallery)}>
        {gallery}
      </div>
    );
  }

  render() {
    return(
      <div className="section">
				{this.renderGallery()}
				<Lightbox
					currentImage={this.state.currentImage}
					images={PHOTO_SET}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
				/>
			</div>
    )
  }
}

export default Photos
