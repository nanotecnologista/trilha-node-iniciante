import hello from './hello/index'
import bills from './bills/index'
import categories from './categories/index'

export default(app)=>{
    app.use('/', hello)
    app.use('/bills', bills)
    app.use('/categories', categories)

}