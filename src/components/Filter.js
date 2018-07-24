import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Filter extends Component {
  render() {
    const { href, dataFilter, statusOfList, filterName, children } = this.props;
    return (
      <li>
        <Button
          href={href}
          data-filter={dataFilter}
          className={classNames({
            selected: statusOfList === filterName
          })}
        >
          {children}
        </Button>
      </li>
    );
  }
}

export default Filter;
