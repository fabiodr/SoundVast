import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import DocumentTitle from "react-document-title";

import {loadAudios} from "./audioActions";

class AudioContainer extends React.Component {
    componentDidMount(){
        this.props.loadAudios();        
    }
    render(){   
        debugger;
        const model = this.props.audio || [];

        return (
            <div> 
                <DocumentTitle title='Audio - SoundVast' />
                <div class="container-fluid">
                    <Sorting />
                    <section class="grid-audio">
                        { model.map((o, i) => <Model {...o} key={i}/>) }
                    </section>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        audio: state.audio
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({loadAudios: loadAudios}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioContainer);