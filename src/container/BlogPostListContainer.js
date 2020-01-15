import React, {Component} from 'react';
import {connect} from "react-redux";
import BlogPostList from "../components/BlogPostList";
import {blogPostListFetch, blogPostListSetPage} from "../actions";
import {Spinner} from "../components/common/Spinner";
import {Paginator} from "../components/common/Paginator";

const mapStateToProps = state => ({
   ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch,
    blogPostListSetPage
};

class BlogPostListContainer extends Component {
    componentDidMount() {
        this.props.blogPostListFetch(this.getQueryParamPage());
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { currentPage, blogPostListFetch, blogPostListSetPage } = this.props;

        if (prevProps.match.params.page !== this.getQueryParamPage()) {
            blogPostListSetPage(this.getQueryParamPage());
        }

        if (prevProps.currentPage !== currentPage) {
            blogPostListFetch(currentPage);
        }
    }

    getQueryParamPage() {
        return Number(this.props.match.params.page) || 1;
    }

    changePage(page) {
        const {history, blogPostListSetPage } = this.props;
        blogPostListSetPage(page);
        history.push(`/${page}`);
    }

    /**
     * buggy func (rendering)
     * @param e
     */
    onNextPageClick(e) {
        const { currentPage, pageCount } = this.props
        const newPage = Math.min(currentPage + 1, pageCount);
        console.log('new page', newPage);
        this.changePage(newPage);
    }

    onPrevPageClick(e) {
        const { currentPage } = this.props;
        const newPage = Math.max(currentPage - 1, 1);
        this.changePage(newPage);
    }

    render() {
        const {posts, isFetching, currentPage, pageCount} = this.props;

        if (isFetching) {
            return <Spinner />
        }
console.log('blogpost list cpage', currentPage);
        return (
            <div>
                <BlogPostList posts={posts} />
                <Paginator
                    currentPage={currentPage}
                    pageCount={pageCount}
                    setPage={this.changePage.bind(this)}
                    nextPage={this.onNextPageClick.bind(this)}
                    prevPage={this.onPrevPageClick.bind(this)}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);