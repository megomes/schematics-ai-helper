import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { FileInput } from './file-input';
import { Label } from './label';

const meta: Meta<typeof FileInput> = {
  title: 'UI/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A styled file input component that uses button styling instead of native file input appearance.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost'],
      description: 'Button style variant',
    },
    showFileName: {
      control: 'boolean',
      description: 'Show selected file name',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when file is selected',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the button',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    accept: {
      control: 'text',
      description: 'File types to accept',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: 'Choose File',
  },
};

export const WithLabel: Story = {
  render: args => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file-input">Upload Document</Label>
      <FileInput id="file-input" {...args} />
    </div>
  ),
  args: {
    buttonText: 'Browse Files',
  },
};

export const MultipleFiles: Story = {
  args: {
    multiple: true,
    buttonText: 'Select Files',
  },
};

export const WithAcceptFilter: Story = {
  args: {
    accept: '.json,.xml,.txt',
    buttonText: 'Import Circuit',
  },
};

export const DifferentVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Default Button</Label>
        <FileInput buttonVariant="default" buttonText="Upload File" />
      </div>
      <div className="space-y-2">
        <Label>Outline Button</Label>
        <FileInput buttonVariant="outline" buttonText="Choose File" />
      </div>
      <div className="space-y-2">
        <Label>Secondary Button</Label>
        <FileInput buttonVariant="secondary" buttonText="Browse" />
      </div>
      <div className="space-y-2">
        <Label>Ghost Button</Label>
        <FileInput buttonVariant="ghost" buttonText="Select" />
      </div>
    </div>
  ),
};

export const WithoutFileName: Story = {
  args: {
    showFileName: false,
    buttonText: 'Upload',
  },
};

export const NotClearable: Story = {
  args: {
    clearable: false,
    buttonText: 'Select File',
  },
};

// Circuit-specific examples
const ImportCircuitComponent = () => {
  const [importedFile, setImportedFile] = useState<string>('');

  return (
    <div className="space-y-4 w-96">
      <div className="space-y-2">
        <Label htmlFor="circuit-import">Import Circuit Design</Label>
        <FileInput
          id="circuit-import"
          accept=".json,.xml,.spice,.cir"
          buttonText="Import Circuit"
          buttonVariant="default"
          onFileSelect={files => {
            if (files && files.length > 0) {
              setImportedFile(files[0].name);
            } else {
              setImportedFile('');
            }
          }}
        />
        <p className="text-xs text-muted-foreground">
          Supported formats: JSON, XML, SPICE, CIR
        </p>
      </div>

      {importedFile && (
        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md">
          <p className="text-sm text-green-700 dark:text-green-400">
            Ready to import: {importedFile}
          </p>
        </div>
      )}
    </div>
  );
};

export const ImportCircuit: Story = {
  render: () => <ImportCircuitComponent />,
};

export const ExportTarget: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="export-location">Save Circuit As</Label>
      <FileInput
        id="export-location"
        buttonText="Choose Location"
        buttonVariant="outline"
        accept=".json"
      />
      <p className="text-xs text-muted-foreground">
        Export your circuit design as JSON
      </p>
    </div>
  ),
};

export const ComponentLibrary: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="component-lib">Import Component Library</Label>
      <FileInput
        id="component-lib"
        multiple
        accept=".json,.lib"
        buttonText="Add Components"
        buttonVariant="secondary"
      />
      <p className="text-xs text-muted-foreground">
        Import custom component definitions and libraries
      </p>
    </div>
  ),
};

const InteractiveExample = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [fileContent, setFileContent] = useState<string>('');

  const handleFileSelect = (files: FileList | null) => {
    setSelectedFiles(files);

    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'text/plain' || file.name.endsWith('.json')) {
        const reader = new FileReader();
        reader.onload = e => {
          setFileContent((e.target?.result as string) || '');
        };
        reader.readAsText(file);
      } else {
        setFileContent('');
      }
    } else {
      setFileContent('');
    }
  };

  return (
    <div className="space-y-4 w-96">
      <div className="space-y-2">
        <Label>Upload and Preview</Label>
        <FileInput
          accept=".txt,.json"
          buttonText="Choose Text File"
          onFileSelect={handleFileSelect}
        />
      </div>

      {selectedFiles && selectedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">File Info:</p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Name: {selectedFiles[0].name}</p>
            <p>Size: {(selectedFiles[0].size / 1024).toFixed(2)} KB</p>
            <p>Type: {selectedFiles[0].type || 'Unknown'}</p>
          </div>
        </div>
      )}

      {fileContent && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Preview:</p>
          <div className="p-3 bg-muted rounded-md max-h-32 overflow-auto">
            <pre className="text-xs whitespace-pre-wrap">
              {fileContent.slice(0, 500)}
            </pre>
            {fileContent.length > 500 && (
              <p className="text-xs text-muted-foreground mt-2">
                ... (truncated)
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveExample />,
};
