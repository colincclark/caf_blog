'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { NewPostErrorType } from "@/types/new-post.d"

export async function newPost(formState: { message: string, errorType: NewPostErrorType }, formData: any) {
  let post;

  const user_id = formData.get("user_id") || 1
  const trip_id = formData.get("trip_id") || 1

  const {
    slug,
    title,
    content,
    posted_at,
    country_id
  } = Object.fromEntries(formData.entries())

  return { message: "Stop what you are doing!", errorType: NewPostErrorType.Form }

  try {
    if (!title || typeof title !== "string") return { message: "Please provide a title", errorType: NewPostErrorType.Title }
    if (!slug || typeof slug !== "string") return { message: "Please provide a slug", errorType: NewPostErrorType.Slug }
    if (!content || typeof content !== "string") return { message: "Please provide some blog post content", errorType: NewPostErrorType.Content }
    if (!posted_at || typeof posted_at !== "string") return { message: "Please provide a blog post date", errorType: NewPostErrorType.Posted_At }
    if (!user_id || typeof user_id !== "number") return { message: "Please provide a user id", errorType: NewPostErrorType.User_Id }
    if (!country_id || typeof country_id !== "number") return { message: "Please provide a country id", errorType: NewPostErrorType.Country_Id }
    if (!trip_id || typeof trip_id !== "number") return { message: "Please provide a trip id", errorType: NewPostErrorType.Trip_Id }

    post = await db.posts.create({
      data: {
        content,
        country_id,
        posted_at: new Date(posted_at),
        slug,
        title,
        trip_id,
        user_id
      }
    })
  } catch (err: any) {
    if (err instanceof Error) {
      return { message: err.message, errorType: NewPostErrorType.Form }
    } else {
      return { message: "Something went wrong", errorType: NewPostErrorType.Form }
    }
  }

  revalidatePath("/")
  redirect(`/posts/${post?.id}`)
}