'use client'

import { ChangeEvent, useState } from "react";
import { useFormState } from "react-dom";

import { newPost } from "@/actions/new-post";
import Button from "@/components/forms/common/Button";
import AuthorSelect from '@/components/forms/AuthorSelect';
import CountrySelect from '@/components/forms/CountrySelect';
import TripSelect from '@/components/forms/TripSelect';
import RichTextEditor from '@/components/forms/RichTextEditor';
import { NewPostErrorType } from "@/types/new-post.d"
import { getDateString } from "@/utils/date"

export default function NewPostForm() {
  const [formState, formAction] = useFormState(newPost, { message: "", errorType: NewPostErrorType.Form })
  const { errorType, message } = formState

  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    setTitle(value)
    setSlug(value.replace(/\s+/g, "-").toLowerCase())
  }

  const handleSlugChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event
    setSlug(value.replace(/\s+/g, "-").toLowerCase())
  }

  return (
    <form action={formAction}>
      <ul>
        <li>
          <label htmlFor="title">Title of post:</label>
          <input id="title" name="title" value={title} onChange={handleTitleChange} />
        </li>
        <li>
          <label htmlFor="slug">URL path:</label>
          <input id="slug" name="slug" value={slug} onChange={handleSlugChange} />
        </li>
        <li>
          <label htmlFor="author">
            Select author:
            <AuthorSelect />
          </label>
        </li>
        <li>
          <label htmlFor="country">
            Select country:
            <CountrySelect />
          </label>
        </li>
        <li>
          <label htmlFor="trip">
            Select trip:
            <TripSelect />
          </label>
        </li>
        <li>
          <label htmlFor="posted_at">Date:</label>
          <input aria-label="Date of post" type="date" id="posted_at" name="posted_at" max={getDateString(new Date())} />
        </li>
        <li>
          <label>Content:
            <RichTextEditor />
          </label>
        </li>
        {
          (message && errorType === NewPostErrorType.Form) &&
          <li>
            <p className="my-2 p-2 bg-red-200 border rounded">{message}</p>
          </li>
        }
      </ul>
      <Button name="Create post" />
    </form>
  );
}
