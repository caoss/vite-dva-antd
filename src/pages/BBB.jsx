import React, { Component } from 'react';
import { connect } from 'dva';
 
class BBB extends Component {
  componentDidMount(){
    alert(1)
    console.log( 'propssss',this.props )
  }
  render() {
    return (
      <div>
        <p>
          BBB页
        </p>
      </div>
    );
  }
}
  
// export default BBB;
export default connect(({ products,aaa,bbb }) => ({
  products,
  aaa,
  bbb
}))(BBB);