import { useEffect, useState } from "react";
import { ActionButton } from "../components/ActionButton";


export const MountainAPI = () => {

    const [name, setName] = useState("")
    const [id, setID] = useState('396')

    const ids = Array.from({ length: 900 }, (_, i) => i + 1);

    const getRandomID = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)]
        setID(_id)
    }

    useEffect(() => {
        // fetch(`https://api.github.com/users/${id}`)
        fetch(`https://mountix.codemountains.org/api/v1/mountains/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setName(data.name)
            })
            .catch(error => {
                console.error(error)
            })

    }, [id])

    return (
        <>
            <p className="m-[30px] text-center font-semibold rounded-md h-10">APIを取るぞ</p>
            <div>
                <ActionButton text="ID変更" action={getRandomID} />
            </div>
            <div>
                <p className="m-[30px]">{id}の山は{name}です。</p>
            </div>
        </>
    );
};
