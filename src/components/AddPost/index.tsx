import { useState, ChangeEvent } from 'react';
import styles from './AddPost.module.css';

type Props = {
    functionAdd: (title: string, body: string) => void;
}

export const AddPost = ({ functionAdd }: Props) => {
    const [addTitle, setAddTitle] = useState<string>('');
    const [addBody, setAddBody] = useState<string>('');

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitle( e.target.value );
    }    
    const handleBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBody( e.target.value );
    }
    const handleAddPost = () => {
        if(addTitle && addBody) {
            functionAdd(addTitle, addBody);
        } else {
            alert('Preencha todos os campos!');
        }
    }

    return (
        <section className={styles.section}>
            <div className={styles.profile}>                
                <img src="/assets/images/profile.jpg" />
            </div>
            <div className={styles.newPost}>
                <input type="text" placeholder="Título" value={addTitle} onChange={handleTitle} />
                <textarea placeholder="Compartilhe com seus amigos o que você está pensando" value={addBody} onChange={handleBody}></textarea>
                <button onClick={handleAddPost} >Publicar</button>
            </div>
        </section>
    );
}