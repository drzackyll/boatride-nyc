import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import { css, StyleSheet } from 'aphrodite'

const PHOTO_SET = [
  {
    src: '../../images/boatride_19.jpg',
    srcset: [
      '../../images/boatride_19_1024.jpg 1024w',
      '../../images/boatride_19_800.jpg 800w',
      '../../images/boatride_19_500.jpg 500w',
      '../../images/boatride_19_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_19_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 800,
    height: 600,
    alt: 'image 19',
  },
  {
    src: '../../images/boatride_20.jpg',
    srcset: [
      '../../images/boatride_20_1024.jpg 1024w',
      '../../images/boatride_20_800.jpg 800w',
      '../../images/boatride_20_500.jpg 500w',
      '../../images/boatride_20_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_20_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 20',
  },
  // {
  //   src: '../../images/boatride_1.jpg',
  //   srcset: [
  //     '../../images/boatride_1_1024.jpg 1024w',
  //     '../../images/boatride_1_800.jpg 800w',
  //     '../../images/boatride_1_500.jpg 500w',
  //     '../../images/boatride_1_320.jpg 320w',
  //   ],
  //   thumbnail: '../../images/boatride_1_thumb.jpg',
  //   sizes:[
  //     '(min-width: 480px) 50vw',
  //     '(min-width: 1024px) 33.3vw',
  //     '100vw'
  //   ],
  //   orientation: 'portrait',
  //   width: 2448,
  //   height: 3264,
  //   alt: 'image 1',
  // },
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
  },
  // {
  //   src: '../../images/boatride_9.jpg',
  //   srcset: [
  //     '../../images/boatride_9_1024.jpg 1024w',
  //     '../../images/boatride_9_800.jpg 800w',
  //     '../../images/boatride_9_500.jpg 500w',
  //     '../../images/boatride_9_320.jpg 320w',
  //   ],
  //   thumbnail: '../../images/boatride_9_thumb.jpg',
  //   sizes:[
  //     '(min-width: 480px) 50vw',
  //     '(min-width: 1024px) 33.3vw',
  //     '100vw'
  //   ],
  //   orientation: 'landscape',
  //   width: 3264,
  //   height: 2448,
  //   alt: 'image 9',
  // },
  {
    src: '../../images/boatride_10.jpg',
    srcset: [
      '../../images/boatride_10_1024.jpg 1024w',
      '../../images/boatride_10_800.jpg 800w',
      '../../images/boatride_10_500.jpg 500w',
      '../../images/boatride_10_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_10_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 2448,
    height: 2448,
    alt: 'image 10',
  },
  {
    src: '../../images/boatride_11.jpg',
    srcset: [
      '../../images/boatride_11_1024.jpg 1024w',
      '../../images/boatride_11_800.jpg 800w',
      '../../images/boatride_11_500.jpg 500w',
      '../../images/boatride_11_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_11_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 2448,
    height: 3264,
    alt: 'image 11',
  },
  {
    src: '../../images/boatride_12.jpg',
    srcset: [
      '../../images/boatride_12_1024.jpg 1024w',
      '../../images/boatride_12_800.jpg 800w',
      '../../images/boatride_12_500.jpg 500w',
      '../../images/boatride_12_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_12_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 4000,
    height: 3000,
    alt: 'image 12',
  },
  {
    src: '../../images/boatride_13.jpg',
    srcset: [
      '../../images/boatride_13_1024.jpg 1024w',
      '../../images/boatride_13_800.jpg 800w',
      '../../images/boatride_13_500.jpg 500w',
      '../../images/boatride_13_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_13_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 213,
    height: 320,
    alt: 'image 13',
  },
  {
    src: '../../images/boatride_14.jpg',
    srcset: [
      '../../images/boatride_14_1024.jpg 1024w',
      '../../images/boatride_14_800.jpg 800w',
      '../../images/boatride_14_500.jpg 500w',
      '../../images/boatride_14_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_14_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 3264,
    height: 2448,
    alt: 'image 14',
  },
  {
    src: '../../images/boatride_15.jpg',
    srcset: [
      '../../images/boatride_15_1024.jpg 1024w',
      '../../images/boatride_15_800.jpg 800w',
      '../../images/boatride_15_500.jpg 500w',
      '../../images/boatride_15_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_15_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3024,
    height: 4032,
    alt: 'image 15',
  },
  {
    src: '../../images/boatride_16.jpg',
    srcset: [
      '../../images/boatride_16_1024.jpg 1024w',
      '../../images/boatride_16_800.jpg 800w',
      '../../images/boatride_16_500.jpg 500w',
      '../../images/boatride_16_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_16_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 2250,
    height: 3000,
    alt: 'image 16',
  },
  {
    src: '../../images/boatride_17.jpg',
    srcset: [
      '../../images/boatride_17_1024.jpg 1024w',
      '../../images/boatride_17_800.jpg 800w',
      '../../images/boatride_17_500.jpg 500w',
      '../../images/boatride_17_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_17_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 960,
    height: 1280,
    alt: 'image 17',
  },
  {
    src: '../../images/boatride_18.jpg',
    srcset: [
      '../../images/boatride_18_1024.jpg 1024w',
      '../../images/boatride_18_800.jpg 800w',
      '../../images/boatride_18_500.jpg 500w',
      '../../images/boatride_18_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_18_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 1280,
    height: 960,
    alt: 'image 18',
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
					className={css(classes.thumbnail)}
					key={i}
					onClick={(e) => this.openLightbox(i, e)}
				>
					<img src={obj.thumbnail} className={css(classes.source)} alt="" />
				</a>
			)
    })

    return (
      <div style={{textAlign: "center"}} className={css(classes.gallery)}>
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
