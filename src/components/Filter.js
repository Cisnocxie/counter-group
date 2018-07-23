import React, { Component } from 'react';
import classNames from 'classnames';
import todosAPI from '../api/TodoResourseAPI';
import { Button } from 'antd';
import 'antd/dist/antd.css';

class Filter extends Component {
  render() {
    const { href, dataFilter, filterName, children } = this.props;
    return (
      <li>
        <Button
          href={href}
          data-filter={dataFilter}
          className={classNames({
            selected: todosAPI.status === filterName
          })}
        >
          {children}
        </Button>
      </li>
    );
  }
}

export default Filter;
