import { Upload, File, X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Button } from './button';

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onFileSelect?: (files: FileList | null) => void;
  showFileName?: boolean;
  clearable?: boolean;
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost';
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      className,
      onFileSelect,
      showFileName = true,
      clearable = true,
      buttonText = 'Choose File',
      buttonVariant = 'outline',
      onChange,
      ...props
    },
    ref
  ) => {
    const [selectedFiles, setSelectedFiles] = React.useState<FileList | null>(
      null
    );
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Use forwarded ref or fallback to internal ref
    const fileInputRef = ref || inputRef;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      setSelectedFiles(files);
      onFileSelect?.(files);
      onChange?.(event);
    };

    const handleClear = () => {
      setSelectedFiles(null);
      if (fileInputRef && 'current' in fileInputRef && fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      onFileSelect?.(null);
    };

    const handleButtonClick = () => {
      if (fileInputRef && 'current' in fileInputRef && fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const getFileNames = () => {
      if (!selectedFiles) return '';
      if (selectedFiles.length === 1) return selectedFiles[0].name;
      return `${selectedFiles.length} files selected`;
    };

    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant={buttonVariant}
            onClick={handleButtonClick}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            {buttonText}
          </Button>

          {showFileName && selectedFiles && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <File className="h-4 w-4" />
              <span className="truncate max-w-[200px]">{getFileNames()}</span>
              {clearable && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleClear}
                  className="h-auto p-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          )}
        </div>

        <input
          type="file"
          ref={fileInputRef}
          className={cn('sr-only', className)}
          onChange={handleFileChange}
          {...props}
        />
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';

export { FileInput };
