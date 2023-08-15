import React,{ useState } from "react";
import styles from './SalvarNum.module.css';

const apiURL = "http://localhost/api.php";

const SalvarNum = ( {num} ) => {

    const [msg, setMSG] = useState("");
    const [visivel, setVisivel] = useState(false);

    const handleSave = async () => {
        if(num.length === 0){
            setMSG("É preciso buscar um número para salva-lo!")
            setVisivel(true)
            return msg
        };

        const content = { number: num };
        try {
            const response = await fetch( apiURL , {
                method: 'POST',
                body: JSON.stringify(content)
            });

            const status = await response.json();

            setMSG(status.msg)
        }catch (error) {
            setMSG("Erro de conexão.")
            console.log(error)
        }
        setVisivel(true)
    };

    if(visivel){
        setTimeout(() => {
            setVisivel(false)
        }, 2000);
    };
    
    return (
        <div>
            <button onClick={handleSave}>Salvar Número</button>
            <p className={styles.msg} style={{visibility: visivel ? 'visible':'hidden'}}>{msg}</p>
        </div>
     
    );
}

export default SalvarNum;
