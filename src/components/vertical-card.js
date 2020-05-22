/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import styles from "./styles/vertical-card.module.css"

import escrow from "src/assets/icons/escrow.png"
import epsilon from "src/assets/icons/epsilon.png"
import kleros from "src/assets/icons/kleros.png"
import list from "src/assets/icons/list.png"
import onepager from "src/assets/icons/onepager.png"
import yellowpaper from "src/assets/icons/yellowpaper.png"
import whitepaper from "src/assets/icons/whitepaper.png"
import t2cr from "src/assets/icons/t2cr.png"
import scales from "src/assets/icons/scales.png"
import risks from "src/assets/icons/risks.png"
import gavel from "src/assets/icons/gavel.png"
import handshake from "src/assets/icons/handshake.png"

import {
  Navbar,
  Nav,
  NavDropdown,
  Collapse,
  Button,
  Badge,
  Col,
  Row,
  Container,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap"

import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const ICONS = {
  escrow,
  epsilon,
  kleros,
  list,
  onepager,
  yellowpaper,
  whitepaper,
  t2cr,
  scales,
  risks,
  gavel,
  handshake,
}

const VerticalCard = ({ content, intl }) => (
  <Container fluid className={styles.verticalCard}>
    <img src={ICONS[content.icon]} />
    <span>{content.title}</span>
    <span>{content.paragraph}</span>
    <Button variant={content.button.variant}>{content.button.text}</Button>
  </Container>
)

VerticalCard.propTypes = {}

export default injectIntl(VerticalCard)