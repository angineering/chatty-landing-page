import React, { Component } from 'react'
import Screenshot from './static/images/chatty-screenshot.png'
import Testimonial from './components/Testimonial'
import DarrenImg from './static/images/Darren.png'
import GinaImg from './static/images/Gina.png'
import MaryamImg from './static/images/maryam.png'

export default class Main extends Component {
  render() {
    return (
      <div id="main">
        <header className="App-header">
          <div>
          <h1>Remember to Slack your colleagues</h1>
          <h4>
            Keep track of how many colleagues you've spoken to lately,
            and who it's time to reach out to again.
          </h4>
          <br></br>
          <a href="https://slack.com/oauth/v2/authorize?client_id=1052632707317.1057131634261&scope=chat:write,files:write,users:read&user_scope=im:history,im:read"><img alt="Add to Slack" height="45" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a>
          </div>
          <div>
            <img className="screenshot" src={ Screenshot } alt="screenshot of Chatty app" />
          </div>
        </header>
        <section className="boxes">
          <Testimonial
            name="Darren"
            photo={DarrenImg}
            job="Program Manager @ Antler London"
            quote="Chatty helps you track who you haven’t engaged with after a few days, weeks or ever! Great for distributed or remote teams."
          />
          <Testimonial
            name="Maryam"
            photo={MaryamImg}
            job="Entrepreneur @ Antler"
            quote="It pushed me to contact people I've never contacted before. It's very good!"
          />
          <Testimonial
            name="Gina"
            photo={GinaImg}
            job="Entrepreneur @ Antler"
            quote="Very effective for staying on top of your social life with colleagues especially in these difficult quarantine times! Highly recommend!"
          />
        </section>
      </div>
    )
  }
}