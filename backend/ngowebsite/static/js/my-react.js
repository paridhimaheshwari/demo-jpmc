'use strict';
const e = React.createElement;

const {useState, useEffect} = React;

var counter = 0
let getCount = ()=>{
  // return new Promise((resolve, reject) => {
  //   resolve("")
  // })
  return axios.get("http://127.0.0.1:8000/donate/donation-api/donations/").then(response => {
    console.log('Received,', response.data)
    return response.data.length
  }).catch(error => {});
}
const GetCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let mounted = true;
    getCount()
      .then(value => {
        if(mounted) {
          setCount(value)
        }
      })
    },[])
    // setInterval( ()=>{
    //   getCount()  .then( (data) => setCount(counter))
    // }, 2000)
  return e('label', { }, 'Donations: '+count);
};



// const TextBoxCount = () => {

// }

const domContainer = document.querySelector('#num-users');
if(domContainer)
  ReactDOM.render(e(GetCount), domContainer);


// donation react code
//const donationFormElement = React.createElement;
const UserNameInputField = (props) => {
  console.log("Properties: ", props)
  return (
    <div className="form-group">
      <label htmlFor={props.field_name}>{props.display_name}</label>
      <input className="form-control" type="text" name={props.field_name} placeholder={props.placeholder_value} required /> 
    </div>
  )
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

var csrftoken = readCookie('csrftoken');

const DonateForm = () => {
  const [flag, setFlag] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/donate/donation-api/donations/", {
      'doner_name' : e.target.doner_name.value,
      'doner_email': e.target.doner_email.value,
      'doner_phone' : e.target.doner_phone.value,
      'number_of_packets': e.target.number_of_packets.value,
      'amount': e.target.amount.value
    }, {
      headers: {
        'Content-Type': 'application/json',
        "X-CSRFToken":csrftoken
      }
    }).then(response => {
      console.log('Received,', response.data)
      setFlag(true)
      return response
    }).catch(error => {
      console.log('Got error,', error)
      setFlag(false)
      return error
    });
  }
  if(!flag) {
    return (
      <form action="" name='donationform' onSubmit={handleSubmit}>
        <UserNameInputField field_name="doner_name" display_name="User Name" placeholder_value="Enter name ..."/><br/>
        <UserNameInputField field_name="doner_email"   display_name="E-Mail" placeholder_value="Enter email ..."/><br/>
        <UserNameInputField field_name="doner_phone" display_name="Phone"  placeholder_value="Enter phone ..."/>
        <UserNameInputField field_name="number_of_packets" display_name="Packets"  placeholder_value="Enter packets ..."/>
        <UserNameInputField field_name="amount" display_name="Amount"  placeholder_value="Enter amount ..."/>
        <button type="submit" className="btn btn-outline-success btn-lg mt-2 ">Submit</button>
      </form>
      )
  } else {
    return(<div></div>)
  }
  
}

const reactDonateForm = document.querySelector('#react-donate-form');
ReactDOM.render(<DonateForm/>, reactDonateForm);

