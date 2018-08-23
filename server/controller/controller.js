let memes = [
    {
        id: 1,
        type: 'Web Dev',
        description: '',
        url: 'https://digitalsynopsis.com/wp-content/uploads/2015/03/web-designer-developer-jokes-humour-funny-38.jpg'
    },
    {
        id: 2,
        type: 'Web Dev',
        description: '',
        url: 'https://i.pinimg.com/originals/89/49/17/894917caa2734906cff27783e881dc14.jpg'
    },
    {
        id: 3,
        type: 'Web Dev',
        description: '',
        url: 'http://i.imgur.com/z9kVW5C.jpg'
    },
    {
        id: 4,
        type: 'Web Dev',
        description: '',
        url: 'https://i.pinimg.com/736x/8e/4f/98/8e4f986dff6182ab4437665300795cb9--ryan-gosling-hey-girl-ryan-gosling-meme.jpg'
    },
    {
        id: 5,
        type: 'Web Dev',
        description: '',
        url: 'https://img.devrant.com/devrant/rant/r_812234_oQpnP.jpg'
    },
    {
        id: 6,
        type: 'Web Dev',
        description: '',
        url: 'http://www.misterpib.com/wp-content/uploads/2018/02/xzibit-yo-dawg-yo-i-heard-you-like-frontend-so-i-put-a-frontend-in-your-backend-so-that-you-can-do-m.jpg'
    },
    {
        id: 7,
        type: 'Girls',
        description: '',
        url: 'https://www.askideas.com/media/48/Funny-Girlfriend-Meme-If-Your-Ever-Leave-Me-Picture.jpg'
    },
    {
        id: 8,
        type: 'Girls',
        description: '',
        url: 'http://thefunnyplace.org/wp-content/uploads/2013/09/Some-guys-don-t-know-the-difference.jpg'
    },
    {
        id: 9,
        type: 'Girls',
        description: '',
        url: 'https://i1.wp.com/picsdownloadz.com/wp-content/uploads/2016/07/I-told-a-girl-to-text-me-when-she-got-home-she-must-homeless-best-girlfriend-funny-memes-Pics.jpg?fit=640%2C627'
    },
    {
        id: 10,
        type: 'Girls',
        description: '',
        url: 'http://loldamn.com/wp-content/uploads/2017/12/doctor-funny-memes.jpg'
    },
    {
        id: 11,
        type: 'Single',
        description: '',
        url: 'http://www.funnybeing.com/wp-content/uploads/2016/08/Heard-You-Was-Single-539x800.png'
    },
    {
        id: 12,
        type: 'Single',
        description: '',
        url: 'https://worldwideinterweb.com/wp-content/uploads/2016/07/dating-memes-funny.jpg'
    },
    {
        id: 13,
        type: 'Single',
        description: '',
        url: 'https://img.memecdn.com/the-reason-of-singles-being-single-lol_o_1154325.jpg'
    },
    {
        id: 14,
        type: 'Single',
        description: '',
        url: 'http://skeeterandscout.com/wp-content/uploads/2015/07/funny-meme-about-being-single.jpeg'
    },
    {
        id: 15,
        type: 'Single',
        description: '',
        url: 'https://img.cuteness.com/cute-article-grid/cuteness/s3fs-public/1476735430714animal-memes-single-people-8.png'
    },
    {
        id: 16,
        type: 'Girls',
        description: '',
        url: 'https://www.askideas.com/media/41/Funny-Girl-Meme-Is-Google-A-Boy-Or-Girl-Image.jpg'
    }
]

var id = 16

module.exports = {
    read: (req, res) => {
        res.status(200).send(memes)
    },
    create: (req, res) => {
        const {type, description, url} = req.body
        // console.log(req.body)
        let annoying = {
            id: id,
            type: type,
            description: description,
            url: url
        }
        id++
        memes.push(annoying)
        console.log(memes)
        res.status(200).send(memes)
    },
    update: (req, res) => {
        console.log(req.body)
        let index = null;
        memes.forEach((annoying, i) => {
            if(annoying.id === Number(req.body.id)) index = i
        })
        memes [ index ] = {
            id: memes [ index ].id,
            type: req.body.type || memes [ index ].type,
            description: req.body.description || memes [ index ].description,
            url: memes [ index ].url
        }
        console.log(memes)
        res.status(200).send(memes)
    },
    delete: (req, res) => {
        let index = null;
        console.log(req.params.id)
        memes.forEach((annoying, i) => {
            if(annoying.id == req.params.id) {
                
                index = i
            }
        })
        
        console.log(memes[index])

        memes.splice(index, 1)

        
        // console.log(memes)
       
        res.status(200).send(memes)
    }
}