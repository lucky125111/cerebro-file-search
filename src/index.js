import React from 'react'

import Preview from './Preview'
import icon from './assets/locate.png'

const id = 'locate'
export const order = 1

/**
 * Search term in google
 *
 * @param  {String} options.term
 * @param  {Object} options.actions
 * @param  {Function} options.display
 */
export const fn = ({ term, actions, display }) => {
  /**
   * Open browser with google search of term
   * @param  {String} searchTerm
   */
  var search = (searchTerm) => {
    actions.reveal(`${searchTerm}`)
    actions.hideWindow()
  }

  display({
    id,
    icon,
    order,
    title: `Search files for ${term}`,
    getPreview: () => <Preview query={term} key={term} search={search}/>,
  })
}
