import React, { Component } from 'react';
import classNames from 'classnames';

class Filter extends Component {
  render() {
    const {
      href,
      dataFilter,
      showFilterList,
      statusOfList,
      filterName,
      children
    } = this.props;
    return (
      <li>
        <a
          href={href}
          onClick={e => showFilterList(e)}
          data-filter={dataFilter}
          className={classNames({
            selected: statusOfList === filterName
          })}
        >
          {children}
        </a>
      </li>
    );
  }
}

export default Filter;
