import React, { Component } from 'react';

export default class BoxClass extends Component {
  render() {
    console.log('props', this.props);
    let result2;
    if (
      this.props.title === 'computer' &&
      this.props.result !== 'tie' &&
      this.props.result !== ''
    ) {
      // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
      result2 = this.props.result === 'win' ? 'lose' : 'win';
    } else {
      //위의 경우가 아니라면 props로 전달된 결과를 그대로 쓴다.
      result2 = this.props.result;
    }
    return (
      <div>
        <div className={`box ${result2}`}>
          <h1>{this.props.title}</h1>
          <h2>{this.props.item && this.props.item.name}</h2>
          <img
            className="item-img"
            src={this.props.item && this.props.item.img}
          />
          <h2>{result2}</h2>
        </div>
      </div>
    );
  }
}
