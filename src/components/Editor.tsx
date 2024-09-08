
import { VFC, useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './editor.module.css';
import { useFileStore } from '../store/fileStore';

export const Editor: VFC = () => {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef<HTMLDivElement>(null);
  const { file } = useFileStore();
  const [content, setContent] = useState(file?.content || '');
  const [language, setLanguage] = useState('javascript');

  // Initialize the Monaco Editor
  useEffect(() => {
    if (monacoEl.current) {
      const editorInstance = monaco.editor.create(monacoEl.current, {
        value: content,
        language: language,
      });
      setEditor(editorInstance);

      return () => {
        editorInstance.dispose();
      };
    }
  }, [monacoEl.current, language]);

  // Update editor content when the `file` or `content` changes
  useEffect(() => {
    if (editor) {
      editor.setValue(file?.content || '');
      setContent(file?.content || '');
    }
  }, [file, editor]);

  // Optionally handle changes to `language` if needed
  useEffect(() => {
    if (editor) {
      editor.updateOptions({ language });
    }
  }, [language, editor]);

  // Optionally set the language based on file type or other logic
  useEffect(() => {
    if (file) {
      // Set the language based on the file type or name
      const fileExtension = file.name.split('.').pop();
      switch (fileExtension) {
        case 'js':
          setLanguage('javascript');
          break;
        case 'ts':
          setLanguage('typescript');
          break;
        case 'css':
          setLanguage('css');
          break;
        case 'html':
          setLanguage('html');
          break;
        default:
          setLanguage('plaintext');
      }
    }
  }, [file]);

  return <div className={styles.Editor} ref={monacoEl}></div>;
};

