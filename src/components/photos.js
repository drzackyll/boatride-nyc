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
    src: '../../images/boatride_31.jpg',
    srcset: [
      '../../images/boatride_31_1024.jpg 1024w',
      '../../images/boatride_31_800.jpg 800w',
      '../../images/boatride_31_500.jpg 500w',
      '../../images/boatride_31_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_31_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 31',
  },
  {
    src: '../../images/boatride_25.jpg',
    srcset: [
      '../../images/boatride_25_1024.jpg 1024w',
      '../../images/boatride_25_800.jpg 800w',
      '../../images/boatride_25_500.jpg 500w',
      '../../images/boatride_25_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_25_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 25',
  },
  {
    src: '../../images/boatride_33.jpg',
    srcset: [
      '../../images/boatride_33_1024.jpg 1024w',
      '../../images/boatride_33_800.jpg 800w',
      '../../images/boatride_33_500.jpg 500w',
      '../../images/boatride_33_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_33_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 33',
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
  // {
  //   src: '../../images/capt_john.jpg',
  //   srcset: [
  //     '../../images/capt_john_1024.jpg 1024w',
  //     '../../images/capt_john_800.jpg 800w',
  //     '../../images/capt_john_500.jpg 500w',
  //     '../../images/capt_john_320.jpg 320w',
  //   ],
  //   thumbnail: '../../images/capt_john_thumb.jpg',
  //   sizes:[
  //     '(min-width: 480px) 50vw',
  //     '(min-width: 1024px) 33.3vw',
  //     '100vw'
  //   ],
  //   orientation: 'portrait',
  //   width: 960,
  //   height: 1280,
  //   alt: 'captain john',
  // },
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
  // {
  //   src: '../../images/boatride_8.jpg',
  //   srcset: [
  //     '../../images/boatride_8_1024.jpg 1024w',
  //     '../../images/boatride_8_800.jpg 800w',
  //     '../../images/boatride_8_500.jpg 500w',
  //     '../../images/boatride_8_320.jpg 320w',
  //   ],
  //   thumbnail: '../../images/boatride_8_thumb.jpg',
  //   sizes:[
  //     '(min-width: 480px) 50vw',
  //     '(min-width: 1024px) 33.3vw',
  //     '100vw'
  //   ],
  //   orientation: 'landscape',
  //   width: 1200,
  //   height: 788,
  //   alt: 'image 8',
  // },
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
  },
  {
    src: '../../images/boatride_21.jpg',
    srcset: [
      '../../images/boatride_21_1024.jpg 1024w',
      '../../images/boatride_21_800.jpg 800w',
      '../../images/boatride_21_500.jpg 500w',
      '../../images/boatride_21_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_21_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 21',
  },
  {
    src: '../../images/boatride_22.jpg',
    srcset: [
      '../../images/boatride_22_1024.jpg 1024w',
      '../../images/boatride_22_800.jpg 800w',
      '../../images/boatride_22_500.jpg 500w',
      '../../images/boatride_22_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_22_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 22',
  },
  {
    src: '../../images/boatride_23.jpg',
    srcset: [
      '../../images/boatride_23_1024.jpg 1024w',
      '../../images/boatride_23_800.jpg 800w',
      '../../images/boatride_23_500.jpg 500w',
      '../../images/boatride_23_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_23_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 23',
  },
  {
    src: '../../images/boatride_24.jpg',
    srcset: [
      '../../images/boatride_24_1024.jpg 1024w',
      '../../images/boatride_24_800.jpg 800w',
      '../../images/boatride_24_500.jpg 500w',
      '../../images/boatride_24_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_24_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 4',
  },
  {
    src: '../../images/boatride_32.jpg',
    srcset: [
      '../../images/boatride_32_1024.jpg 1024w',
      '../../images/boatride_32_800.jpg 800w',
      '../../images/boatride_32_500.jpg 500w',
      '../../images/boatride_32_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_32_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 32',
  },
  {
    src: '../../images/boatride_26.jpg',
    srcset: [
      '../../images/boatride_26_1024.jpg 1024w',
      '../../images/boatride_26_800.jpg 800w',
      '../../images/boatride_26_500.jpg 500w',
      '../../images/boatride_26_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_26_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 26',
  },
  {
    src: '../../images/boatride_27.jpg',
    srcset: [
      '../../images/boatride_27_1024.jpg 1024w',
      '../../images/boatride_27_800.jpg 800w',
      '../../images/boatride_27_500.jpg 500w',
      '../../images/boatride_27_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_27_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 27',
  },
  {
    src: '../../images/boatride_28.jpg',
    srcset: [
      '../../images/boatride_28_1024.jpg 1024w',
      '../../images/boatride_28_800.jpg 800w',
      '../../images/boatride_28_500.jpg 500w',
      '../../images/boatride_28_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_28_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 28',
  },
  {
    src: '../../images/boatride_29.jpg',
    srcset: [
      '../../images/boatride_29_1024.jpg 1024w',
      '../../images/boatride_29_800.jpg 800w',
      '../../images/boatride_29_500.jpg 500w',
      '../../images/boatride_29_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_29_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 29',
  },
  {
    src: '../../images/boatride_30.jpg',
    srcset: [
      '../../images/boatride_30_1024.jpg 1024w',
      '../../images/boatride_30_800.jpg 800w',
      '../../images/boatride_30_500.jpg 500w',
      '../../images/boatride_30_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_30_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'landscape',
    width: 2064,
    height: 1161,
    alt: 'image 30',
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
  {
    src: '../../images/boatride_34.jpg',
    srcset: [
      '../../images/boatride_34_1024.jpg 1024w',
      '../../images/boatride_34_800.jpg 800w',
      '../../images/boatride_34_500.jpg 500w',
      '../../images/boatride_34_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_34_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 34',
  },
  {
    src: '../../images/boatride_35.jpg',
    srcset: [
      '../../images/boatride_35_1024.jpg 1024w',
      '../../images/boatride_35_800.jpg 800w',
      '../../images/boatride_35_500.jpg 500w',
      '../../images/boatride_35_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_35_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 35',
  },
  {
    src: '../../images/boatride_36.jpg',
    srcset: [
      '../../images/boatride_36_1024.jpg 1024w',
      '../../images/boatride_36_800.jpg 800w',
      '../../images/boatride_36_500.jpg 500w',
      '../../images/boatride_36_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_36_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 36',
  },
  {
    src: '../../images/boatride_37.jpg',
    srcset: [
      '../../images/boatride_37_1024.jpg 1024w',
      '../../images/boatride_37_800.jpg 800w',
      '../../images/boatride_37_500.jpg 500w',
      '../../images/boatride_37_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_37_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 37',
  },
  {
    src: '../../images/boatride_38.jpg',
    srcset: [
      '../../images/boatride_38_1024.jpg 1024w',
      '../../images/boatride_38_800.jpg 800w',
      '../../images/boatride_38_500.jpg 500w',
      '../../images/boatride_38_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_38_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 38',
  },
  {
    src: '../../images/boatride_39.jpg',
    srcset: [
      '../../images/boatride_39_1024.jpg 1024w',
      '../../images/boatride_39_800.jpg 800w',
      '../../images/boatride_39_500.jpg 500w',
      '../../images/boatride_39_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_39_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 39',
  },
  {
    src: '../../images/boatride_40.jpg',
    srcset: [
      '../../images/boatride_40_1024.jpg 1024w',
      '../../images/boatride_40_800.jpg 800w',
      '../../images/boatride_40_500.jpg 500w',
      '../../images/boatride_40_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_40_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 40',
  },
  {
    src: '../../images/boatride_41.jpg',
    srcset: [
      '../../images/boatride_41_1024.jpg 1024w',
      '../../images/boatride_41_800.jpg 800w',
      '../../images/boatride_41_500.jpg 500w',
      '../../images/boatride_41_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_41_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 41',
  },
  {
    src: '../../images/boatride_42.jpg',
    srcset: [
      '../../images/boatride_42_1024.jpg 1024w',
      '../../images/boatride_42_800.jpg 800w',
      '../../images/boatride_42_500.jpg 500w',
      '../../images/boatride_42_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_42_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 42',
  },
  {
    src: '../../images/boatride_43.jpg',
    srcset: [
      '../../images/boatride_43_1024.jpg 1024w',
      '../../images/boatride_43_800.jpg 800w',
      '../../images/boatride_43_500.jpg 500w',
      '../../images/boatride_43_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_43_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 43',
  },
  {
    src: '../../images/boatride_44.jpg',
    srcset: [
      '../../images/boatride_44_1024.jpg 1024w',
      '../../images/boatride_44_800.jpg 800w',
      '../../images/boatride_44_500.jpg 500w',
      '../../images/boatride_44_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_44_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 44',
  },
  {
    src: '../../images/boatride_45.jpg',
    srcset: [
      '../../images/boatride_45_1024.jpg 1024w',
      '../../images/boatride_45_800.jpg 800w',
      '../../images/boatride_45_500.jpg 500w',
      '../../images/boatride_45_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_45_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 45',
  },
  {
    src: '../../images/boatride_46.jpg',
    srcset: [
      '../../images/boatride_46_1024.jpg 1024w',
      '../../images/boatride_46_800.jpg 800w',
      '../../images/boatride_46_500.jpg 500w',
      '../../images/boatride_46_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_46_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 46',
  },
  {
    src: '../../images/boatride_47.jpg',
    srcset: [
      '../../images/boatride_47_1024.jpg 1024w',
      '../../images/boatride_47_800.jpg 800w',
      '../../images/boatride_47_500.jpg 500w',
      '../../images/boatride_47_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_47_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 47',
  },
  {
    src: '../../images/boatride_48.jpg',
    srcset: [
      '../../images/boatride_48_1024.jpg 1024w',
      '../../images/boatride_48_800.jpg 800w',
      '../../images/boatride_48_500.jpg 500w',
      '../../images/boatride_48_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_48_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 48',
  },
  {
    src: '../../images/boatride_49.jpg',
    srcset: [
      '../../images/boatride_49_1024.jpg 1024w',
      '../../images/boatride_49_800.jpg 800w',
      '../../images/boatride_49_500.jpg 500w',
      '../../images/boatride_49_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_49_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 49',
  },
  {
    src: '../../images/boatride_50.jpg',
    srcset: [
      '../../images/boatride_50_1024.jpg 1024w',
      '../../images/boatride_50_800.jpg 800w',
      '../../images/boatride_50_500.jpg 500w',
      '../../images/boatride_50_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_50_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 50',
  },
  {
    src: '../../images/boatride_51.jpg',
    srcset: [
      '../../images/boatride_51_1024.jpg 1024w',
      '../../images/boatride_51_800.jpg 800w',
      '../../images/boatride_51_500.jpg 500w',
      '../../images/boatride_51_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_51_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 51',
  },
  {
    src: '../../images/boatride_52.jpg',
    srcset: [
      '../../images/boatride_52_1024.jpg 1024w',
      '../../images/boatride_52_800.jpg 800w',
      '../../images/boatride_52_500.jpg 500w',
      '../../images/boatride_52_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_52_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 52',
  },
  {
    src: '../../images/boatride_52.jpg',
    srcset: [
      '../../images/boatride_52_1024.jpg 1024w',
      '../../images/boatride_52_800.jpg 800w',
      '../../images/boatride_52_500.jpg 500w',
      '../../images/boatride_52_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_52_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 52',
  },
  {
    src: '../../images/boatride_53.jpg',
    srcset: [
      '../../images/boatride_53_1024.jpg 1024w',
      '../../images/boatride_53_800.jpg 800w',
      '../../images/boatride_53_500.jpg 500w',
      '../../images/boatride_53_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_53_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 53',
  },
  {
    src: '../../images/boatride_54.jpg',
    srcset: [
      '../../images/boatride_54_1024.jpg 1024w',
      '../../images/boatride_54_800.jpg 800w',
      '../../images/boatride_54_500.jpg 500w',
      '../../images/boatride_54_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_54_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 54',
  },
  {
    src: '../../images/boatride_55.jpg',
    srcset: [
      '../../images/boatride_55_1024.jpg 1024w',
      '../../images/boatride_55_800.jpg 800w',
      '../../images/boatride_55_500.jpg 500w',
      '../../images/boatride_55_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_55_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 55',
  },
  {
    src: '../../images/boatride_56.jpg',
    srcset: [
      '../../images/boatride_56_1024.jpg 1024w',
      '../../images/boatride_56_800.jpg 800w',
      '../../images/boatride_56_500.jpg 500w',
      '../../images/boatride_56_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_56_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 56',
  },
  {
    src: '../../images/boatride_57.jpg',
    srcset: [
      '../../images/boatride_57_1024.jpg 1024w',
      '../../images/boatride_57_800.jpg 800w',
      '../../images/boatride_57_500.jpg 500w',
      '../../images/boatride_57_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_57_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 57',
  },
  {
    src: '../../images/boatride_58.jpg',
    srcset: [
      '../../images/boatride_58_1024.jpg 1024w',
      '../../images/boatride_58_800.jpg 800w',
      '../../images/boatride_58_500.jpg 500w',
      '../../images/boatride_58_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_58_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 58',
  },
  {
    src: '../../images/boatride_59.jpg',
    srcset: [
      '../../images/boatride_59_1024.jpg 1024w',
      '../../images/boatride_59_800.jpg 800w',
      '../../images/boatride_59_500.jpg 500w',
      '../../images/boatride_59_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_59_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 59',
  },
  {
    src: '../../images/boatride_60.jpg',
    srcset: [
      '../../images/boatride_60_1024.jpg 1024w',
      '../../images/boatride_60_800.jpg 800w',
      '../../images/boatride_60_500.jpg 500w',
      '../../images/boatride_60_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_60_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 60',
  },
  {
    src: '../../images/boatride_61.jpg',
    srcset: [
      '../../images/boatride_61_1024.jpg 1024w',
      '../../images/boatride_61_800.jpg 800w',
      '../../images/boatride_61_500.jpg 500w',
      '../../images/boatride_61_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_61_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 61',
  },
  {
    src: '../../images/boatride_62.jpg',
    srcset: [
      '../../images/boatride_62_1024.jpg 1024w',
      '../../images/boatride_62_800.jpg 800w',
      '../../images/boatride_62_500.jpg 500w',
      '../../images/boatride_62_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_62_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 62',
  },
  {
    src: '../../images/boatride_63.jpg',
    srcset: [
      '../../images/boatride_63_1024.jpg 1024w',
      '../../images/boatride_63_800.jpg 800w',
      '../../images/boatride_63_500.jpg 500w',
      '../../images/boatride_63_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_63_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 63',
  },
  {
    src: '../../images/boatride_64.jpg',
    srcset: [
      '../../images/boatride_64_1024.jpg 1024w',
      '../../images/boatride_64_800.jpg 800w',
      '../../images/boatride_64_500.jpg 500w',
      '../../images/boatride_64_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_64_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 64',
  },
  {
    src: '../../images/boatride_65.jpg',
    srcset: [
      '../../images/boatride_65_1024.jpg 1024w',
      '../../images/boatride_65_800.jpg 800w',
      '../../images/boatride_65_500.jpg 500w',
      '../../images/boatride_65_320.jpg 320w',
    ],
    thumbnail: '../../images/boatride_65_thumb.jpg',
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    orientation: 'portrait',
    width: 3264,
    height: 2448,
    alt: 'image 65',
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
