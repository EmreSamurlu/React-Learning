import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }
        addContact([...contacts, form])
        console.log(form);
        // Form gönderildikten sonra input verilerini temizliyoruz. useEffect kullanırsak bu kısmı comment almamız gerekir.
        // setForm(initialFormValues) 
    };

    //Yada useEffect ile aynı işlemi yapabiliriz. Bu sayede onSubmit işleminde sadece submit etmiş oluruz.
    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    return (

        <form onSubmit={onSubmit} >
            <div>
                <input name="fullname" placeholder="Full Name" onChange={onChangeInput} value={form.fullname} />
            </div>

            <div>
                <input name="phone_number" placeholder="Phone Number" onChange={onChangeInput} value={form.phone_number} />
            </div>

            <div>
                <button  >Add</button>
            </div>

        </form>

    )
}

export default Form