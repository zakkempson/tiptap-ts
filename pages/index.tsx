import Head from 'next/head';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CharacterCount from '@tiptap/extension-character-count';
import React from 'react';

export default function Home() {
  console.count('✨ Editor rendered');

  const editor = useEditor({
    extensions: [StarterKit, CharacterCount],
    editorProps: {
      attributes: {
        id: 'tiptap-editor',
        spellcheck: 'false',
      },
    },
  });

  React.useEffect(() => {
    editor?.commands?.focus();
  }, [editor]);

  const words = editor?.storage.characterCount?.words();

  return (
    <div>
      <Head>
        <title>Tiptap / NextJS / Typescript performance test</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        style={{
          height: '100vh',
          maxHeight: '98vh',
          fontFamily: 'sans-serif',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            maxHeight: '100%',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            alignItems: 'stretch',
          }}
        >
          <div>
            <h1>Tiptap test with NextJS & Typescript</h1>
            <p>
              {words} word{words === 1 ? '' : 's'}
            </p>
          </div>
          <div>
            <EditorContent
              editor={editor}
              style={{
                fontSize: '16px',
                margin: 'auto',
                maxWidth: '1100px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '4px solid #eee',
                fontFamily: 'sans-serif',
                padding: '0px 8px',
                outline: '0px',
                overflow: 'scroll',
                maxHeight: '80vh',
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
