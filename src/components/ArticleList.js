import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    render() {
        const { filteredArticles, openItemId, toggleOpenItem, articles } = this.props

        // console.log("from", from, "to", to)

        // const initialArticlesList = filteredArticles.length ? filteredArticles : articles

        const articleElements = filteredArticles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    filteredArticles: state.articles.filter((article) => {
        const selectedArticles = state.filters.selected
        const { from, to } = state.filters.dateRange

        const transformToMs = (dateString) => Date.parse(dateString)
        const articleDateMs = transformToMs(article.date)
        const fromMs = transformToMs(from)
        const toMs = transformToMs(to)

        // return selectedArticles.indexOf(article.id) !== -1

        return (!selectedArticles.length || selectedArticles.indexOf(article.id) !== -1) &&
          (!from || !to || (fromMs < articleDateMs && toMs > articleDateMs))
    }),

    articles: state.articles
}))(accordion(ArticleList))