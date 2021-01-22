import React from "react"
import { Link } from "gatsby"

import VideoPlayer from '../components/videoPlayer';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>

    {/* <video-js
      id="my_video_1"
      class="vjs-default-skin"
      controls preload="auto" width="640" height="268">
      <source src="https://d2h4ujdvdagbg2.cloudfront.net/da0eaa34-24b9-4a29-b1cb-e174d5b4d11a/DASHISO1/test.mpd" type="application/dash+xml"></source>
    </video-js> */}
    {/* <VideoPlayer src="https://d2h4ujdvdagbg2.cloudfront.net/da0eaa34-24b9-4a29-b1cb-e174d5b4d11a/DASHISO1/test.mpd"/> */}
    <VideoPlayer src="https://d2h4ujdvdagbg2.cloudfront.net/da0eaa34-24b9-4a29-b1cb-e174d5b4d11a/AppleHLS1/test.m3u8"/>


    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
