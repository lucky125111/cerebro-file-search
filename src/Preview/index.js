import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loading, KeyboardNav, KeyboardNavItem } from 'cerebro-ui'
import Preload from './Preload'
import getSuggestions from '../getSuggestions'
import styles from './styles.css'

const MAX_LEN = 50
const PREFIX = '...'

class Preview extends Component {
  renderSuggestions(suggestions, searchFn) {
    const className = styles.wrapper
    return (
      <div className={className}>
        <KeyboardNav>
          <ul className={styles.list}>
            {
              suggestions.map(s => (
                <li key={s} className={styles.listItem}>
                  <KeyboardNavItem
                    key={s}
                    tagName={'p'}
                    className={styles.p}
                    onSelect={() => searchFn(s)}

                  >
                    {s.length > MAX_LEN ? PREFIX + s.slice(-MAX_LEN + PREFIX.length) : s}
                  </KeyboardNavItem>
                </li>
              ))
            }
          </ul>
        </KeyboardNav>
      </div>
    )
  }
  render() {
    const { query, search } = this.props
    return (
      <Preload promise={getSuggestions(query)} loader={<Loading />}>
        {(suggestions) => this.renderSuggestions(suggestions || [], search)}
      </Preload>
    )
  }
}

Preview.propTypes = {
  query: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
}

export default Preview
