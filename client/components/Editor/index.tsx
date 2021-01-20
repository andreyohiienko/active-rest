import React, { ComponentType, Dispatch } from 'react'
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'

const DraftEditor: ComponentType<EditorProps> = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false },
)

export const Editor = (state, setState: Dispatch<{}>) => {
  function onEditorStateChange(editorState) {
    console.log('setState', setState)
    setState(editorState)
  }
  // console.log(EditorState.createEmpty())

  return (
    <DraftEditor
      editorState={EditorState.createEmpty()}
      wrapperClassName="draft-editor__wrapper"
      toolbarClassName="toolbarClassName"
      editorClassName="draft-editor__input"
      onEditorStateChange={onEditorStateChange}
    />
  )
}
