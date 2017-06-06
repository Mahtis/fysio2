class LayersPage extends React.Component {
    render(){
        let layers = this.props.layers
        return (
            <div>
                <h2>Styles</h2>
                {layers.length}
            </div>
        )
    }
}
