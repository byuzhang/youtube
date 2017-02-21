import React, { Component } from 'react';
import { FormGroup, FormControl, Button, Col, Row } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(){
    super();
    this.state = {term: ''};
  }

  onSearch(e){
    e.preventDefault();
    this.setState({
      term: this.searchText.value
    });

    this.props.searchVideo(this.searchText.value);

  }
  
  render(){
    return(
      <div className="search-bar">
        <form onSubmit={e => this.onSearch(e)}>
          <Row>
            <Col md={8} sm={10}>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  inputRef={ref => {this.searchText = ref; }}
                  />
              </FormGroup>
            </Col>
            <Col md={4} sm={2}>
              <Button bsStyle='primary'>
                搜索
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    )
  }

}

SearchBar.propTypes = {
  searchVideo: React.PropTypes.func.isRequired
}

export default SearchBar;
