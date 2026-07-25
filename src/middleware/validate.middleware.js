export const validate = (schema) => (req, res, next) => {

    const result = schema.safeParse({
        body: req.body,
        params: req.params
    })

    if(!result.success){
        return res.status(400).json({
            message: "Validation Error",
            errors:  result.error.flatten().fieldErrors
        })
    }

    req.validated = result.data
    next()
}