import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {InputContainer, LabelContainer} from '../contactForm/ContactFormStyled';
import {handleChange} from '../../redux/filter/filter-actions';
import {getFilter} from '../../redux/filter/filter-selectors';

const Filter = ({filter, handleChange}) => {
  return (
    <>
      <LabelContainer htmlFor="filter">Find contacts by name</LabelContainer>
      <InputContainer
        id="filter"
        type="text"
        onChange={event => {
          return handleChange(event.target.value);
        }}
        name="filter"
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    filter: getFilter(state)
  };
};

const mapDispatchToProps = {
  handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
