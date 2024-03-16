import{ useState} from"react"

const ExpenseForm =(props) =>{
    const {addExpense} = props

const[title,setTitle]=useState('')
const[amount,setAmount]=useState(0)
const [errors,SetErrors]=useState({})

const handleSubmit =(e) =>{
    e.preventDefault()
    console.log(title,amount)
    
    let err = {}  

    if(title .length<3){
        err.title='Title should be atleast 3 charaters long'
    }
    if(!amount){
        err.amount = 'Enter a Valid Amount'
    
    }
    if (Object.keys(err).length >0){
     SetErrors({...err})
     return
    }
    addExpense(title,amount)
    setTitle('')
    setAmount(0)

}
const handleTitleChange =(e) =>{
    setTitle(e.target.value)
    SetErrors({...errors,title:'' })
}
const handleAmountChange =(e) =>{
    setAmount(parseInt(e.target.value))
    SetErrors({...errors,amount: '' })
}
    return(
        <>
        <div className="groups">
        <form onSubmit={handleSubmit}>
          
            <div className="input-conatiner">
            <label  className="titles" htmlfor="title">Title</label><br></br>
            <input type="text" id="title" value={title} onChange={handleTitleChange}/>
            {errors.title ? <div className="error">{errors.title}</div>:null}
           {}
            </div>
            <div className="input-container">
                <label className="amounts"  htmlFor="amount">Amount</label><br></br>
                <input type="number" id="amount" value={amount} onChange={handleAmountChange}/>
                {errors.amount ? <div className="error">{errors.amount}</div>:null}
                </div>
                <button className="submit" type="submit">Add Transaction</button>
                
        </form>
        </div>
        
        
        </>
    )
}
export default ExpenseForm