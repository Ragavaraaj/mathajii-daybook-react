export const BUTTON_DATA = [
        
        { val : "Receipt" , tag : "AP" },
        { val : "Expenditure" ,  tag : "PAP" },
        { val : "Information" ,  tag : "I" },
        { val : "Salary Booking" ,  tag : "PAP" },
        { val : "Salary Withdraw" ,  tag : "AP" },
        { val : "Special Bonus Booking", tag : "PAP" },
        { val : "Special Bonus Withdraw", tag : "AP" },
        { val : "Salary Advance Booking", tag : "PAP" },
        { val : "Salary Advance Return", tag : "AP" },
        { val : "Back", tag : "I" },
                        
]

export const LINK_DATA = [
        
        { name : "Home" , link : "/" },
        { name : "Forms" , link : "/buttons" },
        { name : "SalaryBook" , link : "/daybook" },
        { name : "SPB Book" , link : "/daybook" },
        { name : "DayBook" , link : "/daybook" },
]

export const nextPage = (index) =>{
        if(index === (LINK_DATA.length-1))
                return { index: 0 , data : LINK_DATA[0] }
        else
                return { index: index+1 , data : LINK_DATA[index+1] }
}

export const prevPage = (index) =>{
        if(index === 0)
                return { index: LINK_DATA.length-1 , data : LINK_DATA[(LINK_DATA.length-1)] }
        else
                return { index: index-1 , data : LINK_DATA[index-1] }
}