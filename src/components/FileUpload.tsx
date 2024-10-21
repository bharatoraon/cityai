import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Here you would typically handle the file upload to your backend
    console.log('File uploaded:', acceptedFiles[0].name);
    onFileUpload();
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/pdf': ['.pdf'],
      'application/geo+json': ['.geojson'],
      'application/x-shapefile': ['.shp', '.shx', '.dbf'],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition-colors"
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto text-gray-400" size={24} />
      {isDragActive ? (
        <p className="text-sm text-gray-600">Drop the file here ...</p>
      ) : (
        <p className="text-sm text-gray-600">Drag 'n' drop a file here, or click to select</p>
      )}
      <p className="text-xs text-gray-500 mt-1">
        Supported formats: CSV, XLSX, PDF, GeoJSON, Shapefile (.shp, .shx, .dbf)
      </p>
    </div>
  );
};

export default FileUpload;