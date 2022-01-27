import { Card } from '@momo/shared/ui'
import MainLayout from '../components/main-layout/main-layout'
import styles from './index.module.scss'

export const Index = () => {
  return (
    <MainLayout>
      <div className={styles['wrapper']}>
        <div className={styles['container']}>
          <Card>
            <div className={styles['card-content']}>
              <div className={styles['easy-web-img']}>
                <img src="images/easy-web-with-text.png" alt="" />
              </div>
              <h1>Hey, Mates 👽</h1>
              <img
                src="images/me.jpg"
                className={styles['profile-img']}
                alt=""
              />

              <p>
                Do you expect to read about tedious success stories here, like
                most people do, hell no 👿, it is too boring 😤. Instead, I
                dedicate only one paragraph for it, and for the rest, I will
                tell you why you have to follow me on Social Media?
              </p>

              <p>
                In short, I am Vitalii, originated from Ukraine 🇺🇦. Had a happy
                life in Amsterdam 🌷 before I won a Green Card and moved to
                Silicon Valley. I had a good time working in a Machine Learning
                startup and now I am continuing my carrier as a Senior Frontend
                Developer in Amazon.
              </p>

              <p>
                That is it, are you still here? Alright, for those who stayed,
                this stuff 😎 is for you. If you follow me on{' '}
                <a href="https://easy-web.medium.com/subscribe" target="_blank">
                  Medium
                </a>
                ,{' '}
                <a href="https://twitter.com/easy_web_org" target="_blank">
                  Twitter
                </a>
                , or support me by buying me a{' '}
                <a href="https://www.buymeacoffee.com/easyweb" target="_blank">
                  ☕ coffee
                </a>{' '}
                or becoming a{' '}
                <a href="https://www.patreon.com/easy_web" target="_blank">
                  Patreon
                </a>
                , you will learn:
              </p>

              <ul>
                <li>
                  How to Ace a Front-End Interview in any company, including
                  MAANG (Meta, Amazon, Apple, Netflix, Google)?
                </li>
                <li>
                  How to build a modern Micro Frontend application using
                  Angular? 🅰️
                </li>
                <li>
                  How to make the fastest website possible in jamstack using
                  React and Next.js? ⚛️
                </li>
                <li>
                  How to build any complexity of Web 3 application: NFT markets,
                  crypto markets, auctions? ₿
                </li>
                <li>
                  And All of this is - EASY and FREE, means NO MONEY 🙅‍♂️, at
                  ALL!! 🥺
                </li>
                <li>The roadmap is a Youtube channel and online courses.</li>
              </ul>

              <p>
                <p>
                  If you are not convinced yet to follow me, there will also be
                  a lot of Giveaways 🎁 in the future. Just to make it happen -
                  click on follow button in{' '}
                  <a
                    href="https://easy-web.medium.com/subscribe"
                    target="_blank"
                  >
                    Medium
                  </a>{' '}
                  and{' '}
                  <a href="https://twitter.com/easy_web_org" target="_blank">
                    Twitter
                  </a>
                  . Stay safe and stay tuned everyone, I want to hear more from
                  you. Let's keep in touch on{' '}
                  <a
                    href="https://www.facebook.com/easyweb.org"
                    target="_blank"
                  >
                    Facebook
                  </a>{' '}
                  or{' '}
                  <a href="https://discord.gg/Fkp98G9Y" target="_blank">
                    Discord
                  </a>
                  .{' '}
                </p>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}

export default Index
