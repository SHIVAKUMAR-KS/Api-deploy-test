import zod from 'zod';

export const todoValidationSchema = zod.object({
    title : zod.string().min(1),
    description : zod.string().min(1),
    completed : zod.boolean()
})

 