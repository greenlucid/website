import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Sash from "../components/sash"
import HorizontalCard from "../components/horizontal-card"
import Sponsors from "../components/sponsors"
import Contact from "../components/contact"

import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Button,
  Card,
  Badge,
  Container,
} from "react-bootstrap"

import {
  injectIntl,
  Link,
  FormattedMessage,
  IntlContextConsumer,
  changeLocale,
} from "gatsby-plugin-intl"
import styles from "./styles/index.module.css"
import Logo from "../assets/logos/brand.svg"
import Court from "../assets/logos/kleros.svg"
import Curate from "../assets/logos/curate.svg"
import Escrow from "../assets/logos/escrow.svg"
import T2CR from "../assets/logos/t2cr.svg"
import Resolver from "../assets/logos/dispute-resolver.svg"
import Ninja from "../assets/logos/ninja.svg"
import Linguo from "../assets/logos/linguo.svg"
import CU from "../assets/logos/kleros.svg"
import Realitio from "../assets/logos/kleros.svg"

const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" lang={intl.locale} />
    <Container as="main" fluid className={styles.index}>
      <section className={styles.hero}>
        <h1>
          <FormattedMessage id="index.section-hero.h1" />
        </h1>
        <h2>
          <FormattedMessage id="index.section-hero.h2" />
        </h2>

        <Container className={styles.buttonWrapper}>
          <Button variant="primary">
            <FormattedMessage id="index.section-hero.button-primary" />
          </Button>
          <Button variant="secondary">
            <FormattedMessage id="index.section-hero.button-secondary" />
          </Button>
        </Container>
        <img src="/index-hero.png" />
      </section>
      <Sash
        as="div"
        figures={{
          first: {
            title: intl.formatMessage({
              id: "index.sash.first.title",
            }),
            paragraph: intl.formatMessage({
              id: "index.sash.first.paragraph",
            }),
            icon: "scales",
          },
          second: {
            title: intl.formatMessage({
              id: "index.sash.second.title",
            }),
            paragraph: intl.formatMessage({
              id: "index.sash.second.paragraph",
            }),
            icon: "epsilon",
          },
          third: {
            title: intl.formatMessage({
              id: "index.sash.third.title",
            }),
            paragraph: intl.formatMessage({
              id: "index.sash.third.paragraph",
            }),
            icon: "kleros",
          },
        }}
      />
      <section>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/M8nJ7yrTL-Q"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; controls=0"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <hr />
      <section className={styles.usecases}>
        <h1>{intl.formatMessage({ id: "index.section-2.h1" })}</h1>
        <h2>{intl.formatMessage({ id: "index.section-2.h2" })}</h2>
        <div className={styles.cards}>
          <HorizontalCard
            content={{
              icon: "smallClaims",
              text: intl.formatMessage({ id: "index.section-2.cards.1" }),
            }}
          />
          <HorizontalCard
            content={{
              icon: "insurance",
              text: intl.formatMessage({ id: "index.section-2.cards.2" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "eCommerce",
              text: intl.formatMessage({ id: "index.section-2.cards.3" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "finance",
              text: intl.formatMessage({ id: "index.section-2.cards.4" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "freelancing",
              text: intl.formatMessage({ id: "index.section-2.cards.5" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "token",
              text: intl.formatMessage({ id: "index.section-2.cards.6" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "moderation",
              text: intl.formatMessage({ id: "index.section-2.cards.7" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "copyright",
              text: intl.formatMessage({ id: "index.section-2.cards.8" }),
            }}
          />{" "}
          <HorizontalCard
            content={{
              icon: "plus",
              text: intl.formatMessage({ id: "index.section-2.cards.9" }),
            }}
          />
        </div>
      </section>
      <section>
        <h1>{intl.formatMessage({ id: "index.section-3.h1" })}</h1>
        <h2>{intl.formatMessage({ id: "index.section-3.h2" })}</h2>
        <img src="/cases-disputes.png" />
      </section>

      <div className={styles.products}>
        <div className="px-5 py-3 text-center">
          <div className={styles.h1}>
            {intl.formatMessage({ id: "index.products.h1" })}
          </div>
          <div className="d-inline-block">
            <a href="https://court.kleros.io">
              <Badge>
                <Court />
              </Badge>
            </a>
            <p className="text-center text-purple-darker ">Court</p>
          </div>
          <div className="d-inline-block">
            <a href="https://escrow.kleros.io">
              <Badge>
                <Escrow />
              </Badge>
            </a>
            <p className="text-center text-purple-darker ">Escrow</p>
          </div>
          <div className="d-inline-block">
            <a href="https://linguo.kleros.io">
              <Badge>
                <Linguo />
              </Badge>
            </a>
            <p className="text-center text-purple-darker ">Linguo</p>
          </div>
          <div className="d-inline-block">
            <a href="https://tokens.kleros.io">
              <Badge>
                <T2CR />
              </Badge>
            </a>
            <p className="text-center text-purple-darker ">T2CR</p>
          </div>
          <div className="d-inline-block">
            <a href="https://uniswap.ninja">
              <Badge>
                <Ninja />
              </Badge>
            </a>
            <p className="text-center text-purple-darker ">Ninja</p>
          </div>
          <div className="d-inline-block">
            <a href="https://resolve.kleros.io">
              <Badge>
                <Resolver />
              </Badge>
            </a>
            <p className="text-center text-purple-darker ">Dispute Resolver</p>
          </div>
          <div className="d-inline-block">
            <a href="https://resolve.kleros.io">
              <Badge>
                <CU />
              </Badge>
            </a>
            <p className="text-center text-purple-darker ">Crypto Unlocked</p>
          </div>
          <div className="d-inline-block">
            <a href="https://resolve.kleros.io">
              <Badge>
                <Realitio />
              </Badge>
            </a>
            <p className="text-center text-purple-darker  ">Realitio</p>
          </div>
          <br />{" "}
          <small>
            <FormattedMessage id="index.products.small" />
          </small>
        </div>
      </div>
      <Sponsors />
      <section>
        <Contact />
      </section>
    </Container>
  </Layout>
)

export default injectIntl(IndexPage)
