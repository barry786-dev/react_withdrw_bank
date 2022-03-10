import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Check_acc() {
  const [balance, setbalance] = useState(0);
  useEffect(() => {
    const balancestorge = localStorage.getItem('balanceS');
    if (balancestorge !== null) {
      setbalance(Number(balancestorge));
    }
  }, []);
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('balanceS', balance);
  });
  function money(str, e) {
    e.preventDefault();
    let add_input = document.getElementById('addingamount');
    let withdraw_input = document.getElementById('withdrawamount');
    let amount_to_add = add_input.value;
    let amount_to_withdraw = withdraw_input.value;
    if (
      amount_to_add.includes('e' || '+' || '-') ||
      amount_to_withdraw.includes('e' || '+' || '-')
    ) {
      alert('you can not insert +/- e');
    } else if (str === '+') {
      const b = balance + Number(amount_to_add);
      setbalance(b);
    } else if (str === '-' && balance >= amount_to_withdraw) {
      const c = balance - Number(amount_to_withdraw);
      setbalance(c);
    } else if (str === '-' && balance < amount_to_withdraw)
      alert('sorry, you do not have enough credit');
    add_input.value = 0;
    withdraw_input.value = 0;
  }
  return (
    <div>
      <img src={logo} className='App-logo' alt='logo' />
      <form class='form container p-5'>
        <h1 class='m-2 font-weight-bold display-6'>
          My bank account balance is :{balance} $
        </h1>
        <div class='  input-group m-2'>
          <label
            class='input-group-text bg-primary'
            Style='height:50px; width:430px'
          >
            add-amount:
            <input
              id='addingamount'
              class='form-control p-0 ms-5 me-2'
              type='number'
              name='addnumber'
            />
          </label>
          <input
            class='btn btn-primary my-1 m-2'
            Style='width:95px'
            type='submit'
            value='Add'
            onClick={money.bind(null, '+')}
          />
        </div>
        <div class='  input-group m-2'>
          <label
            class='input-group-text bg-danger'
            Style='height:50px; width:430px'
          >
            withdraw-amount:
            <input
              id='withdrawamount'
              class='form-control p-0 m-2'
              type='number'
              name='withdrawnumber'
            />
          </label>
          <input
            class='btn btn-danger my-1 m-2'
            type='submit'
            value='Withdraw'
            onClick={money.bind(null, '-')}
          />
        </div>
        <button type="button" onClick={()=> setbalance(0)}>reset!</button>
      </form>
    </div>
  );
}

/* class Check_acc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
    };
  }componentDidMount() {
        const balance = localStorage.getItem('balance');
        if(balance !== null) {
            this.setState({
                balance: Number(balance)
            });
        };
        window.addEventListener('beforeunload',() => {
            localStorage.setItem('balance', this.state.balance)
        })
    }
  money = (str, e) => {
    e.preventDefault();
    let add_input = document.getElementById('addingamount');
    let withdraw_input = document.getElementById('withdrawamount');
    let amount_to_add = add_input.value;
    let amount_to_withdraw = withdraw_input.value;
    if (
      amount_to_add.includes('e' || '+' || '-') ||
      amount_to_withdraw.includes('e' || '+' || '-')
    ) {
      alert('you can not insert +/- e');
    } else if (str === '+') {
      this.setState((state) => ({
        balance: state.balance + Number(amount_to_add),
      }));
    } else if (str === '-') {
      this.setState((state) => ({
        balance: state.balance - Number(amount_to_withdraw),
      }));
    }
    add_input.value = 0;
    withdraw_input.value = 0;
  };
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <form class='form container p-5'>
          <h1 class='m-2 font-weight-bold display-6'>
            My bank account balance is :{this.state.balance} $
          </h1>
          <div class='  input-group m-2'>
            <label class='input-group-text bg-primary' Style='height:50px; width:430px'>
              add-amount:
              <input id='addingamount' class="form-control p-0 ms-5 me-2" type='number' name='addnumber' />
            </label>
            <input
              class='btn btn-primary my-1 m-2' Style='width:95px'
              type='submit'
              value='Add'
              onClick={this.money.bind(null, '+')}
            />
          </div>
          <div class='  input-group m-2'>
            <label class='input-group-text bg-danger' Style='height:50px; width:430px'>
              withdraw-amount:
              <input
                id='withdrawamount' class="form-control p-0 m-2"
                type='number'
                name='withdrawnumber'
              />
            </label>
            <input
              class='btn btn-danger my-1 m-2'
              type='submit'
              value='Withdraw'
              onClick={this.money.bind(null, '-')}
            />
          </div>
        </form>
      </div>
    );
  }
} */

export default Check_acc;
