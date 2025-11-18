import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DesignUploader = ({ onDesignUpload, uploadedDesign }) => {
  const [dragActive, setDragActive] = useState(false);
  const [designText, setDesignText] = useState('');
  const [designType, setDesignType] = useState('upload');
  const fileInputRef = useRef(null);

  const designOptions = [
  { id: 'upload', name: 'Upload Design', icon: 'Upload', description: 'Upload your own image or design file' },
  { id: 'text', name: 'Text Design', icon: 'Type', description: 'Create a text-based design' },
  { id: 'template', name: 'Choose Template', icon: 'Layout', description: 'Select from our design templates' }];


  const templates = [
  {
    id: 'template1',
    name: 'Minimalist Quote',
    preview: "https://images.unsplash.com/photo-1546015019-cccb31287903",
    alt: 'Minimalist design with inspirational quote in clean typography'
  },
  {
    id: 'template2',
    name: 'Geometric Pattern',
    preview: "https://images.unsplash.com/photo-1711355778816-5dca7eff662d",
    alt: 'Abstract geometric pattern with colorful triangular shapes'
  },
  {
    id: 'template3',
    name: 'Nature Theme',
    preview: "https://images.unsplash.com/photo-1680345575733-03eced52c042",
    alt: 'Nature-inspired design with leaf patterns and earth tones'
  },
  {
    id: 'template4',
    name: 'Vintage Badge',
    preview: "https://img.rocket.new/generatedImages/rocket_gen_img_1acb8ced1-1763379622337.png",
    alt: 'Vintage-style badge design with retro typography and ornamental elements'
  }];


  const handleDrag = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.type === 'dragenter' || e?.type === 'dragover') {
      setDragActive(true);
    } else if (e?.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDragActive(false);

    if (e?.dataTransfer?.files && e?.dataTransfer?.files?.[0]) {
      handleFileUpload(e?.dataTransfer?.files?.[0]);
    }
  };

  const handleFileUpload = (file) => {
    if (file && file?.type?.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onDesignUpload({
          type: 'upload',
          file: file,
          preview: e?.target?.result,
          name: file?.name
        });
      };
      reader?.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e) => {
    if (e?.target?.files && e?.target?.files?.[0]) {
      handleFileUpload(e?.target?.files?.[0]);
    }
  };

  const handleTextDesign = () => {
    if (designText?.trim()) {
      onDesignUpload({
        type: 'text',
        text: designText,
        preview: null,
        name: `Text: ${designText?.substring(0, 20)}...`
      });
    }
  };

  const handleTemplateSelect = (template) => {
    onDesignUpload({
      type: 'template',
      template: template,
      preview: template?.preview,
      name: template?.name
    });
  };

  return (
    <div className="space-y-6">
      {/* Design Type Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {designOptions?.map((option) =>
        <button
          key={option?.id}
          onClick={() => setDesignType(option?.id)}
          className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
          designType === option?.id ?
          'border-brand-energy bg-brand-energy/5' : 'border-border hover:border-brand-energy/50'}`
          }>

            <div className="flex items-center space-x-3 mb-2">
              <Icon name={option?.icon} size={20} className="text-brand-energy" />
              <h3 className="font-headline font-semibold text-foreground">
                {option?.name}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground font-body">
              {option?.description}
            </p>
          </button>
        )}
      </div>
      {/* Design Input Area */}
      <div className="bg-card border border-border rounded-lg p-6">
        {designType === 'upload' &&
        <div className="space-y-4">
            <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
            dragActive ?
            'border-brand-energy bg-brand-energy/5' : 'border-border hover:border-brand-energy/50'}`
            }
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}>

              <Icon name="Upload" size={48} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                Upload Your Design
              </h3>
              <p className="text-muted-foreground font-body mb-4">
                Drag and drop your image here, or click to browse
              </p>
              <Button
              variant="outline"
              onClick={() => fileInputRef?.current?.click()}
              iconName="FolderOpen"
              iconPosition="left">

                Browse Files
              </Button>
              <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden" />

              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: JPG, PNG, SVG (Max 10MB)
              </p>
            </div>
          </div>
        }

        {designType === 'text' &&
        <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold text-foreground">
              Create Text Design
            </h3>
            <textarea
            value={designText}
            onChange={(e) => setDesignText(e?.target?.value)}
            placeholder="Enter your text here..."
            className="w-full h-32 p-4 border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-brand-energy focus:border-transparent" />

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {designText?.length}/200 characters
              </p>
              <Button
              variant="default"
              onClick={handleTextDesign}
              disabled={!designText?.trim()}
              iconName="Type"
              iconPosition="left">

                Create Text Design
              </Button>
            </div>
          </div>
        }

        {designType === 'template' &&
        <div className="space-y-4">
            <h3 className="text-lg font-headline font-semibold text-foreground">
              Choose Template
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {templates?.map((template) =>
            <button
              key={template?.id}
              onClick={() => handleTemplateSelect(template)}
              className="group bg-muted rounded-lg overflow-hidden hover:shadow-brand transition-all duration-300">

                  <div className="aspect-square overflow-hidden">
                    <img
                  src={template?.preview}
                  alt={template?.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                  </div>
                  <div className="p-3">
                    <p className="text-sm font-headline font-medium text-foreground">
                      {template?.name}
                    </p>
                  </div>
                </button>
            )}
            </div>
          </div>
        }
      </div>
      {/* Uploaded Design Preview */}
      {uploadedDesign &&
      <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
            Design Preview
          </h3>
          <div className="flex items-center space-x-4 p-4 bg-muted rounded-lg">
            {uploadedDesign?.preview &&
          <img
            src={uploadedDesign?.preview}
            alt="Design preview"
            className="w-16 h-16 object-cover rounded" />

          }
            <div className="flex-1">
              <p className="font-headline font-medium text-foreground">
                {uploadedDesign?.name}
              </p>
              <p className="text-sm text-muted-foreground capitalize">
                {uploadedDesign?.type} design
              </p>
            </div>
            <Button
            variant="ghost"
            size="icon"
            onClick={() => onDesignUpload(null)}
            iconName="X" />

          </div>
        </div>
      }
    </div>);

};

export default DesignUploader;