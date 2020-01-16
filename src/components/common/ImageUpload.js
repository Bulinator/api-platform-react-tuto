import React, {Component} from 'react';
import { connect } from 'react-redux';
import {imageUpload} from "../../actions";

import './imageUpload.css';


const mapDispatchToProps = {
    imageUpload
};

class ImageUpload extends Component {
    onChange(e) {
        console.log(e.target);
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        this.props.imageUpload(file);
    }

    render() {
        return (
            <div className="form-group">
                <div className="nice-input-upload">
                    <input
                        type="file"
                        onChange={this.onChange.bind(this)}
                        className="form-control-file text-primary font-weight-bold"
                        data-title="Click me or drag and drop file"
                    />
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(ImageUpload);