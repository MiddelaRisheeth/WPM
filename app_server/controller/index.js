const indexPage = (req,res)=>{
    res.render('index',{title:'Resataurant Finder'})
}

module.exports = {indexPage}