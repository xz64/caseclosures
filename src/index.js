import { render } from 'react-dom';
import FileUploadDialog from './components/FileUploadDialog.jsx';

document.addEventListener('DOMContentLoaded', function domready() {
  render(
    <div>
      <FileUploadDialog/>
    </div>,
    document.getElementById('root')
  );
});
