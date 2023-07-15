'use strict';
const e = React.createElement;

const {useState, useEffect} = React;



// donation react code
//const donationFormElement = React.createElement;
const DonerTableRow = (props) => {
  console.log("Properties: ", props)
  return (
    <tr>
      <th scope="row"> {props.donation.donation_id}</th><td> {props.donation.doner_name}</td><td> {props.donation.amount}</td>
    </tr>
  )
}


const DonateTable = () => {
  const [flag, setFlag] = useState(false)
  const [donations, setDonations] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/donate/donation-api/donations/", {
    },{
      headers: {
        'Content-Type': 'application/json',
        "X-CSRFToken":csrftoken
      }
    }).then(response => {
      console.log('Received..................,', response.data)
      setDonations(response.data)
      let x = 0
      response.data.forEach( (don) => {
        console.log("Amount: ", don.amount)
        x = x + don.amount
      })

      setTotal(x)
      
    }).catch(error => {
      console.log('Got error,', error)
      return error
    });
  }, []);
  
  return (
    <table className="table">
      <thead><tr scope="col"><td>Id</td><td scope="col">Name</td><td scope="col">Amount</td></tr></thead>
      <tbody>
        {
        donations.map( (donation) => {
          return (<DonerTableRow donation={donation}></DonerTableRow>)
        })
        }
      </tbody>
      <tfoot>
        <tr><td></td><td></td><td>{total}</td></tr>
      </tfoot>
    </table>
    )
  
  
}

const reactDonateForm = document.querySelector('#react-donate-table');
ReactDOM.render(<DonateTable/>, reactDonateForm);

