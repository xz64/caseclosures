import { render } from 'react-dom';
import FileUploadContainer from './components/FileUploadContainer.jsx';

document.addEventListener('DOMContentLoaded', function domready() {
  render(
    <div>
      <FileUploadContainer/>
    </div>,
    document.getElementById('root')
  );
});
