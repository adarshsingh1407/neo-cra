import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {processMeta} from '../utils/MetaHelper';

class MetaHelmet extends Component {
  render() {
    const meta = processMeta(this.props);
    return (
      <Helmet>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        {/* START: Common Meta */}
        <meta name="title" content={meta.title}/>
        <meta name="description" content="Meta Description goes here"/> {/* <meta name="keywords" content="{{meta.keywords}}" /> */}
        {/* END: Common Meta */}

        {/* START: WhatsApp Card */}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
        {/* END: WhatsApp Card */}

        {/* START: OG */}
        <meta property="og:type" content="Website"/>
        <meta property="og:url" content="%PUBLIC_URL%/"/>
        <meta property="og:title" content={meta.title}/>
        <meta property="og:description" content="Meta Description goes here"/>
        <meta property="og:image:secure_url" content="%PUBLIC_URL%/assets/images/logo.png"/>
        <meta property="og:image" content="%PUBLIC_URL%/assets/images/logo.png"/>
        {/* <meta property="og:image:width" content="486" />
        <meta property="og:image:height" content="255" /> */}
        {/* START: OG */}

        {/* START: Twitter Meta */}
        {/* <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="neocra.com"> */}
        <meta name="twitter:title" content={meta.title}/>
        <meta name="twitter:description" content="Meta Description goes here"/>
        <meta name="twitter:image:src" content="%PUBLIC_URL%/assets/images/logo.png"/>
        {/* END: Twitter Meta */}

        {/* START: Google+ Item Prop */}
        <meta itemprop="name" content={meta.title}/>
        <meta itemprop="description" content="Meta Description goes here"/>
        <meta itemprop="image" content="%PUBLIC_URL%/assets/images/logo.png"/>
        {/* END: Google+ Item Prop */}

        <title>{meta.title}</title>
      </Helmet>
    )
  }
}

export default MetaHelmet
