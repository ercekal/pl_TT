import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductForm from './ProductForm';
import Input from './Input'
import { productUpdate, productSave } from '../actions';

export default class ProductEdit extends Component {

  render() {

    return (
      <ProductInput/>
    );
  }
}
