import React, { Component } from 'react'

export default class Privacy extends Component {
  render() {
    return (
      <div className="page">
        <h1>Privacy Policy</h1>
        <p className="last-modified">Last modified: 12 March 2020</p>
        <p className="blurb">
          Thank you for using Chatty. This policy explains how we handle your personal data and privacy.
        </p>
        <h2>Information collection and use</h2>
        <p>
          Chatty only uses your approved Slack data to give you an insight into who you've spoken to recently and who you should reach out to, to help you improve your network inside your workspace. 
        </p>
        <p>
          Chatty requests access to see who the members of your workspace are, so it can give you an overview of who you have and haven't spoken to recently.
        </p>
        <p>
          Chatty requests access to your Slack Direct Messages solely for the purpose of seeing when the last message was exchanged with a member of your workspace. We never look at or store the content of those messages.
        </p>
        <p>
          Your user token is securely stored in our database. It is linked to your Slack user ID. Your name is not recorded in our database.
        </p>
        <p>
          If you decide to stop using Chatty and revoke access, your user information will be deleted from our database.
        </p>
        <h2>3rd Parties</h2>
        <p>
          We do not pass your data onto any 3rd parties.
        </p>
        <h2>Revisions to this Privacy Policy</h2>
        <p>
          We reserve the right to revise this Privacy Policy from time to time. We will post changes on this page and indicate the “last modified” date at the top of this page. Please check back often for any updates. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically, and that your continued use of our Services after any change in this Privacy Policy will constitute your acceptance of such change.
        </p>
        <h2>Your Acceptance of These Terms</h2>
        <p>
          By using our Services, you signify your acceptance of this Privacy Policy.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <a href="help@bechatty.app">help@bechatty.app</a>
        </p>
      </div>
    )
  }
}
