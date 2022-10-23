

import { useState } from 'react';
const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function App() {
  const [data, setData] = useState([]);

  return (
    <section>
      <PhoneBookForm setData={setData} />
      <InformationTable data={data} />
    </section>
  );
}

function PhoneBookForm(props) {
  const [firstName, setFirstName] = useState('Coder');
  const [lastName, setLastName] = useState('Byte');
  const [phone, setPhone] = useState('8885559999')

  const submit = async (e) => {
    e.preventDefault()

    props.setData(current => [...current, {
      'firstName': firstName,
      'lastName': lastName,
      'phone': phone
    }])
  }

  return (
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
        onClick={submit}
      />
    </form>
  )
}

function InformationTable(props) {

  const sortData = [...props.data].sort((a, b) => a.lastName.toUpperCase() > b.lastName.toUpperCase() ? 1 : -1)

  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>

        {sortData && sortData.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.phone}</td>
            </tr>
          )
        })}


      </thead>
    </table>
  );
}

export default App;
