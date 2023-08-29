import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialReactions = { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 }

const initialState = [
  { id: '1', date: sub(new Date(), { minutes: 10 }).toISOString(), title: 'First Post!', content: "Hello World!", user: '0', reactions: initialReactions },
  { id: '2', date: sub(new Date(), { minutes: 5 }).toISOString(), title: 'Second Post!', content: "Cool world", user: '2', reactions: initialReactions }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId
          }
        }
      }
    },
    postUpdate(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find(post => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  }
})

export const { postAdded, postUpdate } = postsSlice.actions

export default postsSlice.reducer