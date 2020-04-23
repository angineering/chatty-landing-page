import React, { Component } from 'react'

export default class Terms extends Component {
  render() {
    return (
      <div className="page">
        <h1>Terms & Conditions</h1>
        <p className="last-modified">Last updated: 16 April 2020</p>
        <p className="blurb">
          By installing the Chatty app you agree to the following terms of service, as well as the privacy policy.
        </p>
        <p>
          You will not use the service in any unlawful way.
          This includes but is not limited to attempts to hack,
          social engineer or in other ways get hold of user data.
        </p>
        <p>
          You will not impersonate Chatty or make any clones or copies of it or its logo or branding.
        </p>
      </div>
    )
  }
}
