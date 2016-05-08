export default (props) => (
    <div>
      <input type="file" name="file" className="fileupload"/>
      <button type="button" onClick={props.submit}>Submit</button>
    </div>
);
