import express from 'express'

const UArouter = express.Router()

UArouter.get('*', (req, res) => {
    let title
    switch(req.url) {
        case '/about':
            title = 'About Us'
            break
        case '/sponsors':
            title = 'Sponsors'
            break
        case '/partners':
            title = 'Partners'
            break
        case '/authors':
            title = 'Authors'
            break
        case '/prizewinners':
            title = 'Prize Winners'
            break
        case '/submissions':
            title = 'Submission Guidelines'
            break
        case '/privacy':
            title = 'Privacy Policy'
            break
        default:
            title = 'LSE Law Review Blog'
            break
    }
    console.log(req.url)
    res.render('bot', {
        title: title,
        description: 'Test Descriptionqeqeqe',
        url: req.url
    })
})

export default UArouter