data= [{"id":1,"card_number":"5602221055053843723","card_type":"china-unionpay","issue_date":"5/25/2021","salt":"x6ZHoS0t9vIU","phone":"339-555-5239"},
{"id":2,"card_number":"3547469136425635","card_type":"jcb","issue_date":"12/18/2021","salt":"FVOUIk","phone":"847-313-1289"},
{"id":3,"card_number":"5610480363247475108","card_type":"china-unionpay","issue_date":"5/7/2021","salt":"jBQThr","phone":"348-326-7873"},
{"id":4,"card_number":"374283660946674","card_type":"americanexpress","issue_date":"1/13/2021","salt":"n25JXsxzYr","phone":"599-331-8099"},
{"id":5,"card_number":"67090853951061268","card_type":"laser","issue_date":"3/18/2021","salt":"Yy5rjSJw","phone":"850-191-9906"},
{"id":6,"card_number":"560221984712769463","card_type":"china-unionpay","issue_date":"6/29/2021","salt":"VyyrJbUhV60","phone":"683-417-5044"},
{"id":7,"card_number":"3589433562357794","card_type":"jcb","issue_date":"11/16/2021","salt":"9M3zon","phone":"634-798-7829"},
{"id":8,"card_number":"5602255897698404","card_type":"china-unionpay","issue_date":"1/1/2021","salt":"YIMQMW","phone":"228-796-2347"},
{"id":9,"card_number":"3534352248361143","card_type":"jcb","issue_date":"4/28/2021","salt":"zj8NhPuUe4I","phone":"228-796-2347"},
{"id":10,"card_number":"4026933464803521","card_type":"visa-electron","issue_date":"10/1/2021","salt":"cAsGiHMFTPU","phone":"372-887-5974"}]



/* 

    1. Find all card numbers whose sum of all the even position digits is odd.
    2. Find all cards that were issued before June.
    3. Assign a new field to each card for CVV where the CVV is a random 3 digit number.
    4. Add a new field to each card to indicate if the card is valid or not.
    5. Invalidate all cards issued before March.
    6. Sort the data into ascending order of issue date.
    7. Group the data in such a way that we can identify which cards were assigned in which months.

    Use method chaining to solve #3, #4, #5, #6 and #7.

    NOTE: Do not change the name of this file 
*/


const cardNumber=()=>{
    const res= data.filter(card=>{
        const digits = card.card_number.replace(/\D/g,"").split("").map(Number);
        const evenSum = digits.filter((digit,index)=>index%2===0).reduce((acc,curr)=>acc+curr,0);
        return evenSum%2 !==0;
    });
    return res;
}

//console.log(cardNumber());

const issueDate=()=>{
    const res =data.filter(card=>{
        const month=Number(card.issue_date.split('/')[0])
        return month<6;
    })
    return res;
}
//console.log(issueDate());


const cvv=()=>{
    const res = data.map(card=>({
        ...card,
        CVV:Math.floor(100+Math.random()*900)
    }))
    return res;
}

//console.log(cvv());


const availability=()=>{
    const res = data.map(card=>({
    ...card,
    isValid:card.issue_date.split('/')[0]>=3
    }))
    return res;

}
//console.log(availability());

function parseDate(string){
    const[month,day,year]= string.split('/')
    return year+month.padStart(2,"0")+day.padStart(2,"0");
}

const sortDate=()=>{
    const res = data.sort((a,b)=>{
        const dateA= parseDate(a.issue_date);
        const dateB = parseDate(b.issue_date);
        return dateB-dateA;
    })
    return res;
}

//console.log(sortDate());


const groupData=()=>{
    const res = data.reduce((acc,curr)=>{
        const issued = curr.issue_date.split('/');
        const month = Number(issued[0]);

        if(!acc[month]){
            acc[month]=[];
        }
        acc[month].push(curr);
        return acc;
    },{})
    return res;
}

//console.log(groupData());


