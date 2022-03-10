import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";

const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.25rem;
`;

const StyledTextArea = styled(Textarea)`
  width: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 1rem;
  resize: none;
`;

export default class InputSet extends Component {
  static propTypes = {
    onChange: this.propTypes.func,
    title: this.propTypes.string,
    body: this.propTypes.string,
  };
  componentDidMount() {
    this.title.focus();
  }
  render() {
    const { onChange, title, body } = this.props;

    return (
      <div>
        <TitleInput
          name="title"
          onChange={onChange}
          placeholder="제목"
          innerRef={(ref) => (this.title = ref)}
          value={title}
        />
        <StyledTextArea
          minRows={3}
          maxRows={20}
          placeholder="메모를 입력하세요..."
          name="body"
          onChange={onChange}
          value={body}
        />
      </div>
    );
  }
}
