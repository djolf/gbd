import React from "react";
import "./ContentGrid.scss";

const content = [
  {
    title: '<h1 class="text-left">PLAY<br>WIN<br>EXCITE</h1>',
    img: require('../assets/Rectangle-4.png'),
    cta: {
      label: "Get Started!",
      onClick: () => window.location.href = "/signup",
    },
  },
  {
    img: require('../assets/Mask-group.png'),
  },
  {
    img: require('../assets/Mask-group-2.png'),
  },
  {
    img: require('../assets/Mask-group-3.png'),
  },
  {
    img: require('../assets/Mask-group-4.png'),
  },
  {
    titleMobile: "LIVE GAMES",
    title: "LIVE GAMES<br>WITH FRIENDS",
    titleBackground: true,
    img: require('../assets/Mask-group-5.png'),
  },
  {
    img: require('../assets/Mask-group-6.png'),
  },
  {
    img: require('../assets/Mask-group-7.png'),
  },
  {
    img: require('../assets/Mask-group-8.png'),
  },
  {
    img: require('../assets/Mask-group-9.png'),
  },
  {
    title: "LOVE PLAYING?<br>JOIN THE LEAGUE",
    titleBackground: true,
    img: require('../assets/Mask-group-10.png'),
  },
]

export const ContentGrid = () => {
  return (
    <div className="content-grid">
      {content && content.map((item, index) => <ContentTile key={index} {...item} index={index+1}/>)}
    </div>
  )
}

const ContentTile = props => {
  return (
    <div className={`tile item-${props.index}`}>
      {props.img && <img src={props.img} alt="" />}
      {(props.title || props.cta) && (
        <div className={`tile-info${props.titleBackground ? " title-bg":""}`}>
          {props.title && <div className="title" dangerouslySetInnerHTML={{__html: props.title}}></div>}
          {(props.title || props.titleMobile) && <div className="titleMobile" dangerouslySetInnerHTML={{__html: props.titleMobile || props.title}}></div>}
          {props.cta && <div className="btn btn-cta" onClick={props.cta.onClick}>{props.cta.label}</div>}
        </div>
      )}
      {props.link && <div className="link" onClick={props.link.onClick}>{props.link.label}</div>}
    </div>
  )
}