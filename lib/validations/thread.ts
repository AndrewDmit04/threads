import * as z from 'zod'

export const ThreadValidation = z.object({
    thread : z.string().min(1,{message : 'have to have more than 1 charecter'}),
    accountId : z.string(),
})

export const CommentValidation = z.object({
    thread : z.string().min(1,{message : 'have to have more than 1 charecter'}),
})