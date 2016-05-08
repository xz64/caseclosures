import React from 'react';

export default React.createClass({
  render: function render() {
    return (
      <div>
        <input type="file" name="file" className="fileupload" id="fileupload"
          onChange={(e) => {
            e.preventDefault();
            this.state.file = e.target.files[0];
          }}
        />
        <button type="button" onClick={() => {
          this.props.submit(this.state.file);
        }}>Submit</button>
      </div>
    );
  }
});
