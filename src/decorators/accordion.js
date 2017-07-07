import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class Accordion extends ReactComponent {
  state = {
    isOpen: null
  }

  render() {
    return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} />
  }

  toggleOpenArticle = openArticleId => ev => {
      const articleId = openArticleId !== this.state.isOpen ? openArticleId : null
      this.setState({ isOpen: articleId })
  }
}