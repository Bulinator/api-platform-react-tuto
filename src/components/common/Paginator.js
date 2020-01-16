import React, {Component} from 'react';
import classNames from 'classnames';

export class Paginator extends Component {
    constructor(props){
        super(props);
        const { pageCount } = this.props;
        this.range = [];

        for (let i = 1; i <= pageCount; i++) {
            this.range.push(i);
        }
        console.log(props);
    }

    render() {
        const {currentPage, setPage, prevPage, nextPage} = this.props;

        return (
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" onClick={prevPage}>
                            Previous
                        </button>
                    </li>
                    {
                        this.range.map(page => {
                            const onClick = () => {
                                console.log('onclick', page);
                                setPage(page);
                            };
                            return (
                                <li key={page} className={classNames('page-item', {active: currentPage === page})}>
                                    <button className="page-link" onClick={onClick}>
                                        {page}
                                    </button>
                                </li>
                            );
                        })
                    }
                    <li className="page-item">
                        <button className="page-link" onClick={nextPage}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}
