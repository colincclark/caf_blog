"use client"

import { useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from "next/dynamic";

export default function RichTextEditor() {
  const [editorHtml, setEditorHtml] = useState("");
  const DynamicQuill = useMemo(() => dynamic(() => import('react-quill'), {
    loading: () => <p>Loading the text editor...</p>,
    ssr: false
  }), []);

  const handleChange = (html: string) => {
    setEditorHtml(html);
  };

  return (
    <>
      <div style={{ display: 'none' }}>
        {/* Hidden textarea to include editor content in form submission */}
        <textarea name="content" value={editorHtml} readOnly />
      </div>
      <DynamicQuill
        modules={
          {
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
              ['link', 'image'],
              ['clean']
            ],
          }
        }
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
      />
    </>
  );
};
