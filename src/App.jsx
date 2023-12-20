import { useState } from 'react'

function App() {
  const defaultValue = {
    username: '',
    password: '',
    confirm: '',
    address: ''
  };

  const [value, setValue] = useState(defaultValue);

  const handleChangeValue = (key, value) => {
    setValue((pre) => {
      return {
        ...pre,
        [key]: value
      }
    });
  }

  const handleSubmit = () => {
    if (value.username === '' || value.password === '' || value.confirm === '' || value.address === '') {
      alert('Hãy điền đầy đủ thông tin');
    } else if (value.password !== value.confirm) {
      alert('Nhập lại mật khẩu không chính xác.');
    } else {
      alert('Submit thành công');
    }
  }

  console.log('--------', value);

  return (
    <>
      <label>username</label>
      <input type='text' value={value.username} onChange={(e) => handleChangeValue('username', e.target.value)}></input>
      <br />
      <label>password</label>
      <input type='text' value={value.password} onChange={(e) => handleChangeValue('password', e.target.value)}></input>
      <br />
      <label>confirm password</label>
      <input type='text' value={value.confirm} onChange={(e) => handleChangeValue('confirm', e.target.value)}></input>
      <br />
      <label>address</label>
      <input type='text' value={value.address} onChange={(e) => handleChangeValue('address', e.target.value)}></input>
      <br />
      <button onClick={handleSubmit}>submit</button>
    </>
  )
}

export default App
